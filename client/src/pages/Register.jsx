import axios from 'axios';
import { Formik, Field, Form } from "formik";
import { TextField, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import * as Yup from 'yup';
import Button from '@mui/material/Button';

const initialValues = {
    email: "",
    password: "",
    phone: "",
    address: "",
    user_type: ""
};

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required('Required'),
    password: Yup.string().required("Required"),
    phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Must be exactly 10 digits")
        .required("Required"),
    address: Yup.string().required("Required"),
    user_type: Yup.string().oneOf(['buyer', 'seller'], 'Required').required('Required')
});

export default function Register() {

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:9000/auth/register", values, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      
      console.log('Response:', response.data);

    } catch (error) {
      console.error("Api call Error: ", error);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              as={TextField}
              id="email"
              name="email"
              label="Enter Email"
              variant="outlined"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              fullWidth
            />
            <Field
              as={TextField}
              id="password"
              name="password"
              label="Enter Password"
              type="password"
              variant="outlined"
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              fullWidth
            />
            <Field
              as={TextField}
              id="phone"
              name="phone"
              label="Enter Phone Number"
              type="text"
              variant="outlined"
              error={touched.phone && Boolean(errors.phone)}
              helperText={touched.phone && errors.phone}
              fullWidth
            />
            <Field
              as={TextField}
              id="address"
              name="address"
              label="Enter Address"
              variant="outlined"
              error={touched.address && Boolean(errors.address)}
              helperText={touched.address && errors.address}
              fullWidth
            />
            <Field name="user_type">
              {({ field }) => (
                <RadioGroup {...field} row>
                  <FormControlLabel
                    value="buyer"
                    control={<Radio />}
                    label="Buyer"
                  />
                  <FormControlLabel
                    value="seller"
                    control={<Radio />}
                    label="Seller"
                  />
                </RadioGroup>
              )}
            </Field>
            {touched.user_type && errors.user_type && (
              <div style={{ color: 'red' }}>{errors.user_type}</div>
            )}
            <Button type="submit" variant="outlined">
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

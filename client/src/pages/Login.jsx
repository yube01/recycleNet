import { Formik, Field, Form } from "formik";
import { TextField } from "@mui/material";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email format").required("Required"),
  password: Yup.string().required("Required"),
});

export default function Login() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('id')) {
          navigate('/home');
        }
      }, [navigate]);
  const handleSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:9000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem('id',JSON.stringify(data));
      navigate('/home');
      console.log("values", values);
      
    } catch (error) {
      console.error("Api call  Error: ", error);
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
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

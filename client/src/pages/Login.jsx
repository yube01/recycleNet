import { Formik, Field, Form } from "formik";
import { TextField } from "@mui/material";
import * as Yup from "yup";
import Button from "@mui/material/Button";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email format").required("Required"),
  password: Yup.string().required("Required"),
});

export default function Login() {
  const handleSubmit = async (values) => {
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      await response.json();
      console.log(response);
    } catch (error) {
      console.error("Api call  Error: ", error);
    }
    console.log("values", values);
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

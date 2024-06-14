import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { TextField, MenuItem, Button } from "@mui/material";
import * as Yup from "yup";

const BiodegradableProductForm = () => {
  const initialValues = {
    name: "",
    category: "",
    weight: "",
    expirationDate: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    weight: Yup.number()
      .required("Required")
      .positive("Must be positive")
      .integer("Must be an integer"),
    expirationDate: Yup.date().required("Required").nullable(),
  });

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            as={TextField}
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            fullWidth
          />
          <Field
            as={TextField}
            select
            id="category"
            name="category"
            label="Category"
            variant="outlined"
            error={touched.category && Boolean(errors.category)}
            helperText={touched.category && errors.category}
            fullWidth
          >
            <MenuItem value="" disabled>
              Select category
            </MenuItem>
            <MenuItem value="vegetable-wastes">Vegetable Wastes</MenuItem>
            <MenuItem value="fruit-wastes">Fruit Wastes</MenuItem>
            <MenuItem value="paper-wastes">Paper Wastes</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Field>
          <Field
            as={TextField}
            id="weight"
            name="weight"
            label="Weight (kg)"
            variant="outlined"
            type="number"
            error={touched.weight && Boolean(errors.weight)}
            helperText={touched.weight && errors.weight}
            fullWidth
          />
          <Field
            as={TextField}
            id="expirationDate"
            name="expirationDate"
            variant="outlined"
            type="date"
            error={touched.expirationDate && Boolean(errors.expirationDate)}
            helperText={touched.expirationDate && errors.expirationDate}
            fullWidth
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default BiodegradableProductForm;

import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { TextField, MenuItem, Button } from "@mui/material";
import * as Yup from "yup";
import axios from "axios";
import Nav from "../components/Nav";
import "./Sellnow.css"; // Import the CSS file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from "react-router-dom";

const Sellnow = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const [previewSource, setPreviewSource] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [uploadedFilePath, setUploadedFilePath] = useState("");

  const initialValues = {
    name: "",
    category: "",
    weight: "",
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    if (!file) return;
    uploadImage(file);
  };

  const uploadImage = async (file) => {
    setUploading(true);
    setError("");
    setSuccess(false);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:9000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const filePath = response.data.filePath;
      const fileName = filePath.split("\\").pop().split("/").pop();
      console.log("File uploaded successfully:", fileName);
      setUploadedFilePath(fileName);
      setUploading(false);
      setSuccess(true);
    } catch (err) {
      console.error("Error uploading file:", err);
      setError("Error uploading file");
      setUploading(false);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    weight: Yup.number()
      .required("Required")
      .positive("Must be positive")
      .integer("Must be an integer"),
  });

  const handleSubmit = async (values) => {
    const id = JSON.parse(localStorage.getItem("userData"))._id;
    const sendData = {
      userId: id,
      quantity: values.weight,
      categoryName: values.category,
      productName: values.name,
      productImage: uploadedFilePath,
      sellConfirm: true,
    };
    console.log('')
    try {
      const response = await fetch("http://localhost:9000/product/setProductTrue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      });
      const data = await response.json();
      console.log('SEtTrue response:',data)

      if (response.ok) {
        toast.success('Product Added succesfully')
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      }
      console.log(data);
    } catch (error) {
      console.log("error", error);
    }
    console.log("values", values);
  };

  return (
    <>
      <Nav />
      <div className="container">
        <h1>Upload File</h1>
        <form onSubmit={handleSubmitFile}>
          <input type="file" onChange={handleFileInputChange} />
          <button type="submit" disabled={uploading}>
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </form>
        {previewSource && (
          <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
        )}
        {error && <p className="error">{error}</p>}
        {success && (
          <p className="success">
            File uploaded successfully! Path: {uploadedFilePath}
          </p>
        )}
      </div>
      <div className="container">
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
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer position="top-right"/>
    </>
  );
};

export default Sellnow;

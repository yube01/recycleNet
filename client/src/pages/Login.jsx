import { Formik, Field, Form } from "formik";
import { TextField, Box } from "@mui/material";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import image from "../assets/logo.jpg";
import "./Login.css";
import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GiTwoShadows } from "react-icons/gi";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email format").required("Required"),
  password: Yup.string().required("Required"),
});

const GreenButton = styled(Button)({
  backgroundColor: "#4CAF50",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#45A049",
  },
  marginTop: "20px",
});

const GreenTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#4CAF50",
    },
    "&:hover fieldset": {
      borderColor: "#45A049",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#45A049",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#4CAF50",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#45A049",
  },
});

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      try {
        const parsedUserData = JSON.parse(userData);
        if (parsedUserData.userType === "seller") {
          navigate("/home");
        } else if (parsedUserData.userType === "buyer") {
          navigate("/buy");
        }
      } catch (error) {
        setError("Failed to parse user data");
        console.error("Error parsing user data:", error);
      }
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
      if (response.ok) {
        localStorage.setItem("userData", JSON.stringify(data));
        if (data.userType === "seller") {
          navigate("/home");
        } else if (data.userType === "buyer") {
          navigate("/buy");
        }
      } else {
        setError(data.message || "Authentication failed");
        
      }
      if(data === 'This user doesnt exists'){
        toast.error('User doesnt exists')
      }else if(data === 'Password doesnt match'){
        toast.error('Password is Incorrect')
      }
      console.log(data);
      // console.log(response.json())
      // localStorage.setItem("userData", JSON.stringify(data));
      // navigate("/home");
      console.log("values", values);
    } catch (error) {
      console.error("Api call Error: ", error);
      
    }
  };

  return (
    <div className="login">
      <Nav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxHeight: "70vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form style={{ width: "300px" }}>
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <img
                    src={image}
                    alt="Logo"
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                  />
                </div>
                <Box mb={2}>
                  <Field
                    as={GreenTextField}
                    id="email"
                    name="email"
                    label="Enter Email"
                    variant="outlined"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    fullWidth
                  />
                </Box>
                <Box mb={2}>
                  <Field
                    as={GreenTextField}
                    id="password"
                    name="password"
                    label="Enter Password"
                    type="password"
                    variant="outlined"
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    fullWidth
                  />
                </Box>
                <GreenButton type="submit" variant="contained" fullWidth>
                  Submit
                </GreenButton>
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    display: "block",
                    textAlign: "center",
                    marginTop: "10px",
                    color: "#4CAF50",
                  }}
                >
                  <span style={{ color: "black" }}>
                    Don`t have an account?{" "}
                  </span>
                  <span className="hover-link">Register</span>
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <br />
      <ToastContainer position="top-right" />
    </div>
  );
}

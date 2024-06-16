import axios from "axios";
import { Formik, Field, Form } from "formik";
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import image from "../assets/logo.jpg";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const initialValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
  address: "",
  userType: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Format").required("Required"),
  password: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be exactly 10 digits")
    .required("Required"),
  address: Yup.string().required("Required"),
  userType: Yup.string()
    .oneOf(["buyer", "seller"], "Required")
    .required("Required"),
});

const GreenButton = styled(Button)({
  backgroundColor: "#4CAF50",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#45A049",
  },
  marginTop: "10px",
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

const WhiteBackground = styled("div")({
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

export default function Register() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("id")) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:9000/auth/register",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Api call Error: ", error.response.data);
    }
  };

  return (
    <div
      style={{
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Nav />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <WhiteBackground>
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
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <Box>
                  <Field
                    as={GreenTextField}
                    id="name"
                    name="name"
                    label="Enter Name"
                    variant="outlined"
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    fullWidth
                  />
                </Box>
                <Box>
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
                <Box>
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
                <Box>
                  <Field
                    as={GreenTextField}
                    id="phone"
                    name="phone"
                    label="Enter Phone Number"
                    type="text"
                    variant="outlined"
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                    fullWidth
                  />
                </Box>
                <Box>
                  <Field
                    as={GreenTextField}
                    id="address"
                    name="address"
                    label="Enter Address"
                    variant="outlined"
                    error={touched.address && Boolean(errors.address)}
                    helperText={touched.address && errors.address}
                    fullWidth
                  />
                </Box>
                <Box>
                  <Field name="userType">
                    {({ field }) => (
                      <RadioGroup {...field} row>
                        <FormControlLabel
                          value="buyer"
                          control={
                            <Radio
                              sx={{
                                color: "#4CAF50",
                                "&.Mui-checked": {
                                  color: "#45A049",
                                },
                              }}
                            />
                          }
                          label="Buyer"
                        />
                        <FormControlLabel
                          value="seller"
                          control={
                            <Radio
                              sx={{
                                color: "#4CAF50",
                                "&.Mui-checked": {
                                  color: "#45A049",
                                },
                              }}
                            />
                          }
                          label="Seller"
                        />
                      </RadioGroup>
                    )}
                  </Field>
                  {touched.userType && errors.userType && (
                    <div style={{ color: "red" }}>{errors.userType}</div>
                  )}
                </Box>
                <GreenButton type="submit" variant="contained" fullWidth>
                  Register
                </GreenButton>
              </Form>
            )}
          </Formik>
        </WhiteBackground>
      </div>
    </div>
  );
}

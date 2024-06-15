import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/user.route.js";
import productRoute from "./routes/product.route.js";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs"

import nodemailer from "nodemailer";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'public')));

const uploadDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append extension
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "File uploaded successfully", filePath: req.file.path });
  } catch (error) {
    res.status(400).json({ message: "Failed to upload file" });
  }
});

// Create a Nodemailer transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service (e.g., Gmail, Outlook, etc.)
  auth: {
    user: "yubraja46@gmail.com", // Replace with your email
    pass: process.env.GMAIL, // Replace with your email password or app password
  },
  tls: { rejectUnauthorized: false },
});

// Verify the transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error("Error with email transporter:", error);
  } else {
    console.log("Email transporter is ready to send messages");
  }
});

// Route to send email
app.post("/send-email", (req, res) => {
  const { subject, text, html } = req.body;

  // Define the email options
  const mailOptions = {
    from: "yubraja46@gmail.com", // Sender address
    to: "yubrajadhikari2019@gmail.com", // List of recipients
    subject, // Subject line
    text, // Plain text body
    html, // HTML body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(`Error sending email: ${error.message}`);
    }
    res.status(200).send(`Email sent: ${info.response}`);
  });
});

app.use("/auth", authRoute);
app.use("/product", productRoute);

app.listen(9000, () => {
  console.log("Server started");
});

app.use(
  cors({
    origin: "http://localhost:5173/",
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

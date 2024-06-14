import express from "express"

const router = express.Router()
import multer from "multer";
import fs from "fs"
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Create the uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}


router.post('/addProduct', upload.single('image'), async (req, res) => {
    const { productName, quantity, address, contact, categoryName, userId, expiryDate } = req.body;
    const filePath = req.file ? req.file.path : null;

    try {
        // If a file is uploaded, read and convert it to base64
        let base64Image = null;
        if (filePath) {
            const data = fs.readFileSync(filePath);
            base64Image = data.toString('base64');
        }

        // Create a new product instance with the data from the request body
        const newProduct = new Product({
            productName,
            quantity,
            address,
            contact,
            categoryName,
            userId,
            expiryDate,
            productImage: base64Image // Add the base64 image to the product if available
        });

        // Save the product to the database
        await newProduct.save();
        res.status(200).json("Product Added");
    } catch (error) {
        console.log(error);
        res.status(500).json("Error adding product");
    }
});


export default router
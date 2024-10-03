const multer = require("multer");
const path = require("node:path");


const storageConfig = multer.diskStorage({
    destination: path.join(__dirname, "uploads"),
    filename: (req, file, res) => {
        res(null, Date.now() + "-" + file.originalname);
    },
});

    
// file filter for filtering only images
const fileFilterConfig = function(req, file, cb) {
    if (file.mimetype === "image/jpeg"
        || file.mimetype === "image/png") {
        // calling callback with true
        // as mimetype of file is image
        cb(null, true);
    } else {
        // false to indicate not to store the file
        cb(null, false);
    }
};

// creating multer object for storing
// with configuration
 const upload = multer({
    // applying storage and file filter
    storage: storageConfig,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilterConfig,
});

module.exports = upload;

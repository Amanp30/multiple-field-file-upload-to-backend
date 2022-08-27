const multer = require("multer");
const fs = require("fs")
/*
try {
  const files =  fs.readdirSync('../backend');
  for (const file of files)
    console.log(file);
} catch (err) {
  console.error(err);
}
*/

if (!fs.existsSync('./images')) {
    fs.mkdir("./images", function (e) {
        console.log('Directory not found but dir created.');
    });
}

// Storage Engin That Tells/Configures Multer for where (destination) and how (filename) to save/upload our files
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images"); //important this is a direct path fron our current file to storage location
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() +"user profile --" + file.originalname);
  },
});

exports.upload = multer({ storage: fileStorageEngine });

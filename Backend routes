const express = require('express');
const router = express.Router();
const { upload } = require('../middlewares/fileupload')

router.post('/single', upload.fields([{name: "poster", maxCount: 4} , {name: "another", maxCount:4} ]), (req, res) => {
    console.log(req.files);
  res.json({files : req.files});
})

module.exports = router;

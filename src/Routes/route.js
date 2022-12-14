const express = require('express');
const router = express.Router();
const blogcontroller = require("../Controllers/blogController")
const autherController = require("../Controllers/autherController")
const{tokenverify,auth} =require("../middleweres/auth")

router.post("/authors",autherController.createAuthor)

router.post("/blogs",tokenverify,blogcontroller.createBlogs)

router.get("/blogs",tokenverify,blogcontroller.getBologs)

router.put("/blogs/:blogId",tokenverify, auth, blogcontroller.updateBlogs)

router.delete("/blogs/:blogId",tokenverify, auth, blogcontroller.deleteblog)

router.delete("/blogs", tokenverify, auth, blogcontroller.deletebolgbyquery)

router.post("/login",tokenverify, autherController.loginAuther)


module.exports = router;
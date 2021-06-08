const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const postData = await Post.findAll({
      where: { userId: req.session.userId },
    });

    const allPosts = postData.map((post) => post.get({ plain: true }));

    res.render("posts", {
      //   layout: "main",
      allPosts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

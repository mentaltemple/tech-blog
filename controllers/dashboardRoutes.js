const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/newpost", withAuth, (req, res) => {
  res.render("newPost", {
    layout: "dashboard",
  });
});

router.get("/", withAuth, async (req, res) => {
  console.log(req.session);
  try {
    // Find the logged in user based on the session ID
    const postData = await Post.findAll({
      where: { userId: req.session.user_id },
    });

    const allPosts = postData.map((post) => post.get({ plain: true }));

    res.render("posts", {
      layout: "dashboard",
      allPosts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;

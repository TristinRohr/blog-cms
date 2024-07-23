const router = require('express').Router();
const { Post, User } = require('../models');
const auth = require('../utils/auth');

router.get('/', auth, async (req, res) => {
  console.log('Auth middleware passed');
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log('Posts fetched:', posts);

    res.render('dashboard', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.error('Error fetching posts:', err);
    res.status(500).json(err);
  }
});

module.exports = router;
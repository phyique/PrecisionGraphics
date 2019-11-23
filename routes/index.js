const express = require('express');
const router = express.Router();

/* GET all pages. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Precision Graphics' });
});

router.get('/main', (req, res) => {
  res.render('main', {title: 'Page Headers'})
});

router.get('/about', (req, res) => {
  res.render('about', {title: 'About Us'})
});

router.get('/career', (req, res) => {
  res.render('career', {title: 'Careers'})
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'About Us' });
});

module.exports = router;

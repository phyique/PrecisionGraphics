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

router.get('/careers', (req, res) => {
  res.render('careers', {title: 'Careers'})
});

router.get('/products', (req, res) => {
  res.render('products', {title: 'Products'})
});

router.get('/quotes', (req, res) => {
  res.render('quote', {title: 'Products'})
});

router.get('/uploads', (req, res) => {
  res.render('upload', {title: 'Uploads'})
});

router.get('/contacts', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

module.exports = router;

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');

app.listen(3000);

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res)=>{
    res.render('index', {title: Home});
});

app.get('/lightpaper', (req, res)=>{
    res.render('lightpaper', {title: 'lightpaper'});
});
app.get('/lightpaper', (req, res)=>{
    res.redirect('/lightpaper');
});
app.get('/nft', (req, res)=>{
    res.render('nft', {title: 'nft'});
});
app.get('/nft', (req, res)=>{
    res.redirect('/nft');
});

app.get('/hero', (req, res)=>{
    res.render('hero', {title: 'hero'});
});
app.get('/hero', (req, res)=>{
    res.redirect('/hero');
});
app.get('/staking', (req, res)=>{
    res.render('staking', {title: 'staking'});
});

app.get('/staking', (req, res)=>{
    res.redirect('/staking');
});
app.get('/news', (req, res)=>{
    res.render('news', {title: 'news'});
});

app.get('/news', (req, res)=>{
    res.redirect('/news');
});
app.get('/team', (req,res)=>{
    res.render('team', {title: 'team'});
});

app.get('/team', (req,res)=>{
    res.redirect('/team');
});
app.get('/partnerwidthus', (req, res)=>{
    res.render('contact', {title: 'partner width us'});
});

app.get('/partnerwidthus', (req, res)=>{
    res.redirect('/contact');
});


app.use((req, res) =>{
    res.statusCode(404).render('404', {title: 'Not found'})
})
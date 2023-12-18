const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Rutas
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const loginRoute =require('./routes/login')

app.use('/', indexRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/login', loginRoute);

app.listen(port, () => {
  console.log(`La aplicación está corriendo en http://localhost:${port}`);
});

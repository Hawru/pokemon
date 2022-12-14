const express = require('express');
const path = require('path');
const app = express();
const mainRoutes = require("./routes/mainRoutes")

app.use(express.static("./public"));
// setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use("/", mainRoutes)

app.listen(3000)



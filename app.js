const express = require("express");
const exphbrs = require("express-handlebars");
const movieList = require("./movies.json");

const app = express();
const port = 3000;

app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("index", { movies: movieList.results });
});

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});

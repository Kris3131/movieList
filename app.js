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

app.get("/movies/:movie_id", (req, res) => {
	const movie = movieList.results.find((movie) => {
		return movie.id.toString() === req.params.movie_id;
	});
	res.render("show", { movie: movie });
});

app.get("/search", (req, res) => {
	const keyword = req.query.keyword;
	const findMovie = movieList.results.filter((movie) =>
		movie.title.toLowerCase().includes(keyword.toLowerCase())
	);
	res.render("index", { movies: findMovie });
});

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});

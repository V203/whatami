const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const pg = require('pg');

const app = express();
const Pool = pg.Pool;
var useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}
const PORT = process.env.PORT || 3010;
// const connectionString = process.env.DATABASE_URL || 'postgresql://codex-coder:pg123@localhost:5432/regdb';

// const pool = new Pool({
//     connectionString,
//     ssl: {
//         rejectUnauthorized: false
//     }
// 

app.get('/', (req, res) => {
    res.render('index');
});

app.get("/input", (req, res) => {
    res.render('input');

});

app.get('/stage1/:word', (req, res) => {
    if (req.params.word == 4) {
        res.redirect('/stage2/1');
    } else {
        res.render('stage1', { word: req.params.word, nextStage: req.params.word++ });
    }
});

app.get('/stage2/:word', (req, res) => {
    res.render('stage2');
});

app.get('/stage3/:word', (req, res) => {
    res.render('stage3');
});

app.get('/stage4/:word', (req, res) => {
    res.render('stage4');
});

app.get('/stage5/:word', (req, res) => {
    res.render('stage5');
});

app.get('/stage6/:word', (req, res) => {
    res.render('stage6');
});

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ partialsDir: "./views/partials", viewPath: './views', layoutsDir: './views/layouts' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Listening at PORT: ${PORT}`);
})

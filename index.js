const express = require("express");
const exphbs = require('express-handlebars');
const session = require('express-session');
const bodyParser = require("body-parser");
const pg = require('pg');
const FactoryServices = require("./factoryServices");
const app = express();
const Pool = pg.Pool;
var useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}
const PORT = process.env.PORT || 3010;
const connectionString = process.env.DATABASE_URL || 'postgres://bktniypaqnuoge:e8ee725409cb0c14d0234080aeb609849f4c292de4ec4fb604a4f37a83cd7a70@ec2-54-88-154-67.compute-1.amazonaws.com:5432/dd768o0n4e06ij';

const pool = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});
const factoryServices = FactoryServices(pool);

let usr_id;

app.get('/', (req, res) => {
    res.redirect('/stageSelect')
});

app.get('/stageSelect', (req, res) => {
    usr_id = req.params.usr;
    res.render('index')
})

app.get('/badges', async (req, res) => {
    res.render('badges');
})

app.get('/titles', (req, res) => {
    res.render('titles');
})

app.get('/stage1/:word', async (req, res) => {
    let answers =
    {
        'Apple': 'I am a fruit that starts with the letter A, sometimes I am green and other times I am red. I come from a tree, what am I?',
        'Banana': 'I am a curved, yellow fruit with a thick skin and a soft flesh. If you eat me too much you might be called the monkey. What am I?',
        'Orange': 'I am a fruit that starts with an O, you must peel me in order to eat me. I come in slices. What am I ?'
    };


    const ansKeys = Object.keys(answers);

    const nextStage = parseInt(req.params.word) + 1;
    const currWord = ansKeys[parseInt(req.params.word) - 1];
    const currDesc = answers[ansKeys[parseInt(req.params.word) - 1]];

    // console.log(nextStage);
    // console.log(currWord);
    // console.log(currDesc);
    // let player = await factoryServices.getPlayerName();
    // let score = await factoryServices.getScore();

    if (req.params.word == 4) {
        res.redirect('/stage2/1');

    } else {
        res.render('stage1', {word: currWord, nextStage: nextStage, obj: currDesc});

    }
});

app.get('/stage2/:word', async (req, res) => {
    let answers =
    {
        'Iron Man': 'Some of you may know me as Tony Stark, but I am a powered armour suit with superhuman strength, speed and reflexes. What am I ?',
        'Doctor Strange': 'I once worked as a neurosurgeon after an accident, I couldnt use my hands. I found magical powers. I am the Earths newest Master of Mystic Arts. What am I ?',
        'Wolverine': 'I am a mutant who possess animal-keen senses with enhanced physical capabilities that can heal me if I get injured. I have 3 claws in each hand. What am I ?'
    };

    const ansKeys = Object.keys(answers);

    const nextStage = parseInt(req.params.word) + 1;
    const currWord = ansKeys[parseInt(req.params.word) - 1];
    const currDesc = answers[ansKeys[parseInt(req.params.word) - 1]];
    let player = await factoryServices.getPlayerName()
    let score = await factoryServices.getScore()
    if (req.params.word == 4) {

        res.redirect('/stage3/1');
    } else {
        res.render('stage2', { score, player, word: currWord, nextStage: nextStage, obj: currDesc, usr: usr_id });
    }
});

app.get('/stage3/:word', async (req, res) => {
    let answers =
    {
        'Kettle': 'I am a container used to boil water. If you would like some coffee be sure to use me. What am I ?',
        'Blender': 'I am a container used to mix soft foods could be a fruit or a vegetable and I turn that to a liquid. What am I ?',
        'Microwave': 'I am a small oven that is used to heat or cook food very fast. When I am done heating food I make a loud noise. What am I ?'
    };

    const ansKeys = Object.keys(answers);

    const nextStage = parseInt(req.params.word) + 1;
    const currWord = ansKeys[parseInt(req.params.word) - 1];
    const currDesc = answers[ansKeys[parseInt(req.params.word) - 1]];
    let player = await factoryServices.getPlayerName();
    let score = await factoryServices.getScore()
    if (req.params.word == 4) {
        res.redirect('/stage4/1');
    } else {
        res.render('stage3', { score, player, word: currWord, nextStage: nextStage, obj: currDesc, usr: usr_id });
    }
});

app.get('/stage4/:word', async (req, res) => {
    let answers =
    {
        'Germany': 'My flag is black,red and yellow. I am the home for Volkswagen. What am I?',
        'South Africa': 'I am known for the spirit of Ubuntu, where people live in a rainbow nation. I am known because of the springboks. What am I?',
        'America': 'I am the worlds third largest country, I am the land of flashing lights where most cities dont sleep. If you have a dollar or two, a corndog is made just for you.What am I?'
    };

    const ansKeys = Object.keys(answers);

    const nextStage = parseInt(req.params.word) + 1;
    const currWord = ansKeys[parseInt(req.params.word) - 1];
    const currDesc = answers[ansKeys[parseInt(req.params.word) - 1]];
    let player = await factoryServices.getPlayerName()
    let score = await factoryServices.getScore()

    if (req.params.word == 4) {
        res.redirect('/stage5/1');
    } else {
        res.render('stage4', { score, player, word: currWord, nextStage: nextStage, obj: currDesc, usr: usr_id });
    }
});

app.get('/stage5/:word', async (req, res) => {
    let answers =
    {
        "Romans": "I hail from Rome, bringing Pizza to all with great combo deals. What am I?",
        'Steers': 'If you want the real thing dont sweat we got cheeseto make you feel mjojo but if you want to mix it up, we always got something for those wacky wednesdays to make you feel like a rib king. What am I?}',
        'KFC': 'If you feeling krushed we got the right pair of wings to have you feeling streetwise and finger licking good. What am I?'
    };

    const ansKeys = Object.keys(answers);

    const nextStage = parseInt(req.params.word) + 1;
    const currWord = ansKeys[parseInt(req.params.word) - 1];
    const currDesc = answers[ansKeys[parseInt(req.params.word) - 1]];
    let player = await factoryServices.getPlayerName()
    let score = await factoryServices.getScore()
    if (req.params.word == 4) {
        res.redirect('/stage6/1');
    } else {
        res.render('stage5', { score, player, word: currWord, nextStage: nextStage, obj: currDesc, usr: usr_id });
    }
});

app.get('/stage6/:word', async (req, res) => {
    let answers =
    {
        'Pencil case': 'I am a container used to carry all your pencils. What am I?',
        'Table': 'I have four legs that hold your books when you write and you can put your food on top of me. What am I?',
        'Lunchbox': 'I am a container that holds your food until your ready to eat it at school or work. What am I?'
    };

    const ansKeys = Object.keys(answers);

    const nextStage = parseInt(req.params.word) + 1;
    const currWord = ansKeys[parseInt(req.params.word) - 1];
    const currDesc = answers[ansKeys[parseInt(req.params.word) - 1]];
    let player = await factoryServices.getPlayerName()
    let score = await factoryServices.getScore()
    if (req.params.word == 4) {
        res.redirect('/');
    } else {
        res.render('stage6', { score, player, word: currWord, nextStage: nextStage, obj: currDesc, usr: usr_id });
    }
});

app.get('/congrats', (req, res) => {
    
    res.render('congrats')
}) 

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ partialsDir: "./views/partials", viewPath: './views', layoutsDir: './views/layouts' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Listening at PORT: ${PORT}`);
})

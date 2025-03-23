const express = require('express');

const app = express();
const router = require('./routes');

const PORT = process.env.PORT || 8080;
const cookieParser = require('cookie-parser')
require('dotenv').config()
const cors = require('cors');

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	if (req.method === 'OPTIONS') return res.sendStatus(200);
	next();
});
app.use(express.json())
app.use(router);
app.use(cookieParser());

app.get('/', (req, res)=>{
	res.status(200);
	res.send("Welcome to GitBack. Let's help you get your money back");
});

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);



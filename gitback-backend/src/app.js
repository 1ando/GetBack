const express = require('express');
const initializeApp = require("firebase/app");
const getAnalytics = require("firebase/analytics");
const firebaseAuthController = require('./controllers/firebase-auth-controller');

const app = express();
const router = require('./routes');

const PORT = process.env.PORT || 8080;
const cookieParser = require('cookie-parser')
require('dotenv').config()
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



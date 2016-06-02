
require('./dbconnection.js')();

var TelegramBot = require('node-telegram-bot-api');

var token = "157240326:AAFqd53yv_yhNGP_h7VJ-OPpLrpS0HKzsZs";
// Setup polling way
var bot = new TelegramBot(token, {polling: true});
//require('./routes/dbconnection')();


// Matches /echo [whatever]
/*
bot.onText(/\/echo (.+)/, function (msg, match) {
  console.log('bbb');
  var fromId = msg.from.id;
  var resp = match[1];
  bot.sendMessage(fromId, resp);
});
*/

bot.onText(/\/start/, function (msg) {
	
	var chatId = msg.chat.id;
	bot.sendMessage(chatId, msg.text);
});

// /로 시작하지 않는 텍스트(스타이름)
bot.onText(/^[^\/]/, function (msg) {
	
	var chatId = msg.chat.id;
	console.log(msg.text + " received");
	
	queryParams = ['kwonssy01'];
	connection.query("select userId, username from user where userId = ?", queryParams, function(err, rows, fields) {
		if(err) {
			console.error(err);
                	throw err;
		}		
		console.log(rows);
        	bot.sendMessage(chatId, msg.text+" gogo");
	});
});


module.exports = function() { 
	this.connection = require('mysql').createConnection({
                host : "awsdbinstance.ctgrun1qbjn8.ap-northeast-2.rds.amazonaws.com",
                port : 3306,
                user : "master",
                password : "master12",
                database : "someTar"
	});
};

var mysql = require ('mysql');
var con = require('../database/dbConfig.js');

function getReglageInformation (req, res){


	res.type('json');
	var constructeur = req.query.constructeur;
	var culture = req.query.culture;
	var poids = req.query.poids;
	var ecartement = req.query.ecartement;
	var vitesse = req.query.vitesse;

	var sql = 'SELECT * FROM reglage WHERE constructeur= ? AND culture = ? AND poids = ? AND ecartement = ? AND vitesse = ? ';

	con.connection.connect();

	con.connection.query(sql,[constructeur,culture,poids,ecartement,vitesse], function (error, results, fields) {
  		if (error) throw error;
  		console.log('The solution is: ', results[0].reglage_result);
  		return res.send(JSON.stringify(results[0].reglage_result))
	});

	con.connection.end();

}




module.exports.getReglageInformation = getReglageInformation;


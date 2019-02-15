var mysql = require ('mysql');
var con = require('../database/dbConfig.js');

function getReglageInformation (req, res){

	res.type('json');
	var constructeur = req.body.constructeur;
	var culture = req.body.culture;
	var poids = req.body.poids;
	var ecartement = req.body.ecartement;
	var vitesse = req.body.vitesse;

	// var search = 'constructeur ' + constructeur + ', ' + culture + ',' + poids + ',' + ecartement + ',' + vitesse + ',';
	//var search = 'constructeur = ' + constructeur + "'" ; 

	var sql = 'SELECT * FROM reglage WHERE constructeur= ? AND culture = ? AND poids = ? AND ecartement = ? AND vitesse = ? ';

	con.connection.connect();

	con.connection.query(sql,[constructeur,culture,poids,ecartement,vitesse], function (error, results, fields) {
  		if (error) throw error;
  		console.log('The solution is: ', results[0].reglage_result);
  		return res.send(JSON.stringify(results[0].reglage_result))
	});

	con.connection.end();


	// analysisGenerator.getProperties( url.createUrl(input_code,input_city), function(callback){

	// 		if (callback === 0 ){
	// 			return res.send('Erreur dans le code ou le nom de la ville ! ')
	// 		}

	// 		console.log(callback);
	// 		return res.send(JSON.stringify(callback));
	// 	}


	// 	)
}




module.exports.getReglageInformation = getReglageInformation;


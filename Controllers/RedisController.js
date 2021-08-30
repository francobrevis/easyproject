let redis = require('redis')  // Solicitar Redis
let client = redis.createClient({
    host: 'redis',
    port: 6379
}) // Crear nueva instancia redis

exports.push = (req, res, next) => {
	// PUSH Parametros
	let msg = req.body.msg
	if(!req.body.msg){ // validacion de campo msg
		console.log("Bad request");
		res.status(400).json({status:"bad request"}) // respuesta a cliente
	}else{
		client.rpush('msg', msg, (err, reply) => {
			if (err) {
				console.log(err)  // log mensaje error
			}
			console.log(reply)  // log mensaje exitoso
			res.status(201).json({status:"ok"}) // respuesta a cliente
		});
	}
}

exports.pop = (req, res, next) => {
	// POP Parametros
	client.lpop('msg', (err, reply) => {
		if (err) {
			console.log(err)  // log mensaje error
		}
		console.log(reply)  // log mensaje exitoso
		res.status(200).json({status:"ok", message: reply}) // respuesta a cliente
	})
}

exports.count = (req, res, next) => {
	// COUNT Parametros
	client.lrange('msg', 0, -1, (err, reply) => {
		if (err) {
			console.log(err)  // log mensaje error
		}
		console.log(reply)  // log mensaje exitoso
		if(!reply){
			res.status(204).json({status:"no content"}) // respuesta a cliente
		}else{
			res.status(200).json({status:"ok", count: reply.length}) // respuesta a cliente
		}
	})
}

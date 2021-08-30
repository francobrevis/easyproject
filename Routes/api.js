let express = require('express')
let Route = express()
let redis = require('../Controllers/RedisController')

// PUSH
Route.post('/api/queue/push', redis.push)

// POP
Route.post('/api/queue/pop', redis.pop)

// COUNT
Route.get('/api/queue/count', redis.count)

module.exports = Route

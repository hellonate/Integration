import  config from '../../config/env/dev';
var Redis = require('ioredis');
const redis = new Redis({
    port:config.redis.port,
    host:config.redis.host,
    password:config.redis.password
});
export  default  redis;
import kafka from  'kafka-node';
import config from '../../config/env/dev';
console.log(`host:${config.kafka.host}`);
let client = new kafka.Client(config.kafka.host);
let producer = new kafka.HighLevelProducer(client,{ requireAcks: 1,ackTimeoutMs: 100 });

producer.on("error",err =>{
    console.log(`err:${err}`);

});


module.exports = producer;




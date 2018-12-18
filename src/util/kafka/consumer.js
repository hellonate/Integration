import kafka from  "kafka-node";
const config = require('../../config/env/dev');
let client = new kafka.Client(config.kafka.host);
const topics = [{
    topic:"topic1",
    offset:0,
    partition:0
}];

const options = {
    groupId: `kafka-node-group`,
    autoCommit: true,
    autoCommitIntervalMs: 5000,
    fetchMaxWaitMs: 1000,
    fetchMaxBytes: 1024 * 1024,
    fromOffset: false,
    encoding: 'utf8',
    keyEncoding: 'utf8'
};


let consumer = new kafka.HighLevelConsumer(client,topics,options);

consumer.on("error",err =>{
    console.log(`err:${err}`);
});

/*
 * If consumer get `offsetOutOfRange` event, fetch data from the smallest(oldest) offset
 */

const  offset = new kafka.Offset(client);

consumer.on('offsetOutOfRange', (payloads) =>{
    console.log('offsetOutOfRange===>',payloads);
    payloads.maxNum = 2;

     offset.fetch([payloads],(err,offsets) =>{
         if (err){
             console.log(`err:${err}`);
             return;
         }
         const min = Math.min.apply(null,offsets[payloads.topic][payloads.partition]);
         consumer.setOffset(payloads.topic, payloads.partition, min);
     });

});

process.on('SIGINT',()=>{
    consumer.close(true,()=>{
        process.exit();
    });
});

module.exports = consumer;
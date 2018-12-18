const bunyan =require('bunyan') ;
let log = bunyan.createLogger({
    name:'Integration',
    serializers: {
        req: bunyan.stdSerializers.req,
        res: bunyan.stdSerializers.res,
        err: bunyan.stdSerializers.err
    },
    streams:[
        {
            stream:process.stdout,
            level:'info'
        },
        {
            type: 'rotating-file',
            level: 'debug',
            path: 'D:/NodeJsPro/Integration/src/log/debug.log',
            period: '1d',   // daily rotation
            count: 7        // keep 7 back copies
        },
        {
            type: 'rotating-file',
            level: 'error',
            path: 'D:/NodeJsPro/Integration/src/log/error.log',
            period: '1d',   // daily rotation
            count: 7        // keep 7 back copies
        }
    ]
});

module.exports=log;
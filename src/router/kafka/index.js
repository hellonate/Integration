
import  producer from '../../util/kafka/producer';
import Router from 'koa-router';
const router = new Router();




//kafka
let payloads = [{topic:'topic1',message:'hi',partition:0},
    {topic:'topic2',message:'hello world',partition:1}];

//生产消息
router.get('/sendMessage',async (ctx,next)=>{
    console.log('here');

 await producer.on('ready', function () {
        producer.send(payloads,function (data) {
                console.log(data);
        });
    });
    //发送失败
 await producer.on('error',function (err) {
        console.log(err.message);
    });
    ctx.body='<h2>我也不知道是否发送成功</h2>';
});

router.get('/wtf',async (ctx,next)=>{

    ctx.body=`<h2>这里是操作Kafka</h2>`;

});


//消费消息
router.get('/getMessage',async (ctx,next)=>{

    ctx.body=`<p>我也不知道有没有拿到消息</p>`;


});





module.exports = router;
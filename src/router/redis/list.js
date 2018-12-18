import redis from '../../util/redis/index';
import Router from 'koa-router';
const router = new Router();
router.get('/getUser',async (ctx,next)=>{
   var result = await redis.lpop('language');
   ctx.body=`<h3>${result}</h3>`;
});

router.get('/addUser',async (ctx,next)=>{
    redis.lpush('language','java');
    ctx.body=`<h3>添加成功~</h3>`;
});

router.use('/getUser',async (ctx,next)=>{
    var result = redis.lpop('language');
    ctx.body=`<h3>${result}</h3>`;

});

export  default router;
import Router from 'koa-router';
const router = new Router();
import  redis from '../../util/redis/index';
router.get('/getUser',async (ctx,next)=>{
    var result = await redis.hget('user','username');
    ctx.body=`<h3>result:${result}</h3>`
});

router.get('/addUser',async (ctx,next)=>{
    console.log('here');
    await  redis.hset('user','username','Mlf');
    ctx.body=`<h3>hash数据添加成功~</h3>`;
});

export  default router;
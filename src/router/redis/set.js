import redis from '../../util/redis/index';
import Router from 'koa-router';
const router = new Router();
router.get('/getUser',async (ctx,next)=>{
     let result = await redis.spop('group');
    ctx.body=`<h3>${result}~</h3>`;


});

router.get('/addUser',async (ctx,next)=>{

    await  redis.sadd('group','MLF');
    ctx.body=`<h3>set,添加成功~</h3>`;
});

export  default router;
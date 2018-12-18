import redis from '../../util/redis/index';
import Router from 'koa-router';
const router = new Router();

router.get('/updateUser',async (ctx,next)=>{
    var result =  await redis.multi()
    ctx.body=`<h3>${JSON.stringify(result)}</h3>`;

});


export  default router;
import redis from '../../util/redis/index';
import Router from 'koa-router';
const router = new Router();

router.get('/addUser',async (ctx,next)=>{
  var result =  await  redis.multi().set('ppp','aaa').get('ppp').exec(function (err,result) {
        if(err){
        console.log(err);
        }else{
            //console.log(result);
            ctx.body=`<h3>${JSON.stringify(result)}</h3>`;
        }
    });
    ctx.body=`<h3>${JSON.stringify(result)}</h3>`;
});
export  default router;
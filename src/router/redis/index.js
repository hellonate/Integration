import redis from '../../util/redis/index';
import Router from 'koa-router';
const router = new Router();

router.get('/getUser',async (ctx,next)=>{
  await  redis.get('username',function (err,result) {
        if (err){
            console.log(err.message);
        }else {
            ctx.body = `<h2>${result}</h2>`;
        }

    });
});

router.get('/addUser',async (ctx,next)=>{
    console.log('here');
    ctx.body=`<h3>添加成功~</h3>`;
    await redis.set('username','苗乐飞');

});

router.get('/deleteUser',async (ctx,next)=>{
    await  redis.delete('username');
});

console.log('2');
export  default  router;
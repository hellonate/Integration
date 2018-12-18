import Router from 'koa-router';
const router = new Router();
import rp from 'request-promise';
import log from '../../log/index';



router.get('/get',async (ctx,next)=>{
    try{
        const result = await rp('https://www.baidu.com/');
        console.log(result);
    }catch (e){
        log.info(e.message);
    }
});

router.get('/post',async (ctx,next)=>{
    const options = {
        method:'post',
        uri:'http://localhost:1234/user/student/postData',
        body:{
            username:'mlf'
        },
        json:true
    };
    try{
      const result =   await  rp(options);
      console.log(`result:${result}`)
    }catch (e){
       console.log(e.message);
    }
});

export  default  router;

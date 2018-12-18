import Koa from 'koa';
const app = new Koa();
import Router from 'koa-router';
const router = new Router();
import  views from  'koa-views';
import  user from './router/user';


import kafka from'./router/kafka';
import es from'./router/es';
import redis from'./router/redis';
import request from'./router/request';

import bodyParser from 'koa-bodyparser';
import uuidV1 from 'uuid/v1';
import types from './models/types';
import ESutil from './util/es/EsUtil.class';

const EsUtil = new ESutil();
import auth from './middleware/auth';
//设置ejs模板引擎
app.use(views('views',{map:{html:'ejs'}}));

app.use(bodyParser());

let uuid = uuidV1();
console.log(`uuid:${uuid}`);

//设置首页
router.get('/',async (ctx,next)=>{
        const map = await EsUtil.client.indices.getMapping({index: 'es_search'});
        ctx.body=`map:${map}`;
       const exist_types= map['es_search'].mappings;
       console.log(exist_types);
        const arr = Object.keys(types);
        console.log(`arr:${arr}`);
        for (let type of arr){
            console.log(`type:${type}`);
        };
    });


//
router.get('/auth',auth,async(ctx,next)=>{
   await console.log(`this is the second`);
});


//设置路由模块
router.use('/user', user.routes());
router.use('/kafka',kafka.routes());
router.use('/es',es.routes());
router.use('/redis',redis.routes());
router.use('/request',request.routes());
app.use( router.routes());

module.exports = app;
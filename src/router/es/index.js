import Elastic from '../../util/es/index';
import  Router from 'koa-router';
const router = new Router();
var opts = {
    index:'es_search',
    alias:'essearch'
};

let es = new Elastic(opts);
router.get('/save',async (ctx,next)=>{
    console.log(`save`);
    //操作es
    let type = 'person';
    let id = '2';
    var body ={
                 id:'id',
                 username:'苗乐飞',
                 sex:'1',
                 province:'henu',
                 city:'zhengzhou',
                 country:'CN',
                 score:'95',
                 phone:'15225068888',
                 age:'25'
    }
    await es.save({type,id,body});
    ctx.body=`<h2>添加用户成功~</h2>`;
});


router.get('/search',async(ctx,next)=>{
    var phoneNum ='15225068888';
    var  age='25';
    var params = {
        index:'es_search',
        type:'person',
        body:{
            query:{
                match:{
                    phone:phoneNum,

                },
                match:{
                    age:age
                }
            }
        }
    }
   var result = (await es.search(params)).hits.hits;
    ctx.body=`<h2>查询的数据为:${JSON.stringify(result[0]._source) }</h2>`;
});


router.get('/delete',async(ctx,next)=>{
    var params = {
        type :'person',
        id:'1'
    }
   var response =  await es.delete(params);
    ctx.body=`<h2>删除成功~${response}<h2>`;
});

router.get('/update',async(ctx,next)=>{
    var params = {
        type:'person',
        id:'1',
        body:{
            username:'王思聪'
        }
    }
    await es.update(params);
    ctx.body =`<h2>更新完毕</h2>`;
});
export default router;



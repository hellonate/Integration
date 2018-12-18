import Router from 'koa-router';
const router = new Router();
import {addUser,seacrhById,updateById,destroyById} from '../../../src/models/User';

router.get('/addStudent', async(ctx,next)=>{
    //
  var user = {
      username:'苗乐飞',
      sex:true,
      province:'henu',
      city:'zhengzhou',
      country:'CN',
      score:'98',
      phone:'15225068770',
      age:'98'
  };
  await  addUser(user);
    ctx.body='<h2>添加成功~</h2>';
});

router.get('/deleteStudent', async(ctx,next)=>{
    var id = '1';
   await destroyById(id);
    ctx.body='<h2>删除成功~</h2>';
});

router.get('/updateStudent', async(ctx,next)=>{
    var params = {
        username:'王思聪',
        id:1
    }
  await  updateById(params);
    ctx.body='更新成功~';
});

router.get('/selectStudent', async(ctx,next)=>{
    var id = '2';
    var user =await seacrhById(id);
    console.log(user);
});


router.get('/getData',async(ctx,next)=>{

   //处理get请求
    var username = ctx.request.query.username;
    var password = ctx.request.query.password;
   console.log(`username:${username},password:${password}`);
   try{
      await ctx.render('../../views/user/addUser.html',{
           username:username,
           password:password
       });
   }catch (e){
       console.log(e.message);
   }

});

router.post('/postData',async(ctx,next)=>{

    var username = ctx.request.body.username;

    console.log(`username:${username}`);
    try{
        await ctx.render('../../views/user/addUser.html',{
            username:username
        });
    }catch (e){
        console.log('message'+e.message);
    }

});


export  default router;
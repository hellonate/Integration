import Router from 'koa-router';
const router = new Router();

router.post('/updateGrade', async(ctx,next)=>{
    ctx.body='updateGrade';
});

router.get('/deleteGrade', async(ctx,next)=>{
    ctx.body='deleteGrade';
});

export  default router;
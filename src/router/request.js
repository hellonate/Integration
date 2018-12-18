
import Router from 'koa-router';
const router = new Router();
import requestPromise from'./request/index';

router.use('/requestPromise',requestPromise.routes());

 export  default router;
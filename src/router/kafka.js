import Router from 'koa-router';
const router = new Router();

import message from './kafka/index';



router.use('/message',message.routes());


export  default router;
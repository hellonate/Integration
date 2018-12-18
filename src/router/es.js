import Router from 'koa-router';
const router = new Router();
import esSearch from '../router/es/index';

router.use('/esSearch',esSearch.routes());


export  default router;
import  {index,map,question,drawLottery,rule,showPrize} from './view.controller';
import Router from 'koa-router';
const router = new Router();
import auth from '../../middleware/auth';

router.get('/index',auth,index);
router.get('/map',auth,map);
router.get('/question',auth,question);
router.get('/drawLottery',auth,drawLottery);
router.get('/rule',auth,rule);
router.get('/showPrize',auth,showPrize);

export  default router;
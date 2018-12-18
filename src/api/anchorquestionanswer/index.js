import Router from 'koa-router';
const router = new Router();


import {getJsSignature,configShare,share,getQuestion,updateQuestion,updateScore} from './activity.api';


router.get('/api/share',share);
router.get('/api/configShare',configShare);
router.get('/api/getJsSignature',getJsSignature);
router.get('/api/getQuestion',getQuestion);
router.get('/api/updateQuestion',updateQuestion);
router.get('/api/updateScore',updateScore);

export default router;

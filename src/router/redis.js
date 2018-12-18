
import Router from 'koa-router';
const router = new Router();



import string from'./redis/index';
import hash from'./redis/hash';
import list from'./redis/list';
import set from'./redis/set';
import sset from'./redis/sortedSet';
import transaction from'./redis/transaction';



router.use('/string',string.routes());
router.use('/hash',hash.routes());
router.use('/list',list.routes());
router.use('/set',set.routes());
router.use('/sset',sset.routes());
router.use('/transaction',transaction.routes());
// router.use('/pubAndSub',string.routes());

export  default router;
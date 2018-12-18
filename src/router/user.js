
import Router from 'koa-router';
const router = new Router();

import student from './user/student';
import grade from './user/grade';



router.use('/student',student.routes());
router.use('/grade',grade.routes());



export  default  router;
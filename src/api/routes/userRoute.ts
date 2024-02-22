import express from 'express';
import {
  check,
  checkToken,
  userDelete,
  userGet,
  userListGet,
  userPost,
  userPut,
} from '../controllers/userController';
import {authenticate} from '../../middlewares';

const router = express.Router();

router
  .route('/')
  .get(userListGet)
  .post(userPost)
  .put(authenticate, userPut)
  .delete(authenticate, userDelete);

router.get('/token', authenticate, checkToken);

router.route('/check').get(check);

router.route('/:id').get(userGet);
router.route('/:id').put(authenticate, userPut);
router.route('/:id').delete(authenticate, userDelete);

export default router;

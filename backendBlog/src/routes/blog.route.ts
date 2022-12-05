import express from 'express'
import { addBlogHandler, deleteBlogHandler, getAllBlogsHandler } from '../controllers/blog.controller';
import { protect } from '../middlewares/auth';
import validate from '../middlewares/validate';
import { addBlogSchema, deleteBlogSchema } from '../zod_schema/blog.schema';

const router = express.Router();

router.get('/', protect, getAllBlogsHandler)
router.post('/', protect,  validate(addBlogSchema), addBlogHandler)
router.delete('/:id', protect, validate(deleteBlogSchema),deleteBlogHandler)

export default router;
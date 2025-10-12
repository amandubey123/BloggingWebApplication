import express from 'express'
import { addcomment, CommentCount, deleteComment, getAllComments, getComments } from '../controllers/Comment.controller.js'
import { authenticate } from '../middleware/authenticate.js'


const CommentRoute = express.Router()


CommentRoute.post('/add', authenticate, addcomment)
CommentRoute.get('/get/:blogid', getComments)
CommentRoute.get('/get-count/:blogid', CommentCount)
CommentRoute.get('/get-all-comments/',authenticate, getAllComments)
CommentRoute.delete('/delete/:commentid',authenticate, deleteComment)










export default CommentRoute
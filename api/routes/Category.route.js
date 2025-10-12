import express from 'express'
import { addCategory, deleteCategory, getallCategory, showCategory, updateCategory } from '../controllers/Category.controller.js'
import { onlyadmin } from '../middleware/onlyadmin.js'




const CategoryRoute = express.Router()
CategoryRoute.post('/add',onlyadmin, addCategory)
CategoryRoute.put('/update/:categoryid',onlyadmin, updateCategory)
CategoryRoute.get('/show/:categoryid',onlyadmin, showCategory)
CategoryRoute.delete('/delete/:categoryid',onlyadmin, deleteCategory)
CategoryRoute.get('/all-category', getallCategory)







export default CategoryRoute
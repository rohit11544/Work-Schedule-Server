import express from 'express'
import { getWorks,createWorks,updateWorks,deleteWorks } from '../controllers/work.js'

const router = express.Router()
router.get("/",getWorks)
router.post("/",createWorks)
router.patch("/:id",updateWorks)
router.delete("/:id",deleteWorks)

export default router ;
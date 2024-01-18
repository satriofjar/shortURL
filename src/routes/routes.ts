import express, {Request, Response}  from "express";
import { index, redirectUrl, generateToken } from "../controllers/shortUrl"

const router = express.Router();

router.get('/', index);
router.post('/generate-token', generateToken);
router.get('/generate-token', function(req:Request, res:Response):void {res.redirect('/')});
router.get('/:token', redirectUrl);

export default router;
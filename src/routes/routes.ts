import express from "express";
import { index, redirectUrl, generateToken } from "../controllers/shortUrl"

const router = express.Router();

router.get('/', index);
router.get('/generate-token', generateToken);
router.get('/:token', redirectUrl);

export default router;
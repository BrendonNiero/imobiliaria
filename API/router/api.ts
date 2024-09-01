import {Router } from "express";
import * as ApiController from "../controllers/apiController";

const router = Router();

router.get("/ping", ApiController.ping);

router.get("/imoveis", ApiController.imoveis);

export default router;
import express from "express";
import headerControllers from "../Controllers/header.js";

const router = express.Router();

router.get("/header", headerControllers.getAll);

export default router;
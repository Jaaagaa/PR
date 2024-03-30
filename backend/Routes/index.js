import express from "express";
import headerRoutes from "./header.js";

const router = express.Router();

router.use("/", headerRoutes);

router.use((req, res) => {
    res.status(404).json({
        message: "no routes found"
    })
})

export default router;
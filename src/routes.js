import { Router } from "express";

import homecontrollers from "./controllers/home-controller.js";

const router = Router();

router.use(homecontrollers);

router.use('*', (req, res) => {

    res.render('404');
})

export default router;
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {

    res.render('home');
});

router.get("/about", (req, res) => {

    res.render('about');
});

router.get("/create", (req, res) => {

    res.render('create');
});

router.get("/details", (req, res) => {

    res.render('details');
});

router.get("/search", (req, res) => {

    res.render('search');
});

export default router;
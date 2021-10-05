'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const { CanM, Hazardous, MVcables, Thermography } = require('../models');

const router = express.Router();
router.use(bodyParser.json());

const asyncHandler = (cb) => {
    return async(req, res, next) => {
        try {
            await cb(req, res, next)
        } catch (err) {
            next(err)
        }
    }
}

router.get('/', (req, res) => {
    res.json("Welcome to the api services review route")
})

//================================================================================================================================

router.get('/CMreviews', async(req, res) => {
    const reviews = await CanM.findAll();
    res.json({
        message: 'hi im the router',
        reviews: reviews
    })
})

router.post('/CMreviews', asyncHandler(async(req, res) => {
    console.log(req.body);
    try {
        const review = await CanM.create(req.body);
        res.status(201).location('/').end();
    } catch (e) {
        if (e.name === 'SequelizeUniqueConstraintError' || e.name === 'SequelizeValidationError') {
            const errors = e.errors.map(err => err.message);
            res.status(400).json({ errors })
        } else {
            throw e;
        }
    }
}))

router.put('/CMreviews/:id', asyncHandler(async(req, res) => {
    try {
        const review = await CanM.findByPk(req.params.id)
    } catch (e) {

    }
}))

router.delete('/CMreviews/:id', asyncHandler(async(req, res) => {
    const Review = await CanM.findByPk(req.params.id);
    // const user = req.currentUser;

    if (Review) {
        await Review.destroy()
        res.status(204).end()
    } else {
        res.status(404).json({ message: 'The Review You want to delete could not be found' })
    }
}))

//================================================================================================================================

router.get('/HazardousReviews', asyncHandler(async(req, res) => {
    const reviews = await Hazardous.findAll();
    res.json({
        message: 'Hazardous',
        reviews: reviews
    })
}))

router.post('/HazardousReviews', asyncHandler(async(req, res) => {
    console.log(req.body);
    try {
        const review = await Hazardous.create(req.body);
        res.status(201).location('/').end();
    } catch (e) {
        if (e.name === 'SequelizeUniqueConstraintError' || e.name === 'SequelizeValidationError') {
            const errors = e.errors.map(err => err.message);
            res.status(400).json({ errors })
        } else {
            throw e;
        }
    }
}))

router.delete('/HazardousReviews/:id', asyncHandler(async(req, res) => {
    const Review = await Hazardous.findByPk(req.params.id);
    // const user = req.currentUser;

    if (Review) {
        await Review.destroy()
        res.status(204).end()
    } else {
        res.status(404).json({ message: 'The Review You want to delete could not be found' })
    }
}))

//================================================================================================================================

router.get('/MVCableReviews', asyncHandler(async(req, res) => {
    const reviews = await MVcables.findAll();
    res.json({
        message: 'MV Cables',
        reviews: reviews
    });
}))

router.post('/MVCableReviews', asyncHandler(async(req, res) => {
    console.log(req.body);
    try {
        const review = await MVcables.create(req.body);
        res.status(201).location('/').end();
    } catch (e) {
        if (e.name === 'SequelizeUniqueConstraintError' || e.name === 'SequelizeValidationError') {
            const errors = e.errors.map(err => err.message);
            res.status(400).json({ errors })
        } else {
            throw e;
        }
    }
}))

router.delete('/MVCableReviews/:id', asyncHandler(async(req, res) => {
    const Review = await MVcables.findByPk(req.params.id);
    // const user = req.currentUser;

    if (Review) {
        await Review.destroy()
        res.status(204).end()
    } else {
        res.status(404).json({ message: 'The Review You want to delete could not be found' })
    }
}))

//================================================================================================================================

router.get('/ThermographyReviews', asyncHandler(async(req, res) => {
    const reviews = await Thermography.findAll();
    res.json({
        message: 'Thermography',
        reviews: reviews
    })
}))

router.post('/ThermographyReviews', asyncHandler(async(req, res) => {
    console.log(req.body);
    try {
        const service = await Thermography.create(req.body);
        res.status(201).location('/').end();
    } catch (e) {
        if (e.name === 'SequelizeUniqueConstraintError' || e.name === 'SequelizeValidationError') {
            const errors = e.errors.map(err => err.message);
            res.status(400).json({ errors });
        } else {
            throw e;
        }
    }
}))

router.delete('/ThermographyReviews/:id', asyncHandler(async(req, res) => {
    const Review = await Thermography.findByPk(req.params.id);
    // const user = req.currentUser;

    if (Review) {
        await Review.destroy()
        res.status(204).end()
    } else {
        res.status(404).json({ message: 'The Review You want to delete could not be found' })
    }
}))

module.exports = router
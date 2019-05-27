const express = require('express');
const router = express.Router();

const Car = require('../models/car');

router.get('/', (req, res) => {
    Car.find()
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

router.get('/:id', (req, res) => {
    const params = Object.assign(req.params)

    Car.findById(params.id)
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

router.post('/', (req, res) => {
    const params = Object.assign(req.params, req.body)

    const car = new Car(params);
    car.save()
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

router.put('/:id', (req, res) => {
    const params = Object.assign(req.params, req.body)

    Car.findByIdAndUpdate(params.id, params, {useFindAndModify: false})
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

router.delete('/:id', (req, res) => {
    const params = Object.assign(req.params, req.body)

    Car.findByIdAndRemove(params.id)
        .then(() => res.json({ status: 'deleted' }))
        .catch(err => res.json(err));
});

module.exports = router;

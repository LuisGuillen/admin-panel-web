const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', (req, res) => {
    User.find()
        .where({ active: 1 })
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

router.get('/:id', (req, res) => {
    const params = Object.assign(req.params)

    User.findById(params.id)
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

router.post('/', (req, res) => {
    const params = Object.assign(req.params, req.body)

    const user = new User(params);
    user.save()
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

router.put('/:id', (req, res) => {
    const params = Object.assign(req.params, req.body)

    User.findByIdAndUpdate(params.id, params, {useFindAndModify: false})
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

router.delete('/:id', (req, res) => {
    const params = Object.assign(req.params, req.body)

    User.findByIdAndUpdate(params.id, { active: 0 }, {useFindAndModify: false})
        .then(() => res.json({ status: 'deleted' }))
        .catch(err => res.json(err));
});

module.exports = router;

const express = require('express');
const User = require('../models/user')
const router = new express.Router()

router.get('/users', async (req, res) => {
    try {
        const user = await User.find({})
        res.send(user)
    } catch (e) {
        res.status(500).send(e);
    }
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if (!user) {
            res.send(404).send('user not found');
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(500).send(error)
    }
})

router.patch('/users/:id', async (req, res) => {
    // const update = Object.keys(req.body)
    // const allowedUpdates = ['name', 'age', 'email', 'password']
    // const isValidOperation = allowedUpdates.every((update) => { allowedUpdates.includes(update) })

    // if (!isValidOperation) {
    //     return res.status(400).send({ error: 'Invalid update' })
    // }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router;
const express = require('express');
const Task = require('../models/task')
const router = new express.Router()

router.get('/tasks', async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(200).send(task)
    } catch (e) {
        res.status(500).send(e);
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)
        if (!task) {
            res.send(404).send('task not found');
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})


router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.patch('/tasks/:id', async (req, res) => {
    // const update = Object.keys(req.body)
    // const allowedUpdates = ['description', 'completed']
    // const isValidOperation = allowedUpdates.every((update) => { allowedUpdates.includes(update) })

    // if (!isValidOperation) {
    //     return res.status(400).send({ error: 'Invalid update' })
    // }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!task) {
            return res.status(404).send();
        }

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
const express = require('express')
const Bookmarks = require('../models/Bookmark')

const router = express.Router()

router.get('/', async (req, res) => {
    try{
        res.json(await Bookmarks.find({}))
    } catch (err) {
        res.status(400).json(err)
    }
})

router.post ('/', async (req, res) => {
    try{
        res.json(await Bookmarks.create(req.body))
    } catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try{
        res.json(await Bookmarks.findByIdAndDelete(req.params.id))
    } catch (err) {
        res.status(400).json(err)
    }
})







module.exports = router
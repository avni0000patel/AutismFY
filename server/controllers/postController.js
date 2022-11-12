const fs = require('fs')
const busboy = require('connect-busboy')
const path = require('path')
const randomstring = require('randomstring')

const Posts = require('../models/Post.js')
const User = require('../models/User')
const TempImages = require('../models/TempImg')
const InitialPosts = require('../seeds/postSeeds.json')

const auth = require('../utils/auth')
const TempImage = require('../models/TempImg')

module.exports.AddInitialPosts = async (req, res) => {
    await Posts.insertMany(InitialPosts)
        .then(() => {
            res.status(200).json('All ok')
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

module.exports.GetListPosts = async (req, res) => {
    let PostsList = await Posts.find({}).lean()
    if (PostsList) {
        res.status(200).json(PostsList)
    } else {
        res.status(500).json('err')
    }
}

module.exports.GetOnePost = async (req, res) => {
    let PostCandidate = await Posts.findOne({
        username: req.body.username
    })
    if (PostCandidate) {
        res.status(200).json(PostCandidate)
    } else {
        res.status(500).json('Server error')
    }
}

module.exports.UploadPhoto = async (req, res) => {
    let fstream
    req.pipe(req.busboy)
    req.busboy.on('file', function (fieldname, file, filename) {
        fstream = fs.createWriteStream(path.resolve() + '/static/img/' + filename.filename)
        file.pipe(fstream)
        fstream.on('close', async () => {
            await User.updateOne(
                { username: req.query.username },
                { avatar: filename.filename }
            ).then(() => {
                res.status(200).json(req.query.username)

            })
        })
    })
}

module.exports.SavePhoto = async (req, res) => {

}

module.exports.GetAvatar = async (req, res) => {
    let candidate = await User.findOne({
        username: req.query.username
    })
    res.status(200).json(candidate)
}

module.exports.ChangeBio = async (req, res) => {
    let candidate = await User.findOne({
        username: req.query.username
    })
    candidate.bio = req.query.bio
    await candidate.save()
    res.status(200).json("Bio save")
}
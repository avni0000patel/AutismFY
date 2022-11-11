const fs = require('fs')
const busboy = require('connect-busboy')
const path = require('path')
const randomstring = require('randomstring')

const Posts = require('../models/Post.js')
const TempImages = require('../models/TempImg')
const InitialPosts = require('../seeds/postSeeds.json')

const auth = require('../utils/auth')
const TempImage = require('../models/TempImg')

module.exports.AddInitialPosts = async (req,res) =>{ 
    await Posts.insertMany(InitialPosts)
        .then(() => {
            res.status(200).json('All ok')
        })
        .catch((err) => { 
            res.status(500).json(err)
        })
}

module.exports.GetListPosts = async (req,res) => {
    let PostsList = await Posts.find({}).lean()
    if (PostsList) {
        res.status(200).json(PostsList)
    } else {
        res.status(500).json('err')
    }
}

module.exports.GetOnePost = async (req,res) => { 
    let PostCandidate = await Posts.findOne({
        _id: req.body._id
    })
    if(PostCandidate){
        res.status(200).json(PostCandidate)
    } else { 
        res.status(500).json('Server error')
    }
}

module.exports.UploadPhoto = async (req,res) => { 
    let fstream
    req.pipe(req.busboy)
    req.busboy.on('file', function (fieldname, file, filename) {
        fstream = fs.createWriteStream(path.resolve()+'/static/img/'+filename.filename)
        file.pipe(fstream)
        fstream.on('close', async () => {
            let newImage = new TempImages({
                nameFile: filename.filename,
                key: randomstring.generate(7)
            })
            await newImage.save()
                .then(()=>{
                    res.status(200).json(newImage)
                })
        })
    })
}

module.exports.SavePhoto = async (req,res) => { 
    let findImg = await TempImages.findOne(
        {key:req.body.key}
    )
    if(findImg){ 
        let candidate = await Posts.findOne({
            _id: req.body.id
        })
        if (candidate) { 
            candidate.avatar = req.body.nameFile
            await candidate.save()
                .then(()=> {
                    res.status(200).json(candidate)
                })
        }
    }
}
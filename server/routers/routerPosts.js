const express = require ('express')
const router = express.Router()
const controller = require('../controllers/postController')

router.get('/add-initial-list', controller.AddInitialPosts)
router.post('/get-list', controller.GetListPosts)
router.post('/get', controller.GetOnePost)

router.post('/uploadPhoto', controller.UploadPhoto)
router.post('/save-photo', controller.SavePhoto)
router.get('/get-avatar', controller.GetAvatar)

router.get('/change-bio', controller.ChangeBio)

module.exports = router
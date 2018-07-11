const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function validCatCard(catCard) {
    const hasImgUrl = typeof catCard.imgUrl == 'string' && catCard.imgUrl.trim() != ""
    const hasCatName = typeof catCard.catName == 'string' && catCard.catName.trim() != ""
    const hasComment = typeof catCard.comment == 'string' && catCard.comment.trim() != ""
    const hasRating = typeof catCard.rating == 'string' && catCard.rating.trim() != ""
    

    return hasImgUrl && hasCatName && hasComment && hasRating 
}

function isValidId(req, res, next) {
    if (!isNaN(req.params.id)) {
        return next()
    } else {
        next(new Error('invalid id'))
    }
}

router.get('/', (req, res) => {
    queries.getAll().then(kittie => {
        res.json(kittie);
    })
});

router.post('/', (req, res, next) => {
    console.log(req.body)
    if (validCatCard(req.body)) {
     queries.create(req.body).then(kittie => {
         res.json(kittie[0])
     })
    } else {
        next(new Error('invalid cat card'))
    }
})

router.put('/:id', isValidId, (req, res, next) => {
    if (validCatCard(req.body)) {
        queries.update(req.params.id, req.body).then(kittie => {
            res.json(kittie[0])
        })
    } else {
         next(new Error('invalid cat card'))
    }
})

router.delete('/:id', isValidId, (req, res) => {
    queries.delete(req.params.id).then(res.json({message: "successfully deleted!"}))
})

module.exports = router;
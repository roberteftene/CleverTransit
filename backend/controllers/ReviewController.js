const Review = require('../models').Review

const getAllReviews = async(req,res) => {
    try {
        await Review.findAll()
        .then((allReviews) => {
            res.status(200).json(allReviews)
        })
    } catch(err) {
        res.status(404).send({message: 'No reviews found'})
    }
}

const deleteReview = async(req,res) => {
    try {
        const review = await Review.findByPk(req.params.id)
        if(review) {
            await review.destroy()
            return res.status(200).send({message: 'Review deleted'})
        } else {
            return res.status(404).send('resource not found')
        }
    } catch(err) {
        res.status(500).send({message: 'Server error'})
    }
}

const addReview = async(req,res) => {
    try {
         let review = await Review.create({
            start_point : req.body.start_point,
            end_point : req.body.end_point,
            leaving_hour : req.body.leaving_hour,
            duration : req.body.duration,
            congestion_level : req.body.congestion_level,
            observations : req.body.observations,
            satisfaction_level: req.body.satisfaction_level,
            transportLineId: req.body.transportLineId,
            userId:req.body.userId
        })
        res.status(200).send(review)
    } catch(err) {
        return res.status(500).send('Server error')
    }
}

const editReview = async(req,res) => {
    try {
        let review = await Review.findByPk(req.params.id)
        if(review) {
            await review.update({
                start_point : req.body.start_point,
                end_point : req.body.end_point,
                leaving_hour : req.body.leaving_hour,
                duration : req.body.duration,
                congestion_level : req.body.congestion_level,
                observations : req.body.observations,
                satisfaction_level: req.body.satisfaction_level,
                transportLineId: req.body.transportLineId,
                userId:req.body.userId 
            })

             res.status(200).send({message: 'Review updated'})
        } else {
             res.status(404).send('Review not found')
        }
    } catch(err) {
         res.status(500).send('Server error')
    }
}

const getReviewById = async(req,res) => {
    try {
        let review = await Review.findByPk(req.params.id)
        if(review) {
            res.status(200).json(review)
        } else {
            res.status(404).send('Resource not found')
        }
    } catch(err) {
        res.status(500).send('Server error')
    }
}


module.exports = {
    getAllReviews,
    deleteReview,
    addReview,
    editReview,
    getReviewById
}
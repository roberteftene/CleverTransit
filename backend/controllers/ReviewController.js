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


module.exports = {
    getAllReviews,
    deleteReview
}
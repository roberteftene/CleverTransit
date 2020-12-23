const Review = require('../models').Review

const getAllReviews = async(req,res,next) => {
    try {
        await Review.findAll()
        .then((allReviews) => {
            res.status(200).json(allReviews)
        })
    } catch(err) {
        // res.status(404).send({message: 'No reviews found'})
    }
}


module.exports = {
    getAllReviews
}
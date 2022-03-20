const Review = require('../models').Review;
const TransportLine = require('../models').TransportLine;

const getAllReviews = async (req, res) => {
    try {
        await Review.findAll()
            .then((allReviews) => {
                res.status(200).json(allReviews);
            });
    } catch (err) {
        res.status(404).send({
            message: 'No reviews found'
        });
    }
};

const deleteReview = async (req, res) => {
    try {
        const review = await Review.findByPk(req.params.id);
        if (review) {
            await review.destroy();
            return res.status(200).send({
                message: 'Review deleted'
            });
        } else {
            return res.status(404).send('resource not found');
        }
    } catch (err) {
        res.status(500).send({
            message: 'Server error'
        });
    }
};

const addReview = async (req, res) => {
    try {
        if(req.body.review_title.length < 3) {
            return res.status(400).send({message:'Review title too short'});
        } else
        if(req.body.start_point.length < 1) {
            return res.status(400).send({message: 'Start point too short'});
        }else
        if(req.body.end_point.length < 1) {
            return res.status(400).send({message: 'End point too short'});
        } else {

            let review = await Review.create({
                review_title: req.body.review_title,
                start_point: req.body.start_point,
                end_point: req.body.end_point,
                leaving_hour: req.body.leaving_hour,
                duration: req.body.duration,
                congestion_level: req.body.congestion_level,
                observations: req.body.observations,
                satisfaction_level: req.body.satisfaction_level,
                review_noLikes: req.body.review_noLikes,
                transportLineId: req.body.transportLineId,
                transportMethodId: req.body.transportMethodId,
                userId: req.body.userId
            });
            return res.status(200).send(review);
        }
    } catch (err) {
        return res.status(500).send(err);
    }
};

const editReview = async (req, res) => {
    try {
        let review = await Review.findByPk(req.params.id);
        if (review) {
            await review.update({
                review_title: req.body.review_title,
                start_point: req.body.start_point,
                end_point: req.body.end_point,
                leaving_hour: req.body.leaving_hour,
                duration: req.body.duration,
                congestion_level: req.body.congestion_level,
                observations: req.body.observations,
                satisfaction_level: req.body.satisfaction_level,
                review_noLikes: req.body.review_noLikes,
                transportLineId: req.body.transportLineId,
                transportMethodId:req.body.transportMethodId,
                userId: req.body.userId
            });

            res.status(200).send({
                message: 'Review updated'
            });
        } else {
            res.status(404).send('Review not found');
        }
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const getReviewById = async (req, res) => {
    try {
        let review = await Review.findByPk(req.params.id);
        if (review) {
            res.status(200).json(review);
        } else {
            res.status(404).send('Resource not found');
        }
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const getReviewsByLineId = async (req, res) => {
    let lineId;
    try {
        let tranportLine = await TransportLine.findOne({
            where: {
                id: req.params.id
            }
        });
        lineId = tranportLine.id;

        let result = await Review.findAll({
            where: {
                transportLineId: lineId
            }
        });
        res.status(200).json(result);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const getPopularReviewsByLikes = async (req,res) => {
    try {
        let reviews = await Review.findAll();
        reviews.sort((a, b) => (a.review_noLikes < b.review_noLikes) ? 1 : -1);
        const reviewFiltered = reviews.filter(elem => elem.review_noLikes !== null && elem.review_noLikes > 0);
        res.status(200).send(reviewFiltered);
    } catch(err) {
        res.status(500).send('Server error');
    }
};

const getLatestReviews = async (req,res) => {
    try {
        let reviews = await Review.findAll(); 
        reviews.sort((a,b) => (a.id < b.id) ? 1 : -1);
        const latestReviews = reviews.slice(0,3);
        res.status(200).send(latestReviews);
    } catch(err) {
        res.status(404).send(err.message());
    }
};


module.exports = {
    getAllReviews,
    deleteReview,
    addReview,
    editReview,
    getReviewById,
    getReviewsByLineId,
    getPopularReviewsByLikes,
    getLatestReviews
};
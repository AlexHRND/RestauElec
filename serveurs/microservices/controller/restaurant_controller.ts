import RestaurantModel from "../models/app/restaurant.model"

export const getAllRestaurant = async () => {
    const restaurants = await RestaurantModel.find({});
    return restaurants;
}

export const createRestaurant = (RestaurantData:JSON) => {
    const restaurant = new RestaurantModel(RestaurantData);
    return restaurant.save();
}

export const getOneRestaurant = async (req:any) => {
    const restaurant = await RestaurantModel.findOne( {_id: req.params.id})
    return restaurant
}
export const getArticlebyId = async (id:any) => {
    const article = await RestaurantModel.findOne( {_id: id})
    return article
}

// export const getOneArticlebyRestaurant = async (req:any) => {
//     const restaurant = await RestaurantModel.find().where(_id: req.params.restau_id &&  )
//     const articles = 
//     console.log("dddddddddddddddddddddd",restaurant)
//     return restaurant;
// }

// export const updateOneArticle = async (req:any) => {
//     const article = await RestaurantModel.findOneAndUpdate({_id: req.params.id}, req.body, {
//         new: true
//     });
//     article.save();
// }

export const deleteArticle = (articleID:any) => {
    RestaurantModel.deleteOne({_id:articleID}, function (err){
        if (err) return console.log(err)
    })
};
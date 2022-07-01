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

// export const updateOneArticle = async (req:any) => {
//     const article = await RestaurantModel.findOneAndUpdate({_id: req.params.id}, req.body, {
//         new: true
//     });
//     article?.save();
// }

import { Router} from 'express';
export const RestaurantRouter =  Router();
import * as RestaurantController from "../controller/restaurant_controller";
//const TokenController = require("../controller/token_verifier") --> pour d'autres routes


RestaurantRouter.get('/', async (req, res)=> {
    const data = await RestaurantController.getAllRestaurant();
    res.json(data);
    })

RestaurantRouter.post('/', function (req, res){
        RestaurantController.createRestaurant(req.body)
    })

RestaurantRouter.get('/:id', function (req, res) {
        RestaurantController.getOneRestaurant(req).then((restaurant) => {
            res.json(restaurant)
        })
    })
    
// RestaurantRouter.get('/:restau_id/:article_id', function (req, res)
//     {
//         console.log("lllllllllllllllllllllllllll")
//         RestaurantController.getOneArticlebyRestaurant(req).then( (articles) => {
//             res.json(articles)
//         })
//     })
    
// RestaurantRouter.put('/:id', function (req, res)
//     {
//             RestaurantController.updateOneArticle(req)
//     })
    
RestaurantRouter.delete('/:id', function (req, res)
    {
            RestaurantController.deleteArticle(req.params.id)
    })
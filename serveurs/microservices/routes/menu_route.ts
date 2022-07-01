import express from 'express';
const router = express.Router()
import * as Menu from "../controller/order_controller";

router.get('/', function (req, res)
{
    Menu.getAllMenus().then( (menus) => {
        res.json(menus)
    })
})

router.get('/:id', function (req, res)
{
    Menu.getOneMenu(req).then( (menu) => {
        res.json(menu)
    })
})

// router.get('/restaurant/:id', function (req, res)
// {
//     Menu.getAllMenusbyRestaurant(req.params.id).then( (menus) => {
//         res.json(menus)
//     })
// })

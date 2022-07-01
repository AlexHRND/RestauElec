import menuModel from '../models/app/menu_model'
import RestaurantModel from '../models/app/restaurant.model'
import * as RestaurantController from "../controller/restaurant_controller";
import * as OrderController from "../controller/order_controller";

export const fillCart = async(arrayOfId: any) => {
    let temp = []
    for(const id of arrayOfId){
        let test = await getMenubyId(id)
        if(test === null){
            let test = await RestaurantController.getOneRestaurant(id)
            temp.push(test)
        }
        else{
            temp.push(test)
        }
    }
    return temp
}

export const getAllMenus = async () => {
    const menus = await menuModel.find();
    return menus;
}

export const getOneMenu = async (req:any) => {
    const menu = await menuModel.findOne( {_id: req.params.id})
    return menu
}

export const getMenubyId = async (id:string) => {
    const menu = await menuModel.findOne( {_id: id})
    return menu
}

export const getAllMenusbyRestaurant = async (rid:number) => {
    const menus = await menuModel.find( {rid: rid});
    return menus;
}

export const createMenu = (menuData:JSON) => {
    const menu = new menuModel(menuData);
    return menu.save()
};
export const deleteMenu = async (menuID:any) => {
    const menu = await menuModel.deleteOne({_id:menuID})
    return menu
};

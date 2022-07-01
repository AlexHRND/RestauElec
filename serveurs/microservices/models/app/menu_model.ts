import {Schema, model, Types} from 'mongoose';

interface Menu {
    name: string,
    restaurant_id: number,
    content: Array<Article>
    price: number
}
interface Article {
    _id: Types.ObjectId,
    name: string,
    price: number,
    description:string,
    src:string,
}

const menuSchema = new Schema<Menu>({
    name: {
        type :String,
        required: true
    },
    restaurant_id: {
        type : Number,
        required: true
    },
    content:
    {
        type: [{name: String,description: String,src:String,price:Number}],
        required: true
    },
    price:{
        type :Number,
        required: true
    },
})

const menuModel = model('Menu', menuSchema)
export default menuModel;

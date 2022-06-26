import {model, Schema, Types} from 'mongoose';

//definitions interfaces

interface restaurant {
    name: string,
    category: String,
    adress : String
    articles: Array<Article>
}
   
    interface Article {
        _id: Types.ObjectId,
        name: string,
        price: number,
        description:string,
        src:string,
    }
 

const RestaurantSchema = new Schema<restaurant>({
    name: {
        type :String,
        required: true
    },
    category: {
        type :String,
        required: true
    },
    adress: {
        type : String,
        required: true
    },
    articles:
    {
        type: [{name: String,description: String,src:String,price:Number}],
        required: true
    } 
})

const RestaurantModel = model('Restaurant', RestaurantSchema)

export default RestaurantModel;

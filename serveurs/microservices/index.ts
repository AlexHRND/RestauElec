import express from 'express';
require('./db_config/mongo.db');
// import bodyParser from 'body-parser'
// import cookieParser from "cookie-parser"
// import cors from "cors"
import {RestaurantRouter} from './routes/restaurant_route'

const router = express();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

//app.use(bodyParser.json())
//app.use(cookieParser());

//var corsOptions = {
//    origin: 'http://localhost:3080',
//    credentials: true,
//    optionsSuccessStatus: 200 // pour la prise en charge des navigateurs anciens comme IE
//}

//app.use(cors(corsOptions));

//app.use('/article', article)

router.use('/restaurant', RestaurantRouter);

// app.get('/', function(req, res) {
//     res.send('Default request')
// })
router.listen(8080, () =>{
  console.log("api server is running on port: 8080")
})
router.listen(8081, () =>{
  console.log("api server is running on port: 8081")
})
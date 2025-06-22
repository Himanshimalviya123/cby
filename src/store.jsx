//  import { configureStore } from "@reduxjs/toolkit";
// import colorreducer from "./colorslice";
// const Store=configureStore({
//     reducer:{
//         //your reducer goes here
//   mycolor:colorreducer

//     }
// })
// export default Store;
/////////////////////////////////////////////////////////////
import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./todoslice";
const Store=configureStore({
    reducer:{
        //your reducer goes here
    todo:todoreducer

    }
})
export default Store;
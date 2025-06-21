 import { configureStore } from "@reduxjs/toolkit";
import colorreducer from "./colorslice";
const Store=configureStore({
    reducer:{
        //your reducer goes here
  mycolor:colorreducer

    }
})
export default Store;
import React, { createContext } from "react";
import all_product from '/public/Assets/all_product.js'


export const ShopContext=createContext(null);
const ShopContextProvider=(props)=>{
    const contextValue={all_product};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
            {/* {console.log(all_product)} */}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
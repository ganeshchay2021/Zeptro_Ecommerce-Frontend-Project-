import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [data, setData] = useState();

    // fetching all products from  API
    const fetchAllProducts= async()=>{
        try{
            const response= await axios.get("https://fakestoreapi.noksha.dev/api/products");    
            setData(response.data.data)
        }catch(error){
            console.log("Error", error);
        }
    }

    return <DataContext.Provider value={{data, setData,fetchAllProducts}}>
            {children}
    </DataContext.Provider>
}

export const getData=()=> useContext(DataContext);
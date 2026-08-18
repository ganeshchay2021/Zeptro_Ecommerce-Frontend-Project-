import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState();

    // fetching all products from  API
    const fetchAllProducts = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products?limit=150");

            setData(response.data.products)
        } catch (error) {
            console.log("Error", error);
        }
    }

    const getCategory = (data, property) => {
        let category = data?.map((cateElm) => {
            return cateElm[property]
        }).filter(Boolean);

        return category;
    }

    const allCategory = ["All", ...new Set(getCategory(data, "category"))];

    const allBrands = ["All", ...new Set(getCategory(data, "brand"))];

    return <DataContext.Provider value={{ data, setData, fetchAllProducts, allCategory, allBrands }}>
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext);
import {axiosInstance} from "../../api/axios.js";
import {useEffect, useState} from "react";

export const useFetchCategories = () =>{
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const fetchCategories = async ()=>{
        setIsLoading(true);
        try{
            const categoriesResponse = await axiosInstance.get("/categories");
            setCategories(categoriesResponse.data.data);
            setIsLoading(false);
        }catch(err){
            cosnsole.log(err.message);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return {
        categories,
        isLoading,
    }
}
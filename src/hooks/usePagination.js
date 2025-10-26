import { useState } from "react";

export function usePagination(totalItems){
    const [currentPage, setCurrentPage] = useState(0)
    const itemByPage = 5;
    
    const numOfPage = Math.ceil(totalItems / itemByPage)
    console.log(numOfPage)

    function nextPage(){
            setCurrentPage((prev)=> prev + 1)
        }

    function backPage(){
        if(currentPage > 0){
            setCurrentPage((prev)=> prev - 1)
        }
    }

    return{
        currentPage,
        itemByPage,
        numOfPage,
        nextPage,
        backPage,
    }

}
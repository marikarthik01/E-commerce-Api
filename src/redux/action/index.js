// ADD CARD ITEM
export const addCart = (product) => {
    
    return{
        type : "ADDITEM",
        payload : product
    }
}

// DELETE CARD ITEM
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}
// Get old Local Data

import toast from "react-hot-toast";
const getOldListData = () => {
    const oldWLData = localStorage.getItem('Wishlist');
    if (oldWLData) {
    const parsedWLData = JSON.parse(oldWLData);
    return Array.isArray(parsedWLData) ? parsedWLData : [];      
    }
    return []; 
  };
  
  const addToWishlist = (data, setWishL) => {  
    const allWLData = getOldListData();  
    const addedWLData = allWLData.some(each => each.id == data.id);  
      
    if (!addedWLData) {  
        allWLData.push(data);  
        toast.success('Item added to Wishlist successfully!');  
    } else {  
        toast.error("Product already added in Wishlist!");  
    }  

    localStorage.setItem('Wishlist', JSON.stringify(allWLData));  
    setWishL(allWLData); // Update state  
};  

const removeFromWishList = (id, setWishL) => {  
    const allWLData = getOldListData();  
    const remainingWL = allWLData.filter(each => each.id != id);  
    localStorage.setItem('Wishlist', JSON.stringify(remainingWL));  
    toast.error('Item removed from wishlist');  
    setWishL(remainingWL); // Update state  
};  

    
  export { addToWishlist, getOldListData,removeFromWishList };


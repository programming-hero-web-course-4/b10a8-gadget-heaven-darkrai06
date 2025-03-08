import toast from "react-hot-toast";

const getOldCartData = () => {
    const oldData = localStorage.getItem('Products');
    if (oldData) {
    const parsedData = JSON.parse(oldData);
    return Array.isArray(parsedData) ? parsedData : [];      
    }
    return []; 
  };

  const addToCart = (data, setCart) => {  
    const allData = getOldCartData();  
    const addedData = allData.some(each => each.id == data.id);  
      
    if (!addedData) {  
        allData.push(data);  
        toast.success('Item added to Cart successfully!');  
    } else {  
        toast.error('Item already added in Cart');  
    }  

    localStorage.setItem('Products', JSON.stringify(allData));  
    setCart(allData); // Update state  
};  

const removeFromCart = (id, setCart) => {  
    const allData = getOldCartData();  
    const remaining = allData.filter(data => data.id != id);  
    localStorage.setItem('Products', JSON.stringify(remaining));  
    toast.error('Item removed from cart');  
    setCart(remaining); // Update state  
};  



  export { addToCart, getOldCartData ,removeFromCart };
  
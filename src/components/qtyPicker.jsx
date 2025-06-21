import "./qtyPicker.css";
import { useState } from "react";
// Here goes the logic for the quantity Picker component
function QtyPicker() {
    // create the state varible
    const [quantity, setquantity] = useState(1);
    // setQuantity(100);//this is how you set the state variable
    //quantity = 100; // this will not how you set the state variable,it will not work


    function decrement() {
        console.log("decrementing quantity");
        let newQuantity = quantity - 1; //decrement the quantity by 1
        if (newQuantity < 1) {
            newQuantity = 1; // prevent the  quantity does not go below 1
        }
        setquantity(newQuantity); // update the state variable with the new quantity
        
    }
    //create a new function to increment and use it to log "incrementing quantity"to the console
    function increment() {
        console.log("incrementing quantity");
        let newQuantity = quantity + 1; //increment the quantity by 1
        setquantity(newQuantity );// update the state variable with the new quantity
    }
    return (
        <div className="qty-picker">
            <button disabled={quantity===1} onclick={decrement}>-</button>
            <label>{quantity}</label>
            <button onClick={increment}>+</button>
        </div>
    );
        

}
//this is how you export the component
export default QtyPicker;



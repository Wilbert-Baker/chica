//please create this component, just render a message "Catalog Page"
//use h1 and provide a className "catalog-page"
//please try this but in the the products
import { useState, useEffect } from "react";
import Product from "../components/product";
import "./catalog.css";
import DataService from "../service/data";

function Catalog() {
    const [items, setItems] = useState([]);

    useEffect(function(){
        console.log("component loaded");
        loadCatalog();
    },[]);

    function loadCatalog(){
        //get the products 
        let service = new DataService;
        let productEnd = service.getProducts();
        console.log(productEnd);
        setItems(productEnd);
        console.log(items);
    }

    return(
        <div className="catalog-page">
            <h1>Catalog Page</h1>
            <h5>Hello we have {items.length} new products</h5>   
            {/* render products according to the amouth of items that you have */}
        </div>
    );
}
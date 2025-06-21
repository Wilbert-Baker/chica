//use h1 and provide a className "catalog-page"

import Product from "../components/product";
import "./catalog.css";

function Catalog() {
    return (
        <div className="catalog-page">
            <h1>Catalog Page</h1>
            <Product />
        </div>
    );
}

export default Catalog;
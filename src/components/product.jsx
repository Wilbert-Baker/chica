import "./product.css";
import QtyPicker from "./qtyPicker";
function Product() {
    return (
        <div className="product">
            <h5>title goes here</h5>
            img src="https://picsum.photos/200/200"
            <div className="prices">
                <label>prices</label>
                <label>Total</label>
            </div>
            <QtyPicker />
            <button className="btn btn-sm btn-dark">Add </button>
        </div>
    );
}

export default Product;
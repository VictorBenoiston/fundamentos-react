import React from "react"
import products from "./data/products"

export default props => {

    function getProduct(){
        return products.map(product => {
            return <li key={product.id}>
                {product.id} - {product.name} : R$ {product.price}
                </li>
        })
    }

    return (
        <div>
            <h2>Repetition</h2>
            <ul>
                {getProduct()}
            </ul>
        </div>
    )

}

import Product_card from "@/components/product_card";

export default function Produtos() {
    return (
        <div className="product-wrapper flex justify-around flex-wrap">
            <Product_card />
            <Product_card />
            <Product_card />
            <Product_card />
        </div>
    )
}
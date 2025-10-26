"use client"
import { ProductType } from '@/types'


const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.shortDescription}</p>
      <span>${product.price}</span>
    </div>
  )
}

export default ProductCard
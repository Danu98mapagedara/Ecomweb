import Categories from "@/componets/Categories"
import ProductList from "@/componets/ProductList"

const Homepage = () => {
  return (
    <div className='relative  w-full'>
      <img src="/featured.png" alt="Banner"  />
      <Categories/>
      <ProductList/>
      </div>
  )
}

export default Homepage
import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '/Assets/dropdown_icon.png'
import Item from '../Item/Item'
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <>
      <div className="shop_category">
        <img className='shopcategory_banner' src={props.banner} alt="img" />
        <div className="shopcategory_indexsort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory_sort">
            Sort by <img  src={dropdown_icon} alt="icon" />
          </div>
        </div>
        <div className="shopcategory_products">
          {
            all_product.map((item, i) => {
              if (props.category === item.category) {
                return <Item
                         key={i}
                               id={item.id}
                               name={item.name}
                               image={item.image}
                               old_price={item.old_price}
                               new_price={item.new_price}    
                             />
              }
              else {
                
                return null;
              }
            })
          }
        </div>
        <div className="shopcategory_loadmore">
          Explore More
        </div>
      </div>
    </>
  )
}

export default ShopCategory;

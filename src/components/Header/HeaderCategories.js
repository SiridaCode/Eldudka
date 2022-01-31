import * as React from 'react';
import cn from "classnames";


const HeaderCategories = ({ activeCategory, setActiveCategory, setCurrentPage }) => {

  const categories = ['Жидкости', 'Одноразки', 'Поды', 'Картриджи', 'Испарители'];
  const cssActive = (categoryName) => cn({ 'selected': activeCategory === categoryName });

  const onClickActiveCategory = (category) => {
    setActiveCategory(category);
    setCurrentPage(0);
  }

  return (
    <header className='header-third'>
      <div className='categories'>
        {categories.map((category, index) => {
          return (
            <div onClick={() => onClickActiveCategory(category)} className='categories-item' data-category-name={category} key={index}>
              <p className="categories-item-name">{category}</p>
              <div className={cssActive(category)}></div>
            </div>)
        })}
      </div>
    </header>
  )
}

export default HeaderCategories;

import React from "react";
import "./AddItem.scss";


const AddItem = () => {
  return (

    <>
      <div className='base-container'>
        <div className="form-container">
          <div className="item-form">
            <div className="title">
              ADD NEW ITEM
            </div>
            <div className="desc">
              Enter name of the item.
            </div>
            <input type="text" name="" id="" placeholder='Enter name' className='item-input' />
            <div className="desc">
              Enter the price for the item.
            </div>
            <input type="text" name="" id="" placeholder='Enter Price' className='item-input' />
            <div className="desc">
              Enter the ingredients of the item (seperated by comma ',')
            </div>
            <input type="text" name="" id="" placeholder='Enter Ingredients' className='item-input' />
            <div className="desc">
              Enter the description of the item.
            </div>
            <input type="text" name="" id="" placeholder='Enter Description' className='item-input' />
            <button className='submit-button'>Add Item</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddItem;

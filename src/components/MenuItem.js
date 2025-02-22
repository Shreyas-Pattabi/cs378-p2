import React from 'react';
import '../App.css';
// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder. , description, price, image
const MenuItem = ({ id, title, description, imageName, price, count, onIncrement, onDecrement }) => (
    <div className="card border-0">
      <div className="row">
        <div className="col-5">
          <img src={`${process.env.PUBLIC_URL}/images/${imageName}`} alt={title} className="item" />
        </div>
        <div className="col-7 information">
          <div className="row name">{title}</div>
          <div className="row description">{description}</div>
          <div className="row mt-4">
            <div className="col p-1 price">{'$' + price}</div>
            <div className='col'>
              <div className='row'>
                <button className='col button' onClick={() => onDecrement(id)}>-</button>
                <div className='col price'>{count}</div>
                <button className='col button' onClick={() => onIncrement(id)}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
export default MenuItem;

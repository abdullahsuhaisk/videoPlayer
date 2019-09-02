import React from 'react';

const CheckOutAddressCard = ({ selectedAddress, address, onClicked }) => {
  console.log(selectedAddress);
  const classNames =
    address.id === selectedAddress
      ? 'ShoppingCartCard--adress--details ShoppingCartCard--adress--selected'
      : 'ShoppingCartCard--adress--details';
  return (
    <div className={classNames} onClick={onClicked}>
      <i
        className="ShoppingCartCard--adress--details--edit"
        onClick={() => console.log('edit')}></i>
      <i
        className="ShoppingCartCard--adress--details--delete"
        onClick={() => console.log('delete')}></i>
      <span className="ShoppingCartCard--adress--details--title">
        {address.name}
      </span>
      <p className="ShoppingCartCard--adress--details--value">{address.text}</p>
      <p className="ShoppingCartCard--adress--details--value">
        {address.city} - 91270 {address.country && address.country.name}
      </p>
      <p className="ShoppingCartCard--adress--details--value">
        Phone: {address.phoneGsm}
      </p>
    </div>
  );
};

export default CheckOutAddressCard;

{
  /* <div className="ShoppingCartCard--adress--details">
<i className="ShoppingCartCard--adress--details--edit"></i>
<i className="ShoppingCartCard--adress--details--delete"></i>
<span className="ShoppingCartCard--adress--details--title">
  Home Adress
</span>
<p className="ShoppingCartCard--adress--details--value">
  Istiklal mahallesi akdeniz caddesi tekevler sitesi
</p>
<p className="ShoppingCartCard--adress--details--value">
  Bursa - 91270 Turkey
</p>
<p className="ShoppingCartCard--adress--details--value">
  Phone: 01701077215
</p>
</div> */
}

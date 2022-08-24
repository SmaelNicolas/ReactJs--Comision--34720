import React from "react";
import "./itemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
	return <div className='itemList--container'>{greeting}</div>;
};

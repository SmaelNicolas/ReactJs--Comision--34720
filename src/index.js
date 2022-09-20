import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./Context/CartContext";
import "./resets.css";

import { initializeApp } from "firebase/app";
initializeApp({
	apiKey: "AIzaSyCma6dMvO64csrBI5Svu99C8yang9ssf_E",
	authDomain: "react-34720.firebaseapp.com",
	projectId: "react-34720",
	storageBucket: "react-34720.appspot.com",
	messagingSenderId: "458626021689",
	appId: "1:458626021689:web:aabd964b62a8653b7610e8",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<CartProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</CartProvider>
);

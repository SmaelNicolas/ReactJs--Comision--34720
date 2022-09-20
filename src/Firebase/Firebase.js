import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCma6dMvO64csrBI5Svu99C8yang9ssf_E",
	authDomain: "react-34720.firebaseapp.com",
	projectId: "react-34720",
	storageBucket: "react-34720.appspot.com",
	messagingSenderId: "458626021689",
	appId: "1:458626021689:web:aabd964b62a8653b7610e8",
};

export const getDataBase = () => {
	initializeApp(firebaseConfig);
	const db = getFirestore();
	return db;
};

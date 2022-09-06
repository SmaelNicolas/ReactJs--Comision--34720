import React, { useEffect, useState } from "react";
import "./inputVocal.css";

const vocals = ["a", "e", "i", "o", "u"];

export const InputVocal = () => {
	const [keyPressed, setKeyPressed] = useState();
	const [keyCode, setKeyCode] = useState();
	const [time, setTime] = useState();

	const handleInput = (e) => {
		console.log(e);
		setKeyPressed(e.key);
		setKeyCode(e.keyCode);
		setTime(e.timeStamp);
		const search = vocals.find((vocal) => vocal === e.key);
		search !== undefined && e.preventDefault();
	};

	return (
		<div className='inputVocal--container'>
			<h2 className='inputVocal--title'>Input sin Vocales</h2>
			<input
				className='inputVocal--input'
				type='text'
				onKeyDown={handleInput}
			/>
			<div className='inputVocal--output'>Tecla : {keyPressed}</div>
			<div className='inputVocal--output'>
				Codigo de Tecla : {keyCode}
			</div>
			<div className='inputVocal--output'>
				Hora <br /> {Date(time)}
			</div>
		</div>
	);
};

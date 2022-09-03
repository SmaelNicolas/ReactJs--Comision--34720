import React from "react";
import "./pokemon.css";

export const Pokemon = ({ pkm }) => {
	return (
		<div className='pkm--card--container'>
			<div className='pkm--card--top'>
				<div>{pkm.name}</div>
				<div>{pkm.id}</div>
			</div>
			<img
				src={pkm.sprites.other["official-artwork"].front_default}
				alt={`pokemon ${pkm.name}`}
				className='pkm--card--image'
			/>
			<h3 className='pkm--card--titles'>Tipo</h3>
			<div className='pkm--card--types--container'>
				{pkm.types.map((type) => (
					<div key={`${type.slot}slot`}>{type.type.name}</div>
				))}
			</div>
			<h3 className='pkm--card--titles'>Habilidades</h3>
			<div className='pkm--card--abilities--container'>
				{pkm.abilities.map((skill) => (
					<div key={`${skill.slot}skill`}>{skill.ability.name}</div>
				))}
			</div>
			<h3 className='pkm--card--titles'>Stats</h3>
			<div className='pkm--card--stats--container'>
				{pkm.stats.map((stat, index) => (
					<div
						key={`${index}stat`}
						className='pkm--card--stats--info'
					>
						<div key={`${index}statName`}>{stat.stat.name}</div>
						<div key={`${index}statBase`}>{stat.base_stat}</div>
					</div>
				))}
			</div>
		</div>
	);
};

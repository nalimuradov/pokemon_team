import React from "react";

class Form extends React.Component {
	render(){
		return (
			<form onSubmit={this.props.getPkmn}>
			<div>
				<p id="title">Pokémon Team Generator</p>
				<select id="regions" name="regions">
				  <option value="Kanto">Kanto</option>
				  <option value="Johto">Johto</option>
				  <option value="Hoenn">Hoenn</option>
				  <option value="Sinnoh">Sinnoh</option>
				  <option value="Unova">Unova</option>
				  <option value="Kalos">Kalos</option>
				  <option value="Alola">Alola</option>
				</select>
			</div>
				<input type="checkbox" id="check" name="starters" value="Starters"/> <p id='lab'>Starters</p>
				<input type="checkbox" id="check" name="legendaries" value="Legendaries"/> <p id='lab'>Legendaries</p>
				<button>Generate</button>
			</form>
		);
	}
};

export default Form;

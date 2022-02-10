import React from "react";
import axios from "axios";

export default class MovieList extends React.Component {
	state = {
		movies: [],
	};

	componentDidMount() {
		axios.get("http://localhost:5000/movies").then((response) => {
			console.log(response);
			this.setState({
				movies: response.data,
			});
		});
	}
}

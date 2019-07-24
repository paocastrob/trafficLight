import React from "react";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			panda: ""
		};
	}

	render() {
		let newRedLightClass = "";
		let newYellowLightClass = "";
		let newGreenLightClass = "";

		if (this.state.panda === "red") {
			newRedLightClass = "light-glow";
		} else if (this.state.panda === "yellow") {
			newYellowLightClass = "light-glow";
		} else if (this.state.panda === "green") {
			newGreenLightClass = "light-glow";
		}

		return (
			<div className="container">
				<div className="topPart" />

				<div className="blackBox">
					<div
						className={"redLight " + newRedLightClass}
						onClick={() => this.setState({ panda: "red" })}
					/>
					<div className="yellowLight" />
					<div className="greenLight" />
				</div>
			</div>
		);
	}
}

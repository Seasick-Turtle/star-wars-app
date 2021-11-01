import { useState } from 'react';

const DisplayVehicles = (vehicles) => {
	// hook to set visibility of vehicle box
	const [toggleVehicles, setToggleVehicles] = useState(false);

	// toggles and sets visibility
	const vehicleVisibility = () => {
		setToggleVehicles(!toggleVehicles);
	};

	const vehicleList = vehicles.vehicles;

	// if toggleVehicles is true, show the scroll box
	// otherwise return just the category/button only
	if (toggleVehicles) {
		return (
			<>
				<strong>Vehicles </strong>
				<button onClick={vehicleVisibility}>Show/Hide</button>
				<ul className="categories__scroll">
					{vehicleList.map((vehicle) => {
						return <li key={vehicle.id}>{vehicle.name}</li>;
					})}
				</ul>
			</>
		);
	} else if (vehicleList.length === 0) {
		// if there is no vehicles ex. The Force Awakens
		// has none in the list, show no entries
		return (
			<>
				<strong>Vehicles </strong>
				<p>No entries</p>
			</>
		);
	} else if (!toggleVehicles) {
		return (
			<>
				<strong>Vehicles </strong>
				<button onClick={vehicleVisibility}>Show/Hide</button>
				<ul> </ul>
			</>
		);
	}
};

export default DisplayVehicles;

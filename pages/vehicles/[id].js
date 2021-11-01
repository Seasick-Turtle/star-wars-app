import Link from 'next/link';
import { useRouter } from 'next/router';
import { conditionalRenderData } from '../../helpers/conditionalRenderData';
import { gql, useQuery } from '@apollo/client';

const GET_VEHICLE = gql`
	query vehicle($vehicleId: ID) {
		vehicle(vehicleID: $vehicleId) {
			name
			model
			vehicleClass
			manufacturers
			costInCredits
			crew
			passengers
			maxAtmospheringSpeed
			cargoCapacity
			consumables
		}
	}
`;

const Vehicle = () => {
	const {
		query: { id: vehicleId },
	} = useRouter();

	const { loading, error, data } = useQuery(GET_VEHICLE, {
		variables: { vehicleId },
		errorPolicy: 'all',
		fetchPolicy: 'cache-first',
	});

	if (loading) {
		return 'Loading...';
	} else {
		const {
			vehicle: {
				name,
				model,
				vehicleClass,
				manufacturers,
				costInCredits,
				crew,
				passengers,
				maxAtmospheringSpeed,
				cargoCapacity,
				consumables,
			},
		} = data;

		return (
			<main>
				<section className="categories__component">
					<Link href="/">Back</Link>
					<h2 className="categories__title">{name}</h2>
					<p>
						<strong>Crew: </strong>
						{conditionalRenderData(crew, '')}
					</p>
					<p>
						<strong>Passengers: </strong>
						{conditionalRenderData(passengers, '')}
					</p>
					<p>
						<strong>Model: </strong>
						{model}
					</p>
					<p>
						<strong>Consumables: </strong>
						{`${conditionalRenderData(consumables, '')}`}
					</p>
					<p>
						<strong>Cargo Capacity: </strong>
						{conditionalRenderData(cargoCapacity, 'tons')}
					</p>
					<p>
						<strong>Max Atmosphering Speed: </strong>
						{conditionalRenderData(maxAtmospheringSpeed, 'kph')}
					</p>
					<p>
						<strong>Manufacturer: </strong>
						{manufacturers}
					</p>
					<p>
						<strong>Vehicle Class: </strong>
						{vehicleClass}
					</p>
					<p>
						<strong>Cost (In Credits): </strong>
						{conditionalRenderData(costInCredits, '')}
					</p>
				</section>
			</main>
		);
	}
};

export default Vehicle;

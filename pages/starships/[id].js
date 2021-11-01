import Link from 'next/link';
import { useRouter } from 'next/router';
import { conditionalRenderData } from '../../helpers/conditionalRenderData';
import { gql, useQuery } from '@apollo/client';

const GET_STARSHIP = gql`
	query starship($starshipId: ID) {
		starship(starshipID: $starshipId) {
			name
			model
			manufacturers
			costInCredits
			crew
			passengers
			starshipClass
			hyperdriveRating
			cargoCapacity
			consumables
		}
	}
`;

const People = () => {
	const {
		query: { id: starshipId },
	} = useRouter();

	const { loading, error, data } = useQuery(GET_STARSHIP, {
		variables: { starshipId },
		errorPolicy: 'all',
		fetchPolicy: 'cache-first',
	});

	if (loading) {
		return 'Loading...';
	} else {
		const {
			starship: {
				name,
				model,
				manufacturers,
				costInCredits,
				crew,
				passengers,
				starshipClass,
				hyperdriveRating,
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
						{conditionalRenderData(consumables, '')}
					</p>
					<p>
						<strong>Cargo Capacity: </strong>
						{conditionalRenderData(cargoCapacity, 'tons')}
					</p>
					<p>
						<strong>Hyperdrive Rating: </strong>
						{hyperdriveRating}
					</p>
					<p>
						<strong>Manufacturer: </strong>
						{manufacturers}
					</p>
					<p>
						<strong>Starship Class: </strong>
						{starshipClass}
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

export default People;

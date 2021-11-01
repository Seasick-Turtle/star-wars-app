import Link from 'next/link';
import { useRouter } from 'next/router';
import { conditionalRenderData } from '../../helpers/conditionalRenderData';
import { gql, useQuery } from '@apollo/client';
// import PlanetImages from '../../helpers/planets';

const GET_PLANET = gql`
	query planet($planetId: ID) {
		planet(planetID: $planetId) {
			name
			rotationPeriod
			orbitalPeriod
			gravity
			population
			climates
			terrains
		}
	}
`;

const Planets = () => {
	const {
		query: { id: planetId },
	} = useRouter();

	const { loading, error, data } = useQuery(GET_PLANET, {
		variables: { planetId },
		errorPolicy: 'all',
		fetchPolicy: 'cache-first',
	});

	if (loading) {
		return 'Loading...';
	} else {
		const {
			planet: {
				name,
				climates: climate,
				population,
				gravity,
				terrains: terrain,
				rotationPeriod,
				orbitalPeriod,
			},
		} = data;

		return (
			<main>
				<section className="categories__component categories__component__planet">
					<Link href="/">Back</Link>
					<h2 className="categories__title">{name}</h2>
					{/* <img
						className="categories__component__planet-img"
						src={PlanetImages[planetName]}
					/> */}
					<p>
						<strong>Climate: </strong>
						{climate}
					</p>
					<p>
						<strong>Population: </strong>
						{conditionalRenderData(population, '')}
					</p>
					<p>
						<strong>Gravity: </strong>
						{gravity}
					</p>
					<p>
						<strong>Terrain: </strong>
						{terrain}
					</p>
					<p>
						<strong>Rotation Period: </strong>
						{conditionalRenderData(rotationPeriod, 'standard hours')}
					</p>
					<p>
						<strong>Orbital Period: </strong>
						{conditionalRenderData(orbitalPeriod, 'standard hours')}
					</p>
				</section>{' '}
			</main>
		);
	}
};

export default Planets;

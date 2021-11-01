import Link from 'next/link';
import { conditionalRenderData } from '../../helpers/conditionalRenderData';
import { loadState } from '../../localStorage';
// import PlanetImages from '../../helpers/planets';

const Planets = () => {
	const data = loadState('planets');
	const {
		name,
		climate,
		population,
		gravity,
		terrain,
		rotation_period,
		orbital_period,
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
					{conditionalRenderData(rotation_period, 'standard hours')}
				</p>
				<p>
					<strong>Orbital Period: </strong>
					{conditionalRenderData(orbital_period, 'standard hours')}
				</p>
			</section>{' '}
			*/
		</main>
	);
};

export default Planets;

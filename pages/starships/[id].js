import Link from 'next/link';
import { conditionalRenderData } from '../../helpers/conditionalRenderData';
import { loadState } from '../../localStorage';

const People = () => {
	const data = loadState('starships');
	const {
		name,
		crew,
		passengers,
		model,
		consumables,
		cargo_capacity,
		hyperdrive_rating,
		manufacturer,
		starship_class,
		cost_in_credits,
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
					{conditionalRenderData(cargo_capacity, 'tons')}
				</p>
				<p>
					<strong>Hyperdrive Rating: </strong>
					{hyperdrive_rating}
				</p>
				<p>
					<strong>Manufacturer: </strong>
					{manufacturer}
				</p>
				<p>
					<strong>Starship Class: </strong>
					{starship_class}
				</p>
				<p>
					<strong>Cost (In Credits): </strong>
					{conditionalRenderData(cost_in_credits, '')}
				</p>
			</section>
		</main>
	);
};

export default People;

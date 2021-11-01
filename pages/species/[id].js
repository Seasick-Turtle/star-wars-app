import Link from 'next/link';
import { conditionalRenderData } from '../../helpers/conditionalRenderData';
import { loadState } from '../../localStorage';

const People = () => {
	const data = loadState('species');
	const {
		name,
		homeworld,
		designation,
		language,
		classification,
		average_lifespan,
		average_height,
		eye_colors,
		hair_colors,
		skin_colors,
	} = data;

	return (
		<main>
			<section className="categories__component">
				<Link href="/">Back</Link>
				<h2 className="categories__title">{name}</h2>
				<p>
					{homeworld === null ? '' : <strong>Homeworld: </strong>}
					{homeworld}
				</p>
				<p>
					<strong>Designation: </strong>
					{designation}
				</p>
				<p>
					<strong>Language: </strong>
					{language}
				</p>
				<p>
					<strong>Classification: </strong>
					{classification}
				</p>
				<p>
					<strong>Average Lifespan: </strong>
					{conditionalRenderData(average_lifespan, 'standard years')}
				</p>
				<p>
					<strong>Average Height: </strong>
					{conditionalRenderData((average_height * 0.01).toFixed(2), 'meters')}
				</p>
				<p>
					<strong>Eye Color: </strong>
					{eye_colors}
				</p>
				<p>
					<strong>Hair Color: </strong>
					{hair_colors}
				</p>
				<p>
					<strong>Skin Color: </strong>
					{skin_colors}
				</p>
			</section>
		</main>
	);
};

export default People;

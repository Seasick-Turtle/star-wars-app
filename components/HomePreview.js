import Link from 'next/link';
import fetchData from '../helpers/fetchData';

const displayListItem = (category, detail, property) => {
	let previewData = category[property];

	return <>{`${detail}: ${previewData}`}</>;
};

const displayPreview = (resource, category) => {
	switch (resource) {
		case 'people':
			return (
				<>
					<li>{displayListItem(category, 'Birth Year', 'birth_year')}</li>
					<li>{displayListItem(category, 'Homeworld', 'homeworld')}</li>
					<li>{displayListItem(category, 'Gender', 'gender')}</li>
				</>
			);
		case 'planets':
			return (
				<>
					<li>{displayListItem(category, 'Climate', 'climate')}</li>
					<li>{displayListItem(category, 'Terrain', 'terrain')}</li>
					<li>{displayListItem(category, 'Population', 'population')}</li>
				</>
			);
		case 'species':
			return (
				<>
					<li>
						{displayListItem(category, 'Classification', 'classification')}
					</li>
					<li>
						{displayListItem(category, 'Average Lifespan', 'average_lifespan')}
					</li>
					<li>{displayListItem(category, 'Homeworld', 'homeworld')}</li>
				</>
			);
		case 'vehicles':
		case 'starships':
			return (
				<>
					<li>{displayListItem(category, 'Model', 'model')}</li>
					<li>{displayListItem(category, 'Manufacturer', 'manufacturer')}</li>
					<li>{displayListItem(category, 'Crew', 'crew')}</li>
				</>
			);
		default:
			break;
	}
};

const HomePreview = ({ category }) => {
	const { resources, isLoading } = fetchData(category);

	const splitURL = resources.url?.split('/');
	const categoryId = splitURL ? splitURL[splitURL?.length - 2] : null;

	let categoryTitle = resources.title || resources.name;

	return (
		<>
			<h3 className="home__category-title">{categoryTitle}</h3>
			<ul className="category-list">
				{isLoading ? (
					<div>Loading...</div>
				) : (
					displayPreview(category, resources)
				)}
			</ul>
			<Link href={{ pathname: `/${category}/[id]`, query: { id: categoryId } }}>
				See more
			</Link>
		</>
	);
};

export async function getStaticProps() {
	const res = await fetch(`https://swapi.dev/api/people/1`);

	if (!res.ok) {
		res = { data: undefined };
	}

	const fetchedData = res.json();

	return {
		props: { fetchedData: { name: 'Luke' } },
	};
}

export default HomePreview;

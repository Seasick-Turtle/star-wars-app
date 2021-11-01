import Link from 'next/link';
import { useRouter } from 'next/router';
import { conditionalRenderData } from '../../helpers/conditionalRenderData';
import { gql, useQuery } from '@apollo/client';

const GET_SPECIES = gql`
	query species($speciesId: ID) {
		species(speciesID: $speciesId) {
			name
			designation
			classification
			averageHeight
			averageLifespan
			eyeColors
			hairColors
			skinColors
			language
			homeworld {
				name
			}
		}
	}
`;

const Species = () => {
	const {
		query: { id: speciesId },
	} = useRouter();

	const { loading, error, data } = useQuery(GET_SPECIES, {
		variables: { speciesId },
		errorPolicy: 'all',
		fetchPolicy: 'cache-first',
	});

	if (loading) {
		return 'Loading...';
	} else {
		const {
			species: {
				name,
				homeworld: { name: homeworldName },
				designation,
				language,
				classification,
				averageLifespan,
				averageHeight,
				eyeColors,
				hairColors,
				skinColors,
			},
		} = data;

		return (
			<main>
				<section className="categories__component">
					<Link href="/">Back</Link>
					<h2 className="categories__title">{name}</h2>
					<p>
						{homeworldName === null ? '' : <strong>Homeworld: </strong>}
						{homeworldName}
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
						{conditionalRenderData(averageLifespan, 'standard years')}
					</p>
					<p>
						<strong>Average Height: </strong>
						{conditionalRenderData((averageHeight * 0.01).toFixed(2), 'meters')}
					</p>
					<p>
						<strong>Eye Color: </strong>
						{eyeColors}
					</p>
					<p>
						<strong>Hair Color: </strong>
						{hairColors}
					</p>
					<p>
						<strong>Skin Color: </strong>
						{skinColors}
					</p>
				</section>
			</main>
		);
	}
};

export default Species;

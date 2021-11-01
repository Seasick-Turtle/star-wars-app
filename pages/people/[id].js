import Link from 'next/link';
import { useRouter } from 'next/router';
import { conditionalRenderData } from '../../helpers/conditionalRenderData';
import { gql, useQuery } from '@apollo/client';

const GET_PERSON = gql`
	query person($personId: ID!) {
		person(personID: $personId) {
			name
			birthYear
			eyeColor
			gender
			hairColor
			height
			mass
			skinColor
			homeworld {
				name
			}
			id
		}
	}
`;

const People = () => {
	const {
		query: { id: personId },
	} = useRouter();

	const { loading, error, data } = useQuery(GET_PERSON, {
		variables: { personId },
		errorPolicy: 'all',
		fetchPolicy: 'cache-first',
	});

	if (loading) {
		return 'Loading...';
	} else {
		const {
			person: {
				name,
				birth_year,
				gender,
				height,
				mass,
				eye_color,
				hair_color,
				skin_color,
				species,
				homeworld: { name: homeworldName },
			},
		} = data;

		return (
			<main>
				<section className="categories__component">
					<Link href="/">Back</Link>
					<h2 className="categories__title">{name}</h2>
					<p>
						<strong>Birth Date: </strong>
						{birth_year}
					</p>
					<p>
						<strong>Gender: </strong>
						{gender}
					</p>
					<p>
						<strong>Height: </strong>
						{conditionalRenderData((height * 0.01).toFixed(2), 'meters')}
					</p>
					<p>
						<strong>Mass: </strong>
						{conditionalRenderData(mass, 'kilograms')}
					</p>
					<p>
						<strong>Eye Color: </strong>
						{eye_color}
					</p>
					<p>
						<strong>Hair Color: </strong>
						{hair_color}
					</p>
					<p>
						<strong>Skin Color: </strong>
						{skin_color}
					</p>
					<p>
						<strong>Species: </strong>
						{species}
					</p>
					<p>
						<strong>Homeworld: </strong>
						{homeworldName}
					</p>
				</section>
			</main>
		);
	}
};

export default People;

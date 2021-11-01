import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useSWR from 'swr';
import DisplayCharacters from '../../components/details/DisplayCharacters';
import DisplayStarships from '../../components/details/DisplayStarships';
import DisplayPlanets from '../../components/details/DisplayPlanets';
import DisplaySpecies from '../../components/details/DisplaySpecies';
import DisplayVehicles from '../../components/details/DisplayVehicles';
import FilmImages from '../../helpers/films';
import { TPM, AOTC, ROTS, ANH, TESB, ROTJ } from '../../helpers/Constants';

const Films = () => {
	const {
		query: { id },
	} = useRouter();

	const fetcher = async (url) => await fetch(url).then((res) => res.json());
	const { data, error } = useSWR(`https://swapi.dev/api/films/${id}/`, fetcher);

	if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;

	const { title, episode_id, director, producer, release_date, opening_crawl } =
		data;
	const films = [TPM, AOTC, ROTS, ANH, TESB, ROTJ];

	let filmTitle;
	let film;

	switch (id) {
		case '4':
			filmTitle = 'ThePhantomMenace';
			film = films[0];
			break;
		case '5':
			filmTitle = 'AttackOfTheClones';
			film = films[1];
			break;

		case '6':
			filmTitle = 'RevengeOfTheSith';
			film = films[2];
			break;

		case '1':
			filmTitle = 'ANewHope';
			film = films[3];
			break;

		case '2':
			filmTitle = 'TheEmpireStrikesBack';
			film = films[4];
			break;

		case '3':
			filmTitle = 'ReturnOfTheJedi';
			film = films[5];
			break;

		// case '7':
		// 	filmTitle = 'TheForceAwakens';
		// 	film = films[6];
		// 	break;

		default:
			break;
	}

	const { characters, planets, starships, species, vehicles } = film;

	return (
		<main>
			<div className="categories__component__films">
				<Link href="/">Back</Link>
				<h2 className="categories__title">{title}</h2>
				<img
					className="categories__component__films-img"
					src={FilmImages[filmTitle]}
				/>
				<p>
					<strong>Episode: </strong>
					{episode_id}
				</p>
				<p>
					<strong>Director: </strong>
					{director}
				</p>
				<p>
					<strong>Producer: </strong>
					{producer}
				</p>
				<p>
					<strong>Release Date: </strong>
					{release_date}
				</p>
				<p>
					<strong>Opening Crawl: </strong>
				</p>
				<p>{opening_crawl}</p>

				<DisplayCharacters characters={characters} />
				<br />
				<DisplayPlanets planets={planets} />
				<br />
				<DisplayStarships starships={starships} />
				<br />
				<DisplaySpecies species={species} />
				<br />
				<DisplayVehicles vehicles={vehicles} />
			</div>
		</main>
	);
};

export default Films;

import HomePreview from '../components/HomePreview';

const Home = ({ fetchedData }) => {
	const categories = ['People', 'Planets', 'Species', 'Vehicles', 'Starships'];

	return (
		<div className="home-main">
			<h2 className="home-main__title">Star Wars API App</h2>
			{categories.map((category) => {
				return (
					<div key={category.toLowerCase()} className="home__categories">
						<h2 className="home__categories-title">{category}</h2>
						<HomePreview
							category={category.toLowerCase()}
							fetchedData={fetchedData}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Home;

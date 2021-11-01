import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
	return (
		<header className="main-header">
			<Link href="/">
				<h2 className="header-title">Star Wars API Example</h2>
			</Link>
			<Nav />
		</header>
	);
};

export default Header;

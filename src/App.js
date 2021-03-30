import Header from './components/Header';
import Layout from './components/Layout';
import TrendingGifs from './containers/trendingGifs';

const App = () => {
	return (
		<Layout>
			<Header />
			<TrendingGifs />
		</Layout>
	);
};

export default App;

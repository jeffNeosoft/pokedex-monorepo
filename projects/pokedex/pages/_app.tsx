import { Provider } from "react-redux";
import { wrapper } from "../store/configure";
import { Box, TopAppBar } from "@pokedex/components";
import { styles } from "../styles/styles";
import { AppProps } from "next/app";

function MyApp({ Component, ...rest }: AppProps) {
	const { store, props } = wrapper.useWrappedStore(rest);
	const { pageProps } = props;
	return (
		<Provider store={store}>
				<TopAppBar/>
				<Box sx={styles.background}>
					<Component {...pageProps}/>
				</Box>
		</Provider>
	);
}

export default MyApp;

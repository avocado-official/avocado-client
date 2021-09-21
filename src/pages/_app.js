import Head from 'next/head';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.rtl.css';
import { useStore } from '../store';
import { Provider } from 'react-redux';
import 'mapbox-gl/dist/mapbox-gl.css';

function MyApp({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState);
	const persistor = persistStore(store, {}, function () {
		persistor.persist();
	});

	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
				/>
				<meta name='description' content='Description' />
				<meta name='keywords' content='Keywords' />
				<title>Goods</title>

				<link rel='manifest' href='/manifest.json' />
				{/* <link
          href='/icons/favicon-16x16.png'
          rel='icon'
          type='image/png'
          sizes='16x16'
        />
        <link
          href='/icons/favicon-32x32.png'
          rel='icon'
          type='image/png'
          sizes='32x32'
        /> */}
				<link rel='apple-touch-icon' href='/apple-icon.png'></link>

				<meta name='theme-color' content='#317EFB' />
			</Head>

			<Provider store={store}>
				<PersistGate loading={<div>loading</div>} persistor={persistor}>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</>
	);
}

export default MyApp;

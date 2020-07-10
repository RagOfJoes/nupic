import theme from 'lib/theme';
import Router from 'next/router';
import NProgress from 'nprogress';
import { DefaultSeo } from 'next-seo';
import 'public/stylesheets/reset.css';
import { SnackbarProvider } from 'notistack';
import 'react-image-crop/dist/ReactCrop.css';
import { useApollo } from 'lib/apolloClient';
import defaultSeoProps from 'next-seo.config';
import React, { useEffect, memo } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

const App = memo(({ Component, pageProps }) => {
	const apolloClient = useApollo(pageProps.initialApolloState);
	useEffect(() => {
		NProgress.configure({
			showSpinner: false,
		});

		Router.events.on('routeChangeStart', (url) => {
			NProgress.start();
		});
		Router.events.on('routeChangeComplete', (url) => {
			NProgress.done();
		});
		Router.events.on('routeChangeError', (err, url) => {
			NProgress.done();
		});

		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}, []);

	return (
		<>
			<DefaultSeo {...defaultSeoProps} />
			<ApolloProvider client={apolloClient}>
				<ThemeProvider theme={theme}>
					<SnackbarProvider preventDuplicate>
						<CssBaseline />
						<Component {...pageProps} />
					</SnackbarProvider>
				</ThemeProvider>
			</ApolloProvider>
		</>
	);
});

export default App;

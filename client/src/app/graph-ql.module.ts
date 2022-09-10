import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { DialogService } from '@shared';
import { Apollo, ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../environments/environment';

const errorLink = onError(({ graphQLErrors, networkError, response }) => {
	// React only on graphql errors
	if (graphQLErrors && graphQLErrors.length > 0) {
		if ((graphQLErrors[0] as any)?.statusCode === 400) {
			// user bad request error from server
			const message = Array.isArray(graphQLErrors[0].message) ? graphQLErrors[0].message[0] : graphQLErrors[0].message;
			DialogService.showNotificationBar(message, 'error', 5000);
		} else {
			// server error with status 500 (do not display text)
			const message = Array.isArray(graphQLErrors[0].message) ? graphQLErrors[0].message[0] : graphQLErrors[0].message;
			DialogService.showNotificationBar(message, 'error', 5000);
			//DialogService.showNotificationBar('An error happened on the server, we will be fixing it soon', 'error', 5000);
		}

		// log errors in console
		graphQLErrors.forEach((e) => console.log(e));
		graphQLErrors.map(({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
	}
	if (networkError) {
		console.log(`[Network error]:`, networkError);
		DialogService.showNotificationBar('A network error occurred while executing the operation. Try refreshing the page.', 'error', 5000);
	}
});

const basicContext = setContext((operation, context) => {
	const requesterUserId = localStorage.getItem('requesterUserId') || '';
	return {
		headers: {
			Accept: 'charset=utf-8',
			requesterUserId: requesterUserId,
		},
	};
});

export function createDefaultApollo(httpLink: HttpLink): ApolloClientOptions<any> {
	return {
		connectToDevTools: !environment.production,
		assumeImmutableResults: true,
		cache: new InMemoryCache({
			possibleTypes: {
				STGroupIdentificationInterface: ['STGroupAllData', 'STGroupIdentification'],
			},
		}),
		link: ApolloLink.from([
			basicContext,
			errorLink,
			httpLink.create({
				uri: environment.graphql,
			}),
		]),
		defaultOptions: {
			watchQuery: {
				errorPolicy: 'all',
			},
		},
	};
}

@NgModule({
	imports: [BrowserModule, ApolloModule, HttpClientModule],
	providers: [
		{
			provide: APOLLO_OPTIONS,
			useFactory: createDefaultApollo,
			deps: [HttpLink],
		},
	],
	exports: [BrowserModule, ApolloModule, HttpClientModule],
})
export class GraphQlModule {
	constructor(apollo: Apollo) {
		// window = {...window, '__APOLLO_CLIENT__': apollo.getClient()}; // Used by the Apollo Chrome extension
	}
}

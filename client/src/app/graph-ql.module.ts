import { NgModule } from '@angular/core';
import { ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { DialogService } from '@shared';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../environments/environment';

const errorLink = onError(({ graphQLErrors, networkError, response }) => {
	if (graphQLErrors) {
		if (graphQLErrors[0].message === 'Internal Server Error') {
			DialogService.showNotificationBar('An error happened on the server, we will be fixing it soon', 'error', 5000);
		} else {
			DialogService.showNotificationBar(graphQLErrors[0].message, 'error', 5000);
		}

		graphQLErrors.forEach((e) => {
			console.log(e);
		});
		graphQLErrors.map(({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
	}
	if (networkError) {
		console.log(`[Network error]:`, networkError);
		DialogService.showNotificationBar('A network error happend when executing the operation, probably bad request was send', 'error', 5000);
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

@NgModule({
	providers: [
		{
			provide: APOLLO_OPTIONS,
			useFactory: (httpLink: HttpLink) => {
				return {
					assumeImmutableResults: true,
					freezeResults: true,
					cache: new InMemoryCache(),
					link: ApolloLink.from([basicContext, errorLink, httpLink.create({ uri: environment.graphql })]),
					defaultOptions: {
						watchQuery: {
							errorPolicy: 'all',
						},
					},
				};
			},
			deps: [HttpLink],
		},
	],
})
export class GraphQlModule {
	// constructor(apollo: Apollo) {
	// 	window['__APOLLO_CLIENT__'] = apollo.getClient(); // Used by the Apollo Chrome extension
	// }
}

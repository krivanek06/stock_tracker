import {Apollo, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {ApolloLink, InMemoryCache} from '@apollo/client/core';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {onError} from '@apollo/client/link/error';
import {environment} from '../environments/environment';
import {DialogService} from '@shared';
import {setContext} from '@apollo/client/link/context';

const errorLink = onError(({graphQLErrors, networkError, response}) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(e => {
            DialogService.presentErrorToast(e.message);
        });
        graphQLErrors.map(({message, locations, path}) =>
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        );
    }
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
        DialogService.presentErrorToast(networkError.message);
    }
});

const basicContext = setContext((operation, context) => ({
    headers: {
        Accept: 'charset=utf-8'
    }
}));

const requesterContext = setContext((operation, context) => {
    const requesterUserId = localStorage.getItem('requesterUserId') || '';
    console.log('requesterUserId', requesterUserId)
    return {
        headers: {
            requesterUserId: requesterUserId
        }
    };
});

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                return {
                    assumeImmutableResults: true,
                    freezeResults: true,
                    cache: new InMemoryCache(),
                    link: ApolloLink.from([
                        basicContext,
                        requesterContext,
                        errorLink,
                        httpLink.create({uri: environment.graphql})
                    ]),
                    defaultOptions: {
                        watchQuery: {
                            errorPolicy: 'all'
                        }
                    }
                };
            },
            deps: [HttpLink]
        }
    ]
})
export class GraphQlModule {
    constructor(apollo: Apollo) {
        window['__APOLLO_CLIENT__'] = apollo.getClient(); // Used by the Apollo Chrome extension
    }
}

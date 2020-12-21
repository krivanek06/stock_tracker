import {Apollo, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {environment} from '../environments/environment';


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
          link: httpLink.create({
            uri: environment.graphql
          })
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

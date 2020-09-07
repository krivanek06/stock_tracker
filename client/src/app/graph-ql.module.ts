import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Apollo, APOLLO_OPTIONS, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ApolloModule,
    HttpLinkModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:4000/'
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

/* eslint-disable no-undef */
import { createServer, Response } from 'miragejs';

/**
 *  Get general information for a specific user
 * @param { any } request  allows to retrieve the userID
 * @param { String ('user' | 'activity' | 'performance' | 'average-sessions') } path allows to see the path of JSON files
 * @returns { JSON } the response from the API
 */
function get({ request }, path) {
  let userID = request.params.id;
  if (userID == 12 || userID == 18) {
    let json = require(`../data/${userID}/${path}.json`);
    return json;
  } else {
    return new Response(
      402,
      { some: 'header' },
      { errors: ['can not get user'] }
    );
  }
}
/**
 * We can mock it out using the routes() hook.
 * This function allows you to create the server that will launch the API in the APP
 */
createServer({
  routes() {
    this.namespace = 'api';
    this.timing = 3000;
    this.logging = false;
    this.get('/:id/', (schema, request) => get({ request }, 'user'));
    this.get('/:id/activity/', (schema, request) =>
      get({ request }, 'activity')
    );
    this.get('/:id/average-sessions/', (schema, request) =>
      get({ request }, 'average-sessions')
    );
    this.get('/:id/performance/', (schema, request) =>
      get({ request }, 'performance')
    );
  },
});

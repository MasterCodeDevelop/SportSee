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
 * Server (miragejs)
 * We can mock it out using the routes() hook.
 * This function allows you to create the server that will launch the API in the APP
 */
const server = () => {
  createServer({
    routes() {
      this.timing = 1000;
      this.urlPrefix = 'http://localhost:3000/';
      this.logging = false;
      this.get('/user/:id/', (schema, request) => get({ request }, 'user'));
      this.get('/user/:id/activity/', (schema, request) =>
        get({ request }, 'activity')
      );
      this.get('/user/:id/average-sessions/', (schema, request) =>
        get({ request }, 'average-sessions')
      );
      this.get('/user/:id/performance/', (schema, request) =>
        get({ request }, 'performance')
      );
    },
  });
};

/**
 * Open the Mirage server
 * If we set the const openMirageServer to "true" the mocker server starts
 * Else the mocker server will not be launched in this case do not forget to launch the API server on port 3000
 */
const openMirageServer = true;
if (openMirageServer) server();

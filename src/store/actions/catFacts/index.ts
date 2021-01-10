import axios from 'axios';

const webApiUrl = 'https://cat-fact.herokuapp.com';

export class CatFactsService {
  get = async () => axios.get('/facts', { baseURL: webApiUrl });
}

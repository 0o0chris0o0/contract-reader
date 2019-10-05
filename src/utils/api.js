import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import paragraphData from '../data/paragraphs.json';

class Api {
  constructor(options) {
    this.defaults = {
      endpoint: '',
      method: 'get',
    };

    this.settings = { ...this.defaults, ...options };

    // setup a mock adapter
    const mock = new MockAdapter(axios);

    // Mock any GET requests
    mock.onGet(this.settings.endpoint).reply(config => {
      const paragraphId = config.url.split('/')[1];
      const filteredParagrahs = paragraphData.filter(para => para.contractId === paragraphId);

      return [200, filteredParagrahs];
    });
  }

  async submit(data) {
    try {
      const response = await axios.get(this.settings.endpoint);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default Api;

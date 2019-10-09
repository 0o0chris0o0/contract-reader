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
    const mock = new MockAdapter(axios, { delayResponse: 2000 });

    // Mock any GET requests
    mock.onGet(this.settings.endpoint).reply(config => {
      // get contractId from request
      const requestedContractId = config.url.split('/')[1];

      // filter out all paragraphs with matching contract id
      const filteredParagrahs = paragraphData.filter(
        para => para.contractId === requestedContractId,
      );

      // calc where to slice the paragraphs array, taking into account array zero-indexing
      const aryStart = (config.params.page - 1) * config.params.pageSize;
      const aryEnd = config.params.page * config.params.pageSize;

      // slice required paragraphs
      const paragraphPage = filteredParagrahs.slice(aryStart, aryEnd);

      const returnVal = {
        paragraphs: paragraphPage,
        pagination: {
          count: filteredParagrahs.length,
          pages: Math.ceil(filteredParagrahs.length / config.params.pageSize),
        },
      };

      return [200, returnVal];
    });
  }

  async submit(data) {
    const config = {
      url: this.settings.endpoint,
      method: this.settings.method,
    };

    if (data) {
      config.params = data;
    }

    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default Api;

import { Axios } from './@core';

export const IssuesAPI = {
  getData(params) {
    return Axios.get('/repos/angular/angular-cli/issues', { params });
  },
};

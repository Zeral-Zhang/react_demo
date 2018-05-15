import axios from 'axios';

export async function queryDashboardInfo() {
  return axios.get('/api/Dashboard');
}
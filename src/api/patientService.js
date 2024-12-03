import axios from 'axios';

const API_URL = 'https://mobile.digistat.it/CandidateApi';
const AUTH = {
  username: 'test',
  password: 'TestMePlease!'
};

export const getPatients = async () => {
  try {
    const response = await axios.get(`${API_URL}/Patient/GetList`, {
      auth: AUTH
    });
	console.log("RESPONSE!!!!!!!!!!", response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};
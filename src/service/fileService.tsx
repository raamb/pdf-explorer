import axios from 'axios';

const API_BASE_URL = process.env.API_BASE;
const apiService = axios.create({
  baseURL: API_BASE_URL,
});

const MOCK_FILES = {"data": [{"file_link":"https://arxiv.org/pdf/0704.0001.pdf", "name":"Prompt Diphoton", "id":"file1"}, 
                             {"file_link":"https://arxiv.org/pdf/2402.16878.pdf", "name":"EvoGPT", "id":"file2"}]}

export const fetchAllFiles = async () => {
  try {
    // const response = await apiService.get('/v1/files');
    // return response.data;
    return MOCK_FILES["data"]; 
  } catch (error) {
    throw error;
  }
};

export const fetchFile = async (file_id: string) => {
    try {
      // const response = await apiService.get('/v1/files/'+file_id);
      // return response.data;
      return MOCK_FILES["data"];
    } catch (error) {
      throw error;
    }
  };

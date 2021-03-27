const axios = require('axios').default;

axios.defaults.baseURL = 'https://pixabay.com/api';
const token = '19908670-1dd1b8415290a1f574a86bd8e';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  console.log(searchQuery);

  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${token}&image_type=photo&orientation=horizontal&per_page=${pageSize}
`,
    )
    .then(response => response.data.hits);
};

export default fetchImages;

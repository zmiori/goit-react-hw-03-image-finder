const axios = require('axios').default;

const token = '19908670-1dd1b8415290a1f574a86bd8e';
axios.defaults.baseURL = 'https://pixabay.com/api';

// axios.default.params = {
//   key: token,
//   image_type: 'photo',
//   orientation: 'horisontal',
//   per_page: 12,
// };

// const fetchImages = async ({ searchQuery, currentPage }) => {
//   try {
//     const { data } = await axios.get('', {
//       params: { searchQuery, currentPage },
//     });

//     return data.hits;
//   } catch (error) {
//     console.log('error', { error });
//     return [];
//   }
// };

const fetchImages = ({ searchQuery, currentPage = 1, pageSize = 12 }) => {
  console.log(searchQuery);

  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${token}&image_type=photo&orientation=horizontal&per_page=${pageSize}
`,
    )
    .then(response => response.data.hits)
    .catch(function (error) {
      console.log(error);
      return [];
    });
};

export default fetchImages;

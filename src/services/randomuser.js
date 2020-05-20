const RANDOMUSER_API_ENDPOINT = 'https://randomuser.me/api/'

const getRandomUser = () => {
  return fetch(RANDOMUSER_API_ENDPOINT) 
    .then( (res) => res.json() )
    .then( (json) => json.results[0] )
}

export default getRandomUser;
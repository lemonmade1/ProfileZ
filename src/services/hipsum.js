const HIPSUM_API_ENDPOINT = 'https://hipsum.co/api/?type=hipster-latin&sentences='

const getRandomString = (sentences) => {
  const url = HIPSUM_API_ENDPOINT + sentences
  return fetch(url)
    .then( (res) => res.json() )
    .then( (json) => json[0] );
}

export default getRandomString;
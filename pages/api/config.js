// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const config = {
  API_ROOT:'https://api.themoviedb.org/3',
  API_KEY:'071dc9e1fa4ca2cba6c1ba1612fcd133',
 
  // API_ROOT:'https://api.itv.uz/api/content/main/8',
  // API_KEY:'4bb5a3843470f981231123e611b7590584ec044'

  API_IMAGE: {
    small: 'https://image.tmdb.org/t/p/w185/',
    medium: 'https://image.tmdb.org/t/p/w300/',
    large: 'https://image.tmdb.org/t/p/w500/',
    original: 'https://image.tmdb.org/t/p/original/'
  },
}



export const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};
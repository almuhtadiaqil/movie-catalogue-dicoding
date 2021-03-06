const CONFIG = {
    KEY: 'dd92d7989d2ae55aea4abdf6b4fcd1b2',
    BASE_URL: 'https://api.themoviedb.org/3/',
    BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
    DEFAULT_LANGUAGE: 'en-us',

    CACHE_NAME: new Date().toISOString(),
    DATABASE_NAME: 'movie-catalogue-database',
    DATABASE_VERSION: 1,
    OBJECT_STORE_NAME: 'movies',

    WEB_SOCKET_SERVER : 'wsS://movies-feed.dicoding.dev',
  };
   
  export default CONFIG;
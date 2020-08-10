const SERVER_URL = process.env.REACT_APP_API_URL;
const DATA_STATS_URL = `${SERVER_URL}/demo/keyword-analytics/data-stats`;
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

const INDEX_PATH = '/';
const STATS_PATH = '/stats/';
const EXPLORE_PATH = '/explore';

const COLORS = ['cyan', 'green', 'yellow', 'white', 'red', 'purple'];

export {
  PROXY_URL,
  DATA_STATS_URL, INDEX_PATH,
  STATS_PATH, EXPLORE_PATH, COLORS,
};

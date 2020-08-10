import { PROXY_URL, DATA_STATS_URL } from '../constants';

function api<T>(url: string, settings: object): Promise<T> {
  return fetch(url, settings)
    .then((response) => {
      if (!response.ok) {
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw console.error(`${response.status}: ${response.statusText}`);
      }
      return response.json() as Promise<T>;
    });
}

const settings = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method: 'POST',
};

export interface IData {
  keyword: string;
  explore: string;
  suggestions: number;
  trafficScore: number
  rank: string;
  totalApps: number;
  color: number;
  id: number;
}

const adaptedDataStats = (data: Array<any>): any => data.map((item: any) => {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    keyword, suggestions_count, users_per_day, position_info, total_apps, color, id,
  } = item;
  const { position, change } = position_info;
  const rank = change !== null ? `${position} (${change})` : position;
  return {
    keyword,
    explore: keyword,
    suggestions: suggestions_count,
    trafficScore: users_per_day,
    rank,
    totalApps: total_apps,
    color,
    id,
  };
});

export const getStats = () => api<{data: Array<any>}>(`${PROXY_URL}${DATA_STATS_URL}`, settings)
  .then(({ data }) => adaptedDataStats(data));

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { INDEX_PATH, STATS_PATH } from '../constants';
import StatsContainer from './StatsContainer';

const Routing:React.FC = () => (
  <main>
    <Route exact path={INDEX_PATH} render={() => <Redirect to={STATS_PATH} />} />
    <Route path={STATS_PATH} component={StatsContainer} />
  </main>
);

export default Routing;

import React, { Suspense, lazy }  from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { INDEX_PATH, STATS_PATH } from '../constants';

const StatsContainer = lazy(() => import('./StatsContainer'));

const Routing:React.FC = () => (
  <main>
    <Suspense fallback={<div>Загрузка...</div>}>
      <Switch>
        <Route exact path={INDEX_PATH} render={() => <Redirect to={STATS_PATH} />} />
        <Route path={STATS_PATH} component={StatsContainer} />
      </Switch>
    </Suspense>
  </main>
);

export default Routing;

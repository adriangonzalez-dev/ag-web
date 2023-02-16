import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages';

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

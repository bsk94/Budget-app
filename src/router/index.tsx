import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Overview from '../views/overviewView';
import AddExpense from '../views/expenseView';
import AddRevenue from '../views/revenueView';
import Statistics from '../views/statisticView';
import Goal from '../views/goalView';
import Login from '../views/loginView';
import EditExpRev from '../views/editExpRevView';
import NotFoundView from '../views/notFoundView';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.overview} element={<Overview />} />
        <Route path={routes.addExpense} element={<AddExpense />} />
        <Route path={routes.addRevenue} element={<AddRevenue />} />
        <Route path={routes.statistics} element={<Statistics />} />
        <Route path={routes.goal} element={<Goal />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.editPage} element={<EditExpRev />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

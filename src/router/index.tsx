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
import Navbar from '../components/molecules/navigation';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.overview}
          element={
            <>
              <Navbar />
              <Overview />
            </>
          }
        />
        <Route
          path={routes.addExpense}
          element={
            <>
              <Navbar />
              <AddExpense />
            </>
          }
        />
        <Route
          path={routes.addRevenue}
          element={
            <>
              <Navbar />
              <AddRevenue />
            </>
          }
        />
        <Route
          path={routes.statistics}
          element={
            <>
              <Navbar />
              <Statistics />
            </>
          }
        />
        <Route
          path={routes.goal}
          element={
            <>
              <Navbar />
              <Goal />
            </>
          }
        />
        <Route path={routes.login} element={<Login />} />
        <Route
          path={routes.editPage}
          element={
            <>
              <Navbar />
              <EditExpRev />
            </>
          }
        />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;



// export default App;
// import logo from './logo.svg';
import './App.css';
// import AuthenticationForm from './Forms/AuthenticationForm';

// import for employee portal
import EmployeeHome from './pages/EmployeeHome';
import CustomerReg from './Forms/CustomerReg';
import CustomerList from './Forms/CustomerList';
import CustomerEditor from './pages/EmployeePortalPages/CustomerEditor';
import AccountReg from './Forms/AccountReg';
import AccountList from './Forms/AccountsList';
import EmployeeReg from './Forms/EmployeeReg';
import EmployeeList from './Forms/EmpoyeeList';

import CustomerLogin from './pages/LoginPages/CustomerLogin';
import EmployeeLogin from './pages/LoginPages/EmployeeLogin';
import RequireAuth from './utils/RequireAuth';

import OnlineBankingReg from './Forms/OnlineCustomerReg';

// import for customer portal
import CustomerHome from './pages/CustomerHome';
import AccountView from './pages/CustomerPortalPages/AccountView';

// import for home page
import HomePage from './pages/HomePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <nav></nav>
      {/* <CustomerReg className="centered" /> */}
      {/* <CustomerList className="customer" /> */}
      <BrowserRouter>
        <Routes>
          {/* // employee portal */}
          <Route
            path='/employeePortal/*'
            element={
              <RequireAuth redirectTo='/employeeLogin' authRole={'employee'}>
                <Route exact path='' element={<EmployeeHome />} />
                <Route path='customer-register' element={<CustomerReg />} />
                <Route path='customer-list' element={<CustomerList />} />
                <Route
                  path='customer/:customerId'
                  element={<CustomerEditor />}
                />
                <Route
                  path='online-customer-register'
                  element={<OnlineBankingReg />}
                />

                <Route path='employee-register' element={<EmployeeReg />} />
                <Route path='employee-list' element={<EmployeeList />} />

                <Route path='account-register' element={<AccountReg />} />
                <Route path='account-list' element={<AccountList />} />
                <Route
                  path='account-list/:accountID'
                  element={<AccountView />}
                />
              </RequireAuth>
            }
          ></Route>
          <Route path='/employeeLogin'>
            <Route
              exact
              path='/employeeLogin'
              element={<EmployeeLogin className='customer-login' />}
            />
          </Route>

          {/* // customer portal */}
          <Route
            path='/customerPortal/*'
            element={
              <RequireAuth redirectTo='/customerLogin' authRole={'customer'}>
                <Route exact path='' element={<CustomerHome />} />
                <Route path='account/:accountID' element={<AccountView />} />

              </RequireAuth>
            }
          ></Route>
          <Route path='/customerLogin'>
            <Route
              exact
              path='/customerLogin'
              element={<CustomerLogin className='customer-login' />}
            />
          </Route>
          {/* Home page */}
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

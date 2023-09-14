import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NotFound from './Pages/NotFound';


import './index.scss'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-markdown-editor-lite/lib/index.css';
import Action from './Pages/Action_Sign/Action';
import Admin from './Pages/Account/Admin';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Dashboard from './Pages/Account/Dashboard/Dashboard';
import Appointments from './Pages/Account/Appointments/Appointments';
import Managers from './Pages/Account/Managers/Managers';
import Schedules from './Pages/Account/Schedules/Schedules';
import History from './Pages/Account/History/History';
import Setting from './Pages/Account/Setting/Setting';
import PrivateRoute from './Routes/PrivateRoute';
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} >
            {/* <Route path='signup' element={<Signup />}>

          </Route> */}

          </Route>
          <Route path='/register' element={<Action />} />
          <Route path='/login' element={<Action />} />
          <Route path='/account' element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="managers" element={<Managers />} />
            <Route path="schedules" element={<Schedules />} />
            <Route path="history" element={<History />} />
            <Route path="setting" element={<Setting />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

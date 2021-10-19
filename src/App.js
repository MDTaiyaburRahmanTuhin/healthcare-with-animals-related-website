import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Booking from './Pages/Booking/Booking/Booking';
import Food from './Pages/Food/Food';
import Foods from './Pages/Foods/Foods';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import Register from './Pages/Home/Register/Register';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import PrivateRouth from './Pages/Login/Login/PrivateRoute/PrivateRouth';
import Header from './Pages/Shared/Header/Header';
import Shopes from './Pages/Shopes/Shopes';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/food">
              <Foods></Foods>
            </Route>
            <PrivateRouth path="/shop">
              <Shopes></Shopes>
            </PrivateRouth>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRouth path="/booking/:id">
              <Booking></Booking>
            </PrivateRouth>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

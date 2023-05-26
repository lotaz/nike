import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { pathRoute } from './route/Path';
import HomePage from './page/homePage/HomePage';
import LoginPage from './page/loginPage/LoginPage';
import HeaderNike from './page/headerNike/HeaderNike';
import FooterNike from './page/footerNike/FooterNike';
function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderNike />
        <Routes>
          <Route path={pathRoute.HOME} element={<HomePage />} />
          <Route path={pathRoute.LOGIN} element={<LoginPage />} />
        </Routes>
        <FooterNike />
      </BrowserRouter>
    </div>
  );
}

export default App;

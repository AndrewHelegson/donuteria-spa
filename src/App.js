import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Contacts } from './Contacts/Contacts';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Products } from './Products/Products';

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper' >
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Main />}
          />
          <Route
            path='/products'
            element={<Products />}
          />
          <Route
            path='/contacts'
            element={<Contacts />}
          />
        </Routes>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;

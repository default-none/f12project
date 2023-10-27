import { Route, Routes } from 'react-router-dom';
import './style/default.scss';
import HomePage from './pages/HomePage.js';
import GuidePage from './pages/GuidePage.js';
import ProgramPage from './pages/ProgramPage';
import GalleryPage from './pages/GalleryPage';
import NoticePage from './pages/NoticePage';
import UsersPage from './pages/UsersPage';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/guide" element={<GuidePage></GuidePage>}></Route>
        <Route path="/program" element={<ProgramPage></ProgramPage>}></Route>
        <Route path="/gallery" element={<GalleryPage></GalleryPage>}></Route>
        <Route path="/notice" element={<NoticePage></NoticePage>}></Route>
        <Route path="/users" element={<UsersPage />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

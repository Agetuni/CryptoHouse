import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import Home from './components/Home';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto/:id/" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;

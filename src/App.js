import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crypto/:id/" element={<Detail />} />
    </Routes>
  );
}

export default App;

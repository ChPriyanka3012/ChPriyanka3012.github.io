
import './App.css';
import Header from './Header';
import Container1 from './Container1';
import Container2 from './Container2';
import Footer from './Footer';
function App() {
  return (
    <div>
      <div className='header'><Header /></div>
      <div className='container'>
        <div className='box1'><Container1 /></div>
        <div className='box2'><Container2 /></div>
      </div>
      <div className='footer'><Footer /></div>
    </div>
  );
}

export default App;

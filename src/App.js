import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Postform from './components/Postform';


function App() {
  return (
    <>
    <Nav />

    <div className='bg-yellow-800 w-full h-screen'>
      <Postform />
    </div>
      <Footer></Footer>
    </>
  );
}

export default App;

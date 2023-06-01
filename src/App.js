import './App.css';
import Nav from './components/Nav'
import Postcard from './components/Postcard';
import Footer from './components/Footer';
import Postform from './components/Postform';
// import SignUp from './components/SignUp';
// import Login from './components/Login';


function App() {
  return (
    <>
    <div className='flex flex-col h-screen'>
    <Nav />
    <Postcard />
    <div className='bg-yellow-800 w-full h-screen'>
    <Postform />
    </div>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;

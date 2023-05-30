import './App.css';
import Nav from './components/Nav'
import Postcard from './components/Postcard';

function App() {
  return (
    <>
    <div className='flex flex-col h-screen'>
    <Nav />
    <Postcard />
    <div className='bg-yellow-800 w-full h-screen'></div>
    </div>
    </>
  );
}

export default App;

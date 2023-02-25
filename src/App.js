import { Provider } from 'react-redux';
import './App.css';
import Book from './components/Book';
import BookingTable from './components/BookingTable';
import BookingForm from './components/U';
import './index.css';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
          <div className="App">
     <header id="header">
    <div className="container">
      <img src="./img/lws-logo.svg" alt="logo" className="logo" />
      <div className="flex items-center">
        <button className="text-white min-w-[50px] font-medium" href='#'>Home</button>
        <button className="log-btn btn">Login</button>
      </div>

    </div>
  </header>
        <div>
        <BookingForm />
        <Book />
        <BookingTable />
        </div>
    </div>
    </Provider>

  );
}

export default App;

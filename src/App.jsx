import { ToastContainer } from 'react-toastify';
import { CartProvider } from './context/CartContext';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        {/* Your existing routes and components */}
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </CartProvider>
  );
}

export default App;
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoutesFile from "./Routes"; // 👈 তোমার routes ফাইল
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <RoutesFile />
      </BrowserRouter>
    </CartProvider>
  );
}

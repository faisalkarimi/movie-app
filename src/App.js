import "./App.css";
import { PaginationProvider } from "./context/paginationContext";
import Home from "./screens/Home";

function App() {
  return (
    <PaginationProvider>
      <Home />
    </PaginationProvider>
  );
}

export default App;

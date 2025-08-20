import HolaMundo from "./components/holamundo";
import Header from "./components/Header";

function App() {
  return (
    <div>
      
      <Header />
      <main className="p-6">
        <HolaMundo />
      </main>
    </div>
  );
}

export default App;
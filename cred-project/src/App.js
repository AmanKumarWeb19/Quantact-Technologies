// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import "../src/App.css";
import YourMoney from "./components/YourMoney";
import ExploreCard from "./components/ExploreCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{ backgroundColor: "#242424" }}
      className="row mx-0 position-relative h-100"
    >
      <Header />
      <YourMoney />
      <ExploreCard />
      <Footer />
    </div>
  );
}

export default App;

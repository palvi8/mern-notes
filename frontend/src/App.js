import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Notes from "./components/screens/Notes/Notes";

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "50vh" }}>
        <Notes />
      </main>
      <Footer />
    </>
  );
}

export default App;

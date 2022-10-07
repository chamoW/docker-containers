import logo from "./logo.svg";
import "./App.css";
import Layout from "./pages/layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi PROBANDO desde docker parece mentira s</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOCKER is amazing, test it!!!
          </a>
        </div>
      </Layout>
    </div>
  );
}

export default App;

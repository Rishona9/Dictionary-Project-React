import "./App.css";
import DictionarySearch from "./DictionarySearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <p className="dictionary-header">Dictionary</p>
          <DictionarySearch defaultKeyWord="dog" />
        </main>
        <footer className="App-footer">
          This website was coded by Rishona Lee and is {""}
          <a
            href="https://github.com/Rishona9/dictionary-project-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source {""}
          </a>
          and{" "}
          <a
            href="https://magnificent-torte-c8ade4.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

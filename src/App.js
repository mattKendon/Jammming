import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import {useState} from "react";

async function fetchData(query) {
  return [
    {
      id: 1,
      name: "Song"
    },
    {
      id: 2,
      name: "Song 2"
    }
  ]
}

function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    fetchData(searchQuery).then(data => { setSearchResults(data)})
  }

  return (
    <div className="App">
      <SearchBar searchQuery={searchQuery} onChange={e => setSearchQuery(e.target.value)} onSubmit={handleSubmit}/>
      <SearchResults searchResults={searchResults}/>
    </div>
  );
}

export default App;

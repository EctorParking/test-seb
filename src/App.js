import React from 'react';
import logo from './logo.svg';
import './App.css';

const items = ['Antoine', 'Rémy', 'Florian', 'Maéva', 'Gaëtan', 'Jalil', 'Victor', 'Klervi', 'Florent']

function App () {
const [search, setSearch] = React.useState('');
const [results, setResults] = React.useState(null)

React.useEffect(() => {
  const results = items.filter(item => item.toLowerCase().includes(search.toLowerCase()));

  setResults(results)
}, [search])

  return (
    <div>
      <input value={search} onChange={e => setSearch(e.currentTarget.value)} />
      <div>
      {results && results.map(
        result => <div onClick={e => setSearch(result)}>{result}</div>
      )}
      </div>
    </div>
  )
}

export default App;

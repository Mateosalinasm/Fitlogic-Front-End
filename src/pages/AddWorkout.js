import React, { useState } from 'react';

function Form() {
  const [data, setData] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('data', JSON.stringify(data));
  };

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Data:
        <input type="text" value={data} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

function List() {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data'));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <>
      <Form />
      <List />
    </>
  );
}

export default App;

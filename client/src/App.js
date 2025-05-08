import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(setTodos)
      .catch(console.error);
  }, []);

  const addTodo = async () => {
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
    setText('');
  };

  return (
    <div>
      <h1>Demo Todo</h1>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(t => <li key={t._id}>{t.text}</li>)}
      </ul>
    </div>
  );
}

export default App;

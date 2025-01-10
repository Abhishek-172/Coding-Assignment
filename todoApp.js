import React, { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  // Fetch initial todos
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://dummyjson.com/todos?limit=5');
        const data = await response.json();
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
          setTodos(JSON.parse(savedTodos));
        } else {
          setTodos(data.todos);
        }
      } catch (error) {
        console.error('Error fetching todos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add todo
  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      const response = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todo: newTodo,
          completed: false,
          userId: 1,
        }),
      });
      const data = await response.json();

      setTodos([...todos, { ...data, id: Date.now() }]);
      setNewTodo('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-4">
      <h1 className="text-xl mb-4">Todo List</h1>

      {/* Add Todo Form */}
      <form onSubmit={addTodo} className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          className="border p-1 mr-2"
        />
        <button type="submit" className="border p-1">Add</button>
      </form>

      {/* Filter Buttons */}
      <div className="mb-4">
        <button onClick={() => setFilter('all')} className="mr-2">All</button>
        <button onClick={() => setFilter('completed')} className="mr-2">Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>

      {/* Todo List */}
      <div>
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="mb-2 flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mr-2"
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.todo}
            </span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              className="ml-2"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
        {filteredTodos.length === 0 && <p>No todos found</p>}
      </div>
    </div>
  );
};

export default TodoApp;
import React, { useState, useReducer } from 'react';
import UserForm from './components/UserForm';
import DigitalClock from './components/DigitalClock';
import ProductFilter from './components/ProductFilter';
import TodoApp from './components/TodoApp';
import Stopwatch from './components/Stopwatch';
import  ThemeContext  from './components/ThemeContext.jsx';
import Layout from './components/Layout';
import './css/style.css';

// Các action types cho reducer
const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

// Reducer function
const userReducer = (state, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, status: 'loading', users: [] };
    case FETCH_SUCCESS:
      return { ...state, status: 'success', users: action.payload };
    case FETCH_ERROR:
      return { ...state, status: 'error', users: [] };
    default:
      return state;
  }
};

// Initial state
const initialState = {
  status: 'idle',
  users: [],
};

function App() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Fetch users từ API
  const fetchUsers = async () => {
    dispatch({ type: FETCH_START });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      dispatch({ type: FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_ERROR });
    }
  };

  // Hàm render nội dung tùy thuộc vào trạng thái
  const renderContent = () => {
    switch (state.status) {
      case 'idle':
        return <button onClick={fetchUsers}>Load Users</button>;
      case 'loading':
        return <p>Loading...</p>;
      case 'success':
        return (
          <ul>
            {state.users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        );
      case 'error':
        return (
          <div>
            <p>Failed to load users. Please try again.</p>
            <button onClick={fetchUsers}>Retry</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
      <div>
        {/* Hiển thị các component khác
        <h1>User List</h1>
        {renderContent()} */}

        {/* Các component khác */}
        {/* <UserForm />
        <DigitalClock />
        <ProductFilter />
        <TodoApp />
        <Stopwatch />
        <Layout /> */}
        <ThemeContext/>
      </div>
  );
}

export default App;
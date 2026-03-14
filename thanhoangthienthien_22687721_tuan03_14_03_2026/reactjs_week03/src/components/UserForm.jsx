// components/UserForm.jsx
import { useReducer } from 'react';

// Reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const UserForm = () => {
  // State initialization
  const initialState = {
    name: '',
    email: '',
    age: ''
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', field: name, value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the form from reloading the page
    console.log("Form submitted with the following data:", state);  // Log the form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={state.age}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
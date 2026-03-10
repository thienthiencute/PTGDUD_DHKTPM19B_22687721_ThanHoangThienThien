import ProductCard from "./components/ProductCard";
import Button from "./components/Button";
import LoginForm from "./components/LoginForm";
import Alert from "./components/Alert";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  return (
    // <div className="app">
    //   <ProductCard />
    // </div>

    //  <div style={{ padding: "40px" }}>
    //   <Button type={"primary"}>Add to cart</Button>
    //   <br />
    //   <Button type={"danger"}>Delete</Button>
    //   <br />
    //   <Button type={"success"}>Confirm</Button>
    // </div>

   // <LoginForm />

    // <div>
    //   <Alert type="success" message="Login successful!" />
    //   <Alert type="warning" message="Password is weak." />
    //   <Alert type="error" message="Login failed!" />
    // </div>

    <div>
      <ProductList />
    </div>
  );
}

export default App;
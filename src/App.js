import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>First React Test Case</p>
      <p>Sagar Jadhav</p>
      <img
        title="ai genrated image"
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
      />
      <input
        type="text"
        placeholder="Enter User Name"
        name="username"
        id="userId"
        readOnly
        value="sagar jadhav"
      />
    </div>
  );
}

export default App;

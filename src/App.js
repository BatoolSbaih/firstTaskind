import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="main">
      <h1>Welcome to Sign In Page</h1>
      <div className="subClass">
      <div className="content">
        <h2>Sign In</h2>
</div>
        <div className="content">
          <label>Name</label>
          <input type="text" name="name"  />
        </div>
        <div className="content">
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <div className="content">
      <button  type='submit' className='btn_Submit' ><b>Save</b> </button>
      </div>
    </div>
    </div>
  );
}

export default App;

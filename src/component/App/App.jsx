import UserForm from "../UserForm/UserForm";
import css from "./App.module.css";

function App() {
  const saveUsername = (user) => {
    console.log(user);
  };
  return (
    <div className={css.container}>
      <h1>Forms in React</h1>
      <UserForm onSubmit={saveUsername} />
      <UserForm onSubmit={saveUsername} />
    </div>
  );
}

export default App;

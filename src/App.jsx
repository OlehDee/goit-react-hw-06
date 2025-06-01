import ContactsForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.main}>
      <h1>Contact Book</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
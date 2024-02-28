import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import css from './App.module.css';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/operations';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phone<span className={css.span}>book</span>
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

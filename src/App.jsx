import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/operations';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      {loading && <p className={css.loading}>Loading...Please wait</p>}
      {error && <p className={css.text}>Oops!Something went wrong, please try again later.</p>}
      <h1 className={css.title}>
        Phone<span className={css.span}>book</span>
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

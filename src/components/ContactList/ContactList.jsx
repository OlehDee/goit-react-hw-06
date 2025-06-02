import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact
            userName={contact.name}
            userNumber={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
}

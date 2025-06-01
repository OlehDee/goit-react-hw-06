import { useSelector } from "react-redux";

import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { getContacts, getFilter } from "../../redux/selectors";

export default function ContactList() {
  const items = useSelector(getContacts);
  const value = useSelector(getFilter);

  function getVisibleContacts(contacts) {
    const info = contacts.filter((item) =>
      item.item.name.toLowerCase().includes(value.name.toLowerCase())
    );
    return info;
  }

  const visibleContacts = getVisibleContacts(items);

  return (
    <ul className={css.list}>
      {visibleContacts.map((elem) => {
        return (
          <li className={css.listItem} key={elem.id}>
            <Contact
              userName={elem.item.name}
              userNumber={elem.item.number}
              id={elem.id}
            ></Contact>
          </li>
        );
      })}
    </ul>
  );
}
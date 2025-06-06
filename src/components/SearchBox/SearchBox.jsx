import { useId } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { getFilter } from "../../redux/selectors";

export default function SearchBox() {
  const SearchId = useId();
  const dispatch = useDispatch();

  const value = useSelector(getFilter);

  function changeHandler(event) {
    dispatch(changeFilter(event.target.value));
  }

  return (
    <div>
      <form className={css.search}>
        <label htmlFor={SearchId}>Find contacts by name</label>
        <input
          className={css.input}
          type="text"
          name="name"
          id={SearchId}
          onChange={changeHandler}
          value={value}
        ></input>
      </form>
    </div>
  );
}
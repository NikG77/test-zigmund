import * as React from 'react';
import {useState} from "react";


const Main = () => {
  const [value, setValue] = useState(``);
  const onSubmitForm = (evt) => {
    evt.preventDefault();
    console.log(value);
  }


  return (
    <React.Fragment >
      <div className="organization">
        <form action="#"
              className="organization__form"
              onSubmit={onSubmitForm}
        >

          <label className="organization__label" htmlFor="organization" >Organization</label>
          <input className="organization__input"
                onChange={(evt) => setValue(evt.target.value)}
                value={value}
                name="organization"
                id="organization"
                placeholder="Name organization"
                required
          />

          <button className="btn organization__btn"
                  type="submit"
          >Post</button>

        </form>
      </div>

    </React.Fragment>
  );
}

export default Main;

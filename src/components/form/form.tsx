import React, { Dispatch, useState } from 'react';
import { connect } from "react-redux";
import { ActionCreator } from "../../reduser/reducer";

interface Props {
  onNameSelection: (value: string) => void;
}

const Main: React.FC<Props> = (props: Props) => {

  const [value, setValue] = useState('');

  const handleSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    const { onNameSelection } = props;
    evt.preventDefault();
    onNameSelection(value);
  }

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setValue(evt.target.value);

  return (
    <React.Fragment >
      <div className="organization">
        <form action="#"
              className="organization__form"
              onSubmit={handleSubmitForm}
        >
          <div className="organization__text">
            {/*<label className="organization__label" htmlFor="organization" >Organization</label>*/}
            <input className="organization__input"
                   onChange={handleInputChange}
                   value={value}
                   name="organization"
                   type="text"
                   aria-label="Find repositories"
                   id="organization"
                   placeholder="Find repositories"
                   required
            />
            <button className="organization__btn" type="submit" tabIndex={0} >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"><path fill="#D21EB4" d="M17 15.586l-3.542-3.542A7.465 7.465 0 0 0 15 7.5 7.5 7.5 0 1 0 7.5 15c1.71 0 3.282-.579 4.544-1.542L15.586 17 17 15.586zM2 7.5C2 4.467 4.467 2 7.5 2 10.532 2 13 4.467 13 7.5c0 3.032-2.468 5.5-5.5 5.5A5.506 5.506 0 0 1 2 7.5z"/></svg>
            </button>
          </div>

        </form>
      </div>

    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onNameSelection(name: string) {
    dispatch(ActionCreator.setName(name));
  },
});


export {Main};
export default connect(null, mapDispatchToProps)(Main);




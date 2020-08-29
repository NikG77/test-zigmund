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
            <label className="organization__label" htmlFor="organization" >Organization</label>
            <input className="organization__input"
                  onChange={handleInputChange}
                  value={value}
                  name="organization"
                  id="organization"
                  placeholder="Name organization"
                  required
            />
            <button className="btn organization__btn" type="submit" >Post</button>
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




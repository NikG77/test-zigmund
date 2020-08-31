import React, { Dispatch, useState } from 'react';
import { connect } from "react-redux";
import { ActionCreator } from "../../reduser/reducer";


interface Props {
  onNameSelection: (value: string) => void;
}

const Form: React.FC<Props> = (props: Props) => {

  const [value, setValue] = useState('');

  const handleSubmitForm = ({onNameSelection}) => (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onNameSelection(value);
  }

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setValue(evt.target.value);

  return (
    <div className="organization">
      <form action="#"
            className="organization__form"
            onSubmit={handleSubmitForm(props)}
      >
        <div className="organization__text">
          <label className="visually-hidden" htmlFor="organization" >Organization</label>
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
            <svg viewBox="0 0 17 17" width={17} height={17}>
              <use xlinkHref="#search"></use>
            </svg>
          </button>
        </div>

      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onNameSelection(name: string) {
    dispatch(ActionCreator.getRepositories(name));
    dispatch(ActionCreator.resetPageCount());
  },
});


export {Form};
export default connect(null, mapDispatchToProps)(Form);




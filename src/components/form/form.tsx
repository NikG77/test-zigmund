import React, { Dispatch, useState } from 'react';
import { connect } from "react-redux";
import { ActionCreator } from "../../reduser/reducer";
import styles from "./form.module.scss"


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
    <form action="#"
          className={styles.organization__form}
          onSubmit={handleSubmitForm(props)}
    >
      <div className={styles.organization__text}>
        <input className={styles.organization__input}
               onChange={handleInputChange}
               value={value}
               name="organization"
               type="text"
               aria-label="Find repositories"
               id="organization"
               placeholder="Find repositories"
               required
        />
        <button className={styles.organization__btn} type="submit" tabIndex={0} >
          <svg viewBox="0 0 17 17" width={17} height={17}>
            <use xlinkHref="#search"></use>
          </svg>
        </button>
      </div>
    </form>
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




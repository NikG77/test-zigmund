import * as React from 'react';
import {useState} from "react";
import {connect} from "react-redux";
import {ActionCreator, Operation} from "../../reduser/reducer";

interface Props {
  onNameSelection: (value: string) => void;
}

const Main: React.FC<Props> = (props: Props) => {
  const [value, setValue] = useState(``);

  const onSubmitForm = (evt) => {
    const {onNameSelection} = props;
    evt.preventDefault();
    onNameSelection(value);
    // setValue(``);
  }

  return (
    <React.Fragment >
      <div className="organization">
        <form action="#"
              className="organization__form"
              onSubmit={onSubmitForm}
        >
          <div className="organization__text">
            <label className="organization__label" htmlFor="organization" >Organization</label>
            <input className="organization__input"
                  onChange={(evt) => setValue(evt.target.value)}
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



const mapDispatchToProps = (dispatch) => ({
  onNameSelection(name) {
    dispatch(Operation.getRepositories(name));
    dispatch(ActionCreator.setName(name));
  },

});


export {Main};
export default connect(null, mapDispatchToProps)(Main);




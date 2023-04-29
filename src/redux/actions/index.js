import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import * as actions from "../actions/actions";

export const signInAPI = () => {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        return dispatch(actions.setUser(payload.user));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

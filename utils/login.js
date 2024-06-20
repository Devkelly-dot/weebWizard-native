import { resetAuth, setEmail, setId, setSubscription, setToken } from "../app/redux/authSlice";
import { deleteFromLocalStorage, saveToLocalStorage } from "./localStorage";

export async function dispatchLogin (dispatch, user) {
  // Destructure user object
  const { _id, token, email, subscription } = user;

  // Dispatch actions to save to Redux
  dispatch(setToken(token));
  dispatch(setId(_id));
  dispatch(setEmail(email));
  dispatch(setSubscription(subscription));

  // Save to local storage
  if (token) {
    await saveToLocalStorage('token', token);
  }
  if (_id) {
    await saveToLocalStorage('id', _id);
  }
  if (email) {
    await saveToLocalStorage('email', email);
  }
  if (subscription) {
    await saveToLocalStorage('subscription', subscription);
  }
};

export async function dispatchLogout (dispatch) {
  // Dispatch action to reset Redux state
  dispatch(resetAuth());

  // Delete from local storage
  await deleteFromLocalStorage('token');
  await deleteFromLocalStorage('id');
  await deleteFromLocalStorage('email');
  await deleteFromLocalStorage('subscription');
};
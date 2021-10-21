import * as firebase from "firebase";

const loginRequest = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAvfU2MCLgr-U6c8bM3oFJV_IDQoBgKBQ",
  authDomain: "jt-catch-of-the-day-a87d6.firebaseapp.com",
  databaseURL: "https://jt-catch-of-the-day-a87d6.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

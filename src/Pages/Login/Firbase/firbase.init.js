import { initializeApp } from "firebase/app";
import firebaseConfig from "./firbase.cofig";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;
import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "new-crud");

class UserDataService {
    addUsers = (newUser) => {
        return addDoc(userCollectionRef, newUser);
      };

      getAllUsers = () => {
        return getDocs(userCollectionRef);
      };

      deleteUser = (id) => {
        const userDoc = doc(db, "new-crud", id);
        return deleteDoc(userDoc);
      };

      getUser = (id) => {
        const userDoc = doc(db, "new-crud", id);
        return getDoc(userDoc);
      };

      updateUser = (id, updatedUser) => {
        const userDoc = doc(db, "new-crud", id);
        return updateDoc(userDoc, updatedUser);
      };
}

export default new UserDataService();

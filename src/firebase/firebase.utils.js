import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA96NNioSw7SHuUiGoWLVzTUcADjvzSy_Q',
  authDomain: 'crown-db-e11e3.firebaseapp.com',
  databaseURL: 'https://crown-db-e11e3.firebaseio.com',
  projectId: 'crown-db-e11e3',
  storageBucket: 'crown-db-e11e3.appspot.com',
  messagingSenderId: '400052686244',
  appId: '1:400052686244:web:b1d5cc45e3a5260e6d4531',
  measurementId: 'G-62VPB7RPW0',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  console.log('firestore user:', snapShot);
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

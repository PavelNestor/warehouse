import app from 'firebase/app';
import 'firebase/auth';

const config = {
  // apiKey: process.env.REACT_APP_API_KEY,
  apiKey: 'AIzaSyAv0g_OAnzZvVXq1j3gfJh38lOhNJjNKBk',
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  authDomain: 'warehouseapi.firebaseapp.com',
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  databaseURL: 'https://warehouseapi.firebaseio.com',
  // projectId: process.env.REACT_APP_PROJECT_ID,
  projectId: 'warehouseapi',
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  storageBucket: 'warehouseapi.appspot.com',
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  messagingSenderId: '373393247938',
  // appId: process.env.REACT_APP_APP_ID
  appId: '1:373393247938:web:8e4c85611baf0033'  
};

class Firebase {
  constructor() {
    console.log('config', config);
    
    app.initializeApp(config);
    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;

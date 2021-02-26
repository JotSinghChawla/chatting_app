import React, { useState, useRef } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import userPicture from './demo.jpg' 

firebase.initializeApp({
  apiKey: "AIzaSyAawO7YRgRL45SmK8MjKtK4u65ONAYV0M4",
  authDomain: "chatting-app-12990.firebaseapp.com",
  projectId: "chatting-app-12990",
  storageBucket: "chatting-app-12990.appspot.com",
  messagingSenderId: "112567462662",
  appId: "1:112567462662:web:cb70df137e23e02009cc87",
  measurementId: "G-9PLQVRNLFZ"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() { 

  const [user] = useAuthState(auth); 

  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ fontSize: '4vw' }}>💬 CHATTING APP</h3>
        <SignOut />
      </header>
      <section>
        { user ? <Chatroom /> : <SignIn /> }
        {/* {console.log(user)} */}
      </section>
    </div>
  );
}

function SignIn() {
  const signInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button onClick={signInGoogle} className='sign-in'>Sign in with Google</button>
      <p style={{ margin: "15px auto"}}>Do not violate the community guidelines or Actions will be taken !</p>
    </>
  )
}

function SignOut() {
  return auth.currentUser && ( 
    <button className='sign-out' onClick={ () => auth.signOut() } >Sign out</button>
  )
}

function Chatroom() {
  const referingElement = useRef();

  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  const [formValue, setFormValue] = useState('');
  
  const sendMessage = async (check) => {
    check.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');
    referingElement.current.scrollIntoView( { behavior: 'smooth' } );
  }
  return (
    <>

      <main>
        <div className='messageScreen'>
          {messages && messages.map( (msg) => <ChatMessage key={msg.id} message={msg} />  )}
          <div ref={referingElement}></div>
        </div>
      </main>
      <form onSubmit={ sendMessage }>
        <input value={ formValue } onChange={ (check) => setFormValue(check.target.value) } placeholder='Enter your text here' />
        <button type='submit'>Send</button>
      </form>
    </>
  )

}

function ChatMessage({ message }) {
  const { text, uid, photoURL } = message;
  const messageType = uid === auth.currentUser.uid ? 'sent' : 'received' ;

  return ( 
    <div className={`message ${messageType} `}>
      <img src={message.photoURL ? message.photoURL : userPicture } alt="profile" />
      <p>{text}</p>
    </div>
  )
}

export default App;

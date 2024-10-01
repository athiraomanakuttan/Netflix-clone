import { initializeApp } from "firebase/app";
import { getFirestore , addDoc, collection} from "firebase/firestore";
import {  toast } from 'react-toastify';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword , getAuth, signOut} from 'firebase/auth'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)



const userSignup = async (name:string,email:string,password:string)=>{
    try{
        const responce = await createUserWithEmailAndPassword(auth,email,password);
        const user = responce.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider : 'local',
            email
        })
    }catch(err)
    {
        if (err && typeof err === 'object' && 'code' in err) {
            const error = err as { code: string };
            console.log(error.code);
            toast.error(error.code.split('/')[1].split('-').join(" "));
          } else {
            console.log(err);
            toast.error("An unexpected error occurred");}
    }
}

const loginUser = async (email:string,password:string)=>{
    try{
       await signInWithEmailAndPassword(auth,email,password);
    }catch(err){
        if (err && typeof err === 'object' && 'code' in err) {
            const error = err as { code: string };
            console.log(error.code);
            toast.error(error.code.split('/')[1].split('-').join(" "));
          } else {
            console.log(err);
            toast.error("An unexpected error occurred"); }
    }
}


const logOut = ()=>{
    signOut(auth)
}


export{
    auth,
    db,
    loginUser,
    userSignup,
    logOut
}
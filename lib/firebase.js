import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBugAsQjOXUfEj4qHVj6Ho4-4OtHWfVgD8',
  authDomain: 'next-devto-firebase.firebaseapp.com',
  projectId: 'next-devto-firebase',
  storageBucket: 'next-devto-firebase.appspot.com',
  messagingSenderId: '1003111342460',
  appId: '1:1003111342460:web:f601d977cefed8515d84f9',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

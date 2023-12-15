import { useState } from 'react';
import './App.css';
import { app } from './firebase';
import { getFirestore, collection, addDoc, doc, getDoc, getDocs, query, where, updateDoc } from 'firebase/firestore';

const firestore = getFirestore(app);

function App() {
  const createData = async () => {
    const docRef = await addDoc(collection(firestore, 'cities'), {
      name: 'Agra',
      pincode: 282005,
      state: 'Uttar Pradesh',
      Country: 'INDIA',
    });
    console.log(docRef);
  };

  const createSubData = async () => {
    await addDoc(collection(firestore, 'cities/VEnRFA1I9wbEr5hSuQT9'), {
      place: 'Dayalbagh',
      description: 'Great Place',
      Date: Date.now(),
    });
  };

  const getDocument = async () => {
    const ref = doc(firestore, 'cities', 'VEnRFA1I9wbEr5hSuQT9');
    const snap = await getDoc(ref);

    console.log(snap.data());
  };

  const documentByQuery = async () => {
    const collectionRef = collection(firestore, 'cities');
    const q = query(collectionRef, where('pincode', '==', 282005));
    const snapshot = await getDocs(q);
    snapshot.forEach((data) => console.log(data.data()));
  };

  const updateDocument = async () => {
    const updateRef = doc(firestore, 'cities', 'VEnRFA1I9wbEr5hSuQT9');
    await updateDoc(updateRef, {
      name: 'New Delhi',
    });
  };

  return (
    <div>
      <h1>Firebase Firestore</h1>
      <button onClick={createData}>Store Data</button>
      <button onClick={createSubData}>Store-sub Data</button>
      <button onClick={getDocument}>Fetch Data</button>
      <button onClick={documentByQuery}>Fetch data on Query</button>
      <button onClick={updateDocument}>Update Doc</button>
    </div>
  );
}

export default App;

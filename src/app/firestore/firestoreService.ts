import firebase from '../config/firebase';

// This gives access to firestore db
const db = firebase.firestore();

// Shape the data received from firestore
export function dataFromSnapshot(snapshot: firebase.firestore.DocumentData) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  // Loop through the data to find firestore Timestamp
  for (const key in data) {
    // Make sure we are not dealing with prototype properties
    if (data.hasOwnProperty(key)) {
      if (data[key] instanceof firebase.firestore.Timestamp) {
        data[key] = data[key].toDate();
      }
    }
  }

  return {
    ...data,
    id: snapshot.id,
  };
}

export function getFirestoreCollection(collectionName: string) {
  return db.collection(collectionName).get();
}

export function getDocFromFirestore(collectionName: string, docId: string) {
  return db.collection(collectionName).doc(docId).get();
}

// This function overwrites the whole document
export function updateDocInFirestore(collectionName: string, doc: any) {
  return db.collection(collectionName).doc(doc.id).set(doc);
}

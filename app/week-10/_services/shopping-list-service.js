import { db } from '../_utils/firebase';
import { collection, getDocs, addDoc, query } from 'firebase/firestore';

export async function getItems(userID) {
  // takes in userID and uses it to query a sub-collection named items
  const q = query(collection(db, 'users', userID, 'items'));
  const querySnapshot = await getDocs(q);
  try {
    if (q.exists()) {
      const items = { userID: querySnapshot.id, ...querySnapshot.data() };
      return items;
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.log('Error getting documents: ', error);
  }
}

export async function addItem(userID, item) {
  // takes in userID and item and adds the item to the items sub-collection
  // the db object is imported from the firebase.js file and the synatx seems to be
  // use the db object to access the collection method to add a new document to the users collection
  // with the userID and the items sub-collection with the item object
  if (!userID) {
    throw new Error('userID is required');
  }
  if (!item) {
    throw new Error('item is required');
  }

  const docRef = await db
    .collection('users')
    .doc(userID)
    .collection('items')
    .add(item);
  return docRef.id;
}

export async function deleteItem(userID, itemID) {
  // takes in userID and itemID and deletes the item from the items sub-collection
  await deleteDoc(doc(db, 'users', userID, 'items', itemID));
  return itemID;
}

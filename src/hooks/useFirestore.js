import { useState, useEffect, useReducer } from 'react';

import { projectFirestore, timestamp } from '../firebase/config';

const initialState = {
  success: null,
  error: null,
  isPending: false,
  document: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return {
        // ...state,
        success: false,
        error: null,
        isPending: true,
        document: null,
      };
    case 'ADDED_DOCUMENT':
      return {
        // ...state,
        success: true,
        error: null,
        isPending: false,
        document: action.payload,
      };
    case 'ERROR':
      return {
        // ...state,
        success: false,
        error: action.payload,
        isPending: false,
        document: null,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // collection reference
  const ref = projectFirestore.collection(collection);

  // only dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  // add a document
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const createdAt = timestamp.fromDate(new Date()); // date object compatible with firestore
      const addedDocument = await ref.add({ ...doc, createdAt });

      dispatchIfNotCancelled({
        type: 'ADDED_DOCUMENT',
        payload: addedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  };

  // delete a document
  const deleteDocument = async (id) => {};

  // hook cleanup function
  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { addDocument, deleteDocument, response };
};

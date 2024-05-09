import { onSnapshot, query, orderBy, startAfter, limit, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { tattooGalleryCollection } from "../firebase/firebase";

function useTattooGallery() {
  const [tattooGallery, setTattooGallery] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  

  const loadMore = async () => {
    let newQuery = query(tattooGalleryCollection, orderBy("id"), limit(9));
    if (lastDoc) {
      newQuery = query(tattooGalleryCollection, orderBy("id"), startAfter(lastDoc), limit(9));
    }
  
    const snapshot = await getDocs(newQuery);
    if (!snapshot.empty) {
      const newDocs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      setTattooGallery((prev) => [...prev, ...newDocs]);
    }
  };
  
  useEffect(() => {
    loadMore();
  }, []);

  return { tattooGallery, loadMore };
}

export default useTattooGallery;

import { query, orderBy, startAfter, limit, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { piercingGalleryCollection } from "../firebase/firebase";

function usePiercingGallery() {
  const [piercingGallery, setPiercingGallery] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);

  const loadMore = async () => {
    let newQuery = query(piercingGalleryCollection, orderBy("id"), limit(9));
    if (lastDoc) {
      newQuery = query(piercingGalleryCollection, orderBy("id"), startAfter(lastDoc), limit(9));
    }
  
    const snapshot = await getDocs(newQuery);
    if (!snapshot.empty) {
      const newDocs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      setPiercingGallery((prev) => [...prev, ...newDocs]);
    }
  };
  
  useEffect(() => {
    loadMore();
  }, []);

  return { piercingGallery, loadMore };
}

export default usePiercingGallery;

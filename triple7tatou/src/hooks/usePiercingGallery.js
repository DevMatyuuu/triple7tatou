import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { piercingGalleryCollection } from "../firebase/firebase";

function useServices() {
  const [piercingGallery, setPiercingGallery] = useState([]);

  useEffect(
    () => {
    const unsubscribe = onSnapshot(piercingGalleryCollection, (snapshot) => {
     setPiercingGallery( 
      snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
     );
  });
  return () => unsubscribe();
},
  []
);

  return { piercingGallery };
}
export default useServices
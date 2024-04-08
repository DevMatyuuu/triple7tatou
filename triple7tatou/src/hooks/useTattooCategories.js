import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { tattooCategoriesCollection } from "../firebase/firebase";

function useTattooCategories() {
  const [tattooCategories, setTattooCategories] = useState([]);

  useEffect(
    () => {
    const unsubscribe = onSnapshot(tattooCategoriesCollection, (snapshot) => {
     setTattooCategories( 
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

  return { tattooCategories };
}
export default useTattooCategories
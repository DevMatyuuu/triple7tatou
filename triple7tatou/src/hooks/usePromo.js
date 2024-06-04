import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { promoCollection } from "../firebase/firebase";

function usePromo() {
  const [promos, setPromos] = useState([]);

  useEffect(
    () => {
    const unsubscribe = onSnapshot(promoCollection, (snapshot) => {
     setPromos( 
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

  return { promos };
}
export default usePromo
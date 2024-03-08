import db from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

async function foo() {
  // Get a list of cities from your database
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  console.log(cityList);
  return cityList;
}

async function bar(city: string) {
  // store a list of cities in your database
  const citiesRef = collection(db, "cities");
  try {
    const newCity = await addDoc(citiesRef, { name: city });
    console.log("city", newCity);
    return newCity;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export { foo, bar };

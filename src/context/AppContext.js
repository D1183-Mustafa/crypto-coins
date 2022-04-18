import { createContext, useEffect, useState } from "react";
import { kullaniciyakala } from "../auth/firebase";




const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currentUser, setCurrentUSer] = useState("");
  const [sepet, setSepet] = useState([]);

  useEffect(() => {
    kullaniciyakala(setCurrentUSer);
  }, []);
  const filtered = coins.filter((item) =>
    item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const addCoin = (coinId) => {
    // if (e.target.tagName === "path") {
    //   console.log([e.target.parentElement.parentElement.parentElement.parentElement.innerText].includes("Bitcoin"))
    // }
    const newCoin = filtered.filter((item) => item.id === coinId);
    // const coinControl = sepet.filter((item) => item.id !== coinId)
    setSepet([...sepet, newCoin[0]]);
    // setSepet(coinControl)
  };
  const newSepet = [...new Set(sepet)]

  const deleteCoin = (deleteId) => {
    const deleteCoins = newSepet.filter((e) => e.id !== deleteId);
    setSepet(deleteCoins);
  };


  console.log(newSepet)

  console.log(sepet);


  return (
    <AppContext.Provider
      value={{
        setCoins,
        coins,
        setSearch,
        filtered,
        currentUser,
        addCoin,
        sepet,
        deleteCoin,
        newSepet
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

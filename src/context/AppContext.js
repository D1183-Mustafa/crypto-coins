import { createContext, useEffect, useState } from "react";
import { kullaniciyakala } from "../auth/firebase";


const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [coins, setCoins] = useState([]);
    const [search,setSearch] = useState("");
    const [currentUser , setCurrentUSer] = useState("")
    useEffect(() => {
        kullaniciyakala(setCurrentUSer)
    },[]);
    const filtered = coins.filter((item) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    console.log(filtered)
    return(
        <AppContext.Provider value={{setCoins,coins,setSearch,filtered,currentUser}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;
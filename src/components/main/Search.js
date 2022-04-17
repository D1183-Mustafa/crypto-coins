
import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import TextField from '@mui/material/TextField';


function Searchh() {
  const {setSearch,search} = useContext(AppContext);
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div style={{backgroundColor:"green"}}>
       <TextField id="standard-basic" label="Search..." variant="standard" type="search" onChange={handleChange} value={search}/>
    </div>
  );
}

export default Searchh;

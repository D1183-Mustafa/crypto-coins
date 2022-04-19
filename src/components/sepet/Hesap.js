import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import NativeSelect from "@mui/material/NativeSelect";
import Button from "@mui/material/Button";
import "./Hesap.css";
import AppContext from "../../context/AppContext";

function Hesap() {
  const {newSepet} = useContext(AppContext);
  return (
    <div>
      <div className="hesap">
        <TextField
          id="standard-basic"
          label="..Miktar..(TRY)"
          variant="standard"
          type="number"
        />
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          {
            newSepet.map((item,index) => {
              return(
                <option value={item.id} key={index}>{item.name}</option>
              )
            })
          }
        </NativeSelect>
        <Button variant="contained" color="success">
          Satıl Al
        </Button>
      </div>
    </div>
  );
}

export default Hesap;

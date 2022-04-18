import React from "react";
import TextField from "@mui/material/TextField";
import NativeSelect from "@mui/material/NativeSelect";
import Button from "@mui/material/Button";
import "./Hesap.css";
function Hesap() {
  return (
    <div>
      <div className="hesap">
        <TextField
          id="standard-basic"
          label="Search..."
          variant="standard"
          type="search"
        />
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <Button variant="contained" color="success">
          Satıl Al
        </Button>
      </div>
    </div>
  );
}

export default Hesap;

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function OpenAlert() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    handleClickOpen();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Lütfen Giriş yapınız :)"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              İşlem yapmadan önce giriş yapmanız gerekmektedir...!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => navigate("/login")}>Login</Button>
          <Button onClick={() => navigate("/register")}>Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

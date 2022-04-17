import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { cikis } from "../../auth/firebase";


export default function ButtonAppBar() {
  const { currentUser } = useContext(AppContext);
  console.log("Navbar", currentUser.displayName);
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 3 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            alt="Remy Sharp"
            src={Logo}
            sx={{ width: 56, height: 56 }}
            onClick={() => navigate("/")}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            250 Coins
          </Typography>
          {currentUser ? (
            <h2 className="mb-0 text-capitalize">{currentUser?.displayName}</h2>
          ) : (
            <Button color="inherit" onClick={() => navigate("/crypto-coins/login")}>
              Login
            </Button>
          )}

          {currentUser ? (
            <Button color="inherit" onClick={() => cikis()}>
            Log Out
          </Button>
          ) : (
            <Button color="inherit" onClick={() => navigate("/crypto-coins/register")}>
              Register
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

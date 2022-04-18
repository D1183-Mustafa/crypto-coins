import {useContext } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import AppContext from "../../context/AppContext";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Hesap from "./Hesap"


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Sepet() {
    const {newSepet,addCoin,deleteCoin} = useContext(AppContext)

  return (
    <div>
      <Hesap/>
      <TableContainer component={Paper} style={{ paddingBottom: "1rem" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell align="left">İcon</StyledTableCell>
              <StyledTableCell align="right">Coins</StyledTableCell>
              <StyledTableCell align="right">Fiyat</StyledTableCell>
              <StyledTableCell align="right">1s</StyledTableCell>
              <StyledTableCell align="right">24s</StyledTableCell>
              <StyledTableCell align="right">7g</StyledTableCell>
              <StyledTableCell align="right">24 Saatlik Hacim</StyledTableCell>
              <StyledTableCell align="right">Piyasa Değişimi</StyledTableCell>
              <StyledTableCell align="right">Ekle</StyledTableCell>
              <StyledTableCell align="right">Sil</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newSepet.map((coin, index) => {
              return (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Avatar
                      alt="Remy Sharp"
                      src={coin?.image}
                      sx={{ width: 70, height: 70 }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">{coin?.name}</StyledTableCell>
                  <StyledTableCell align="right">
                    ₺ {coin?.current_price}
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    style={{
                      color: `${
                        coin?.price_change_percentage_1h_in_currency >= 0
                          ? "green"
                          : "red"
                      }`,
                      fontWeight: `900`,
                    }}
                  >
                    {String(coin?.price_change_percentage_1h_in_currency).slice(
                      0,
                      5
                    )}
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    style={{
                      color: `${
                        coin?.price_change_percentage_24h >= 0 ? "green" : "red"
                      }`,
                      fontWeight: `900`,
                    }}
                  >
                    {coin?.price_change_percentage_24h}
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    style={{
                      color: `${
                        coin?.price_change_percentage_7d_in_currency >= 0
                          ? "green"
                          : "red"
                      }`,
                      fontWeight: `900`,
                    }}
                  >
                    {String(coin?.price_change_percentage_7d_in_currency).slice(
                      0,
                      5
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    ₺ {coin?.market_cap_change_24h}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    ₺ {coin?.market_cap}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                      <div className="iconadd">
                        <AddIcon onClick={() => {addCoin(coin.id)}}/>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <DeleteIcon className="icondelete" onClick={() => deleteCoin(coin.id)}/>
                    </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Sepet;

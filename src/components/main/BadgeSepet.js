
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppContext from '../../context/AppContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function BadgeSepet() {
    const {newSepet} = useContext(AppContext);
    const mik = newSepet.length
    const navigate = useNavigate()

  return (
    <IconButton aria-label="cart" onClick={() => navigate("/crypto-coins/sepet")}>
      <StyledBadge badgeContent={mik} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
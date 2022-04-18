import React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';
import AddIcon from "@mui/icons-material/Add";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();


  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('Eklendi', { variant });
  };

  return (
    <React.Fragment>

      <AddIcon onClick={handleClickVariant('success')}/>
    </React.Fragment>
  );
}

export default function SnackBarApp() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}
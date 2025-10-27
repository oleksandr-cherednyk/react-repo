import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My Material UI App
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Добро пожыловать в наше приложение!
        </Typography>

        <Button variant="contained" onClick={handleOpen}>
            Открыть диалоговое окно
        </Button>
      </Container>

      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title">Использовать Material UI</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Это окно показывает пример с использованием Material UI
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
          <Button onClick={handleOpen}>Согласен</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

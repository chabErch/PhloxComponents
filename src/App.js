import "./App.css";
import { Paper, Typography } from "@mui/material";
import ActiveTypography from "./Components/ActiveTypography";
import ChipList from "./Components/ChipList";

function App() {
  return (
    <div className="App">
      <Typography textAlign="center" variant="h3">
        ActiveTypography
      </Typography>
      <Typography>
        Компонент ActiveTypography - текст, который при двойном клике становится
        полем для ввода текста. После того как текст введен нужно нажать в любое
        место страницы вместо текстового поля будет отображаться введенный
        текст.
      </Typography>
      <Paper sx={{ padding: 4, textAlign: "center" }}>
        <ActiveTypography defaultText="This is default text" />
      </Paper>
      <Typography textAlign="center" variant="h3">
        ChipList
      </Typography>
      <Typography>
        Компонент ChipList - chip, в котором при клике появляется выпадающий список.
        После того как нужное значение выбрано нужно нажать в любое
        место страницы и вместо выпадающего списка будет отображаться введенный текст,
        соответствующий данному значению.
      </Typography>
      <Paper sx={{ padding: 4, textAlign: "center" }}>
        <ChipList />
      </Paper>
    </div>
  );
}

export default App;

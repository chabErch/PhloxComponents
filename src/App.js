import "./App.css";
import { Paper, Typography, Divider } from "@mui/material";
import ActiveTypography from "./ActiveTypography";

function App() {
  return (
    <div className="App">
    <Typography textAlign="center" variant="h3">ActiveTypography</Typography>
    <Typography>Компонент ActiveTypography - текст, который при двойном клике становится полем для ввода текста.
     После того как текст введен нужно нажать в любое место страницы вместо текстового поля будет отображаться введенный текст.</Typography>
    <Typography variant="h5">Пример</Typography>
      <Paper sx={{ padding: 3, textAlign: "center" }}>
        <ActiveTypography defaultText="This is default text" />
      </Paper>
    </div>
  );
}

export default App;

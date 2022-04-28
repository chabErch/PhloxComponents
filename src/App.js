import "./App.css";
import { Paper, Typography, Divider } from "@mui/material";
import ActiveTypography from "./Components/ActiveTypography";

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
      <Paper sx={{ padding: 4, textAlign: "center", height: "20px" }}>
        <ActiveTypography defaultText="This is default text" />
      </Paper>
    </div>
  );
}

export default App;

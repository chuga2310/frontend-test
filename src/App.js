import "./App.css";
import Header from "./layout/Header/Header";
import { ThemeProvider } from "@mui/material/styles";
import materialTheme from "./theme";
import Content from "./contents/Content";
import Footer from "./layout/Footer/Footer";

function App() {
	return (
		<ThemeProvider theme={materialTheme}>
			<Header />
			<Content />
			<Footer />
		</ThemeProvider>
	);
}

export default App;

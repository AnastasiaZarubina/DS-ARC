import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Placeholder, lightTheme, darkTheme } from "./lib";


function App() {
	const switcher = true;
	return (
		<ThemeProvider theme={switcher ? lightTheme : darkTheme}>
			<GlobalStyle />
			<main>
				<Placeholder text="Привет!" />
			</main>
		</ThemeProvider>
	);
}

export default App;

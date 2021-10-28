import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";
import FooterContext from "./FooterContext";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "./../context/LanguageContext";
import { AuthProvider } from "./../context/AuthContext";

const MyPageContext = () => {
	return (
		<div className="my-page">
			<LanguageProvider>
				<ThemeProvider>
					<AuthProvider>
						<HeaderContext />
						<MainContext />
						<FooterContext />
					</AuthProvider>
				</ThemeProvider>
			</LanguageProvider>
		</div>
	);
};

export default MyPageContext;

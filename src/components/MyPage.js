import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const initialTheme = "light";
const initialLanguage = "es";
const initialAuth = false;

const translations = {
	es: {
		headerTitle: "Mi aplicación SIN Context API",
		headerSubtitle: "Mi cabecera",
		headerLight: "Claro",
		headerDark: "Oscuro",
		buttonLogin: "Iniciar Sesión",
		buttonLogout: "Cerrar Sesión",
		mainWelcome: "Bienvenid@",
		mainHello: "Hola Usuari@",
		mainContent: "Mi contenido principal",
		footerTitle: "Mi pie de pagina",
	},
	en: {
		headerTitle: "My application without Context API",
		headerSubtitle: "My header",
		headerLight: "Light",
		headerDark: "Dark",
		buttonLogin: "Login",
		buttonLogout: "Logout",
		mainWelcome: "Welcome Guest",
		mainHello: "Hello User",
		mainContent: "My main Content",
		footerTitle: "My footer",
	},
};

const MyPage = () => {
	const [theme, setTheme] = useState(initialTheme);
	const [language, setLanguage] = useState(initialLanguage);
	const [texts, setTexts] = useState(translations[language]);
	const [auth, setAuth] = useState(initialAuth);

	const handleTheme = (e) => {
		setTheme(e.target.value);
	};

	const handleLanguage = (e) => {
		setLanguage(e.target.value);
	};

	const handleAuth = (e) => {
		setAuth(!auth);
	};

	useEffect(() => {
		setTexts(translations[language]);
	}, [language]);

	return (
		<div className="my-page">
			<Header
				theme={theme}
				handleLanguage={handleLanguage}
				handleTheme={handleTheme}
				texts={texts}
				auth={auth}
				handleAuth={handleAuth}
			/>
			<Main theme={theme} texts={texts} auth={auth} />
			<Footer theme={theme} texts={texts} />
		</div>
	);
};

export default MyPage;

import { createContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const initialLanguage = "es";

const translations = {
	es: {
		headerTitle: "Mi aplicación CON Context API",
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
		headerTitle: "My application with Context API",
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

const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(initialLanguage);
	const [texts, setTexts] = useState(translations[language]);

	const handleLanguage = (e) => {
		setLanguage(e.target.value);
	};

	useEffect(() => {
		setTexts(translations[language]);
	}, [language]);

	const data = { texts, handleLanguage };

	return (
		<LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
	);
};

export { LanguageProvider };
export default LanguageContext;

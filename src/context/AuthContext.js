import { createContext, useState } from "react";

const AuthContext = createContext();

const initialAuth = false;

const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(initialAuth);

	const handleAuth = (e) => {
		setAuth(!auth);
	};

	const data = { handleAuth, auth };

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;

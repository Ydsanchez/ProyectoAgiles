import {
  useState,
  createContext,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { UserSingIn } from "../../interfaces/index";
import { GetVerifiedUser, SingIn } from "../../services/user";
import Swal from "sweetalert2";
import axios from "axios";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  signin: (user: UserSingIn) => Promise<void>;
  logout: () => void;
  user: UserSingIn | any;
  isAuthenticated: boolean;
  errors: string[];
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserSingIn | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const signin = async (user: UserSingIn) => {
    try {
      const res = await SingIn(user);
      const token = res.data.token;
      setIsAuthenticated(true);
      setUser(res.data);
      sessionStorage.setItem("session", token);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: ` ${errorMessage}`,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        console.log(errorMessage); // Mostrar el mensaje de error del backend
      } else {
        const unknownError = "Error desconocido";
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: ` ${unknownError}`,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        console.log(unknownError); // Mostrar un mensaje genérico de error
      }
    }
  };

  const logout = () => {
    try {
      setIsAuthenticated(false);
      setUser(null);
      sessionStorage.clear();
    } catch (error) {
      setErrors(["Hubo un problema al cerrar sesión"]);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const token = sessionStorage.getItem("session");
      //console.log(token);
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }

      try {
        //console.log(token);
        const res = await GetVerifiedUser();
        //console.log("prueba: "+res);
        //console.log(res.data);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        //console.log(error);
        sessionStorage.clear();
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signin,
        loading,
        logout,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

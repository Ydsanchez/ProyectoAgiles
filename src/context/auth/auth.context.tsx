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
      SingIn(user).then((res) => {
        const token = res.data.token;
        console.log(res);
        setIsAuthenticated(true);
        setUser(res.data);
        sessionStorage.setItem("session", token);
      });
    } catch (error) {
      Swal.fire({
        title: "ERROR¡",
        text: `${error} `,
        icon: `error`,
        confirmButtonText: "OK",
      });
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

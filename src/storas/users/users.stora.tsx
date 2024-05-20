import { create } from "zustand";
import { User, UserSingUp } from "../../interfaces/index";
import { GetUser, SingUp } from "../../services/user";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthStatus } from "../../interfaces/index";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  loginUser: (email: string, password: string) => Promise<void>;
  checkAuthStatus: () => Promise<void>;
  logoutUser: () => void;
}

interface UserState {
  user: User[];
  addUser: (data: UserSingUp) => Promise<any>;
  getUser: () => Promise<any>;
}

const useUserStorages = create<UserState>((set) => ({
  user: [],
  addUser: async (data: UserSingUp) => {
    try {
      const res = await SingUp(data);
      Swal.fire({
        title: "Registro Usuario",
        text: ` ${res.data.message}`,
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.log(error);
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
  },
  getUser: async () => {
    try {
      const res = await GetUser();
      const newUser = await res.data.data.map((data: any) => ({
        id: data.id,
        name: data.lastname + " " + data.firstname,
        email: data.email,
      }));
      set({ user: newUser });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Error: " + error,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  },
}));

export const useUserStore = useUserStorages;

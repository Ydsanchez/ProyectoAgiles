import { create } from "zustand";
import { User, UserSingUp } from "../../interfaces/index";
import { GetUser, SingUp } from "../../services/user";
import Swal from "sweetalert2";

interface UserState {
  user: User[];
  addUser: (data: UserSingUp) => Promise<any>;
  getUser: () => Promise<any>;
}

const useUserStorages = create<UserState>((set, get) => ({
  user: [],
  addUser: async (data: UserSingUp) => {
    const res = await SingUp(data);
    const newUser = await res.data.data.map((data: any) => ({
      id: data.id,
      lastname: data.lastname,
      firstname: data.firstname,
      email: data.email,
    }));
    set({ user: [...get().user, newUser] });
    Swal.fire({
      title: "Error!",
      text: ""+res,
      icon: "error",
      confirmButtonText: "OK",
    });
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

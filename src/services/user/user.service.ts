import { api } from "../../api/axios";
import { UserSingUp, UserSingIn, User } from "../../interfaces/index";

export const SingUp = (user: UserSingUp) => {
  return api.post("/users", user);
};

export const SingIn = (user: UserSingIn) => {
  return api.post("/login", user);
};

export const UpdateUser = (user: User, id: number) => {
  return api.put(`/users/${id}`, user);
};

export const GetUser = () => {
  return api.get("/users");
};

export const GetVerifiedUser = () => {
  return api.get(`/users/check-status`);
}

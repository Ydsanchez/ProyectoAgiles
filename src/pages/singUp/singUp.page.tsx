import {
  ButtonForm,
  InputField,
  LinkText,
  useForm,
} from "../../components/index";
import { useUserStore } from "../../storas/users/users.stora";
import { UserSingUp } from "../../interfaces/index";

export const SingUp = () => {
  const { addUser } = useUserStore();
  const { form, handleChange, resetForm } = useForm({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: UserSingUp = {
      firstname: form.firstname,
      lastname: form.lastname,
      email: form.email,
      password: form.password,
    };
    addUser(formData);
    resetForm();
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center pt-5">
        <div className="w-full lg:w-1/2 md:w-2/3">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="grid place-items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>
            </div>
            <h1 className="text-center text-xl text-blue-500 mb-4">
              Registro de Usuarios
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="columns-2">
                <InputField
                  text="firstname"
                  type="firstname"
                  placeholder="Nombre"
                  onChange={handleChange}
                  value={form.firstname}
                />
                <InputField
                  text="lastname"
                  type="lastname"
                  placeholder="Apellido"
                  onChange={handleChange}
                  value={form.lastname}
                />
              </div>
              <InputField
                text="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                value={form.email}
              />
              <InputField
                text="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={form.password}
              />
              <div className="text-center">
                <ButtonForm title="Registarse" />
              </div>
            </form>
            <LinkText
              text="¿Ya tienes una cuenta?"
              route="/login"
              linkText="Logueate Aqui"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

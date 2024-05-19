import { HeartIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export const Home = () => {
  const Data = [
    {
      id: 1,
      title: "Categoria 1",
      image:
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1702458113-800_800_F5C3D514CF31D1386743BC5AB8319D35mp.png?crop=1xw:1xh;center,top&resize=980:*",
    },
    {
      id: 2,
      title: "Categoria 2",
      image:
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1702458113-800_800_F5C3D514CF31D1386743BC5AB8319D35mp.png?crop=1xw:1xh;center,top&resize=980:*",
    },
    {
      id: 3,
      title: "Categoria 3",
      image:
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1702458113-800_800_F5C3D514CF31D1386743BC5AB8319D35mp.png?crop=1xw:1xh;center,top&resize=980:*",
    },
    {
      id: 4,
      title: "Categoria 4",
      image:
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1702458113-800_800_F5C3D514CF31D1386743BC5AB8319D35mp.png?crop=1xw:1xh;center,top&resize=980:*",
    },
  ];

  return (
    <main className="mx-auto flex max-w-[1500px] flex-col gap-y-10 p-5">
      {/* Header */}
      <section className="flex h-[500px] items-stretch bg-gradient-to-r from-white to-[#e7e7e7] px-10">
        <div className="flex w-1/2 flex-col items-start justify-center gap-y-10">
          <span className="rounded-full bg-yellow-500 px-3 py-1 text-xs font-medium uppercase">
            Semana de descuentos
          </span>
          <h1>Tienda Online de productos premium</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            qui. Dolore quaerat sint iusto dolor, eius quas, quibusdam labore
            sed autem eligendi vitae nesciunt? Laboriosam, praesentium. Suscipit
            perspiciatis commodi quod?
          </p>
          <Link to="./componentes/pantallas/productos">
            <button
              className="rounded-[4px] bg-black px-2 py-1 text-white"
              type="button"
            >
              Comprar ahora
            </button>
          </Link>
        </div>
        <div className="w-1/2" />
      </section>

      {/* Categorias */}
      <section className="flex flex-col gap-y-10">
        <h3>Categorias más populares</h3>
        <div className="flex gap-x-10">
          {Data.map(({ id, title, image }) => (
            <div
              key={id}
              className="relative flex flex-col items-center gap-y-2"
            >
              <button
                className="absolute right-2 top-2 grid  place-content-center rounded-full bg-white p-1 hover:shadow-md"
                type="button"
              >
                <HeartIcon className="h-5 w-5" />
              </button>
              <img
                alt={title}
                className="h-[200px] w-[200px] rounded-[4px] bg-gradient-to-b from-gray-300 to-white object-cover p-5"
                src={image}
              />
              <span className="font-semibold">{title}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

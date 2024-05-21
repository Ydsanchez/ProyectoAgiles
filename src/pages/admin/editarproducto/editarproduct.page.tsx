import React from "react";
import ImageUploading from "react-images-uploading";

export const EditarProducto = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <div className="container mx-auto mt-8">
      <div className="grid justify-center">
        <div className="sm:w-3/4">
          <h4 className="text-2xl font-bold mb-4">EDITAR PRODUCTO</h4>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label htmlFor="nombreProducto" className="block mb-1">
                Nombre Producto
              </label>
              <input
                type="text"
                id="nombreProducto"
                defaultValue="casaca vaxi veraniego"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="precio" className="block mb-1">
                Precio
              </label>
              <input
                type="number"
                id="precio"
                defaultValue={9.99}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="marca" className="block mb-1">
                Marca
              </label>
              <input
                type="text"
                id="marca"
                defaultValue="vaxi"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="stock" className="block mb-1">
                Stock
              </label>
              <input
                type="number"
                id="stock"
                defaultValue={15}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="descripcion" className="block mb-1">
                Descripción
              </label>
              <textarea
                id="descripcion"
                defaultValue="Abrigo vaxi talla M, de algodon puro, de color Negro con botones y cierre, ideal para el invierno, con bolsillos al exterior e interior suave al tacto con la piel"
                rows={4}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                      <button
                        style={isDragging ? { color: "red" } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        Click or Drop here
                      </button>
                      &nbsp;
                      <button onClick={onImageRemoveAll}>
                        Remove all images
                      </button>
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image["data_url"]} alt="" width="100" />
                          <div className="image-item__btn-wrapper">
                            <button onClick={() => onImageUpdate(index)}>
                              Update
                            </button>
                            <button onClick={() => onImageRemove(index)}>
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ImageUploading>
              </div>
              <div>
                <img
                  src="https://tottope.vteximg.com.br/arquivos/ids/167188-1000-1000/PILIGRAM-H-1810-V07_A.png?v=636723781789170000"
                  alt="Producto"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              ACTUALIZAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

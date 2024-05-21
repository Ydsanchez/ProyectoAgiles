import React from "react";
import ImageUploading from "react-images-uploading";

export const AgregarProducto = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center pt-5">
        <div className="w-full lg:w-1/2 md:w-2/3">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="grid place-items-center mb-4">
              <h4 className="text-2xl font-bold mb-4 text-center">
                AGREGAR PRODUCTO
              </h4>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre Producto"
                  className="block w-full border border-gray-300 rounded-md py-2 px-3"
                />
                <input
                  type="text"
                  placeholder="Precio"
                  className="block w-full border border-gray-300 rounded-md py-2 px-3"
                />
                <input
                  type="text"
                  placeholder="Marca"
                  className="block w-full border border-gray-300 rounded-md py-2 px-3"
                />
                <input
                  type="text"
                  placeholder="Stock"
                  className="block w-full border border-gray-300 rounded-md py-2 px-3"
                />
                <textarea
                  placeholder="Descripcion"
                  rows={4}
                  className="block w-full border border-gray-300 rounded-md py-2 px-3"
                ></textarea>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  AGREGAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

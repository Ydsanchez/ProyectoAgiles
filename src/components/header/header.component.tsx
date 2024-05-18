export const Header = () => {
  return (
    <header className="bg-white shadow-md w-full py-4 px-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://placehold.co/200x30"
          alt="Logo"
          className="w-16 h-16 mr-4"
        />
        <h1 className="text-2xl font-semibold">Product</h1>
      </div>
      <nav className="flex space-x-4">
        <a href="/" className="text-gray-600 font-medium hover:text-gray-900">
          Features
        </a>
        <a href="/" className="text-gray-600 font-medium hover:text-gray-900">
          Marketplace
        </a>
        <a href="/" className="text-gray-600 font-medium hover:text-gray-900">
          Company
        </a>
        <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">
          Log in
        </button>
      </nav>
    </header>
  );
};

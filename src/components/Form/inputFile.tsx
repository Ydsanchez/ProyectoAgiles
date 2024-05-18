interface InputFieldProps {
  text: string;
  placeholder?: string;
  type: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({ text, type, placeholder,onChange,value }: InputFieldProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {placeholder}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={text}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={text}
      />
    </div>
  );
};

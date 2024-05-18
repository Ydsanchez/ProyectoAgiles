import React, { useState } from 'react';

interface SelectFromProps {
  label: string;
  options: string[];
  onSelect: (selectedOption: string) => void;
}

export const SelectFrom = ({ label, options, onSelect }: SelectFromProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <select
        title={label}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        value={selectedOption}
        onChange={handleChange}
      >
        {options.map((text, index) => (
          <option key={index} value={text} className="text-gray-900">
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

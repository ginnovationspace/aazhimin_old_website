// components/Form/SelectField.tsx
import React from 'react';

interface SelectFieldProps {
  label: string;
  id: string;
  name: string;
  value: string ;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  required?: boolean;
  error?: string;
  css?:string;
  placeholder?:string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  options,
  required = false,
  error,
  css,
  placeholder,
}) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
    
        className={`${css} mt-1  px-4 block w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50`}
        required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className='text-gray-700'>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default SelectField;

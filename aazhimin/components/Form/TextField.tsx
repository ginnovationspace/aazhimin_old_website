// components/Form/TextField.tsx
import React from 'react';

interface TextFieldProps {
  label: string;
  id: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  error?: string;
  css?:string;
  placeholder?:string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
  error,
  css,
  placeholder,
}) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="block text-md font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        accept='.pdf'
        className={` ${css} mt-1 block w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50`}
        required={required}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default TextField;

// components/Form/TextareaField.tsx
import React from 'react';

interface TextareaFieldProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: string;
  css?:string;
  placeholder?:string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  id,
  name,
  value,
  onChange,
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
      <textarea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${css} mt-1 px-4 block w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50`}
        required={required}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default TextareaField;

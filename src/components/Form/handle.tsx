import React, { useState } from 'react';

interface FormState {
  [key: string]: string;
}

interface FormHandler {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  form: FormState;
  resetForm: () => void;
}

export const useForm = (initialState: FormState): FormHandler => {
  const [form, setForm] = useState<FormState>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setForm(initialState);
  };

  return { handleChange, form, resetForm };
};

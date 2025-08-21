import { useState } from "react";

export const useCitySearch = () => {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCity(input.trim());
  };

  return {
    input,
    city,
    setInput,
    handleSubmit,
  };
};

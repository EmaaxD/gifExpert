import { useState, useContext } from "react";

import { gifContext } from "../context/actions/GifsProvider";

export default function useGifs() {
  const [input, setInput] = useState("");

  const { firstLoading, loading, gifs, handleGetGifs } = useContext(gifContext);

  const handleChange = ({ target }) => setInput(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim().length <= 1) return;

    handleGetGifs(input);
    setInput("");
  };

  return {
    firstLoading,
    input,
    loading,
    gifs,
    handleChange,
    handleSubmit,
  };
}

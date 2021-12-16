import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useForm } from "react-hook-form";

const AddTransition = () => {
  const { handleSubmit, register } = useForm();
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);
  const formSubmitHandler = (e) => {
    e.preventDefault();

    const newTansitons = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTansitons);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            {...register("text", { required: true })}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            {...register("text", { required: true, valueAsNumber: true })}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransition;

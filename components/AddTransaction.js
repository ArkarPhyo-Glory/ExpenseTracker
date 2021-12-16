import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useForm } from "react-hook-form";
const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const { register, handleSubmit, resetField } = useForm({
    defaultValues: {
      text: "",
      amount: "",
    },
  });
  const formSubmitHandler = (data) => {
    resetField("text");
    resetField("amount");
    const newTansitons = {
      id: Math.floor(Math.random() * 100000000),
      text: data.text,
      amount: data.amount,
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
            placeholder="Enter amount..."
            {...register("amount", { required: true, valueAsNumber: true })}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;

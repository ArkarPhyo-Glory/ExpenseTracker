import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transiton from "./Transation";
const TransitonList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transiton transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
};

export default TransitonList;

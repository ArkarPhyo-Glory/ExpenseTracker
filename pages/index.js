import Head from "next/head";
import Image from "next/image";
import classes from "../styles/Home.module.css";
import { GlobalProvider } from "../context/GlobalState";

import Header from "../components/Header";
import Balance from "../components/Balance";
import IncomeExpenses from "../components/IncomeExpenses";
import TransitonList from "../components/TransitonList";
import AddTransaction from "../components/AddTransaction";
export default function Home() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <AddTransaction />
        <TransitonList />
      </div>
    </GlobalProvider>
  );
}

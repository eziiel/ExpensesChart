import { ContextProvider } from "../globalStates/context";
import { GlobalStyled } from "../style/globalStyled";
import { ExpenseChart } from "./pages/expenseChart";
import { Header } from "./pages/header";

function MainExpenses () {

  return (
    <>
    <GlobalStyled/>
      <ContextProvider>
        <Header />
        <ExpenseChart />
      </ContextProvider>
    </>
  )
}
export { MainExpenses }
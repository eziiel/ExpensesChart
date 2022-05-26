import { ContextProvider } from "../globalStates/context";
import { Data } from "../globalStates/setDataGlobal";
import { GlobalStyled } from "../style/globalStyled";
import { ExpenseChart } from "./pages/expenseChart";
import { Header } from "./pages/header";


function MainExpenses () {

  return (
    <>
    <GlobalStyled/>
      <ContextProvider>
        <Data />
        <Header />
        <ExpenseChart />
      </ContextProvider>
    </>
  )
}
export { MainExpenses }
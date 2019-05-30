import React from "react";
import ExpenseList from "./expenseList";
import ExpenseListFilters from "./expenseListFilters";

const ExpenseDashboardPage = props => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;

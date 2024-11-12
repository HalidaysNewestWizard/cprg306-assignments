export default function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expenses</h2>
      {expenses.map((expense) => (
        <div key={expense.id}>
          <h3>{expense.name}</h3>
          <p>{expense.description}</p>
          <p>{expense.amount}</p>
        </div>
      ))}
    </div>
  );
}

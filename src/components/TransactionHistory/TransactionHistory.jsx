import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.title}>
        <tr>
          <th className={css.type}>Type</th>
          <th className={css.amount}>Amount</th>
          <th className={css.currency}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {items.map((item) => {
          return (
            <tr className={css.item} key={item.id}>
              <td className={css.type}>{item.type}</td>
              <td className={css.amount}>{item.amount}</td>
              <td className={css.currency}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

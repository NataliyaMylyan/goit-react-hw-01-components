import React from 'react';
// import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
import { PropTypes } from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {/* ({(id, type, amount, currency)}) */}
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;

// const TransactionHistory = ({transactions}) => (
//   <table className={s.transactionHistory}>
//     <thead>
//       <tr>
//         <th>Type</th>
//         <th>Amount</th>
//         <th>Currency</th>
//       </tr>
//     </thead>
//     <tbody>
//       {transactions.map(transaction => (
//         <tr key={transaction.id}>
//           <td>{transaction.type}</td>
//           <td>{transaction.amount}</td>
//           <td>{transaction.currency}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );
// TransactionHistory.propTypes = {
//   transactions: PropTypes.array.isRequired,
// };
// export default TransactionHistory;

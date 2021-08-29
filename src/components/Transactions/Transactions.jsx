//
import PropTypes from "prop-types";
import { Table, StringTable } from "./Transactions.styled";

export const Transactions = ({ events }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {events.map(({ id, type, amount, currency }) => (
          <StringTable key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </StringTable>
        ))}
      </tbody>
    </Table>
  );
};

Transactions.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

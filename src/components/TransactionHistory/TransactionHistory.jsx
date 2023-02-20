import PropTypes from "prop-types";
import { THead, Table, Row, Column, ViewRow } from "./Transactions.styled";

export const TransactionHistory = ({transactions}) => {
    return (
        <Table>
            <THead>
                <Row> 
                    <Column>Type</Column>
                    <Column>Amount</Column>
                    <Column>Currency</Column>
                </Row>
            </THead>
            <tbody>{transactions.map(({ id, type, amount, currency }) => 
            <Row key={id}>
                <ViewRow>{type}</ViewRow>
                <ViewRow>{amount}</ViewRow>
                <ViewRow>{currency}</ViewRow>
            </Row>)}
  </tbody>
</Table>
    )  
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
     })).isRequired,
 }
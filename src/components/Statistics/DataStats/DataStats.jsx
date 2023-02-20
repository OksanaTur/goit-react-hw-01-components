import PropTypes from "prop-types";
import { List, Item, Label, Percentage } from "./DataStats.styled";

export const DataStats = ({items}) => {
    return (
            <List>
                {items.map(item => {
                    return (
                        <Item style={{ backgroundColor:  getRandomHexColor()}} key={item.id}>
                            <Label>{item.label}</Label>
                            <Percentage>{item.percentage}%</Percentage>
                        </Item>
                    )
                })}
           </List>
     
    )
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const colorScale = percentage => {
//     if (percentage <= 90 && percentage >= 31) {
//         return 'blue';
//     }
//     if (percentage <= 30 && percentage >= 21) {
//         return 'purple';
//     }
//     if (percentage <= 20 && percentage >= 11) {
//         return 'green';
//     }
//     if (percentage <= 10 && percentage >= 0) {
//         return 'grey';
//     }
// }
DataStats.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }
    )
)}

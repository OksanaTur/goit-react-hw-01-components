import { FriendListItem } from "./FriendListItem/FriendListItem";
import PropTypes from "prop-types";
import { FrItem, FrList } from "./FriendList.styled";

export const FriendList = ({friends}) => {
    return (
        <FrList>
            {friends.map(friend => {
                return <FrItem key={friend.id}>
                    <FriendListItem friend={friend} /></FrItem>
            })}
        </FrList>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired, 
}
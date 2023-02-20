import PropTypes from "prop-types";
import { Avatar, Name, Status } from "./FriendListItem.styled";


export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  
    return (
        <>
            <Status isOnline={isOnline===true}>{isOnline}</Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
            </>
   )
}

FriendListItem.propTypes = {
    friend:  PropTypes.shape({
            isOnline: PropTypes.oneOf('true', 'false').isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
}
import PropTypes from "prop-types";
import { List, ListLi, Label, Quantity } from "./Stats.styled";

export const Stats = ({stats: {followers, views, likes}}) => {
    return <List>
        <ListLi>
            <Label>Followers</Label>
            <Quantity>{followers}</Quantity>
        </ListLi>
        <ListLi>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
        </ListLi>
          <ListLi>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
        </ListLi>
    </List>
}

Stats.propTypes = {
    stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
})
}
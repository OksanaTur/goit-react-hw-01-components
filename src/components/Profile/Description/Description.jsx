import PropTypes from "prop-types";
import { Avatar, Section, Name, Tag, Location } from "./Description.styled";


export const Description = ({ username, tag, location, avatar}) => {
    return <Section>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
    </Section>
}

Description.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}
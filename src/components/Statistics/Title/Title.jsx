import PropTypes from "prop-types";
import { Title } from './Title.styled'

export const Head = ({ text }) => { return text && <Title>{text}</Title> }

Title.propTypes = {
	text: PropTypes.string.isRequired,
};
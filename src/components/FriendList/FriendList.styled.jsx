import styled from "styled-components";

export const FrList = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;

export const FrItem = styled.li`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  margin-top: 5vh;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
`;
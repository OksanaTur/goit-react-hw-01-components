import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  `;

export const Label = styled.span`
  padding-top: 24px;
  font-size: 14px;
  color: #fff;
  text-shadow: 1px 1px 2px black;
  `;

export const Percentage = styled.span`
  padding: 18px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 2px black;
  `;
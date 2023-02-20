import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListLi = styled.li`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  font-size: 24px;
  text-align: center;
  border-top: 1px solid #d3d5e3;
  background-color: rgba(241, 241, 241, 0.833);
  border-left: 1px solid #d3d5e3;
  border-right: 1px solid #d3d5e3;
`;

export const Label = styled.p`
  padding-bottom: 8px;
  color: #8a8b8e;
`;

export const Quantity = styled.span`
 font-weight: bold;
border-radius: 8px;
`;

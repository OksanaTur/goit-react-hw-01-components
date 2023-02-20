import styled from "styled-components";

export const Table = styled.table`
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  width:50%;
`;

export const THead = styled.thead`
   background-color: rgb(73, 156, 239);
   color: #fff;
   text-transform: uppercase;
`;

export const Row = styled.tr`
  background-color: #fff;

  &:nth-child(even){
   background-color: #f2f2f2;
  }
`;

export const Column = styled.th`
  width: 30%;
  padding: 4px 8px;
  background-color: #02bbd7;
  color: #fff;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
`;

export const ViewRow = styled.td`
  width: 33%;
  color: #8a8b8e;
  font-size: 14px;
  text-align: center;
  text-transform: capitalize;
`;
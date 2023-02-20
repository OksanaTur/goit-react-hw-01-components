import styled from "styled-components";

export const Layout = styled.div`
  max-width: 40%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  @:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;
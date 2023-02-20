import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px;
`;

export const Avatar = styled.img`
height:150px;
width:150px;
border-radius:50%;
vertical-align: middle;
border: 4px solid rgba(0,0,0,0.2);
`;

export const Name = styled.p`
 margin-bottom: 8px;
  font-weight: bold;
  font-size: 40px;
`;

export const Tag = styled.p`
  margin: 8px;
  font-size: 32px;
  color: #8a8b8e;
`;


export const Location = styled.p`
  margin: 8px;
  font-size: 32px;
  color: #8a8b8e;
`;
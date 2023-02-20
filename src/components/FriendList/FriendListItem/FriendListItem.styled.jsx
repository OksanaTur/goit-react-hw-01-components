import styled from "styled-components";

export const Status = styled.span`
 border-radius: 50%;
  margin: auto 1.7rem;
  height: 15px;
  width: 15px;
  background-color: ${props => {
        return props.isOnline ? 'green' : 'red';
    }};
  }
`;

export const Avatar = styled.img`
  margin: 0 auto;
`;

export const Name = styled.p`
 display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0;
  text-align: left;
  font-weight: bold;
  font-size: 18px;
`;
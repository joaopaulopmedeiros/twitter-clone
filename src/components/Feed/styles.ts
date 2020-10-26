import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const Tab = styled.div`
  margin-top: 8px;
  padding: 12px 0 16px;

  font-weight: bold;
  font-size: 16px;

  outline: 0;
  cursor: pointer;

  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;  
    padding-bottom: 44px; 

    @media(min-width: 576px) {
      padding-bottom: 0;
    }
`;
import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  margin-left: -10px;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 90%;
  row-gap: 20px;
  height: 200px;
  padding: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

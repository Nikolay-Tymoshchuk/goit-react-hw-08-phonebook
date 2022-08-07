import styled from '@emotion/styled';
import { IoMdContact } from 'react-icons/io';
import { CgCloseO } from 'react-icons/cg';

export const ContactItem = styled.li`
  padding: 4px;
  padding-right: 0;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  position: relative;
  display: grid;
  grid-template-columns: 24px 40% 37% 8%;
  column-gap: 5px;
  align-items: center;
  font-size: 14px;
  box-shadow: 3px 3px 6px 0px rgba(66, 66, 66, 0.9),
    -3px -3px 6px 0px rgba(252, 251, 251, 0.9);
`;

export const Icon = styled(IoMdContact)`
  width: 24px;
  height: auto;
  color: var(--color-accent);
`;

export const DeleteButton = styled(CgCloseO)`
  width: 25px;
  height: auto;
  color: var(--color-background-primary);
  cursor: pointer;
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

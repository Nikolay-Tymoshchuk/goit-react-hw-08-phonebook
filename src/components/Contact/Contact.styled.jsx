import styled from '@emotion/styled';
import { IoMdContact } from 'react-icons/io';

export const ContactItem = styled.li`
  padding: 4px;
  padding-right: 0;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  position: relative;
  display: grid;
  grid-template-columns: 24px 40% 25% 20%;
  column-gap: 5px;
  align-items: center;
  box-shadow: 3px 3px 6px 0px rgba(66, 66, 66, 0.9),
    -3px -3px 6px 0px rgba(252, 251, 251, 0.9);
`;

export const Icon = styled(IoMdContact)`
  width: 24px;
  height: auto;
  color: var(--color-accent);
`;

export const DeleteButton = styled.button`
  background: inherit;
  border: 0;
  box-sizing: border-box;
  color: transparent;
  cursor: pointer;
  font-size: 10px;
  letter-spacing: 0.1;
  line-height: 20px;
  outline: none;
  overflow: hidden;
  padding: 0 0;
  position: relative;
  text-transform: uppercase;
  transition: all 0.2s ease-in;
  width: 40px;
  z-index: 1;
  margin-left: auto;
  border-radius: 4px;

  &::before,
  &::after {
    background-color: #fff;
    content: '';
    display: block;
    height: 1px;
    left: 0%;
    position: absolute;
    transform-origin: center left;
    transition: all 0.2s ease-in;
    width: 40px;
    z-index: -1;
  }

  &::before {
    top: 0;
    transform: rotate(45deg);
  }

  &::after {
    bottom: 0;
    transform: rotate(-45deg);
  }

  &:hover {
    color: #000;
  }

  &:hover::before,
  &:hover::after {
    height: 20px;
    transform: rotate(0deg);
  }
`;

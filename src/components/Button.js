import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.2rem;
  font-weight: 600;
  background: transparent;
  border: 0.01rem solid transparent !important;
  border-color: var(--lightOrange);
  border-radius: 60px;
  color: #ffffff;
  padding: 0rem 0.7rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightOrange) !important;
    color: #ffffff;
  }
  &:focus {
    outline: none;
  }
`;

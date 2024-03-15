import {styled} from 'styled-components';

const Button = styled.button`

  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

  // Do not give whitespace because white space will represent the child element and finds for the child element.
  &:hover {
    background-color: #f0920e;
  }
`;

export default Button;
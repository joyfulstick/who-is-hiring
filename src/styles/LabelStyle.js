import styled from 'styled-components'

const InputStyle = styled.label`
  margin: 1rem;
  input[type='checkbox'] {
    cursor: pointer;
    appearance: none;
    outline: 0;
    background: ${p => p.theme.secondaryDark};
    height: 1rem;
    width: 1rem;
    border: 1px solid ${p => p.theme.overlayLite};
    border-radius: 3px;
    transition: background 0.6s ease-out, filter 0.6s ease-out;
    &:hover {
      filter: brightness(120%);
    }
    &:checked {
      background: ${p => p.theme.primary};
      &::after {
        display: block;
      }
    }
  }
`
export default InputStyle

import styled from 'styled-components'

const InputStyle = styled.label`
  margin: 1rem;

  span {
    padding: 0.6em;
  }

  select,
  input {
    cursor: pointer;
    border: 1px solid ${p => p.theme.overlayLite};
    border-radius: 3px;
    background: ${p => p.theme.secondaryDark};
    color: ${p => p.theme.overlayLite};
    outline: 0;
    transition: background 0.6s ease-out, filter 0.6s ease-out;
    &:hover {
      filter: brightness(120%);
    }
  }

  input[type='checkbox'] {
    appearance: none;
    height: 1rem;
    width: 1rem;
    &:checked {
      background: ${p => p.theme.primary};
      &::after {
        display: block;
      }
    }
  }

  input[type='range'] {
    appearance: none;
    height: 1rem;
  }

  .amount {
    display: inline-block;
    min-width: 3em;
  }
`
export default InputStyle

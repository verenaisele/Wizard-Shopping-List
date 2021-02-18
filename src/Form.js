import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Form({ onCreateShoppingItem }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.title;
    onCreateShoppingItem(input.value);
    //console.log(input.value);
    form.reset();
    input.focus();
  }

  return (
    <FormWrapper className="form" onSubmit={handleSubmit}>
      <h2>Add shopping item</h2>
      <input name="title" type="text" placeholder="What else do we need?" />
      <button>Add stuff to your ShoppingList</button>
    </FormWrapper>
  );
}

Form.propTypes = {
  onCreateShoppingItem: PropTypes.func,
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  input {
    padding: 0.3rem;
  }
  button {
    background: purple;
    border: none;
    border-radius: 4px;
    color: ivory;
    margin: 1rem 0;
    padding: 0.4rem 0.8rem;
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;

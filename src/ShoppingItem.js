import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function ShoppingItem({
  title,
  isDone,
  onToggleItem,
  onDeleteItem,
}) {
  return (
    <section>
      <input type="checkbox" checked={isDone} onChange={onToggleItem} />
      {title}

      <DeleteItem onClick={onDeleteItem}>&times;</DeleteItem>
    </section>
  );
}

ShoppingItem.propTypes = {
  isDone: PropTypes.bool,
};

const DeleteItem = styled.span`
  color: tomato;
  padding-left: 0.4rem;
  cursor: pointer;
`;

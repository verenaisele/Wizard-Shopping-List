import ShoppingItem from './ShoppingItem';
import Headline from './Headline';
import Form from './Form';
import { useState } from 'react';

function App() {
  const [shoppingItems, setShoppingItems] = useState([]);

  function addShoppingItem(title) {
    const newShoppingItem = { title: title, isDone: false };
    setShoppingItems([...shoppingItems, newShoppingItem]);
  }

  function toggleCheckbox(indexToToggle) {
    const itemToToggle = shoppingItems.find(
      (item, index) => index === indexToToggle
    );
    itemToToggle.isDone = !itemToToggle.isDone;

    const firstHalf = shoppingItems.slice(0, indexToToggle);
    const secondHalf = shoppingItems.slice(indexToToggle + 1);

    setShoppingItems([...firstHalf, itemToToggle, ...secondHalf]);
  }

  function deleteShoppingItem(indexToDelete) {
    const remainingItems = shoppingItems.filter(
      (item, index) => index !== indexToDelete
    );
    setShoppingItems(remainingItems);
  }

  return (
    <div className="App">
      <Headline name="Harry" />
      <Form onCreateShoppingItem={addShoppingItem} />

      {shoppingItems.map((shoppingItem, index) => (
        <ShoppingItem
          title={shoppingItem.title}
          isDone={shoppingItem.isDone}
          onToggleItem={() => toggleCheckbox(index)}
          onDeleteItem={() => deleteShoppingItem(index)}
        />
      ))}
    </div>
  );
}

export default App;

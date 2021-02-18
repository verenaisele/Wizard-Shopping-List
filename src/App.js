import ShoppingItem from './ShoppingItem';
import Headline from './Headline';
import Form from './Form';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import loadFromLocal from './lib/loadFromLocal';
import saveToLocal from './lib/saveToLocal';

function App() {
  const LOCAL_STORAGE_KEY = 'hogwartsShoppingList';
  const [shoppingItems, setShoppingItems] = useState(
    loadFromLocal(LOCAL_STORAGE_KEY) ?? []
  );

  useEffect(() => {
    saveToLocal(LOCAL_STORAGE_KEY, shoppingItems);
  }, [shoppingItems]);

  function addShoppingItem(title) {
    const newShoppingItem = { title: title, isDone: false, id: uuidv4() };
    setShoppingItems([...shoppingItems, newShoppingItem]);
  }

  function toggleCheckbox(idToToggle) {
    const itemToToggle = shoppingItems.map((item) => {
      if (item.id == idToToggle) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setShoppingItems(itemToToggle);
  }

  function deleteShoppingItem(idToDelete) {
    const remainingItems = shoppingItems.filter(
      (item) => item.id !== idToDelete
    );
    setShoppingItems(remainingItems);
  }
  /*   Funktion für Delete alle Werte mit Hilfe von Button DeleteAll
  function deleteAll() {
    setShoppingItems([]);
  } */

  return (
    <div className="App">
      <Headline name="Harry" />
      <Form onCreateShoppingItem={addShoppingItem} />

      {shoppingItems.map((
        shoppingItem //würde hier (shoppingItem, id) stehen, wäre der 2.Wert automatisch der index, auch wenn er 'id' heißt.
      ) => (
        <ShoppingItem
          key={shoppingItem.id}
          title={shoppingItem.title}
          isDone={shoppingItem.isDone}
          onToggleItem={() => toggleCheckbox(shoppingItem.id)}
          onDeleteItem={() => deleteShoppingItem(shoppingItem.id)}
        />
      ))}
    </div>
  );
}

export default App;

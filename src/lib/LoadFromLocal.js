export default function LoadFromLocal(key) {
  try {
    const storedItems = localStorage.getItem(key);
    return JSON.parse(storedItems);
  } catch (error) {
    console.error('LocalStorage ist kaputt');
  }
}

export default function groceriesList() {
  const names = ['Apples', 'Tomatoes', 'Pasta', 'Rice', 'Banana'];
  const quantities = [10, 10, 1, 1, 5];
  const entries = names.map((name, idx) => [name, quantities[idx]]);
  const groceries = new Map(entries);
  return groceries;
}

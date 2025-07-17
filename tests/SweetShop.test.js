const SweetShop = require("../src/SweetShop");
 
// Add Sweet Feature
test("should add a sweet to the shop", () => {
  const shop = new SweetShop();
  const sweet = {
    id: 1,
    name: "Kaju Katli",
    category: "Nut-Based",
    price: 50,
    quantity: 20,
  };
  shop.addSweet(sweet);
  const sweets = shop.getAllSweets();
  expect(sweets).toContainEqual(sweet);
});

//Delete Sweet Feature
test('delete a sweet by ID', () => {
  const shop = new SweetShop();
  const sweet = { id: 1, name: "Kaju Katli", category: "Nut-Based", price: 50, quantity: 10 };
  shop.addSweet(sweet);

  shop.deleteSweet(1); 

  expect(shop.getAllSweets()).toEqual([]); 
});


//View All sweets 

test("should return all sweets in the shop", () => {
  const shop = new SweetShop();

  shop.addSweet({ id: 1, name: "Ladoo", category: "Desi", price: 10, quantity: 50 });
  shop.addSweet({ id: 2, name: "Barfi", category: "Milk", price: 20, quantity: 30 });

  const allSweets = shop.getAllSweets();

  expect(allSweets).toEqual([
    { id: 1, name: "Ladoo", category: "Desi", price: 10, quantity: 50 },
    { id: 2, name: "Barfi", category: "Milk", price: 20, quantity: 30 },
  ]);
});

//Search By Name
test('should return sweets that match search criteria by name', () => {
  const shop = new SweetShop();
  shop.addSweet({ id: 1, name: "Ladoo", category: "Traditional", price: 20 });
  shop.addSweet({ id: 2, name: "Barfi", category: "Milk", price: 40 });

  const result = shop.searchByNameSweets({ name: "Barfi" });

  expect(result).toEqual([
    { id: 2, name: "Barfi", category: "Milk", price: 40 }
  ]);
});
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
test('should return sweets that match search by name', () => {
  const shop = new SweetShop();
  shop.addSweet({ id: 1, name: "Ladoo", category: "Traditional", price: 20 });
  shop.addSweet({ id: 2, name: "Barfi", category: "Milk", price: 40 });

  const result = shop.searchByName( "Barfi" );

  expect(result).toEqual([
    { id: 2, name: "Barfi", category: "Milk", price: 40 }
  ]);
});

//Search By Category

test("Search sweets by category", () => {
  const shop = new SweetShop();
  shop.addSweet({ id: 1, name: "Kaju Katli", category: "Nut-Based", price: 10 });
  shop.addSweet({ id: 2, name: "GajarHalwa", category: "Vegetable-Based", price: 15 });

  const result = shop.searchByCategory("Nut-Based");
  expect(result.length).toBe(1);
});

//Search By Price Range
 
test("Search sweets within price range", () => {
  const shop = new SweetShop();
  shop.addSweet({ id: 1, name: "Ladoo", category: "Nut-Based", price: 10 });

  shop.addSweet({ id: 3, name: "Halwa", category: "Vegetable-Based", price: 15 });

  const result = shop.searchByPriceRange(12, 26);
  expect(result.length).toBe(1); 
});
//purchase sweet 

test("Purchase sweet decreases quantity", () => {
  const shop = new SweetShop();
  shop.addSweet({ id: 1, name: "Ladoo", category: "Nut-Based", price: 10, quantity: 5 });

  shop.purchaseSweet(1, 2); // 1 shows id ,2 shows quantity

  const sweets = shop.getAllSweets();
  expect(sweets[0].quantity).toBe(3);
});

//shows error if not enough stock

test("Purchase fails if not enough stock", () => {
  const shop = new SweetShop();
  shop.addSweet({ id: 2, name: "Barfi", category: "Nut-Based", price: 20, quantity: 2 });

  expect(() => {
    shop.purchaseSweet(2, 5); // Trying to buy 5 but only 2 available
  }).toThrow("Not enough stock");
});

//Restock sweets 

test("Restock sweet increases quantity", () => {
  const shop = new SweetShop();
  shop.addSweet({ id: 1, name: "Ladoo", category: "Nut-Based", price: 10, quantity: 3 });

  shop.restockSweet(1, 5); // Add 5 more

  const sweets = shop.getAllSweets();
  expect(sweets[0].quantity).toBe(8); 
});
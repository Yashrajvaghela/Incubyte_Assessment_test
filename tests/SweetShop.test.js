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
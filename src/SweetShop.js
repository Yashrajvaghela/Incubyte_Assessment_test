class SweetShop {
  //constructor
  constructor() {
    this.sweets = [];
  }

  //add sweets

  addSweet(sweet) {
    const exists = this.sweets.some((item) => item.id == sweet.id);
    if (exists) {
      throw new Error("Sweet with this ID already exists");
    }
    this.sweets.push(sweet);
  }
  // get all sweets
getAllSweets() {
    return this.sweets;
  }
  //delete sweets

    deleteSweet(id) {
    const index = this.sweets.findIndex(s => s.id === id);
    if (index == -1) throw new Error("Sweet not found");
    this.sweets.splice(index, 1);
  }
   
  //search by name

  searchByName(name) {
  return this.sweets.filter(sweet =>  sweet.name &&sweet.name.toLowerCase() === name.toLowerCase());
}
//search by category

searchByCategory(category) {
  return this.sweets.filter(s => s.category.toLowerCase() === category.toLowerCase());
}

//search by pricerange
searchByPriceRange(min, max) {
  return this.sweets.filter(s => s.price >= min && s.price <= max);
}
//PurchaseSweet

purchaseSweet(id, qty) {
  const sweet = this.sweets.find(s => s.id === id);
  if (!sweet) {
    throw new Error("Sweet not found");
  }
  if (sweet.quantity < qty) {
    throw new Error("Not enough stock");
  }
  sweet.quantity -= qty;
}
}

module.exports = SweetShop;

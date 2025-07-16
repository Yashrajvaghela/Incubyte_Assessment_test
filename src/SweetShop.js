class SweetShop {
//constructor
  constructor() {
    this.sweets = [];
  }

  //add sweet
  addSweet(sweet) {

    const exists = this.sweets.some(item => item.id === sweet.id);
    if (exists) {
      throw new Error("Sweet with this ID already exists");
    }
    this.sweets.push(sweet);
  }
  // get all sweets
  getAllSweets() {
    return this.sweets;
  }
}

module.exports = SweetShop;

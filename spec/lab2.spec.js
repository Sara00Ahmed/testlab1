const  User = require("../lab/lab2");

describe("Test User class", () => {
    let user;
    beforeEach(() => {
        user = new User("ali", "123");
    });
    it("addToCart should add product to cart", () => {
         user.addToCart({ name: "Laptop", price: 1000 });
        expect(user.cart.length).toBe(1);
        expect(user.cart[0].name).toBe("Laptop");
        expect(user.cart[0].price).toBe(1000);
    });

    it("calculateTotalCartPrice should return total cart price", () => {
        user.addToCart({ name: "Laptop", price: 1000 });
        user.addToCart({ name: "Mouse", price: 50 });
        expect(user.calculateTotalCartPrice()).toBe(1050);
    });

    it("checkout should return true if payment is verified", () => {
     const paymentModel = {
        goToVerifyPage: jasmine.createSpy("goToVerifyPage"),
        returnBack: jasmine.createSpy("returnBack"),
        isVerify: jasmine.createSpy("isVerify").and.returnValue(false),
     };
      const result = user.checkout(paymentModel);
      expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
      expect(paymentModel.returnBack).toHaveBeenCalled();
      expect(paymentModel.isVerify).toHaveBeenCalled();
      expect(result).toBe(false);
    });

});

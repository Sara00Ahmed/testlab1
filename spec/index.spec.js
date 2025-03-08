// const { sum, removeDuplicate } = require("../index");

// // suite
// xdescribe("Test Sum Function", () => {
//   // spec,test case
//   it("test sum with numbers", () => {
//     //  expect(string).matcher()
//     expect(sum(2, 3)).toBe(5);
//   });
//   it("test sum with strings", () => {
//     expect(() => {
//       sum("ali", 4);
//     }).toThrowError();
//   });
// });

// xdescribe("Test StringReverse function", () => {
//   it("Test duplicates removal", () => {
//     expect(removeDuplicate([1, 1, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
//   });
//   it('chect return type is array',()=>{
//     expect(removeDuplicate([1, 1, 2, 3, 4, 4])).toEqual(jasmine.any(Array))
//   })
//   it('chect for spacific value',()=>{
//     expect(removeDuplicate([1, 1, 2, 3, 4, 4])).toContain(4)
//   })
//   it('chect array size',()=>{
//     expect(removeDuplicate([1, 1, 2, 3, 4, 4])).toHaveSize(4)
//   })
// });

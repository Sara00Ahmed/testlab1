const Employee = require("../Employee");

describe("Test calculateSalary", () => {
  let emp1;
  beforeEach(() => {
    emp1 = new Employee("ali", 30, 4);
  });

  it("Test  If 0 < yearsOfExp <= 5 then salary will be 5000", () => {
    emp1.calculateSalary();
    expect(emp1.salary).toBe(5000);
  });
  it("Test  If 5 < yearsOfExp then salary will be 9000", () => {
    emp1.yearsOfExp = 8;
    emp1.calculateSalary();
    expect(emp1.salary).toBe(9000);
  });
});


describe('Test setSkills',()=>{
    let emp1;
  beforeEach(() => {
    emp1 = new Employee("ali", 30, 4);
  });
  it('Test That setSkills works',()=>{
    emp1.setSkills('js','css')
    expect(emp1.skills).toEqual(['js','css'])
    expect(emp1.skills).toContain('js')


  })
})
describe('Test setAddress',()=>{
    let emp1;
  beforeEach(() => {
    emp1 = new Employee("ali", 30, 4);
  });
  it('Test That setAddress works',()=>{
    emp1.setAddress('egypt','Minia')
    expect(emp1.address).toEqual({country:'egypt',city:'Minia'})
    expect(emp1.address).toEqual(jasmine.objectContaining({city:'Minia'}))
   


  })
})


describe('Test getPromoted',()=>{
    let emp1;
  beforeEach(() => {
    emp1 = new Employee("ali", 30, 4);
  });
  it('Test If 0 < yearsOfExp <= 6 then salary will be increased by 20% and he will be senior',()=>{
    spyOn(emp1,'sendEmployeeMessage')
   emp1.calculateSalary()
   emp1.getPromoted()
   expect(emp1.salary).toBe(5000*1.2)
   expect(emp1.sendEmployeeMessage).toHaveBeenCalled()
   expect(emp1.sendEmployeeMessage).toHaveBeenCalledTimes(1)
   expect(emp1.sendEmployeeMessage).toHaveBeenCalledWith('you got promoted to be senior')


  })
  it('Test If 6 < yearsOfExp <= 7 then salary will be increased by 40% and he will be team lead',()=>{
    emp1.yearsOfExp=7
   emp1.calculateSalary()
   emp1.getPromoted()
   expect(emp1.salary).toBe(9000*1.4)


  })
})

describe('Test deptInfo',()=>{
    let emp1;
    beforeEach(() => {
      emp1 = new Employee("ali", 30, 4);
    });
    // mocking/facking
    it('Test return correctly',()=>{
        let obj=jasmine.createSpyObj(["getId","getLocation"])
        obj.getId.and.returnValue("123")
        obj.getLocation.and.returnValue("Minia")
        
        expect(emp1.deptInfo(obj)).toBe("123: Minia")
        expect(obj.getId).toHaveBeenCalled()

    })
})
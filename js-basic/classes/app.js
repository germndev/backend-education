'use strict';

const company = {
  name: "ООО Агро",
  employees: [
    { 
      name: ["Света", "Жопа"], 
      getName: function () {
        return this.name;
      }
    }
  ],
  ceo: {
    name: "Вася",
    getName: function () {
        return this.name;
    }
  },
  getName: function () {
    return this.name;
  }
};

console.log(company.employees.map(employee => employee.getName()));

import { observable, computed } from "mobx";

export const options = new (class Store {
  // Search
  search = "";
  results = [];
  selection = 0;

  // App Options
  orientation = 1;
  material = 1;
  size = 1;
  email = "";

  sizeTree = {
    1: { 1: '100"' },
    2: { 1: '200"' },
    3: { 1: '300"' }
  };

  sizeTreeName = {
    1: { 1: '100"' },
    2: { 1: '200"' },
    3: { 1: '300"' }
  };
  ageTree = {
    1: { 1: "1" },
    2: { 1: "2" },
    3: { 1: "3" }
  };

  constructor() {}

  get price() {
    const prices = {
      '100"': 100,
      '200"': 150,
      '300"': 200
    };
  }
})();

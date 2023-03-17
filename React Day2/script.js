class BPCustomIO {
  constructor(url = "") {
    this.url = url;
  }

  getData() {}
}

const mock = new newBPIO("https://www.google.com", {
  x: "c",
});
console.log(mock);

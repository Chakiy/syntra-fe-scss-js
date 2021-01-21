var randomColor = require("randomcolor");
var color = randomColor();

class Rectangle {
  constructor(w, h, x, y) {
    this._width = w;
    this._height = h;
    this._x = x;
    this._y = y;
    this._ref = this.generateInitialHTML();
    this.setStyling();
  }

  generateInitialHTML() {
    document.body.insertAdjacentHTML(
      "afterbegin",
      `
            <div class="rectangle"></div>
        `
    );
    return document.querySelector("div:first-child");
  }
  setStyling() {
    const styles = {
      left: this._x + "px",
      top: this._y + "px",
      width: this._width + "px",
      height: this._height + "px",
      backgroundColor: randomColor(),
    };
    Object.assign(this._ref.style, styles);
  }

  get width() {
    return this._width + "px";
  }
  set width(lenght) {
    this._width = lenght;
    this.setStyling;
  }
  get height() {
    return this._height + "px";
  }
  set height(lenght) {
    this._height = lenght;
    this.setStyling;
  }

  set position(coordinate) {
    const arr = coordinate.replace(" ", "").split(",");
    this._x = arr[0];
    this._y = arr[1];
    this.setStyling;
  }
  get oppervlaakte() {
    return "Oppervlakte is " + this._width * this._height + "px";
  }
  getPositionAtCenterX() {
    return this._x + this._width / 2;
  }
  getPositionAtCenterY() {
    return this._y + this._height / 2;
  }
  static getDistance(a, b) {
    let dis = Math.hypot(
      a.getPositionAtCenterX() - b.getPositionAtCenterX(),
      a.getPositionAtCenterY() - b.getPositionAtCenterY()
    );

    return dis;
  }
}

const rectangle1 = new Rectangle(200, 150, 300, 300);
const rectangle2 = new Rectangle(100, 80, 20, 20);
const rectangle3 = new Rectangle(1500, 100, 200, 200);
const rectangle = new Rectangle(300, 200, 50, 50);

document.querySelector("div").onclick = function () {
  rectangle.setStyling().styles.backgroundColor();
  rectangle1.setStyling().styles.backgroundColor();
  rectangle2.setStyling().styles.backgroundColor();
  rectangle3.setStyling().styles.backgroundColor();

  console.log(rectangle.width, rectangle.height, rectangle.x, rectangle.y);
  console.log(rectangle1.position);
};
console.log(getDistance(rectangle, rectangle1));

if (
  rectangle.x < rectangle1.x + rectangle1.width &&
  rectangle.x + rectangle.width > rectangle1.x &&
  rectangle.y < rectangle1.y + rectangle1.height &&
  rectangle.y + rectangle.height > rectangle1.y
) {
  console.log("is detected");
}

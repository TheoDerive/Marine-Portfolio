export class ProfilCompetances {
  public container: HTMLElement;
  public htmlElements: Element[];
  public friction: number;
  public gravity: number;

  constructor(htmlContainer: HTMLElement) {
    this.container = htmlContainer;
    this.htmlElements = [];
    this.gravity = 9;
    this.friction = this.gravity;
  }

  init() {}

  createHTMLElement(x: number, y: number, width: number, height: number) {
    const newHTMLElement = document.createElement("div");
    newHTMLElement.classList.add("competances-profile");
    newHTMLElement.style.width = `${width}px`;
    newHTMLElement.style.height = `${height}px`;
    newHTMLElement.style.top = `${y}px`;
    newHTMLElement.style.left = `${x}px`;

    const newElement = new Element(
      { x, y },
      width,
      height,
      1,
      newHTMLElement,
      this.container,
    );

    this.htmlElements.push(newElement);

    this.updateContainerHTML();
  }

  update() {
    this.updateHTMLElementsPositions();
    this.updateHTMLElements();
  }

  updateContainerHTML() {
    this.container.innerHTML = "";

    this.htmlElements.map((element) => {
      this.container.appendChild(element.htmlElement);
    });
  }

  updateHTMLElements() {
    this.htmlElements.map((element) => {
      element.updateHTMLPosition();
    });
  }

  updateHTMLElementsPositions() {
    this.htmlElements.map((element) => {
      element.updatePosition();
    });
  }
}

class Element {
  public htmlContainer: HTMLElement;
  public htmlElement: HTMLElement;
  public position: {
    x: number;
    y: number;
  };
  public width: number;
  public height: number;
  public mouseDistance: number;
  public gravity: number;
  public friction: number;

  constructor(
    position: { x: number; y: number },
    width: number,
    height: number,
    mouseDistance: number,
    htmlElement: HTMLElement,
    htmlContainer: HTMLElement,
  ) {
    this.htmlContainer = htmlContainer;
    this.htmlElement = htmlElement;
    this.position = position;
    this.width = width;
    this.height = height;
    this.mouseDistance = mouseDistance;
    this.gravity = 9.18;
    this.friction = this.gravity;
  }

  updateHTMLPosition() {
    this.htmlElement.style.top = `${this.position.y}px`;
    this.htmlElement.style.left = `${this.position.x}px`;
  }

  updatePosition() {
    if (this.position.y + this.height < this.htmlContainer.clientHeight) {
      this.position.y += this.gravity + this.friction;
      this.friction += this.gravity / 50;
    } else {
      this.friction = this.gravity;
    }
  }
}

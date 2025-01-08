export class Parallax {
  public element: HTMLElement;
  public ratio: number;
  public elementY: number;

  constructor(element: HTMLElement) {
    this.element = element;
    this.ratio = parseFloat(element.dataset.parallax!);
    this.onScroll = this.onScroll.bind(this);
    this.onIntersection = this.onIntersection.bind(this);
    this.elementY = offsetTop(this.element) + this.element.offsetHeight / 2;

    this.onScroll();
    document.addEventListener("scroll", this.onScroll);
  }

  onScroll() {
    console.log(this.element);
    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      const diffY = scrollY - this.elementY;
      const resultBigOne = diffY * -1 * this.ratio - window.innerHeight / 2;
      const resultLittles = diffY * this.ratio - window.innerHeight / 2;
      this.element.style.setProperty(
        "transform",
        `translate(-50%, ${this.element.classList.contains("projet-page-image-presentation") ? resultBigOne - 200 : this.element.classList.contains("split-element") ? resultLittles + 250 : resultLittles + 200}px)`,
      );
    });
  }

  onIntersection(entries: IntersectionObserverEntry[]) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        document.addEventListener("scroll", this.onScroll);
        this.elementY = offsetTop(this.element) + this.element.offsetHeight / 2;
      } else {
        document.removeEventListener("scroll", this.onScroll);
      }
    }
  }

  static bind(): Parallax[] {
    return Array.from(document.querySelectorAll("[data-parallax]")).map(
      (element) => {
        return new Parallax(element as HTMLElement);
      },
    );
  }
}

function offsetTop(element: HTMLElement, acc = 0): number {
  if (element.offsetParent) {
    return offsetTop(
      element.offsetParent as HTMLElement,
      acc + element.offsetTop,
    );
  }

  return acc + element.offsetTop;
}

import { ComponentFixture } from "@angular/core/testing";

export class HTMLElementFixture {
  constructor(private readonly element: HTMLElement) {}

  get textContent(): string | null {
    return this.element.textContent;
  }

  get classList(): DOMTokenList {
    return this.element.classList;
  }

  get nativeElement(): HTMLElement {
    return this.element;
  }

  hasTextContent(text: string): boolean {
    return this.element.textContent?.trim() === text;
  }

  hasClass(className: string): boolean {
    return this.element.classList.contains(className);
  }

  click(): void {
    this.element.click();
  }

  setInputValue(value: string): void {
    const input = this.element as HTMLInputElement;
    input.value = value;
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new Event('change'));
  }
}

export function getElementBySelector<T>(
  selector: string,
  componentFixture: ComponentFixture<T>
): HTMLElementFixture | null {
  const element = componentFixture.nativeElement.querySelector(selector);
  return element ? new HTMLElementFixture(element) : null;
}

export function getAllElementsBySelector<T>(
  selector: string,
  componentFixture: ComponentFixture<T>
): HTMLElementFixture[] {
  const elements: NodeListOf<HTMLElement> = componentFixture.nativeElement.querySelectorAll(selector);
  return Array.from(elements).map(el => new HTMLElementFixture(el));
}


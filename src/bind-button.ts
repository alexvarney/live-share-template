import { main } from "./interview";

export function handleClick(element: HTMLButtonElement) {
  element.addEventListener("click", () => main());
}

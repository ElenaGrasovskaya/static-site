/**
 * Get element from the page by selector.
 * By default it searches element in a
 * whole _document_.
 * If second parameter is provided, then
 * it will search inside _parent_ element.
 */
export const query = <E extends Element>(
  selector: string,
  parent: ParentNode = document,
): E => parent.querySelector(selector);

/**
 * Get all elements that match selector
 * from the parent element.
 */
export const queryAll = <E extends Element>(
  selector: string,
  parent: ParentNode = document,
): ReadonlyArray<E> => Array.from(parent.querySelectorAll(selector));

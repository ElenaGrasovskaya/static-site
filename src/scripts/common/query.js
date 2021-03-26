/**
 * Get element from the page by selector.
 * By default it searches element in a
 * whole _document_.
 * If second parameter is provided, then
 * it will search inside _parent_ element.
 *
 * @param {string} selector
 * @param {ParentNode} [parent]
 * @returns {Element | null} element from the page.
 */
export const query = (selector, parent = document) => parent.querySelector(selector);

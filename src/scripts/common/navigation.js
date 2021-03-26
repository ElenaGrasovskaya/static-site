/**
 * Navigates to _to_ page.
 *
 * @param {string} to
 */
export const navigate = (to) => document.location.assign(to);

/** Reloads current page. */
export const reload = () => document.location.reload();

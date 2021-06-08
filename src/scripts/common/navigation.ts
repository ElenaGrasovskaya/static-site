/** Navigates to _to_ page. */
export const navigate = (to: string): void => document.location.assign(to);

/** Reloads current page. */
export const reload = (): void => document.location.reload();

/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/docs"];

/**
 * An array of route that are used for authentication
 * These routes will redirect logged in users to homepage
 * @type {string[]}
 */
export const authRoutes = ["/sign-in"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The prefix for client API authentication routes
 * Routes that start with this prefix are used for client API authentication purposes
 * @type {string}
 */
export const apiClientPrefix = "/api/v1/public/transactions";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";

/**
 * An array of routes that are accessible to the public
 * These routes do not need authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication
 * This route will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/success",
  "/auth/error",
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";


/**
 * An dictionary of routes for navbar
 * @type {Array<{title: string, href: string, matcher: function(string): boolean}>}
 */
export const navbarRoutes = [
  {
    title: "Dashboard",
    href: "/dashboard",
    matcher: (path: string) => {
      return path === "/dashboard"
    }
  }
];

/**
 * An dictionary of routes for navbar
 * @type {Array<{title: string, href: string, matcher?: function(string): boolean}>}
 */
export const commandMenuRoutes = [
  ...navbarRoutes,
  {
    title: "Account Settings",
    href: "/settings"
  },
  {
    title: "Appearance Settings",
    href: "/settings/appearance"
  }
]
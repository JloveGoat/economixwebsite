/**
 * Resolves a public-folder image path against Vite's base URL.
 * Works for both dev (base = "/") and GitHub Pages (base = "/economixwebsite/").
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '')
const imgUrl = (path: string): string => `${base}${path.startsWith('/') ? path : `/${path}`}`
export default imgUrl

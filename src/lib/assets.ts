/**
 * Resolve a file in `public/` against Vite's configured base path.
 *
 * Root-absolute paths such as `/videos/part.mp4` fail when the built app is
 * served from a subdirectory. Vite's BASE_URL is `/` by default and becomes
 * `/subdir/` when the build is produced with a matching base.
 */
export function asset(path: string): string {
  if (/^(?:[a-z][a-z\d+.-]*:)?\/\//i.test(path) || path.startsWith('data:')) return path
  const base = import.meta.env.BASE_URL || '/'
  const prefix = base.endsWith('/') ? base : `${base}/`
  return `${prefix}${path.replace(/^\/+/, '')}`
}

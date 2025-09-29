export function getAssetPath(path: string): string {
  const basePath = import.meta.env.BASE_URL || '/'
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Combine base path with asset path
  return basePath + cleanPath
}
// Cambia true/false manualmente para activar o desactivar rutas del curso.
// Nota: /semana-2 redirige a /semana-1 porque ambas semanas se trabajan juntas.
export const courseRouteAccess = {
  '/bienvenida': true,
  '/semana-1': true,
  '/semana-2': true,
  '/semana-3': false,
  '/semana-4': false,
  '/semana-5': false,
  '/semana-6': false,
  '/semana-7': false,
  '/semana-8': false,
  '/semana-9': false,
  '/semana-10': false,
  '/certificado': false,
}

export const lockedRedirectPath = '/bienvenida'

export function isRouteUnlocked(path) {
  return courseRouteAccess[path] === true
}

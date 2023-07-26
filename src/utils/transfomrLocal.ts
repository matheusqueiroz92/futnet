export default function transformLocal(local: string | null, cidade: string | null) {
  if (local === null || cidade === null) return 'Local: indisponível';
  return `Local: ${local} - ${cidade}`
}
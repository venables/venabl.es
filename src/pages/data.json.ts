import { fetchSupply, formatNumber } from "../lib/usdc-supply"

export const prerender = false

export async function GET() {
  const rawSupply = await fetchSupply()
  const supply = rawSupply ? `$${formatNumber(rawSupply)}` : null
  return new Response(JSON.stringify({ supply }))
}

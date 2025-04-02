import { literal, number, object, parse } from "valibot"

const supplySchema = object({
  ok: literal(true),
  data: object({ supply: object({ native: number() }) })
})

export async function fetchSupply() {
  try {
    const response = await fetch("https://usdc.cool/api/supply/0")
    const supply = parse(supplySchema, await response.json())
    return supply.data.supply.native
  } catch (e) {
    console.error(e)
    return null
  }
}

export function formatNumber(num: number) {
  const billion = 1000000000
  const million = 1000000
  const thousand = 1000

  if (Math.abs(num) >= billion) {
    return `${(num / billion).toFixed(2).replace(/\.?0+$/, "")} billion`
  }

  if (Math.abs(num) >= million) {
    return `${(num / million).toFixed(2).replace(/\.?0+$/, "")} million`
  }

  if (Math.abs(num) >= thousand) {
    return `${(num / thousand).toFixed(2).replace(/\.?0+$/, "")} thousand`
  }

  return num.toString()
}

import { expect, test } from "bun:test"
import { fp } from "@tscircuit/footprinter"
import { FEATHER_FOOTPRINT, XIAO_FOOTPRINT } from "../index"

type PlatedHole = {
  x: number
  y: number
}

const getPlatedHoles = (footprint: string) =>
  fp
    .string(footprint)
    .circuitJson()
    .filter((element) => element.type === "pcb_plated_hole")

const getRows = (holes: PlatedHole[]) =>
  [...new Set(holes.map(({ y }) => y))].sort((a, b) => a - b)

test("Feather is a 12+16 female header footprint", () => {
  const footprint = fp.string(FEATHER_FOOTPRINT)
  const holes = getPlatedHoles(FEATHER_FOOTPRINT)
  const rows = getRows(holes)

  expect(footprint.params().female).toBe(true)
  expect(holes).toHaveLength(28)
  expect(rows).toHaveLength(2)
  expect(rows[1] - rows[0]).toBeCloseTo(20.32)
  expect(rows.map((y) => holes.filter((hole) => hole.y === y).length)).toEqual([
    16, 12,
  ])
})

test("XIAO is a 2x7 female header footprint", () => {
  const footprint = fp.string(XIAO_FOOTPRINT)
  const holes = getPlatedHoles(XIAO_FOOTPRINT)
  const rows = getRows(holes)

  expect(footprint.params().female).toBe(true)
  expect(holes).toHaveLength(14)
  expect(rows).toHaveLength(2)
  expect(rows[1] - rows[0]).toBeCloseTo(15.24)
  expect(rows.map((y) => holes.filter((hole) => hole.y === y).length)).toEqual([
    7, 7,
  ])
})

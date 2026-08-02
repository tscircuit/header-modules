import { expect, test } from "bun:test"
import "bun-match-svg"
import React from "react"
import { Circuit } from "tscircuit"
import { AdafruitItsyBitsyNRF52840Express } from "../lib/AdafruitItsyBitsyNRF52840Express"

test("Adafruit ItsyBitsy nRF52840 Express PCB and schematic snapshots", async () => {
  const circuit = new Circuit()
  circuit.add(
    React.createElement(AdafruitItsyBitsyNRF52840Express, { name: "U1" }),
  )
  await circuit.renderUntilSettled()
  const pcbSvg = await circuit.getSvg({ view: "pcb" })
  const schematicSvg = await circuit.getSvg({ view: "schematic" })
  expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
  expect(schematicSvg).toMatchSvgSnapshot(import.meta.path, "schematic")
})

import { expect, test } from "bun:test"
import "bun-match-svg"
import React from "react"
import { Circuit } from "tscircuit"
import { AdafruitQTPySAMD21 } from "../lib/AdafruitQTPySAMD21"

test("Adafruit QT Py SAMD21 PCB and schematic snapshots", async () => {
  const circuit = new Circuit()
  circuit.add(React.createElement(AdafruitQTPySAMD21, { name: "U1" }))
  await circuit.renderUntilSettled()
  const pcbSvg = await circuit.getSvg({ view: "pcb" })
  const schematicSvg = await circuit.getSvg({ view: "schematic" })
  expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
  expect(schematicSvg).toMatchSvgSnapshot(import.meta.path, "schematic")
})

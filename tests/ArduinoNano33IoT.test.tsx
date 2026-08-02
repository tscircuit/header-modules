import { expect, test } from "bun:test"
import "bun-match-svg"
import React from "react"
import { Circuit } from "tscircuit"
import { ArduinoNano33IoT } from "../lib/ArduinoNano33IoT"

test("Arduino Nano 33 IoT PCB and schematic snapshots", async () => {
  const circuit = new Circuit()
  circuit.add(React.createElement(ArduinoNano33IoT, { name: "U1" }))
  await circuit.renderUntilSettled()
  const pcbSvg = await circuit.getSvg({ view: "pcb" })
  const schematicSvg = await circuit.getSvg({ view: "schematic" })
  expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
  expect(schematicSvg).toMatchSvgSnapshot(import.meta.path, "schematic")
})

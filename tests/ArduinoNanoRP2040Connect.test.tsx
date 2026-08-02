import { expect, test } from "bun:test"
import "bun-match-svg"
import React from "react"
import { Circuit } from "tscircuit"
import { ArduinoNanoRP2040Connect } from "../lib/ArduinoNanoRP2040Connect"

test("Arduino Nano RP2040 Connect PCB and schematic snapshots", async () => {
  const circuit = new Circuit()
  circuit.add(React.createElement(ArduinoNanoRP2040Connect, { name: "U1" }))
  await circuit.renderUntilSettled()
  const pcbSvg = await circuit.getSvg({ view: "pcb" })
  const schematicSvg = await circuit.getSvg({ view: "schematic" })
  expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
  expect(schematicSvg).toMatchSvgSnapshot(import.meta.path, "schematic")
})

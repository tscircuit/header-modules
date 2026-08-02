import { expect, test } from "bun:test"
import "bun-match-svg"
import React from "react"
import { Circuit } from "tscircuit"
import { AdafruitQTPyESP32S3 } from "../lib/AdafruitQTPyESP32S3"

test("Adafruit QT Py ESP32-S3 PCB and schematic snapshots", async () => {
  const circuit = new Circuit()
  circuit.add(React.createElement(AdafruitQTPyESP32S3, { name: "U1" }))
  await circuit.renderUntilSettled()
  const pcbSvg = await circuit.getSvg({ view: "pcb" })
  const schematicSvg = await circuit.getSvg({ view: "schematic" })
  expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
  expect(schematicSvg).toMatchSvgSnapshot(import.meta.path, "schematic")
})

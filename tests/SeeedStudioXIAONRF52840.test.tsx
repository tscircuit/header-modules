import { expect, test } from "bun:test"
import "bun-match-svg"
import React from "react"
import { Circuit } from "tscircuit"
import { SeeedStudioXIAONRF52840 } from "../lib/SeeedStudioXIAONRF52840"

test("SeeedStudioXIAONRF52840 PCB and schematic snapshots", async () => {
  const circuit = new Circuit()
  circuit.add(React.createElement(SeeedStudioXIAONRF52840, { name: "U1" }))
  await circuit.renderUntilSettled()
  expect(
    circuit
      .getCircuitJson()
      .filter((element) => element.type === "source_failed_to_create_component_error"),
  ).toHaveLength(0)
  const pcbSvg = await circuit.getSvg({ view: "pcb" })
  const schematicSvg = await circuit.getSvg({ view: "schematic" })
  expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
  expect(schematicSvg).toMatchSvgSnapshot(import.meta.path, "schematic")
})


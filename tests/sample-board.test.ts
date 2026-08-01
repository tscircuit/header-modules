import { expect, test } from "bun:test"
import React from "react"
import { Circuit } from "tscircuit"
import XiaoRp2040A4988StepperController from "../sample-boards/xiao-rp2040-a4988-stepper-controller.circuit"

test("sample board explicitly declares its logic power nets", async () => {
  const circuit = new Circuit()
  circuit.add(React.createElement(XiaoRp2040A4988StepperController))

  await circuit.renderUntilSettled()

  const sourceNetsByName = new Map(
    circuit.db.source_net.list().map((sourceNet) => [sourceNet.name, sourceNet]),
  )
  expect(sourceNetsByName.get("USB_5V")).toMatchObject({
    is_power: true,
    is_positive_voltage_source: true,
  })
  expect(sourceNetsByName.get("LOGIC_3V3")).toMatchObject({
    is_power: true,
    is_positive_voltage_source: true,
  })
})

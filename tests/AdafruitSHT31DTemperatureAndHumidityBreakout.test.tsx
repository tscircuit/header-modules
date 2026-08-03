import { expect, test } from "bun:test";
import "bun-match-svg";
import React from "react";
import { Circuit } from "tscircuit";
import { AdafruitSHT31DTemperatureAndHumidityBreakout } from "../lib/AdafruitSHT31DTemperatureAndHumidityBreakout";

test("AdafruitSHT31DTemperatureAndHumidityBreakout PCB and schematic snapshots", async () => {
  const circuit = new Circuit();
  circuit.add(
    React.createElement(AdafruitSHT31DTemperatureAndHumidityBreakout, {
      name: "U1",
    }),
  );
  await circuit.renderUntilSettled();
  expect(
    circuit
      .getCircuitJson()
      .filter(
        (element) => element.type === "source_failed_to_create_component_error",
      ),
  ).toHaveLength(0);
  const pcbSvg = await circuit.getSvg({ view: "pcb" });
  const schematicSvg = await circuit.getSvg({ view: "schematic" });
  expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb");
  expect(schematicSvg).toMatchSvgSnapshot(import.meta.path, "schematic");
});

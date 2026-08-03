import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun ML8511 UV Sensor Breakout. Header order: V3_3, GND, OUT. */
export const SparkFunML8511UVSensorBreakout_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(ML8511)" as const;

export const SparkFunML8511UVSensorBreakout_PIN_LABELS = {
  pin1: ["V3_3", "3V3", "VCC"],
  pin2: ["GND"],
  pin3: ["OUT", "AO", "ANALOG_OUT"],
} as const;

const ANALOG = {
  isGpio: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const POWER_INPUT_3V3 = {
  requiresPower: true,
  requiresVoltage: "3.3V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const SparkFunML8511UVSensorBreakout_PIN_ATTRIBUTES = {
  V3_3: POWER_INPUT_3V3,
  GND: GROUND,
  OUT: ANALOG,
} as const satisfies Record<string, PinAttributeMap>;

type FixedProps =
  | "datasheetUrl"
  | "displayName"
  | "footprint"
  | "manufacturerPartNumber"
  | "mfn"
  | "pinAttributes"
  | "pinLabels"
  | "pcbPinLabels"
  | "schHeight"
  | "schPinArrangement"
  | "schWidth";

export type SparkFunML8511UVSensorBreakoutProps = Omit<
  ChipProps<typeof SparkFunML8511UVSensorBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunML8511UVSensorBreakout = (
  props: SparkFunML8511UVSensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun ML8511 UV Sensor Breakout"
    mfn="SparkFun"
    datasheetUrl="https://learn.sparkfun.com/tutorials/ml8511-uv-sensor-hookup-guide/all"
    footprint={SparkFunML8511UVSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunML8511UVSensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "V3_3",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={SparkFunML8511UVSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.4}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["V3_3", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["OUT"],
      },
    }}
  />
);

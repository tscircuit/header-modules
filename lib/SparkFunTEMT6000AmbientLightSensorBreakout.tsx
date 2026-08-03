import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun TEMT6000 Ambient Light Sensor Breakout. Header order: VCC, GND, OUT. */
export const SparkFunTEMT6000AmbientLightSensorBreakout_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(TEMT6000)" as const;

export const SparkFunTEMT6000AmbientLightSensorBreakout_PIN_LABELS = {
  pin1: ["VCC", "VIN", "VDD"],
  pin2: ["GND"],
  pin3: ["OUT", "AO", "ANALOG_OUT"],
} as const;

const ANALOG = {
  isGpio: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const POWER_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const SparkFunTEMT6000AmbientLightSensorBreakout_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
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

export type SparkFunTEMT6000AmbientLightSensorBreakoutProps = Omit<
  ChipProps<typeof SparkFunTEMT6000AmbientLightSensorBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunTEMT6000AmbientLightSensorBreakout = (
  props: SparkFunTEMT6000AmbientLightSensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun TEMT6000 Ambient Light Sensor Breakout"
    mfn="SparkFun"
    datasheetUrl="https://learn.sparkfun.com/tutorials/temt6000-ambient-light-sensor-hookup-guide/all"
    footprint={SparkFunTEMT6000AmbientLightSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunTEMT6000AmbientLightSensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={SparkFunTEMT6000AmbientLightSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.4}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["OUT"],
      },
    }}
  />
);

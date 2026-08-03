import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit SCD30 NDIR CO2 Breakout. Header order: VIN, V3_3, GND, SCL, SDA, RDY. */
export const AdafruitSCD30NDIRCO2Breakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SCD30)" as const;

export const AdafruitSCD30NDIRCO2Breakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["V3_3", "3V3", "3.3V", "3Vo"],
  pin3: ["GND"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["SDA", "SDI", "DATA"],
  pin6: ["RDY", "READY", "DATA_READY"],
} as const;

const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap;
const I2C_SDA = {
  ...GPIO,
  capabilities: ["i2c_sda"],
} as const satisfies PinAttributeMap;
const I2C_SCL = {
  ...GPIO,
  capabilities: ["i2c_scl"],
} as const satisfies PinAttributeMap;
const POWER_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const POWER_OUTPUT = {
  providesPower: true,
  providesVoltage: "3.3V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const AdafruitSCD30NDIRCO2Breakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  V3_3: POWER_OUTPUT,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  RDY: GPIO,
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

export type AdafruitSCD30NDIRCO2BreakoutProps = Omit<
  ChipProps<typeof AdafruitSCD30NDIRCO2Breakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitSCD30NDIRCO2Breakout = (
  props: AdafruitSCD30NDIRCO2BreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit SCD30 NDIR CO2 Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-scd-30/pinouts"
    footprint={AdafruitSCD30NDIRCO2Breakout_FOOTPRINT}
    pinLabels={AdafruitSCD30NDIRCO2Breakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "V3_3",
      pin3: "GND",
      pin4: "SCL",
      pin5: "SDA",
      pin6: "RDY",
    }}
    pinAttributes={AdafruitSCD30NDIRCO2Breakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "V3_3", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SCL", "SDA", "RDY"],
      },
    }}
  />
);

import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit LIS2DW12 Triple-Axis Accelerometer Breakout. Header order: VIN, V3_3, GND, SCL, SDA, INT. */
export const AdafruitLIS2DW12TripleAxisAccelerometerBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(LIS2DW12)" as const;

export const AdafruitLIS2DW12TripleAxisAccelerometerBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["V3_3", "3V3", "3.3V", "3Vo"],
  pin3: ["GND"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["SDA", "SDI", "DATA"],
  pin6: ["INT", "INTERRUPT"],
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
const POWER_OUTPUT_3V3 = {
  providesPower: true,
  providesVoltage: "3.3V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const AdafruitLIS2DW12TripleAxisAccelerometerBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  V3_3: POWER_OUTPUT_3V3,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  INT: GPIO,
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

export type AdafruitLIS2DW12TripleAxisAccelerometerBreakoutProps = Omit<
  ChipProps<typeof AdafruitLIS2DW12TripleAxisAccelerometerBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitLIS2DW12TripleAxisAccelerometerBreakout = (
  props: AdafruitLIS2DW12TripleAxisAccelerometerBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit LIS2DW12 Triple-Axis Accelerometer Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-lis2dw12-3-axis-accelerometer/pinouts"
    footprint={AdafruitLIS2DW12TripleAxisAccelerometerBreakout_FOOTPRINT}
    pinLabels={AdafruitLIS2DW12TripleAxisAccelerometerBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "V3_3",
      pin3: "GND",
      pin4: "SCL",
      pin5: "SDA",
      pin6: "INT",
    }}
    pinAttributes={
      AdafruitLIS2DW12TripleAxisAccelerometerBreakout_PIN_ATTRIBUTES
    }
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "V3_3", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SCL", "SDA", "INT"],
      },
    }}
  />
);

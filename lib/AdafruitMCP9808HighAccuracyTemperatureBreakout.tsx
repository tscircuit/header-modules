import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit MCP9808 High-Accuracy Temperature Breakout. Header order: VIN, GND, SCL, SDA, ALERT, A0. */
export const AdafruitMCP9808HighAccuracyTemperatureBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(MCP9808)" as const;

export const AdafruitMCP9808HighAccuracyTemperatureBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["GND"],
  pin3: ["SCL", "SCK", "CLOCK"],
  pin4: ["SDA", "SDI", "DATA"],
  pin5: ["ALERT", "ALERT_N", "INT"],
  pin6: ["A0", "ADDR0", "ADDRESS0"],
} as const;

const POWER_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap;
const I2C_SCL = {
  ...GPIO,
  capabilities: ["i2c_scl"],
} as const satisfies PinAttributeMap;
const I2C_SDA = {
  ...GPIO,
  capabilities: ["i2c_sda"],
} as const satisfies PinAttributeMap;
const CONTROL = {
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const AdafruitMCP9808HighAccuracyTemperatureBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  ALERT: GPIO,
  A0: CONTROL,
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

export type AdafruitMCP9808HighAccuracyTemperatureBreakoutProps = Omit<
  ChipProps<typeof AdafruitMCP9808HighAccuracyTemperatureBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitMCP9808HighAccuracyTemperatureBreakout = (
  props: AdafruitMCP9808HighAccuracyTemperatureBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit MCP9808 High-Accuracy Temperature Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-mcp9808-precision-i2c-temperature-sensor-guide/pinouts"
    footprint={AdafruitMCP9808HighAccuracyTemperatureBreakout_FOOTPRINT}
    pinLabels={AdafruitMCP9808HighAccuracyTemperatureBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "SCL",
      pin4: "SDA",
      pin5: "ALERT",
      pin6: "A0",
    }}
    pinAttributes={
      AdafruitMCP9808HighAccuracyTemperatureBreakout_PIN_ATTRIBUTES
    }
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "GND", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "ALERT", "A0"],
      },
    }}
  />
);

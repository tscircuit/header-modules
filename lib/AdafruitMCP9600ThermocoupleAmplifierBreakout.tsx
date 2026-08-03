import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit MCP9600 Thermocouple Amplifier Breakout. Header order: ADDR, ALERT4, ALERT3, ALERT1, ALERT2, SDA, SCL, GND, VIN. */
export const AdafruitMCP9600ThermocoupleAmplifierBreakout_FOOTPRINT =
  "headermodule9_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(MCP9600)" as const;

export const AdafruitMCP9600ThermocoupleAmplifierBreakout_PIN_LABELS = {
  pin1: ["ADDR", "ADDRESS"],
  pin2: ["ALERT4", "ALERT_4"],
  pin3: ["ALERT3", "ALERT_3"],
  pin4: ["ALERT1", "ALERT_1"],
  pin5: ["ALERT2", "ALERT_2"],
  pin6: ["SDA", "SDI", "DATA"],
  pin7: ["SCL", "SCK", "CLOCK"],
  pin8: ["GND"],
  pin9: ["VIN", "VCC", "VDD"],
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
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const CONTROL = {
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const AdafruitMCP9600ThermocoupleAmplifierBreakout_PIN_ATTRIBUTES = {
  ADDR: CONTROL,
  ALERT4: GPIO,
  ALERT3: GPIO,
  ALERT1: GPIO,
  ALERT2: GPIO,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  GND: GROUND,
  VIN: POWER_INPUT,
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

export type AdafruitMCP9600ThermocoupleAmplifierBreakoutProps = Omit<
  ChipProps<typeof AdafruitMCP9600ThermocoupleAmplifierBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitMCP9600ThermocoupleAmplifierBreakout = (
  props: AdafruitMCP9600ThermocoupleAmplifierBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit MCP9600 Thermocouple Amplifier Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-mcp9600-high-precision-i2c-thermocouple-amplifier/pinouts"
    footprint={AdafruitMCP9600ThermocoupleAmplifierBreakout_FOOTPRINT}
    pinLabels={AdafruitMCP9600ThermocoupleAmplifierBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "ADDR",
      pin2: "ALERT4",
      pin3: "ALERT3",
      pin4: "ALERT1",
      pin5: "ALERT2",
      pin6: "SDA",
      pin7: "SCL",
      pin8: "GND",
      pin9: "VIN",
    }}
    pinAttributes={AdafruitMCP9600ThermocoupleAmplifierBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.6}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["ADDR", "ALERT4", "ALERT3", "ALERT1", "ALERT2"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "SCL", "GND", "VIN"],
      },
    }}
  />
);

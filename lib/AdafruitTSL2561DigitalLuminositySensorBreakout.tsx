import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit TSL2561 Digital Luminosity Sensor Breakout. Header order: VIN, GND, V3_3, ADDR, INT, SDA, SCL. */
export const AdafruitTSL2561DigitalLuminositySensorBreakout_FOOTPRINT =
  "headermodule7_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(TSL2561)" as const;

export const AdafruitTSL2561DigitalLuminositySensorBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["GND"],
  pin3: ["V3_3", "3V3", "3.3V", "+3V3"],
  pin4: ["ADDR", "ADDRESS"],
  pin5: ["INT", "INTERRUPT", "ALERT"],
  pin6: ["SDA", "SDI", "DATA"],
  pin7: ["SCL", "SCK", "CLOCK"],
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
const POWER_OUTPUT = {
  providesPower: true,
  providesVoltage: "3.3V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const CONTROL = {
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
const I2C_SDA = {
  ...GPIO,
  capabilities: ["i2c_sda"],
} as const satisfies PinAttributeMap;
const I2C_SCL = {
  ...GPIO,
  capabilities: ["i2c_scl"],
} as const satisfies PinAttributeMap;

export const AdafruitTSL2561DigitalLuminositySensorBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  V3_3: POWER_OUTPUT,
  ADDR: CONTROL,
  INT: GPIO,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
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

export type AdafruitTSL2561DigitalLuminositySensorBreakoutProps = Omit<
  ChipProps<typeof AdafruitTSL2561DigitalLuminositySensorBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitTSL2561DigitalLuminositySensorBreakout = (
  props: AdafruitTSL2561DigitalLuminositySensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit TSL2561 Digital Luminosity Sensor Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/tsl2561/pinouts"
    footprint={AdafruitTSL2561DigitalLuminositySensorBreakout_FOOTPRINT}
    pinLabels={AdafruitTSL2561DigitalLuminositySensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "V3_3",
      pin4: "ADDR",
      pin5: "INT",
      pin6: "SDA",
      pin7: "SCL",
    }}
    pinAttributes={
      AdafruitTSL2561DigitalLuminositySensorBreakout_PIN_ATTRIBUTES
    }
    schWidth={2.8}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "GND", "V3_3", "ADDR"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["INT", "SDA", "SCL"],
      },
    }}
  />
);

import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit BNO055 Absolute Orientation Breakout. Header order: VIN, V3_3, GND, SCL, SDA, PS0, PS1, INT. */
export const AdafruitBNO055AbsoluteOrientationBreakout_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(BNO055)" as const;

export const AdafruitBNO055AbsoluteOrientationBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["V3_3", "3V3", "3.3V", "3Vo"],
  pin3: ["GND"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["SDA", "SDI", "DATA"],
  pin6: ["PS0", "PROTOCOL0"],
  pin7: ["PS1", "PROTOCOL1"],
  pin8: ["INT", "INTERRUPT"],
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
const CONTROL = {
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const AdafruitBNO055AbsoluteOrientationBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  V3_3: POWER_OUTPUT_3V3,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  PS0: CONTROL,
  PS1: CONTROL,
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

export type AdafruitBNO055AbsoluteOrientationBreakoutProps = Omit<
  ChipProps<typeof AdafruitBNO055AbsoluteOrientationBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitBNO055AbsoluteOrientationBreakout = (
  props: AdafruitBNO055AbsoluteOrientationBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit BNO055 Absolute Orientation Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-bno055-absolute-orientation-sensor/pinouts"
    footprint={AdafruitBNO055AbsoluteOrientationBreakout_FOOTPRINT}
    pinLabels={AdafruitBNO055AbsoluteOrientationBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "V3_3",
      pin3: "GND",
      pin4: "SCL",
      pin5: "SDA",
      pin6: "PS0",
      pin7: "PS1",
      pin8: "INT",
    }}
    pinAttributes={AdafruitBNO055AbsoluteOrientationBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "V3_3", "GND", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "PS0", "PS1", "INT"],
      },
    }}
  />
);

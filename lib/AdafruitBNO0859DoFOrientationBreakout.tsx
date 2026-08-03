import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit BNO085 9-DoF Orientation Breakout. Header order: VIN, V3_3, GND, SCL, SDA, INT, RESET, PS0, PS1. */
export const AdafruitBNO0859DoFOrientationBreakout_FOOTPRINT =
  "headermodule9_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(BNO085)" as const;

export const AdafruitBNO0859DoFOrientationBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["V3_3", "3V3", "3.3V", "3Vo"],
  pin3: ["GND"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["SDA", "SDI", "DATA"],
  pin6: ["INT", "INTERRUPT"],
  pin7: ["RESET", "RST", "!RESET"],
  pin8: ["PS0", "PROTOCOL0"],
  pin9: ["PS1", "PROTOCOL1"],
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

export const AdafruitBNO0859DoFOrientationBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  V3_3: POWER_OUTPUT_3V3,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  INT: GPIO,
  RESET: CONTROL,
  PS0: CONTROL,
  PS1: CONTROL,
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

export type AdafruitBNO0859DoFOrientationBreakoutProps = Omit<
  ChipProps<typeof AdafruitBNO0859DoFOrientationBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitBNO0859DoFOrientationBreakout = (
  props: AdafruitBNO0859DoFOrientationBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit BNO085 9-DoF Orientation Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-9-dof-orientation-imu-fusion-breakout-bno085-bno086/pinouts"
    footprint={AdafruitBNO0859DoFOrientationBreakout_FOOTPRINT}
    pinLabels={AdafruitBNO0859DoFOrientationBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "V3_3",
      pin3: "GND",
      pin4: "SCL",
      pin5: "SDA",
      pin6: "INT",
      pin7: "RESET",
      pin8: "PS0",
      pin9: "PS1",
    }}
    pinAttributes={AdafruitBNO0859DoFOrientationBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.6}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "V3_3", "GND", "SCL", "SDA"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["INT", "RESET", "PS0", "PS1"],
      },
    }}
  />
);

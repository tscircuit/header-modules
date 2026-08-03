import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit NXP FXOS8700 + FXAS21002 9-DoF Breakout. Header order: RST, SDA, SCL, GND, V3_3, VIN. */
export const AdafruitNXPFXOS8700FXAS210029DoFBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(FXOS8700-9DOF)" as const;

export const AdafruitNXPFXOS8700FXAS210029DoFBreakout_PIN_LABELS = {
  pin1: ["RST", "RESET", "!RESET"],
  pin2: ["SDA", "SDI", "DATA"],
  pin3: ["SCL", "SCK", "CLOCK"],
  pin4: ["GND"],
  pin5: ["V3_3", "3V3", "3.3V"],
  pin6: ["VIN", "VCC", "VDD"],
} as const;

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
const POWER_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const AdafruitNXPFXOS8700FXAS210029DoFBreakout_PIN_ATTRIBUTES = {
  RST: CONTROL,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  GND: GROUND,
  V3_3: POWER_OUTPUT,
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

export type AdafruitNXPFXOS8700FXAS210029DoFBreakoutProps = Omit<
  ChipProps<typeof AdafruitNXPFXOS8700FXAS210029DoFBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitNXPFXOS8700FXAS210029DoFBreakout = (
  props: AdafruitNXPFXOS8700FXAS210029DoFBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit NXP FXOS8700 + FXAS21002 9-DoF Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-9-dof-absolute-orientation-imu-fxos8700-plus-fxas21002/pinouts"
    footprint={AdafruitNXPFXOS8700FXAS210029DoFBreakout_FOOTPRINT}
    pinLabels={AdafruitNXPFXOS8700FXAS210029DoFBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "RST",
      pin2: "SDA",
      pin3: "SCL",
      pin4: "GND",
      pin5: "V3_3",
      pin6: "VIN",
    }}
    pinAttributes={AdafruitNXPFXOS8700FXAS210029DoFBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["RST", "SDA", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["GND", "V3_3", "VIN"],
      },
    }}
  />
);

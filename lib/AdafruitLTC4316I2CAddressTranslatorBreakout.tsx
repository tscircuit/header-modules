import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit LTC4316 I2C Address Translator Breakout — powered bus utility. */
export const AdafruitLTC4316I2CAddressTranslatorBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit LTC4316 I2C Address T)" as const;

export const AdafruitLTC4316I2CAddressTranslatorBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitLTC4316I2CAddressTranslatorBreakout_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  SDA: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["i2c_sda"],
  },
  SCL: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["i2c_scl"],
  },
} as const satisfies Record<string, PinAttributeMap>;

type FixedProps =
  | "displayName"
  | "footprint"
  | "mfn"
  | "pinAttributes"
  | "pinLabels"
  | "pcbPinLabels"
  | "schHeight"
  | "schPinArrangement"
  | "schWidth";

export type AdafruitLTC4316I2CAddressTranslatorBreakoutProps = Omit<
  ChipProps<typeof AdafruitLTC4316I2CAddressTranslatorBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitLTC4316I2CAddressTranslatorBreakout = (
  props: AdafruitLTC4316I2CAddressTranslatorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit LTC4316 I2C Address Translator Breakout"
    mfn="Adafruit"
    footprint={AdafruitLTC4316I2CAddressTranslatorBreakout_FOOTPRINT}
    pinLabels={AdafruitLTC4316I2CAddressTranslatorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={AdafruitLTC4316I2CAddressTranslatorBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "SCL"],
      },
    }}
  />
);

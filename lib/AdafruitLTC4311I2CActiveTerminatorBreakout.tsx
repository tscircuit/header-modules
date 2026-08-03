import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit LTC4311 I2C Active Terminator Breakout — I2C. */
export const AdafruitLTC4311I2CActiveTerminatorBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit LTC4311 I2C Active Te)" as const;

export const AdafruitLTC4311I2CActiveTerminatorBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitLTC4311I2CActiveTerminatorBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitLTC4311I2CActiveTerminatorBreakoutProps = Omit<
  ChipProps<typeof AdafruitLTC4311I2CActiveTerminatorBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitLTC4311I2CActiveTerminatorBreakout = (
  props: AdafruitLTC4311I2CActiveTerminatorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit LTC4311 I2C Active Terminator Breakout"
    mfn="Adafruit"
    footprint={AdafruitLTC4311I2CActiveTerminatorBreakout_FOOTPRINT}
    pinLabels={AdafruitLTC4311I2CActiveTerminatorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={AdafruitLTC4311I2CActiveTerminatorBreakout_PIN_ATTRIBUTES}
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

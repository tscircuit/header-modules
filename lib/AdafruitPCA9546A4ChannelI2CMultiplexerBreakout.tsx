import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit PCA9546A 4-Channel I2C Multiplexer Breakout — I2C. */
export const AdafruitPCA9546A4ChannelI2CMultiplexerBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit PCA9546A 4-Channel I2)" as const;

export const AdafruitPCA9546A4ChannelI2CMultiplexerBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitPCA9546A4ChannelI2CMultiplexerBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitPCA9546A4ChannelI2CMultiplexerBreakoutProps = Omit<
  ChipProps<typeof AdafruitPCA9546A4ChannelI2CMultiplexerBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitPCA9546A4ChannelI2CMultiplexerBreakout = (
  props: AdafruitPCA9546A4ChannelI2CMultiplexerBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit PCA9546A 4-Channel I2C Multiplexer Breakout"
    mfn="Adafruit"
    footprint={AdafruitPCA9546A4ChannelI2CMultiplexerBreakout_FOOTPRINT}
    pinLabels={AdafruitPCA9546A4ChannelI2CMultiplexerBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={
      AdafruitPCA9546A4ChannelI2CMultiplexerBreakout_PIN_ATTRIBUTES
    }
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

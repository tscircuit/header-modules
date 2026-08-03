import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit TCA9548A 8-Channel I2C Multiplexer Breakout — I2C. */
export const AdafruitTCA9548A8ChannelI2CMultiplexerBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit TCA9548A 8-Channel I2)" as const;

export const AdafruitTCA9548A8ChannelI2CMultiplexerBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitTCA9548A8ChannelI2CMultiplexerBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitTCA9548A8ChannelI2CMultiplexerBreakoutProps = Omit<
  ChipProps<typeof AdafruitTCA9548A8ChannelI2CMultiplexerBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitTCA9548A8ChannelI2CMultiplexerBreakout = (
  props: AdafruitTCA9548A8ChannelI2CMultiplexerBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit TCA9548A 8-Channel I2C Multiplexer Breakout"
    mfn="Adafruit"
    footprint={AdafruitTCA9548A8ChannelI2CMultiplexerBreakout_FOOTPRINT}
    pinLabels={AdafruitTCA9548A8ChannelI2CMultiplexerBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={
      AdafruitTCA9548A8ChannelI2CMultiplexerBreakout_PIN_ATTRIBUTES
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

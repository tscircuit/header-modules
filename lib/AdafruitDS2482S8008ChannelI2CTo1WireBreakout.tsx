import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit DS2482S-800 8-Channel I2C-to-1-Wire Breakout — I2C/1-Wire. */
export const AdafruitDS2482S8008ChannelI2CTo1WireBreakout_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit DS2482S-800 8-Channel)" as const;

export const AdafruitDS2482S8008ChannelI2CTo1WireBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["DQ"],
} as const;

export const AdafruitDS2482S8008ChannelI2CTo1WireBreakout_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  DQ: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
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

export type AdafruitDS2482S8008ChannelI2CTo1WireBreakoutProps = Omit<
  ChipProps<typeof AdafruitDS2482S8008ChannelI2CTo1WireBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitDS2482S8008ChannelI2CTo1WireBreakout = (
  props: AdafruitDS2482S8008ChannelI2CTo1WireBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit DS2482S-800 8-Channel I2C-to-1-Wire Breakout"
    mfn="Adafruit"
    footprint={AdafruitDS2482S8008ChannelI2CTo1WireBreakout_FOOTPRINT}
    pinLabels={AdafruitDS2482S8008ChannelI2CTo1WireBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "DQ",
    }}
    pinAttributes={AdafruitDS2482S8008ChannelI2CTo1WireBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["DQ"],
      },
    }}
  />
);

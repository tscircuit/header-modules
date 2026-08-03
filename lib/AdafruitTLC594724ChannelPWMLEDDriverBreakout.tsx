import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit TLC5947 24-Channel PWM LED Driver Breakout — serial. */
export const AdafruitTLC594724ChannelPWMLEDDriverBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit TLC5947 24-Channel PW)" as const;

export const AdafruitTLC594724ChannelPWMLEDDriverBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SIG1"],
  pin4: ["SIG2"],
} as const;

export const AdafruitTLC594724ChannelPWMLEDDriverBreakout_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  SIG1: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SIG2: {
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

export type AdafruitTLC594724ChannelPWMLEDDriverBreakoutProps = Omit<
  ChipProps<typeof AdafruitTLC594724ChannelPWMLEDDriverBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitTLC594724ChannelPWMLEDDriverBreakout = (
  props: AdafruitTLC594724ChannelPWMLEDDriverBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit TLC5947 24-Channel PWM LED Driver Breakout"
    mfn="Adafruit"
    footprint={AdafruitTLC594724ChannelPWMLEDDriverBreakout_FOOTPRINT}
    pinLabels={AdafruitTLC594724ChannelPWMLEDDriverBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SIG1",
      pin4: "SIG2",
    }}
    pinAttributes={AdafruitTLC594724ChannelPWMLEDDriverBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SIG1", "SIG2"],
      },
    }}
  />
);

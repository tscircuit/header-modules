import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit TLC59711 12-Channel PWM LED Driver Breakout — SPI-like. */
export const AdafruitTLC5971112ChannelPWMLEDDriverBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit TLC59711 12-Channel P)" as const;

export const AdafruitTLC5971112ChannelPWMLEDDriverBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
} as const;

export const AdafruitTLC5971112ChannelPWMLEDDriverBreakout_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  SCK: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["spi_sck"],
  },
  MOSI: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["spi_mosi"],
  },
  MISO: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["spi_miso"],
  },
  CS: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["spi_cs"],
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

export type AdafruitTLC5971112ChannelPWMLEDDriverBreakoutProps = Omit<
  ChipProps<typeof AdafruitTLC5971112ChannelPWMLEDDriverBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitTLC5971112ChannelPWMLEDDriverBreakout = (
  props: AdafruitTLC5971112ChannelPWMLEDDriverBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit TLC59711 12-Channel PWM LED Driver Breakout"
    mfn="Adafruit"
    footprint={AdafruitTLC5971112ChannelPWMLEDDriverBreakout_FOOTPRINT}
    pinLabels={AdafruitTLC5971112ChannelPWMLEDDriverBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SCK",
      pin4: "MOSI",
      pin5: "MISO",
      pin6: "CS",
    }}
    pinAttributes={AdafruitTLC5971112ChannelPWMLEDDriverBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.82}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "SCK"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["MOSI", "MISO", "CS"],
      },
    }}
  />
);

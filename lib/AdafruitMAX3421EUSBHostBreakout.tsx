import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit MAX3421E USB Host Breakout — SPI/USB host. */
export const AdafruitMAX3421EUSBHostBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit MAX3421E USB Host)" as const;

export const AdafruitMAX3421EUSBHostBreakout_PIN_LABELS = {
  pin1: ["VBUS"],
  pin2: ["GND"],
  pin3: ["DPLUS"],
  pin4: ["DMINUS"],
  pin5: ["TX"],
  pin6: ["RX"],
} as const;

export const AdafruitMAX3421EUSBHostBreakout_PIN_ATTRIBUTES = {
  VBUS: {
    requiresPower: true,
    providesPower: true,
    includeInBoardPinout: true,
  },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  DPLUS: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  DMINUS: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  TX: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["uart_tx"],
  },
  RX: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["uart_rx"],
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

export type AdafruitMAX3421EUSBHostBreakoutProps = Omit<
  ChipProps<typeof AdafruitMAX3421EUSBHostBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitMAX3421EUSBHostBreakout = (
  props: AdafruitMAX3421EUSBHostBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit MAX3421E USB Host Breakout"
    mfn="Adafruit"
    footprint={AdafruitMAX3421EUSBHostBreakout_FOOTPRINT}
    pinLabels={AdafruitMAX3421EUSBHostBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VBUS",
      pin2: "GND",
      pin3: "DPLUS",
      pin4: "DMINUS",
      pin5: "TX",
      pin6: "RX",
    }}
    pinAttributes={AdafruitMAX3421EUSBHostBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.82}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VBUS", "GND", "DPLUS"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["DMINUS", "TX", "RX"],
      },
    }}
  />
);

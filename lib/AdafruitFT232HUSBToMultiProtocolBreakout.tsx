import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit FT232H USB-to-Multi-Protocol Breakout — USB/I2C/SPI/UART. */
export const AdafruitFT232HUSBToMultiProtocolBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit FT232H USB-to-Multi-P)" as const;

export const AdafruitFT232HUSBToMultiProtocolBreakout_PIN_LABELS = {
  pin1: ["VBUS"],
  pin2: ["GND"],
  pin3: ["DPLUS"],
  pin4: ["DMINUS"],
  pin5: ["TX"],
  pin6: ["RX"],
} as const;

export const AdafruitFT232HUSBToMultiProtocolBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitFT232HUSBToMultiProtocolBreakoutProps = Omit<
  ChipProps<typeof AdafruitFT232HUSBToMultiProtocolBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitFT232HUSBToMultiProtocolBreakout = (
  props: AdafruitFT232HUSBToMultiProtocolBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit FT232H USB-to-Multi-Protocol Breakout"
    mfn="Adafruit"
    footprint={AdafruitFT232HUSBToMultiProtocolBreakout_FOOTPRINT}
    pinLabels={AdafruitFT232HUSBToMultiProtocolBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VBUS",
      pin2: "GND",
      pin3: "DPLUS",
      pin4: "DMINUS",
      pin5: "TX",
      pin6: "RX",
    }}
    pinAttributes={AdafruitFT232HUSBToMultiProtocolBreakout_PIN_ATTRIBUTES}
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

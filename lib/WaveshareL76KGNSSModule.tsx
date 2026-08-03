import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Waveshare L76K GNSS Module — UART. */
export const WaveshareL76KGNSSModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Waveshare L76K GNSS)" as const;

export const WaveshareL76KGNSSModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TX"],
  pin4: ["RX"],
} as const;

export const WaveshareL76KGNSSModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
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

export type WaveshareL76KGNSSModuleProps = Omit<
  ChipProps<typeof WaveshareL76KGNSSModule_PIN_LABELS>,
  FixedProps
>;

export const WaveshareL76KGNSSModule = (
  props: WaveshareL76KGNSSModuleProps,
) => (
  <chip
    {...props}
    displayName="Waveshare L76K GNSS Module"
    mfn="Waveshare"
    footprint={WaveshareL76KGNSSModule_FOOTPRINT}
    pinLabels={WaveshareL76KGNSSModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "TX",
      pin4: "RX",
    }}
    pinAttributes={WaveshareL76KGNSSModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["TX", "RX"],
      },
    }}
  />
);

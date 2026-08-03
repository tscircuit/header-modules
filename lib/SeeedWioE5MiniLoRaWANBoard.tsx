import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Seeed Wio-E5 Mini LoRaWAN Board — UART. */
export const SeeedWioE5MiniLoRaWANBoard_FOOTPRINT =
  "headermodule5_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Seeed Wio-E5 LoRaWAN)" as const;

export const SeeedWioE5MiniLoRaWANBoard_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TX"],
  pin4: ["RX"],
  pin5: ["AUX"],
} as const;

export const SeeedWioE5MiniLoRaWANBoard_PIN_ATTRIBUTES = {
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
  AUX: {
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

export type SeeedWioE5MiniLoRaWANBoardProps = Omit<
  ChipProps<typeof SeeedWioE5MiniLoRaWANBoard_PIN_LABELS>,
  FixedProps
>;

export const SeeedWioE5MiniLoRaWANBoard = (
  props: SeeedWioE5MiniLoRaWANBoardProps,
) => (
  <chip
    {...props}
    displayName="Seeed Wio-E5 Mini LoRaWAN Board"
    mfn="Generic"
    footprint={SeeedWioE5MiniLoRaWANBoard_FOOTPRINT}
    pinLabels={SeeedWioE5MiniLoRaWANBoard_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "TX",
      pin4: "RX",
      pin5: "AUX",
    }}
    pinAttributes={SeeedWioE5MiniLoRaWANBoard_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.82}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "TX"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["RX", "AUX"],
      },
    }}
  />
);

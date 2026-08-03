import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit Ultimate GPS Breakout, PA6H/MTK3339 — UART. */
export const AdafruitUltimateGPSBreakoutPA6HMTK3339_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit Ultimate GPS PA6H MTK)" as const;

export const AdafruitUltimateGPSBreakoutPA6HMTK3339_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TX"],
  pin4: ["RX"],
} as const;

export const AdafruitUltimateGPSBreakoutPA6HMTK3339_PIN_ATTRIBUTES = {
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

export type AdafruitUltimateGPSBreakoutPA6HMTK3339Props = Omit<
  ChipProps<typeof AdafruitUltimateGPSBreakoutPA6HMTK3339_PIN_LABELS>,
  FixedProps
>;

export const AdafruitUltimateGPSBreakoutPA6HMTK3339 = (
  props: AdafruitUltimateGPSBreakoutPA6HMTK3339Props,
) => (
  <chip
    {...props}
    displayName="Adafruit Ultimate GPS Breakout, PA6H/MTK3339"
    mfn="Adafruit"
    footprint={AdafruitUltimateGPSBreakoutPA6HMTK3339_FOOTPRINT}
    pinLabels={AdafruitUltimateGPSBreakoutPA6HMTK3339_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "TX",
      pin4: "RX",
    }}
    pinAttributes={AdafruitUltimateGPSBreakoutPA6HMTK3339_PIN_ATTRIBUTES}
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

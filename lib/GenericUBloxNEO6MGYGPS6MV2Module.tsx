import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic u-blox NEO-6M GY-GPS6MV2 Module — UART. */
export const GenericUBloxNEO6MGYGPS6MV2Module_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic u-blox NEO-6M GY-GPS6M)" as const;

export const GenericUBloxNEO6MGYGPS6MV2Module_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TX"],
  pin4: ["RX"],
} as const;

export const GenericUBloxNEO6MGYGPS6MV2Module_PIN_ATTRIBUTES = {
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

export type GenericUBloxNEO6MGYGPS6MV2ModuleProps = Omit<
  ChipProps<typeof GenericUBloxNEO6MGYGPS6MV2Module_PIN_LABELS>,
  FixedProps
>;

export const GenericUBloxNEO6MGYGPS6MV2Module = (
  props: GenericUBloxNEO6MGYGPS6MV2ModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic u-blox NEO-6M GY-GPS6MV2 Module"
    mfn="Generic"
    footprint={GenericUBloxNEO6MGYGPS6MV2Module_FOOTPRINT}
    pinLabels={GenericUBloxNEO6MGYGPS6MV2Module_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "TX",
      pin4: "RX",
    }}
    pinAttributes={GenericUBloxNEO6MGYGPS6MV2Module_PIN_ATTRIBUTES}
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

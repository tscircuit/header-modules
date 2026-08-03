import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun XBee Explorer Regulated — 0.1 in XBee adapter. */
export const SparkFunXBeeExplorerRegulated_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun XBee Explorer Regulat)" as const;

export const SparkFunXBeeExplorerRegulated_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SIG1"],
  pin4: ["SIG2"],
} as const;

export const SparkFunXBeeExplorerRegulated_PIN_ATTRIBUTES = {
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

export type SparkFunXBeeExplorerRegulatedProps = Omit<
  ChipProps<typeof SparkFunXBeeExplorerRegulated_PIN_LABELS>,
  FixedProps
>;

export const SparkFunXBeeExplorerRegulated = (
  props: SparkFunXBeeExplorerRegulatedProps,
) => (
  <chip
    {...props}
    displayName="SparkFun XBee Explorer Regulated"
    mfn="SparkFun"
    footprint={SparkFunXBeeExplorerRegulated_FOOTPRINT}
    pinLabels={SparkFunXBeeExplorerRegulated_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SIG1",
      pin4: "SIG2",
    }}
    pinAttributes={SparkFunXBeeExplorerRegulated_PIN_ATTRIBUTES}
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

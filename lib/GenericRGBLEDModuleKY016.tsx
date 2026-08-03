import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic RGB LED Module, KY-016 — three PWM channels. */
export const GenericRGBLEDModuleKY016_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic RGB LED KY-016)" as const;

export const GenericRGBLEDModuleKY016_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SIG1"],
  pin4: ["SIG2"],
} as const;

export const GenericRGBLEDModuleKY016_PIN_ATTRIBUTES = {
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

export type GenericRGBLEDModuleKY016Props = Omit<
  ChipProps<typeof GenericRGBLEDModuleKY016_PIN_LABELS>,
  FixedProps
>;

export const GenericRGBLEDModuleKY016 = (
  props: GenericRGBLEDModuleKY016Props,
) => (
  <chip
    {...props}
    displayName="Generic RGB LED Module, KY-016"
    mfn="Generic"
    footprint={GenericRGBLEDModuleKY016_FOOTPRINT}
    pinLabels={GenericRGBLEDModuleKY016_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SIG1",
      pin4: "SIG2",
    }}
    pinAttributes={GenericRGBLEDModuleKY016_PIN_ATTRIBUTES}
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

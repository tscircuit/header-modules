import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic Active Buzzer Module, KY-012 — digital. */
export const GenericActiveBuzzerModuleKY012_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic Active Buzzer KY-012)" as const;

export const GenericActiveBuzzerModuleKY012_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const GenericActiveBuzzerModuleKY012_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  OUT: {
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

export type GenericActiveBuzzerModuleKY012Props = Omit<
  ChipProps<typeof GenericActiveBuzzerModuleKY012_PIN_LABELS>,
  FixedProps
>;

export const GenericActiveBuzzerModuleKY012 = (
  props: GenericActiveBuzzerModuleKY012Props,
) => (
  <chip
    {...props}
    displayName="Generic Active Buzzer Module, KY-012"
    mfn="Generic"
    footprint={GenericActiveBuzzerModuleKY012_FOOTPRINT}
    pinLabels={GenericActiveBuzzerModuleKY012_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={GenericActiveBuzzerModuleKY012_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["OUT"],
      },
    }}
  />
);

import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic IR Receiver Module, VS1838B/KY-022 — digital. */
export const GenericIRReceiverModuleVS1838BKY022_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic IR Receiver VS1838B KY)" as const;

export const GenericIRReceiverModuleVS1838BKY022_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const GenericIRReceiverModuleVS1838BKY022_PIN_ATTRIBUTES = {
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

export type GenericIRReceiverModuleVS1838BKY022Props = Omit<
  ChipProps<typeof GenericIRReceiverModuleVS1838BKY022_PIN_LABELS>,
  FixedProps
>;

export const GenericIRReceiverModuleVS1838BKY022 = (
  props: GenericIRReceiverModuleVS1838BKY022Props,
) => (
  <chip
    {...props}
    displayName="Generic IR Receiver Module, VS1838B/KY-022"
    mfn="Generic"
    footprint={GenericIRReceiverModuleVS1838BKY022_FOOTPRINT}
    pinLabels={GenericIRReceiverModuleVS1838BKY022_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={GenericIRReceiverModuleVS1838BKY022_PIN_ATTRIBUTES}
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

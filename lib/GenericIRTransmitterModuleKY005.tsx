import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic IR Transmitter Module, KY-005 — digital. */
export const GenericIRTransmitterModuleKY005_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic IR Transmitter KY-005)" as const;

export const GenericIRTransmitterModuleKY005_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const GenericIRTransmitterModuleKY005_PIN_ATTRIBUTES = {
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

export type GenericIRTransmitterModuleKY005Props = Omit<
  ChipProps<typeof GenericIRTransmitterModuleKY005_PIN_LABELS>,
  FixedProps
>;

export const GenericIRTransmitterModuleKY005 = (
  props: GenericIRTransmitterModuleKY005Props,
) => (
  <chip
    {...props}
    displayName="Generic IR Transmitter Module, KY-005"
    mfn="Generic"
    footprint={GenericIRTransmitterModuleKY005_FOOTPRINT}
    pinLabels={GenericIRTransmitterModuleKY005_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={GenericIRTransmitterModuleKY005_PIN_ATTRIBUTES}
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

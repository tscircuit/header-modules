import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic Laser Diode Transmitter Module, KY-008 — digital. */
export const GenericLaserDiodeTransmitterModuleKY008_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic Laser Diode Transmitte)" as const;

export const GenericLaserDiodeTransmitterModuleKY008_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const GenericLaserDiodeTransmitterModuleKY008_PIN_ATTRIBUTES = {
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

export type GenericLaserDiodeTransmitterModuleKY008Props = Omit<
  ChipProps<typeof GenericLaserDiodeTransmitterModuleKY008_PIN_LABELS>,
  FixedProps
>;

export const GenericLaserDiodeTransmitterModuleKY008 = (
  props: GenericLaserDiodeTransmitterModuleKY008Props,
) => (
  <chip
    {...props}
    displayName="Generic Laser Diode Transmitter Module, KY-008"
    mfn="Generic"
    footprint={GenericLaserDiodeTransmitterModuleKY008_FOOTPRINT}
    pinLabels={GenericLaserDiodeTransmitterModuleKY008_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={GenericLaserDiodeTransmitterModuleKY008_PIN_ATTRIBUTES}
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

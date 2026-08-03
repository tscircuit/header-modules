import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic IRF520 MOSFET Driver Module — PWM/load driver. */
export const GenericIRF520MOSFETDriverModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic IRF520 MOSFET)" as const;

export const GenericIRF520MOSFETDriverModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SIG1"],
  pin4: ["SIG2"],
} as const;

export const GenericIRF520MOSFETDriverModule_PIN_ATTRIBUTES = {
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

export type GenericIRF520MOSFETDriverModuleProps = Omit<
  ChipProps<typeof GenericIRF520MOSFETDriverModule_PIN_LABELS>,
  FixedProps
>;

export const GenericIRF520MOSFETDriverModule = (
  props: GenericIRF520MOSFETDriverModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic IRF520 MOSFET Driver Module"
    mfn="Generic"
    footprint={GenericIRF520MOSFETDriverModule_FOOTPRINT}
    pinLabels={GenericIRF520MOSFETDriverModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SIG1",
      pin4: "SIG2",
    }}
    pinAttributes={GenericIRF520MOSFETDriverModule_PIN_ATTRIBUTES}
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

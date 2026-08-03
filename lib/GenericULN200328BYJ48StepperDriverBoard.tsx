import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic ULN2003 28BYJ-48 Stepper Driver Board — 1x4 logic header. */
export const GenericULN200328BYJ48StepperDriverBoard_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic ULN2003 28BYJ-48 Stepp)" as const;

export const GenericULN200328BYJ48StepperDriverBoard_PIN_LABELS = {
  pin1: ["VMOT"],
  pin2: ["GND"],
  pin3: ["VCC"],
  pin4: ["IN1"],
  pin5: ["IN2"],
  pin6: ["FAULT"],
} as const;

export const GenericULN200328BYJ48StepperDriverBoard_PIN_ATTRIBUTES = {
  VMOT: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  VCC: { requiresPower: true, includeInBoardPinout: true },
  IN1: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  IN2: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  FAULT: {
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

export type GenericULN200328BYJ48StepperDriverBoardProps = Omit<
  ChipProps<typeof GenericULN200328BYJ48StepperDriverBoard_PIN_LABELS>,
  FixedProps
>;

export const GenericULN200328BYJ48StepperDriverBoard = (
  props: GenericULN200328BYJ48StepperDriverBoardProps,
) => (
  <chip
    {...props}
    displayName="Generic ULN2003 28BYJ-48 Stepper Driver Board"
    mfn="Generic"
    footprint={GenericULN200328BYJ48StepperDriverBoard_FOOTPRINT}
    pinLabels={GenericULN200328BYJ48StepperDriverBoard_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VMOT",
      pin2: "GND",
      pin3: "VCC",
      pin4: "IN1",
      pin5: "IN2",
      pin6: "FAULT",
    }}
    pinAttributes={GenericULN200328BYJ48StepperDriverBoard_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.82}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VMOT", "GND", "VCC"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["IN1", "IN2", "FAULT"],
      },
    }}
  />
);

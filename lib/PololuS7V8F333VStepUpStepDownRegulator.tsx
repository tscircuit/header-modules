import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Pololu S7V8F3 3.3V Step-Up/Step-Down Regulator — carrier. */
export const PololuS7V8F333VStepUpStepDownRegulator_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Pololu S7V8F3 3.3V Step-Up Ste)" as const;

export const PololuS7V8F333VStepUpStepDownRegulator_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const PololuS7V8F333VStepUpStepDownRegulator_PIN_ATTRIBUTES = {
  VIN: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  VOUT: { providesPower: true, includeInBoardPinout: true },
  EN: { includeInBoardPinout: true },
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

export type PololuS7V8F333VStepUpStepDownRegulatorProps = Omit<
  ChipProps<typeof PololuS7V8F333VStepUpStepDownRegulator_PIN_LABELS>,
  FixedProps
>;

export const PololuS7V8F333VStepUpStepDownRegulator = (
  props: PololuS7V8F333VStepUpStepDownRegulatorProps,
) => (
  <chip
    {...props}
    displayName="Pololu S7V8F3 3.3V Step-Up/Step-Down Regulator"
    mfn="Pololu"
    footprint={PololuS7V8F333VStepUpStepDownRegulator_FOOTPRINT}
    pinLabels={PololuS7V8F333VStepUpStepDownRegulator_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={PololuS7V8F333VStepUpStepDownRegulator_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["VOUT", "EN"],
      },
    }}
  />
);

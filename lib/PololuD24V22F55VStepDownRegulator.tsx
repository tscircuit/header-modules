import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Pololu D24V22F5 5V Step-Down Regulator — carrier. */
export const PololuD24V22F55VStepDownRegulator_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Pololu D24V22F5 5V Step-Down)" as const;

export const PololuD24V22F55VStepDownRegulator_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const PololuD24V22F55VStepDownRegulator_PIN_ATTRIBUTES = {
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

export type PololuD24V22F55VStepDownRegulatorProps = Omit<
  ChipProps<typeof PololuD24V22F55VStepDownRegulator_PIN_LABELS>,
  FixedProps
>;

export const PololuD24V22F55VStepDownRegulator = (
  props: PololuD24V22F55VStepDownRegulatorProps,
) => (
  <chip
    {...props}
    displayName="Pololu D24V22F5 5V Step-Down Regulator"
    mfn="Pololu"
    footprint={PololuD24V22F55VStepDownRegulator_FOOTPRINT}
    pinLabels={PololuD24V22F55VStepDownRegulator_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={PololuD24V22F55VStepDownRegulator_PIN_ATTRIBUTES}
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

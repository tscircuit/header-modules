import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Pololu D36V6F12 12V Step-Down Regulator — carrier. */
export const PololuD36V6F1212VStepDownRegulator_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Pololu D36V6F12 12V Step-Down)" as const;

export const PololuD36V6F1212VStepDownRegulator_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const PololuD36V6F1212VStepDownRegulator_PIN_ATTRIBUTES = {
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

export type PololuD36V6F1212VStepDownRegulatorProps = Omit<
  ChipProps<typeof PololuD36V6F1212VStepDownRegulator_PIN_LABELS>,
  FixedProps
>;

export const PololuD36V6F1212VStepDownRegulator = (
  props: PololuD36V6F1212VStepDownRegulatorProps,
) => (
  <chip
    {...props}
    displayName="Pololu D36V6F12 12V Step-Down Regulator"
    mfn="Pololu"
    footprint={PololuD36V6F1212VStepDownRegulator_FOOTPRINT}
    pinLabels={PololuD36V6F1212VStepDownRegulator_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={PololuD36V6F1212VStepDownRegulator_PIN_ATTRIBUTES}
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

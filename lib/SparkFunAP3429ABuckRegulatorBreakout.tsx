import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun AP3429A Buck Regulator Breakout — adjustable/fixed variants. */
export const SparkFunAP3429ABuckRegulatorBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun AP3429A Buck)" as const;

export const SparkFunAP3429ABuckRegulatorBreakout_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const SparkFunAP3429ABuckRegulatorBreakout_PIN_ATTRIBUTES = {
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

export type SparkFunAP3429ABuckRegulatorBreakoutProps = Omit<
  ChipProps<typeof SparkFunAP3429ABuckRegulatorBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunAP3429ABuckRegulatorBreakout = (
  props: SparkFunAP3429ABuckRegulatorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun AP3429A Buck Regulator Breakout"
    mfn="SparkFun"
    footprint={SparkFunAP3429ABuckRegulatorBreakout_FOOTPRINT}
    pinLabels={SparkFunAP3429ABuckRegulatorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={SparkFunAP3429ABuckRegulatorBreakout_PIN_ATTRIBUTES}
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

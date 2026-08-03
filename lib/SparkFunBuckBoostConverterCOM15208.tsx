import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun Buck-Boost Converter COM-15208 — adjustable regulator. */
export const SparkFunBuckBoostConverterCOM15208_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun Buck-Boost COM-15208)" as const;

export const SparkFunBuckBoostConverterCOM15208_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const SparkFunBuckBoostConverterCOM15208_PIN_ATTRIBUTES = {
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

export type SparkFunBuckBoostConverterCOM15208Props = Omit<
  ChipProps<typeof SparkFunBuckBoostConverterCOM15208_PIN_LABELS>,
  FixedProps
>;

export const SparkFunBuckBoostConverterCOM15208 = (
  props: SparkFunBuckBoostConverterCOM15208Props,
) => (
  <chip
    {...props}
    displayName="SparkFun Buck-Boost Converter COM-15208"
    mfn="SparkFun"
    footprint={SparkFunBuckBoostConverterCOM15208_FOOTPRINT}
    pinLabels={SparkFunBuckBoostConverterCOM15208_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={SparkFunBuckBoostConverterCOM15208_PIN_ATTRIBUTES}
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

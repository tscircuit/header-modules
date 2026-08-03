import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic LM2596 Adjustable Buck Module — buck converter. */
export const GenericLM2596AdjustableBuckModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic LM2596 Adjustable Buck)" as const;

export const GenericLM2596AdjustableBuckModule_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const GenericLM2596AdjustableBuckModule_PIN_ATTRIBUTES = {
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

export type GenericLM2596AdjustableBuckModuleProps = Omit<
  ChipProps<typeof GenericLM2596AdjustableBuckModule_PIN_LABELS>,
  FixedProps
>;

export const GenericLM2596AdjustableBuckModule = (
  props: GenericLM2596AdjustableBuckModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic LM2596 Adjustable Buck Module"
    mfn="Generic"
    footprint={GenericLM2596AdjustableBuckModule_FOOTPRINT}
    pinLabels={GenericLM2596AdjustableBuckModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={GenericLM2596AdjustableBuckModule_PIN_ATTRIBUTES}
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

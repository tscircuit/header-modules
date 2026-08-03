import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic XL6009 Adjustable Buck-Boost Module — buck-boost converter. */
export const GenericXL6009AdjustableBuckBoostModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic XL6009 Adjustable Buck)" as const;

export const GenericXL6009AdjustableBuckBoostModule_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const GenericXL6009AdjustableBuckBoostModule_PIN_ATTRIBUTES = {
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

export type GenericXL6009AdjustableBuckBoostModuleProps = Omit<
  ChipProps<typeof GenericXL6009AdjustableBuckBoostModule_PIN_LABELS>,
  FixedProps
>;

export const GenericXL6009AdjustableBuckBoostModule = (
  props: GenericXL6009AdjustableBuckBoostModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic XL6009 Adjustable Buck-Boost Module"
    mfn="Generic"
    footprint={GenericXL6009AdjustableBuckBoostModule_FOOTPRINT}
    pinLabels={GenericXL6009AdjustableBuckBoostModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={GenericXL6009AdjustableBuckBoostModule_PIN_ATTRIBUTES}
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

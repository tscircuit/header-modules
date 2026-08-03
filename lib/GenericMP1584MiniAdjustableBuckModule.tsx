import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic MP1584 Mini Adjustable Buck Module — buck converter. */
export const GenericMP1584MiniAdjustableBuckModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic MP1584 Adjustable Buck)" as const;

export const GenericMP1584MiniAdjustableBuckModule_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const GenericMP1584MiniAdjustableBuckModule_PIN_ATTRIBUTES = {
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

export type GenericMP1584MiniAdjustableBuckModuleProps = Omit<
  ChipProps<typeof GenericMP1584MiniAdjustableBuckModule_PIN_LABELS>,
  FixedProps
>;

export const GenericMP1584MiniAdjustableBuckModule = (
  props: GenericMP1584MiniAdjustableBuckModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic MP1584 Mini Adjustable Buck Module"
    mfn="Generic"
    footprint={GenericMP1584MiniAdjustableBuckModule_FOOTPRINT}
    pinLabels={GenericMP1584MiniAdjustableBuckModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={GenericMP1584MiniAdjustableBuckModule_PIN_ATTRIBUTES}
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

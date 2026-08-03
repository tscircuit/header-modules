import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic MT3608 Adjustable Boost Module — boost converter. */
export const GenericMT3608AdjustableBoostModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic MT3608 Adjustable Boos)" as const;

export const GenericMT3608AdjustableBoostModule_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const GenericMT3608AdjustableBoostModule_PIN_ATTRIBUTES = {
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

export type GenericMT3608AdjustableBoostModuleProps = Omit<
  ChipProps<typeof GenericMT3608AdjustableBoostModule_PIN_LABELS>,
  FixedProps
>;

export const GenericMT3608AdjustableBoostModule = (
  props: GenericMT3608AdjustableBoostModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic MT3608 Adjustable Boost Module"
    mfn="Generic"
    footprint={GenericMT3608AdjustableBoostModule_FOOTPRINT}
    pinLabels={GenericMT3608AdjustableBoostModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={GenericMT3608AdjustableBoostModule_PIN_ATTRIBUTES}
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

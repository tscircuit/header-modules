import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic AMS1117-3.3 Regulator Module — linear regulator. */
export const GenericAMS111733RegulatorModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic AMS1117-3.3)" as const;

export const GenericAMS111733RegulatorModule_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const GenericAMS111733RegulatorModule_PIN_ATTRIBUTES = {
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

export type GenericAMS111733RegulatorModuleProps = Omit<
  ChipProps<typeof GenericAMS111733RegulatorModule_PIN_LABELS>,
  FixedProps
>;

export const GenericAMS111733RegulatorModule = (
  props: GenericAMS111733RegulatorModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic AMS1117-3.3 Regulator Module"
    mfn="Generic"
    footprint={GenericAMS111733RegulatorModule_FOOTPRINT}
    pinLabels={GenericAMS111733RegulatorModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={GenericAMS111733RegulatorModule_PIN_ATTRIBUTES}
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

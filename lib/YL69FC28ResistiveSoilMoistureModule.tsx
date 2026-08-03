import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** YL-69/FC-28 Resistive Soil Moisture Module — analog/digital. */
export const YL69FC28ResistiveSoilMoistureModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(YL-69 FC-28 Resistive Soil Moi)" as const;

export const YL69FC28ResistiveSoilMoistureModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["AO"],
  pin4: ["DO"],
} as const;

export const YL69FC28ResistiveSoilMoistureModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  AO: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  DO: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
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

export type YL69FC28ResistiveSoilMoistureModuleProps = Omit<
  ChipProps<typeof YL69FC28ResistiveSoilMoistureModule_PIN_LABELS>,
  FixedProps
>;

export const YL69FC28ResistiveSoilMoistureModule = (
  props: YL69FC28ResistiveSoilMoistureModuleProps,
) => (
  <chip
    {...props}
    displayName="YL-69/FC-28 Resistive Soil Moisture Module"
    mfn="Generic"
    footprint={YL69FC28ResistiveSoilMoistureModule_FOOTPRINT}
    pinLabels={YL69FC28ResistiveSoilMoistureModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "AO",
      pin4: "DO",
    }}
    pinAttributes={YL69FC28ResistiveSoilMoistureModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["AO", "DO"],
      },
    }}
  />
);

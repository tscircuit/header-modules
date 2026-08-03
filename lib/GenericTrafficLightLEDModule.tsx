import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic Traffic-Light LED Module — three digital channels. */
export const GenericTrafficLightLEDModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic Traffic-Light LED)" as const;

export const GenericTrafficLightLEDModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const GenericTrafficLightLEDModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  OUT: {
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

export type GenericTrafficLightLEDModuleProps = Omit<
  ChipProps<typeof GenericTrafficLightLEDModule_PIN_LABELS>,
  FixedProps
>;

export const GenericTrafficLightLEDModule = (
  props: GenericTrafficLightLEDModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic Traffic-Light LED Module"
    mfn="Generic"
    footprint={GenericTrafficLightLEDModule_FOOTPRINT}
    pinLabels={GenericTrafficLightLEDModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={GenericTrafficLightLEDModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["OUT"],
      },
    }}
  />
);

import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic SCT-013 Current Transformer Interface Module — analog. */
export const GenericSCT013CurrentTransformerInterfaceModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic SCT-013 Current Transf)" as const;

export const GenericSCT013CurrentTransformerInterfaceModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const GenericSCT013CurrentTransformerInterfaceModule_PIN_ATTRIBUTES = {
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

export type GenericSCT013CurrentTransformerInterfaceModuleProps = Omit<
  ChipProps<typeof GenericSCT013CurrentTransformerInterfaceModule_PIN_LABELS>,
  FixedProps
>;

export const GenericSCT013CurrentTransformerInterfaceModule = (
  props: GenericSCT013CurrentTransformerInterfaceModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic SCT-013 Current Transformer Interface Module"
    mfn="Generic"
    footprint={GenericSCT013CurrentTransformerInterfaceModule_FOOTPRINT}
    pinLabels={GenericSCT013CurrentTransformerInterfaceModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={
      GenericSCT013CurrentTransformerInterfaceModule_PIN_ATTRIBUTES
    }
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

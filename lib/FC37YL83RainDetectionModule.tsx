import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** FC-37/YL-83 Rain Detection Module — analog/digital. */
export const FC37YL83RainDetectionModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(FC-37 YL-83 Rain Detection)" as const;

export const FC37YL83RainDetectionModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["AO"],
  pin4: ["DO"],
} as const;

export const FC37YL83RainDetectionModule_PIN_ATTRIBUTES = {
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

export type FC37YL83RainDetectionModuleProps = Omit<
  ChipProps<typeof FC37YL83RainDetectionModule_PIN_LABELS>,
  FixedProps
>;

export const FC37YL83RainDetectionModule = (
  props: FC37YL83RainDetectionModuleProps,
) => (
  <chip
    {...props}
    displayName="FC-37/YL-83 Rain Detection Module"
    mfn="Generic"
    footprint={FC37YL83RainDetectionModule_FOOTPRINT}
    pinLabels={FC37YL83RainDetectionModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "AO",
      pin4: "DO",
    }}
    pinAttributes={FC37YL83RainDetectionModule_PIN_ATTRIBUTES}
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

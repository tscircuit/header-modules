import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun Panasonic EKMC PIR Breakout — digital. */
export const SparkFunPanasonicEKMCPIRBreakout_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun Panasonic EKMC PIR)" as const;

export const SparkFunPanasonicEKMCPIRBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const SparkFunPanasonicEKMCPIRBreakout_PIN_ATTRIBUTES = {
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

export type SparkFunPanasonicEKMCPIRBreakoutProps = Omit<
  ChipProps<typeof SparkFunPanasonicEKMCPIRBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunPanasonicEKMCPIRBreakout = (
  props: SparkFunPanasonicEKMCPIRBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun Panasonic EKMC PIR Breakout"
    mfn="SparkFun"
    footprint={SparkFunPanasonicEKMCPIRBreakout_FOOTPRINT}
    pinLabels={SparkFunPanasonicEKMCPIRBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={SparkFunPanasonicEKMCPIRBreakout_PIN_ATTRIBUTES}
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

import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun AD8232 Single-Lead ECG Monitor Breakout — analog. */
export const SparkFunAD8232SingleLeadECGMonitorBreakout_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun AD8232 Single-Lead EC)" as const;

export const SparkFunAD8232SingleLeadECGMonitorBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const SparkFunAD8232SingleLeadECGMonitorBreakout_PIN_ATTRIBUTES = {
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

export type SparkFunAD8232SingleLeadECGMonitorBreakoutProps = Omit<
  ChipProps<typeof SparkFunAD8232SingleLeadECGMonitorBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunAD8232SingleLeadECGMonitorBreakout = (
  props: SparkFunAD8232SingleLeadECGMonitorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun AD8232 Single-Lead ECG Monitor Breakout"
    mfn="SparkFun"
    footprint={SparkFunAD8232SingleLeadECGMonitorBreakout_FOOTPRINT}
    pinLabels={SparkFunAD8232SingleLeadECGMonitorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={SparkFunAD8232SingleLeadECGMonitorBreakout_PIN_ATTRIBUTES}
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

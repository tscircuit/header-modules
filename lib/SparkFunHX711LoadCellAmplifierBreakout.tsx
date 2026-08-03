import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun HX711 Load Cell Amplifier Breakout — two-wire digital. */
export const SparkFunHX711LoadCellAmplifierBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun HX711 Load Cell Ampli)" as const;

export const SparkFunHX711LoadCellAmplifierBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["DOUT"],
  pin4: ["SCK"],
} as const;

export const SparkFunHX711LoadCellAmplifierBreakout_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  DOUT: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SCK: {
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

export type SparkFunHX711LoadCellAmplifierBreakoutProps = Omit<
  ChipProps<typeof SparkFunHX711LoadCellAmplifierBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunHX711LoadCellAmplifierBreakout = (
  props: SparkFunHX711LoadCellAmplifierBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun HX711 Load Cell Amplifier Breakout"
    mfn="SparkFun"
    footprint={SparkFunHX711LoadCellAmplifierBreakout_FOOTPRINT}
    pinLabels={SparkFunHX711LoadCellAmplifierBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "DOUT",
      pin4: "SCK",
    }}
    pinAttributes={SparkFunHX711LoadCellAmplifierBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["DOUT", "SCK"],
      },
    }}
  />
);

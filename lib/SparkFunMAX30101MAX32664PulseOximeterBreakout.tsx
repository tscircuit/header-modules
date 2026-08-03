import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun MAX30101 + MAX32664 Pulse Oximeter Breakout — I2C. */
export const SparkFunMAX30101MAX32664PulseOximeterBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun MAX30101 + MAX32664 P)" as const;

export const SparkFunMAX30101MAX32664PulseOximeterBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const SparkFunMAX30101MAX32664PulseOximeterBreakout_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  SDA: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["i2c_sda"],
  },
  SCL: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["i2c_scl"],
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

export type SparkFunMAX30101MAX32664PulseOximeterBreakoutProps = Omit<
  ChipProps<typeof SparkFunMAX30101MAX32664PulseOximeterBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunMAX30101MAX32664PulseOximeterBreakout = (
  props: SparkFunMAX30101MAX32664PulseOximeterBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun MAX30101 + MAX32664 Pulse Oximeter Breakout"
    mfn="SparkFun"
    footprint={SparkFunMAX30101MAX32664PulseOximeterBreakout_FOOTPRINT}
    pinLabels={SparkFunMAX30101MAX32664PulseOximeterBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={SparkFunMAX30101MAX32664PulseOximeterBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "SCL"],
      },
    }}
  />
);

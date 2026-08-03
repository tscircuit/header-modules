import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun RV-8803 RTC Breakout — I2C. */
export const SparkFunRV8803RTCBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun RV-8803 RTC)" as const;

export const SparkFunRV8803RTCBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const SparkFunRV8803RTCBreakout_PIN_ATTRIBUTES = {
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

export type SparkFunRV8803RTCBreakoutProps = Omit<
  ChipProps<typeof SparkFunRV8803RTCBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunRV8803RTCBreakout = (
  props: SparkFunRV8803RTCBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun RV-8803 RTC Breakout"
    mfn="SparkFun"
    footprint={SparkFunRV8803RTCBreakout_FOOTPRINT}
    pinLabels={SparkFunRV8803RTCBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={SparkFunRV8803RTCBreakout_PIN_ATTRIBUTES}
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

import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun INA237 Power Monitor Breakout — I2C. */
export const SparkFunINA237PowerMonitorBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun INA237 Power Monitor)" as const;

export const SparkFunINA237PowerMonitorBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const SparkFunINA237PowerMonitorBreakout_PIN_ATTRIBUTES = {
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

export type SparkFunINA237PowerMonitorBreakoutProps = Omit<
  ChipProps<typeof SparkFunINA237PowerMonitorBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunINA237PowerMonitorBreakout = (
  props: SparkFunINA237PowerMonitorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun INA237 Power Monitor Breakout"
    mfn="SparkFun"
    footprint={SparkFunINA237PowerMonitorBreakout_FOOTPRINT}
    pinLabels={SparkFunINA237PowerMonitorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={SparkFunINA237PowerMonitorBreakout_PIN_ATTRIBUTES}
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

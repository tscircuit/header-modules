import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun PCA9615 Differential I2C Breakout — differential I2C. */
export const SparkFunPCA9615DifferentialI2CBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun PCA9615 Differential)" as const;

export const SparkFunPCA9615DifferentialI2CBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const SparkFunPCA9615DifferentialI2CBreakout_PIN_ATTRIBUTES = {
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

export type SparkFunPCA9615DifferentialI2CBreakoutProps = Omit<
  ChipProps<typeof SparkFunPCA9615DifferentialI2CBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunPCA9615DifferentialI2CBreakout = (
  props: SparkFunPCA9615DifferentialI2CBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun PCA9615 Differential I2C Breakout"
    mfn="SparkFun"
    footprint={SparkFunPCA9615DifferentialI2CBreakout_FOOTPRINT}
    pinLabels={SparkFunPCA9615DifferentialI2CBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={SparkFunPCA9615DifferentialI2CBreakout_PIN_ATTRIBUTES}
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

import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun BQ27441 LiPo Fuel Gauge Breakout — I2C. */
export const SparkFunBQ27441LiPoFuelGaugeBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun BQ27441 LiPo Fuel Gau)" as const;

export const SparkFunBQ27441LiPoFuelGaugeBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const SparkFunBQ27441LiPoFuelGaugeBreakout_PIN_ATTRIBUTES = {
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

export type SparkFunBQ27441LiPoFuelGaugeBreakoutProps = Omit<
  ChipProps<typeof SparkFunBQ27441LiPoFuelGaugeBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunBQ27441LiPoFuelGaugeBreakout = (
  props: SparkFunBQ27441LiPoFuelGaugeBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun BQ27441 LiPo Fuel Gauge Breakout"
    mfn="SparkFun"
    footprint={SparkFunBQ27441LiPoFuelGaugeBreakout_FOOTPRINT}
    pinLabels={SparkFunBQ27441LiPoFuelGaugeBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={SparkFunBQ27441LiPoFuelGaugeBreakout_PIN_ATTRIBUTES}
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

import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit MAX17048 LiPo Fuel Gauge Breakout — I2C. */
export const AdafruitMAX17048LiPoFuelGaugeBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit MAX17048 LiPo Fuel Ga)" as const;

export const AdafruitMAX17048LiPoFuelGaugeBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitMAX17048LiPoFuelGaugeBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitMAX17048LiPoFuelGaugeBreakoutProps = Omit<
  ChipProps<typeof AdafruitMAX17048LiPoFuelGaugeBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitMAX17048LiPoFuelGaugeBreakout = (
  props: AdafruitMAX17048LiPoFuelGaugeBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit MAX17048 LiPo Fuel Gauge Breakout"
    mfn="Adafruit"
    footprint={AdafruitMAX17048LiPoFuelGaugeBreakout_FOOTPRINT}
    pinLabels={AdafruitMAX17048LiPoFuelGaugeBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={AdafruitMAX17048LiPoFuelGaugeBreakout_PIN_ATTRIBUTES}
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

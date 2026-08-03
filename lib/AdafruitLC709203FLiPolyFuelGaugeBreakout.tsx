import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit LC709203F LiPoly Fuel Gauge Breakout — I2C. */
export const AdafruitLC709203FLiPolyFuelGaugeBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit LC709203F LiPoly Fuel)" as const;

export const AdafruitLC709203FLiPolyFuelGaugeBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitLC709203FLiPolyFuelGaugeBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitLC709203FLiPolyFuelGaugeBreakoutProps = Omit<
  ChipProps<typeof AdafruitLC709203FLiPolyFuelGaugeBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitLC709203FLiPolyFuelGaugeBreakout = (
  props: AdafruitLC709203FLiPolyFuelGaugeBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit LC709203F LiPoly Fuel Gauge Breakout"
    mfn="Adafruit"
    footprint={AdafruitLC709203FLiPolyFuelGaugeBreakout_FOOTPRINT}
    pinLabels={AdafruitLC709203FLiPolyFuelGaugeBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={AdafruitLC709203FLiPolyFuelGaugeBreakout_PIN_ATTRIBUTES}
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

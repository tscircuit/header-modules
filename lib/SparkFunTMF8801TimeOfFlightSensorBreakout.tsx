import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun TMF8801 Time-of-Flight Sensor Breakout — I2C. */
export const SparkFunTMF8801TimeOfFlightSensorBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun TMF8801 Time-of-Fligh)" as const;

export const SparkFunTMF8801TimeOfFlightSensorBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const SparkFunTMF8801TimeOfFlightSensorBreakout_PIN_ATTRIBUTES = {
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

export type SparkFunTMF8801TimeOfFlightSensorBreakoutProps = Omit<
  ChipProps<typeof SparkFunTMF8801TimeOfFlightSensorBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunTMF8801TimeOfFlightSensorBreakout = (
  props: SparkFunTMF8801TimeOfFlightSensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun TMF8801 Time-of-Flight Sensor Breakout"
    mfn="SparkFun"
    footprint={SparkFunTMF8801TimeOfFlightSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunTMF8801TimeOfFlightSensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={SparkFunTMF8801TimeOfFlightSensorBreakout_PIN_ATTRIBUTES}
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

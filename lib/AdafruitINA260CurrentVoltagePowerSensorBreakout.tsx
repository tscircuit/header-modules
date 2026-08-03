import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit INA260 Current/Voltage/Power Sensor Breakout — I2C. */
export const AdafruitINA260CurrentVoltagePowerSensorBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit INA260 Current Voltag)" as const;

export const AdafruitINA260CurrentVoltagePowerSensorBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitINA260CurrentVoltagePowerSensorBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitINA260CurrentVoltagePowerSensorBreakoutProps = Omit<
  ChipProps<typeof AdafruitINA260CurrentVoltagePowerSensorBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitINA260CurrentVoltagePowerSensorBreakout = (
  props: AdafruitINA260CurrentVoltagePowerSensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit INA260 Current/Voltage/Power Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitINA260CurrentVoltagePowerSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitINA260CurrentVoltagePowerSensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={
      AdafruitINA260CurrentVoltagePowerSensorBreakout_PIN_ATTRIBUTES
    }
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

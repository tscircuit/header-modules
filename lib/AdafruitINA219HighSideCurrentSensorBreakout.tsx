import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit INA219 High-Side Current Sensor Breakout — I2C. */
export const AdafruitINA219HighSideCurrentSensorBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit INA219 High-Side Curr)" as const;

export const AdafruitINA219HighSideCurrentSensorBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitINA219HighSideCurrentSensorBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitINA219HighSideCurrentSensorBreakoutProps = Omit<
  ChipProps<typeof AdafruitINA219HighSideCurrentSensorBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitINA219HighSideCurrentSensorBreakout = (
  props: AdafruitINA219HighSideCurrentSensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit INA219 High-Side Current Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitINA219HighSideCurrentSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitINA219HighSideCurrentSensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={AdafruitINA219HighSideCurrentSensorBreakout_PIN_ATTRIBUTES}
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

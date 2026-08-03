import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit TSL2591 High Dynamic Range Light Sensor Breakout. Header order: VIN, V3_3, GND, SCL, SDA, INT. */
export const AdafruitTSL2591HighDynamicRangeLightSensorBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(TSL2591)" as const;

export const AdafruitTSL2591HighDynamicRangeLightSensorBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["V3_3", "3V3", "3.3V", "+3V3"],
  pin3: ["GND"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["SDA", "SDI", "DATA"],
  pin6: ["INT", "INTERRUPT", "ALERT"],
} as const;

const POWER_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const POWER_OUTPUT = {
  providesPower: true,
  providesVoltage: "3.3V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap;
const I2C_SCL = {
  ...GPIO,
  capabilities: ["i2c_scl"],
} as const satisfies PinAttributeMap;
const I2C_SDA = {
  ...GPIO,
  capabilities: ["i2c_sda"],
} as const satisfies PinAttributeMap;

export const AdafruitTSL2591HighDynamicRangeLightSensorBreakout_PIN_ATTRIBUTES =
  {
    VIN: POWER_INPUT,
    V3_3: POWER_OUTPUT,
    GND: GROUND,
    SCL: I2C_SCL,
    SDA: I2C_SDA,
    INT: GPIO,
  } as const satisfies Record<string, PinAttributeMap>;

type FixedProps =
  | "datasheetUrl"
  | "displayName"
  | "footprint"
  | "manufacturerPartNumber"
  | "mfn"
  | "pinAttributes"
  | "pinLabels"
  | "pcbPinLabels"
  | "schHeight"
  | "schPinArrangement"
  | "schWidth";

export type AdafruitTSL2591HighDynamicRangeLightSensorBreakoutProps = Omit<
  ChipProps<
    typeof AdafruitTSL2591HighDynamicRangeLightSensorBreakout_PIN_LABELS
  >,
  FixedProps
>;

export const AdafruitTSL2591HighDynamicRangeLightSensorBreakout = (
  props: AdafruitTSL2591HighDynamicRangeLightSensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit TSL2591 High Dynamic Range Light Sensor Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-tsl2591/pinouts"
    footprint={AdafruitTSL2591HighDynamicRangeLightSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitTSL2591HighDynamicRangeLightSensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "V3_3",
      pin3: "GND",
      pin4: "SCL",
      pin5: "SDA",
      pin6: "INT",
    }}
    pinAttributes={
      AdafruitTSL2591HighDynamicRangeLightSensorBreakout_PIN_ATTRIBUTES
    }
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "V3_3", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SCL", "SDA", "INT"],
      },
    }}
  />
);

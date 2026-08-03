import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit TMP117 High-Accuracy Temperature Breakout. Header order: VIN, GND, SCL, SDA, INT, ADDR. */
export const AdafruitTMP117HighAccuracyTemperatureBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(TMP117)" as const;

export const AdafruitTMP117HighAccuracyTemperatureBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["GND"],
  pin3: ["SCL", "SCK", "CLOCK"],
  pin4: ["SDA", "SDI", "DATA"],
  pin5: ["INT", "INTERRUPT", "ALERT"],
  pin6: ["ADDR", "ADDRESS"],
} as const;

const POWER_INPUT = {
  requiresPower: true,
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
const CONTROL = {
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const AdafruitTMP117HighAccuracyTemperatureBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  INT: GPIO,
  ADDR: CONTROL,
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

export type AdafruitTMP117HighAccuracyTemperatureBreakoutProps = Omit<
  ChipProps<typeof AdafruitTMP117HighAccuracyTemperatureBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitTMP117HighAccuracyTemperatureBreakout = (
  props: AdafruitTMP117HighAccuracyTemperatureBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit TMP117 High-Accuracy Temperature Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-tmp117-high-accuracy-temperature-sensor/pinouts"
    footprint={AdafruitTMP117HighAccuracyTemperatureBreakout_FOOTPRINT}
    pinLabels={AdafruitTMP117HighAccuracyTemperatureBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "SCL",
      pin4: "SDA",
      pin5: "INT",
      pin6: "ADDR",
    }}
    pinAttributes={AdafruitTMP117HighAccuracyTemperatureBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "GND", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "INT", "ADDR"],
      },
    }}
  />
);

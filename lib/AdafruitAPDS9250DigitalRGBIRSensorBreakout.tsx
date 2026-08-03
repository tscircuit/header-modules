import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit APDS9250 Digital RGB/IR Sensor Breakout with its documented 0.1 in I2C header interface. */
export const AdafruitAPDS9250DigitalRGBIRSensorBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(APDS9250)" as const;

export const AdafruitAPDS9250DigitalRGBIRSensorBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD", "V3_3"],
  pin2: ["GND"],
  pin3: ["SDA", "SDI", "DATA"],
  pin4: ["SCL", "SCK", "CLOCK"],
} as const;

const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap;
const I2C_SDA = {
  ...GPIO,
  capabilities: ["i2c_sda"],
} as const satisfies PinAttributeMap;
const I2C_SCL = {
  ...GPIO,
  capabilities: ["i2c_scl"],
} as const satisfies PinAttributeMap;
const POWER_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const AdafruitAPDS9250DigitalRGBIRSensorBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
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

export type AdafruitAPDS9250DigitalRGBIRSensorBreakoutProps = Omit<
  ChipProps<typeof AdafruitAPDS9250DigitalRGBIRSensorBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitAPDS9250DigitalRGBIRSensorBreakout = (
  props: AdafruitAPDS9250DigitalRGBIRSensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit APDS9250 Digital RGB/IR Sensor Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-apds9250-10-bit-rgb-ir-ambient-light-sensor/pinouts"
    footprint={AdafruitAPDS9250DigitalRGBIRSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitAPDS9250DigitalRGBIRSensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={AdafruitAPDS9250DigitalRGBIRSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.4}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["GND", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "SDA"],
      },
    }}
  />
);

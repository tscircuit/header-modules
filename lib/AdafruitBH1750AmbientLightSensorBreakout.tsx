import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit BH1750 Ambient Light Sensor Breakout. Header order: VIN, V3_3, GND, SCL, SDA, ADDR. */
export const AdafruitBH1750AmbientLightSensorBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(BH1750)" as const;

export const AdafruitBH1750AmbientLightSensorBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["V3_3", "3V3", "3.3V", "+3V3"],
  pin3: ["GND"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["SDA", "SDI", "DATA"],
  pin6: ["ADDR", "ADDRESS"],
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
const CONTROL = {
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const AdafruitBH1750AmbientLightSensorBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  V3_3: POWER_OUTPUT,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
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

export type AdafruitBH1750AmbientLightSensorBreakoutProps = Omit<
  ChipProps<typeof AdafruitBH1750AmbientLightSensorBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitBH1750AmbientLightSensorBreakout = (
  props: AdafruitBH1750AmbientLightSensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit BH1750 Ambient Light Sensor Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-bh1750-ambient-light-sensor/pinouts"
    footprint={AdafruitBH1750AmbientLightSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitBH1750AmbientLightSensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "V3_3",
      pin3: "GND",
      pin4: "SCL",
      pin5: "SDA",
      pin6: "ADDR",
    }}
    pinAttributes={AdafruitBH1750AmbientLightSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "V3_3", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SCL", "SDA", "ADDR"],
      },
    }}
  />
);

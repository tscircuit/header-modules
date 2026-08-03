import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit MMA8451 Triple-Axis Accelerometer Breakout. Header order: SA0, SDA, SCL, INT1, INT2, V3_3, GND, VIN. */
export const AdafruitMMA8451TripleAxisAccelerometerBreakout_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(MMA8451)" as const;

export const AdafruitMMA8451TripleAxisAccelerometerBreakout_PIN_LABELS = {
  pin1: ["SA0", "ADDR", "ADDRESS"],
  pin2: ["SDA", "SDI", "DATA"],
  pin3: ["SCL", "SCK", "CLOCK"],
  pin4: ["INT1", "INTERRUPT1"],
  pin5: ["INT2", "INTERRUPT2"],
  pin6: ["V3_3", "3V3", "+3V3", "3.3V"],
  pin7: ["GND"],
  pin8: ["VIN", "VCC", "VDD"],
} as const;

const CONTROL = {
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
const I2C_SDA = {
  ...GPIO,
  capabilities: ["i2c_sda"],
} as const satisfies PinAttributeMap;
const I2C_SCL = {
  ...GPIO,
  capabilities: ["i2c_scl"],
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
const POWER_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const AdafruitMMA8451TripleAxisAccelerometerBreakout_PIN_ATTRIBUTES = {
  SA0: CONTROL,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  INT1: GPIO,
  INT2: GPIO,
  V3_3: POWER_OUTPUT,
  GND: GROUND,
  VIN: POWER_INPUT,
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

export type AdafruitMMA8451TripleAxisAccelerometerBreakoutProps = Omit<
  ChipProps<typeof AdafruitMMA8451TripleAxisAccelerometerBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitMMA8451TripleAxisAccelerometerBreakout = (
  props: AdafruitMMA8451TripleAxisAccelerometerBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit MMA8451 Triple-Axis Accelerometer Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-mma8451-10dof-motion-sensor/pinouts"
    footprint={AdafruitMMA8451TripleAxisAccelerometerBreakout_FOOTPRINT}
    pinLabels={AdafruitMMA8451TripleAxisAccelerometerBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "SA0",
      pin2: "SDA",
      pin3: "SCL",
      pin4: "INT1",
      pin5: "INT2",
      pin6: "V3_3",
      pin7: "GND",
      pin8: "VIN",
    }}
    pinAttributes={
      AdafruitMMA8451TripleAxisAccelerometerBreakout_PIN_ATTRIBUTES
    }
    schWidth={2.8}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["SA0", "SDA", "SCL", "INT1"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["INT2", "V3_3", "GND", "VIN"],
      },
    }}
  />
);

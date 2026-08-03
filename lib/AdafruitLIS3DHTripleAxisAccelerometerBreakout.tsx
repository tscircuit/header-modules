import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit LIS3DH Triple-Axis Accelerometer Breakout. Header order: VIN, V3_3, GND, SCL, SDA, INT1, CS, SDO, ADC1, ADC2, ADC3, INT2. */
export const AdafruitLIS3DHTripleAxisAccelerometerBreakout_FOOTPRINT =
  "headermodule12_rows2_p2.54mm_py12.7mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(LIS3DH)" as const;

export const AdafruitLIS3DHTripleAxisAccelerometerBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["V3_3", "3V3", "3.3V", "3Vo"],
  pin3: ["GND"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["SDA", "SDI", "DATA"],
  pin6: ["INT1", "INTERRUPT1"],
  pin7: ["CS", "!CS", "nCS"],
  pin8: ["SDO", "ADR", "ADDRESS", "MISO"],
  pin9: ["ADC1", "AUX1"],
  pin10: ["ADC2", "AUX2"],
  pin11: ["ADC3", "AUX3"],
  pin12: ["INT2", "INTERRUPT2"],
} as const;

const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap;
const ANALOG = {
  isGpio: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const I2C_SDA = {
  ...GPIO,
  capabilities: ["i2c_sda"],
} as const satisfies PinAttributeMap;
const I2C_SCL = {
  ...GPIO,
  capabilities: ["i2c_scl"],
} as const satisfies PinAttributeMap;
const SPI_CS = {
  ...GPIO,
  capabilities: ["spi_cs"],
} as const satisfies PinAttributeMap;
const POWER_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const POWER_OUTPUT_3V3 = {
  providesPower: true,
  providesVoltage: "3.3V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const CONTROL = {
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const AdafruitLIS3DHTripleAxisAccelerometerBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  V3_3: POWER_OUTPUT_3V3,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  INT1: GPIO,
  CS: SPI_CS,
  SDO: CONTROL,
  ADC1: ANALOG,
  ADC2: ANALOG,
  ADC3: ANALOG,
  INT2: GPIO,
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

export type AdafruitLIS3DHTripleAxisAccelerometerBreakoutProps = Omit<
  ChipProps<typeof AdafruitLIS3DHTripleAxisAccelerometerBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitLIS3DHTripleAxisAccelerometerBreakout = (
  props: AdafruitLIS3DHTripleAxisAccelerometerBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit LIS3DH Triple-Axis Accelerometer Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-lis3dh-triple-axis-accelerometer-breakout/pinouts"
    footprint={AdafruitLIS3DHTripleAxisAccelerometerBreakout_FOOTPRINT}
    pinLabels={AdafruitLIS3DHTripleAxisAccelerometerBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "V3_3",
      pin3: "GND",
      pin4: "SCL",
      pin5: "SDA",
      pin6: "INT1",
      pin7: "CS",
      pin8: "SDO",
      pin9: "ADC1",
      pin10: "ADC2",
      pin11: "ADC3",
      pin12: "INT2",
    }}
    pinAttributes={AdafruitLIS3DHTripleAxisAccelerometerBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={3.0}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "V3_3", "GND", "SCL", "SDA", "INT1"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["CS", "SDO", "ADC1", "ADC2", "ADC3", "INT2"],
      },
    }}
  />
);

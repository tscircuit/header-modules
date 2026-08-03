import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun MLX90393 Triple-Axis Magnetometer Breakout. Header order: VIN, V3_3, GND, SCL, SDA, INT, CS, SDO. */
export const SparkFunMLX90393TripleAxisMagnetometerBreakout_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(MLX90393)" as const;

export const SparkFunMLX90393TripleAxisMagnetometerBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["V3_3", "3V3", "3.3V", "3Vo"],
  pin3: ["GND"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["SDA", "SDI", "DATA"],
  pin6: ["INT", "INTERRUPT"],
  pin7: ["CS", "!CS", "nCS"],
  pin8: ["SDO", "ADR", "ADDRESS", "MISO"],
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

export const SparkFunMLX90393TripleAxisMagnetometerBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  V3_3: POWER_OUTPUT_3V3,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  INT: GPIO,
  CS: SPI_CS,
  SDO: CONTROL,
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

export type SparkFunMLX90393TripleAxisMagnetometerBreakoutProps = Omit<
  ChipProps<typeof SparkFunMLX90393TripleAxisMagnetometerBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunMLX90393TripleAxisMagnetometerBreakout = (
  props: SparkFunMLX90393TripleAxisMagnetometerBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun MLX90393 Triple-Axis Magnetometer Breakout"
    mfn="SparkFun"
    datasheetUrl="https://learn.sparkfun.com/tutorials/qwiic-mlx90393-triple-axis-magnetometer-hookup-guide/all"
    footprint={SparkFunMLX90393TripleAxisMagnetometerBreakout_FOOTPRINT}
    pinLabels={SparkFunMLX90393TripleAxisMagnetometerBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "V3_3",
      pin3: "GND",
      pin4: "SCL",
      pin5: "SDA",
      pin6: "INT",
      pin7: "CS",
      pin8: "SDO",
    }}
    pinAttributes={
      SparkFunMLX90393TripleAxisMagnetometerBreakout_PIN_ATTRIBUTES
    }
    schWidth={2.8}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "V3_3", "GND", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "INT", "CS", "SDO"],
      },
    }}
  />
);

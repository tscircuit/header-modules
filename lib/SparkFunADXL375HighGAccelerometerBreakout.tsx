import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun ADXL375 High-g Accelerometer Breakout. Header order: V3_3, GND, SDA, SCL, CS, SDO, INT1, INT2. */
export const SparkFunADXL375HighGAccelerometerBreakout_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(ADXL375)" as const;

export const SparkFunADXL375HighGAccelerometerBreakout_PIN_LABELS = {
  pin1: ["V3_3", "3V3", "VCC"],
  pin2: ["GND"],
  pin3: ["SDA", "SDI", "DATA"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["CS", "!CS", "nCS"],
  pin6: ["SDO", "ADR", "ADDRESS", "MISO"],
  pin7: ["INT1", "INTERRUPT1"],
  pin8: ["INT2", "INTERRUPT2"],
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
const POWER_INPUT_3V3 = {
  requiresPower: true,
  requiresVoltage: "3.3V",
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

export const SparkFunADXL375HighGAccelerometerBreakout_PIN_ATTRIBUTES = {
  V3_3: POWER_INPUT_3V3,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  CS: SPI_CS,
  SDO: CONTROL,
  INT1: GPIO,
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

export type SparkFunADXL375HighGAccelerometerBreakoutProps = Omit<
  ChipProps<typeof SparkFunADXL375HighGAccelerometerBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunADXL375HighGAccelerometerBreakout = (
  props: SparkFunADXL375HighGAccelerometerBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun ADXL375 High-g Accelerometer Breakout"
    mfn="SparkFun"
    datasheetUrl="https://learn.sparkfun.com/tutorials/qwiic-adxl375-hookup-guide/all"
    footprint={SparkFunADXL375HighGAccelerometerBreakout_FOOTPRINT}
    pinLabels={SparkFunADXL375HighGAccelerometerBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "V3_3",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
      pin5: "CS",
      pin6: "SDO",
      pin7: "INT1",
      pin8: "INT2",
    }}
    pinAttributes={SparkFunADXL375HighGAccelerometerBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["V3_3", "GND", "SDA", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["CS", "SDO", "INT1", "INT2"],
      },
    }}
  />
);

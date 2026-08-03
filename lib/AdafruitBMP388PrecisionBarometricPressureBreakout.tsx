import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit BMP388 Precision Barometric Pressure Breakout. Header order: VIN, V3_3, GND, SCL, SDO, SDA, CS, INT. */
export const AdafruitBMP388PrecisionBarometricPressureBreakout_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(BMP388)" as const;

export const AdafruitBMP388PrecisionBarometricPressureBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["V3_3", "3V3", "3.3V", "3Vo"],
  pin3: ["GND"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["SDO", "ADR", "ADDRESS", "MISO"],
  pin6: ["SDA", "SDI", "DATA", "MOSI"],
  pin7: ["CS", "!CS", "nCS"],
  pin8: ["INT", "INTERRUPT"],
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

export const AdafruitBMP388PrecisionBarometricPressureBreakout_PIN_ATTRIBUTES =
  {
    VIN: POWER_INPUT,
    V3_3: POWER_OUTPUT_3V3,
    GND: GROUND,
    SCL: I2C_SCL,
    SDO: CONTROL,
    SDA: I2C_SDA,
    CS: SPI_CS,
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

export type AdafruitBMP388PrecisionBarometricPressureBreakoutProps = Omit<
  ChipProps<
    typeof AdafruitBMP388PrecisionBarometricPressureBreakout_PIN_LABELS
  >,
  FixedProps
>;

export const AdafruitBMP388PrecisionBarometricPressureBreakout = (
  props: AdafruitBMP388PrecisionBarometricPressureBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit BMP388 Precision Barometric Pressure Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-bmp388/pinouts"
    footprint={AdafruitBMP388PrecisionBarometricPressureBreakout_FOOTPRINT}
    pinLabels={AdafruitBMP388PrecisionBarometricPressureBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "V3_3",
      pin3: "GND",
      pin4: "SCL",
      pin5: "SDO",
      pin6: "SDA",
      pin7: "CS",
      pin8: "INT",
    }}
    pinAttributes={
      AdafruitBMP388PrecisionBarometricPressureBreakout_PIN_ATTRIBUTES
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
        pins: ["SDO", "SDA", "CS", "INT"],
      },
    }}
  />
);

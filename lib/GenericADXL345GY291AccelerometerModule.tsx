import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic ADXL345 GY-291 Accelerometer Module. Header order: VCC, GND, SCL, SDA, CS, SDO, INT1, INT2. */
export const GenericADXL345GY291AccelerometerModule_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(ADXL345-GY291)" as const;

export const GenericADXL345GY291AccelerometerModule_PIN_LABELS = {
  pin1: ["VCC", "VIN", "VDD"],
  pin2: ["GND"],
  pin3: ["SCL", "SCK", "CLOCK"],
  pin4: ["SDA", "SDI", "DATA"],
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
const POWER_INPUT = {
  requiresPower: true,
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

export const GenericADXL345GY291AccelerometerModule_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
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

export type GenericADXL345GY291AccelerometerModuleProps = Omit<
  ChipProps<typeof GenericADXL345GY291AccelerometerModule_PIN_LABELS>,
  FixedProps
>;

export const GenericADXL345GY291AccelerometerModule = (
  props: GenericADXL345GY291AccelerometerModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic ADXL345 GY-291 Accelerometer Module"
    mfn="Generic"
    datasheetUrl="https://www.analog.com/media/en/technical-documentation/data-sheets/ADXL345.pdf"
    footprint={GenericADXL345GY291AccelerometerModule_FOOTPRINT}
    pinLabels={GenericADXL345GY291AccelerometerModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SCL",
      pin4: "SDA",
      pin5: "CS",
      pin6: "SDO",
      pin7: "INT1",
      pin8: "INT2",
    }}
    pinAttributes={GenericADXL345GY291AccelerometerModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "SCL", "SDA"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["CS", "SDO", "INT1", "INT2"],
      },
    }}
  />
);

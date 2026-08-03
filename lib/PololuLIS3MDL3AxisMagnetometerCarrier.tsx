import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Pololu LIS3MDL 3-Axis Magnetometer Carrier. Header order: VIN, GND, SDA, SCL, INT, CS, SDO, V3_3. */
export const PololuLIS3MDL3AxisMagnetometerCarrier_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(LIS3MDL)" as const;

export const PololuLIS3MDL3AxisMagnetometerCarrier_PIN_LABELS = {
  pin1: ["VIN", "VCC"],
  pin2: ["GND"],
  pin3: ["SDA", "SDI", "DATA"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["INT", "INTERRUPT"],
  pin6: ["CS", "!CS", "nCS"],
  pin7: ["SDO", "ADR", "ADDRESS", "MISO"],
  pin8: ["V3_3", "VDD", "3V3", "3.3V"],
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

export const PololuLIS3MDL3AxisMagnetometerCarrier_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  INT: GPIO,
  CS: SPI_CS,
  SDO: CONTROL,
  V3_3: POWER_OUTPUT_3V3,
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

export type PololuLIS3MDL3AxisMagnetometerCarrierProps = Omit<
  ChipProps<typeof PololuLIS3MDL3AxisMagnetometerCarrier_PIN_LABELS>,
  FixedProps
>;

export const PololuLIS3MDL3AxisMagnetometerCarrier = (
  props: PololuLIS3MDL3AxisMagnetometerCarrierProps,
) => (
  <chip
    {...props}
    displayName="Pololu LIS3MDL 3-Axis Magnetometer Carrier"
    mfn="Pololu"
    datasheetUrl="https://www.pololu.com/product/2737"
    footprint={PololuLIS3MDL3AxisMagnetometerCarrier_FOOTPRINT}
    pinLabels={PololuLIS3MDL3AxisMagnetometerCarrier_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
      pin5: "INT",
      pin6: "CS",
      pin7: "SDO",
      pin8: "V3_3",
    }}
    pinAttributes={PololuLIS3MDL3AxisMagnetometerCarrier_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "GND", "SDA", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["INT", "CS", "SDO", "V3_3"],
      },
    }}
  />
);

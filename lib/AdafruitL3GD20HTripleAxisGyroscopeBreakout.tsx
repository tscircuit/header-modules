import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit L3GD20H Triple-Axis Gyroscope Breakout. Header order: VIN, V3_3, GND, SCL, SDA, CS, SDO, INT. */
export const AdafruitL3GD20HTripleAxisGyroscopeBreakout_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(L3GD20H)" as const;

export const AdafruitL3GD20HTripleAxisGyroscopeBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["V3_3", "3V3", "3.3V", "3Vo"],
  pin3: ["GND"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["SDA", "SDI", "DATA"],
  pin6: ["CS", "!CS", "nCS"],
  pin7: ["SDO", "ADR", "ADDRESS", "MISO"],
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

export const AdafruitL3GD20HTripleAxisGyroscopeBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  V3_3: POWER_OUTPUT_3V3,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  CS: SPI_CS,
  SDO: CONTROL,
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

export type AdafruitL3GD20HTripleAxisGyroscopeBreakoutProps = Omit<
  ChipProps<typeof AdafruitL3GD20HTripleAxisGyroscopeBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitL3GD20HTripleAxisGyroscopeBreakout = (
  props: AdafruitL3GD20HTripleAxisGyroscopeBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit L3GD20H Triple-Axis Gyroscope Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-l3gd20-gyro-breakout/pinouts"
    footprint={AdafruitL3GD20HTripleAxisGyroscopeBreakout_FOOTPRINT}
    pinLabels={AdafruitL3GD20HTripleAxisGyroscopeBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "V3_3",
      pin3: "GND",
      pin4: "SCL",
      pin5: "SDA",
      pin6: "CS",
      pin7: "SDO",
      pin8: "INT",
    }}
    pinAttributes={AdafruitL3GD20HTripleAxisGyroscopeBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "V3_3", "GND", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "CS", "SDO", "INT"],
      },
    }}
  />
);

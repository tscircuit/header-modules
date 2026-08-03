import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit ISM330DHCX 6-DoF IMU Breakout. Header order: VIN, V3_3, GND, SCL, SDA, SDO, CS, INT1, INT2. */
export const AdafruitISM330DHCX6DoFIMUBreakout_FOOTPRINT =
  "headermodule9_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(ISM330DHCX)" as const;

export const AdafruitISM330DHCX6DoFIMUBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["V3_3", "3V3", "3.3V", "3Vo"],
  pin3: ["GND"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["SDA", "SDI", "DATA"],
  pin6: ["SDO", "ADR", "ADDRESS", "MISO"],
  pin7: ["CS", "!CS", "nCS"],
  pin8: ["INT1", "INTERRUPT1"],
  pin9: ["INT2", "INTERRUPT2"],
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

export const AdafruitISM330DHCX6DoFIMUBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  V3_3: POWER_OUTPUT_3V3,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  SDO: CONTROL,
  CS: SPI_CS,
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

export type AdafruitISM330DHCX6DoFIMUBreakoutProps = Omit<
  ChipProps<typeof AdafruitISM330DHCX6DoFIMUBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitISM330DHCX6DoFIMUBreakout = (
  props: AdafruitISM330DHCX6DoFIMUBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit ISM330DHCX 6-DoF IMU Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-ism330dhcx-6-dof-imu/pinouts"
    footprint={AdafruitISM330DHCX6DoFIMUBreakout_FOOTPRINT}
    pinLabels={AdafruitISM330DHCX6DoFIMUBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "V3_3",
      pin3: "GND",
      pin4: "SCL",
      pin5: "SDA",
      pin6: "SDO",
      pin7: "CS",
      pin8: "INT1",
      pin9: "INT2",
    }}
    pinAttributes={AdafruitISM330DHCX6DoFIMUBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.6}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "V3_3", "GND", "SCL", "SDA"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDO", "CS", "INT1", "INT2"],
      },
    }}
  />
);

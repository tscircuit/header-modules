import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Pololu LIS331HH High-g Accelerometer Carrier. Header order: VIN, GND, SCL, SDA, INT1, INT2, CS, SDO. */
export const PololuLIS331HHHighGAccelerometerCarrier_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(LIS331HH)" as const;

export const PololuLIS331HHHighGAccelerometerCarrier_PIN_LABELS = {
  pin1: ["VIN", "VCC"],
  pin2: ["GND"],
  pin3: ["SCL", "SCK", "CLOCK"],
  pin4: ["SDA", "SDI", "DATA"],
  pin5: ["INT1", "INTERRUPT1"],
  pin6: ["INT2", "INTERRUPT2"],
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
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const CONTROL = {
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const PololuLIS331HHHighGAccelerometerCarrier_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  INT1: GPIO,
  INT2: GPIO,
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

export type PololuLIS331HHHighGAccelerometerCarrierProps = Omit<
  ChipProps<typeof PololuLIS331HHHighGAccelerometerCarrier_PIN_LABELS>,
  FixedProps
>;

export const PololuLIS331HHHighGAccelerometerCarrier = (
  props: PololuLIS331HHHighGAccelerometerCarrierProps,
) => (
  <chip
    {...props}
    displayName="Pololu LIS331HH High-g Accelerometer Carrier"
    mfn="Pololu"
    datasheetUrl="https://www.pololu.com/product/2127"
    footprint={PololuLIS331HHHighGAccelerometerCarrier_FOOTPRINT}
    pinLabels={PololuLIS331HHHighGAccelerometerCarrier_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "SCL",
      pin4: "SDA",
      pin5: "INT1",
      pin6: "INT2",
      pin7: "CS",
      pin8: "SDO",
    }}
    pinAttributes={PololuLIS331HHHighGAccelerometerCarrier_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "GND", "SCL", "SDA"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["INT1", "INT2", "CS", "SDO"],
      },
    }}
  />
);

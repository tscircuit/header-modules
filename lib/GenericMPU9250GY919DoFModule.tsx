import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic MPU-9250 GY-91 9-DoF Module. Header order: VCC, GND, SCL, SDA, AD0, INT, ECL, EDA, CS, FSYNC. */
export const GenericMPU9250GY919DoFModule_FOOTPRINT =
  "headermodule10_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(MPU9250-GY91)" as const;

export const GenericMPU9250GY919DoFModule_PIN_LABELS = {
  pin1: ["VCC", "VIN", "VDD"],
  pin2: ["GND"],
  pin3: ["SCL", "SCK", "CLOCK"],
  pin4: ["SDA", "SDI", "DATA"],
  pin5: ["AD0", "ADDR", "ADDRESS"],
  pin6: ["INT", "INTERRUPT"],
  pin7: ["ECL", "AUX_SCL"],
  pin8: ["EDA", "AUX_SDA"],
  pin9: ["CS", "!CS", "nCS"],
  pin10: ["FSYNC", "FRAME_SYNC"],
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

export const GenericMPU9250GY919DoFModule_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  AD0: CONTROL,
  INT: GPIO,
  ECL: CONTROL,
  EDA: CONTROL,
  CS: SPI_CS,
  FSYNC: CONTROL,
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

export type GenericMPU9250GY919DoFModuleProps = Omit<
  ChipProps<typeof GenericMPU9250GY919DoFModule_PIN_LABELS>,
  FixedProps
>;

export const GenericMPU9250GY919DoFModule = (
  props: GenericMPU9250GY919DoFModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic MPU-9250 GY-91 9-DoF Module"
    mfn="Generic"
    datasheetUrl="https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-9250-Datasheet.pdf"
    footprint={GenericMPU9250GY919DoFModule_FOOTPRINT}
    pinLabels={GenericMPU9250GY919DoFModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SCL",
      pin4: "SDA",
      pin5: "AD0",
      pin6: "INT",
      pin7: "ECL",
      pin8: "EDA",
      pin9: "CS",
      pin10: "FSYNC",
    }}
    pinAttributes={GenericMPU9250GY919DoFModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.6}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "SCL", "SDA", "AD0"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["INT", "ECL", "EDA", "CS", "FSYNC"],
      },
    }}
  />
);

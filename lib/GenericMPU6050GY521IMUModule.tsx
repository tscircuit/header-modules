import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic MPU-6050 GY-521 IMU Module. Header order: VCC, GND, SCL, SDA, XDA, XCL, AD0, INT. */
export const GenericMPU6050GY521IMUModule_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(MPU6050-GY521)" as const;

export const GenericMPU6050GY521IMUModule_PIN_LABELS = {
  pin1: ["VCC", "VIN", "VDD", "3V3", "V3_3"],
  pin2: ["GND"],
  pin3: ["SCL", "SCK", "CLOCK"],
  pin4: ["SDA", "SDI", "DATA"],
  pin5: ["XDA", "AUX_SDA"],
  pin6: ["XCL", "AUX_SCL"],
  pin7: ["AD0", "ADDR", "ADDRESS"],
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

export const GenericMPU6050GY521IMUModule_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  XDA: CONTROL,
  XCL: CONTROL,
  AD0: CONTROL,
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

export type GenericMPU6050GY521IMUModuleProps = Omit<
  ChipProps<typeof GenericMPU6050GY521IMUModule_PIN_LABELS>,
  FixedProps
>;

export const GenericMPU6050GY521IMUModule = (
  props: GenericMPU6050GY521IMUModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic MPU-6050 GY-521 IMU Module"
    mfn="Generic"
    datasheetUrl="https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Datasheet1.pdf"
    footprint={GenericMPU6050GY521IMUModule_FOOTPRINT}
    pinLabels={GenericMPU6050GY521IMUModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SCL",
      pin4: "SDA",
      pin5: "XDA",
      pin6: "XCL",
      pin7: "AD0",
      pin8: "INT",
    }}
    pinAttributes={GenericMPU6050GY521IMUModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "SCL", "SDA"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["XDA", "XCL", "AD0", "INT"],
      },
    }}
  />
);

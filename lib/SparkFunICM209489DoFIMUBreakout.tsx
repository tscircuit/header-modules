import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun ICM-20948 9-DoF IMU Breakout. Header order: VIN, V1_8, GND, SCL, SDA, INT. */
export const SparkFunICM209489DoFIMUBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(ICM20948)" as const;

export const SparkFunICM209489DoFIMUBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["V1_8", "1V8", "1.8V"],
  pin3: ["GND"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["SDA", "SDI", "DATA"],
  pin6: ["INT", "INTERRUPT"],
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
const POWER_OUTPUT_1V8 = {
  providesPower: true,
  providesVoltage: "1.8V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const SparkFunICM209489DoFIMUBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  V1_8: POWER_OUTPUT_1V8,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
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

export type SparkFunICM209489DoFIMUBreakoutProps = Omit<
  ChipProps<typeof SparkFunICM209489DoFIMUBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunICM209489DoFIMUBreakout = (
  props: SparkFunICM209489DoFIMUBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun ICM-20948 9-DoF IMU Breakout"
    mfn="SparkFun"
    datasheetUrl="https://learn.sparkfun.com/tutorials/qwiic-9dof-icm-20948-imu-hookup-guide/all"
    footprint={SparkFunICM209489DoFIMUBreakout_FOOTPRINT}
    pinLabels={SparkFunICM209489DoFIMUBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "V1_8",
      pin3: "GND",
      pin4: "SCL",
      pin5: "SDA",
      pin6: "INT",
    }}
    pinAttributes={SparkFunICM209489DoFIMUBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "V1_8", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SCL", "SDA", "INT"],
      },
    }}
  />
);

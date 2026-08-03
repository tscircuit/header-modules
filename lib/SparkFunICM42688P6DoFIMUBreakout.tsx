import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun ICM-42688-P 6-DoF IMU Breakout. Header order: V3_3, GND, SDA, SCL, INT. */
export const SparkFunICM42688P6DoFIMUBreakout_FOOTPRINT =
  "headermodule5_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(ICM42688P)" as const;

export const SparkFunICM42688P6DoFIMUBreakout_PIN_LABELS = {
  pin1: ["V3_3", "3V3", "VCC"],
  pin2: ["GND"],
  pin3: ["SDA", "SDI", "DATA"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["INT", "INTERRUPT"],
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

export const SparkFunICM42688P6DoFIMUBreakout_PIN_ATTRIBUTES = {
  V3_3: POWER_INPUT_3V3,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
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

export type SparkFunICM42688P6DoFIMUBreakoutProps = Omit<
  ChipProps<typeof SparkFunICM42688P6DoFIMUBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunICM42688P6DoFIMUBreakout = (
  props: SparkFunICM42688P6DoFIMUBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun ICM-42688-P 6-DoF IMU Breakout"
    mfn="SparkFun"
    datasheetUrl="https://learn.sparkfun.com/tutorials/qwiic-6dof-icm-42688-p-hookup-guide/all"
    footprint={SparkFunICM42688P6DoFIMUBreakout_FOOTPRINT}
    pinLabels={SparkFunICM42688P6DoFIMUBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "V3_3",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
      pin5: "INT",
    }}
    pinAttributes={SparkFunICM42688P6DoFIMUBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["V3_3", "GND", "SDA"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SCL", "INT"],
      },
    }}
  />
);

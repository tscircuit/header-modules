import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun BNO086 9-DoF IMU Breakout. Header order: V3_3, GND, SDA, SCL, INT, RESET, WAKE, BOOT. */
export const SparkFunBNO0869DoFIMUBreakout_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(BNO086)" as const;

export const SparkFunBNO0869DoFIMUBreakout_PIN_LABELS = {
  pin1: ["V3_3", "3V3", "VCC"],
  pin2: ["GND"],
  pin3: ["SDA", "SDI", "DATA"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["INT", "INTERRUPT"],
  pin6: ["RESET", "RST", "!RESET"],
  pin7: ["WAKE", "WAKEUP"],
  pin8: ["BOOT", "BOOT0"],
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
const CONTROL = {
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const SparkFunBNO0869DoFIMUBreakout_PIN_ATTRIBUTES = {
  V3_3: POWER_INPUT_3V3,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  INT: GPIO,
  RESET: CONTROL,
  WAKE: CONTROL,
  BOOT: CONTROL,
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

export type SparkFunBNO0869DoFIMUBreakoutProps = Omit<
  ChipProps<typeof SparkFunBNO0869DoFIMUBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunBNO0869DoFIMUBreakout = (
  props: SparkFunBNO0869DoFIMUBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun BNO086 9-DoF IMU Breakout"
    mfn="SparkFun"
    datasheetUrl="https://learn.sparkfun.com/tutorials/qwiic-9dof-bno086-imu-hookup-guide/all"
    footprint={SparkFunBNO0869DoFIMUBreakout_FOOTPRINT}
    pinLabels={SparkFunBNO0869DoFIMUBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "V3_3",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
      pin5: "INT",
      pin6: "RESET",
      pin7: "WAKE",
      pin8: "BOOT",
    }}
    pinAttributes={SparkFunBNO0869DoFIMUBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["V3_3", "GND", "SDA", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["INT", "RESET", "WAKE", "BOOT"],
      },
    }}
  />
);

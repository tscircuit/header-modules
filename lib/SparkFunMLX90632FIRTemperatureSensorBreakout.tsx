import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun MLX90632 FIR Temperature Sensor Breakout with its documented 0.1 in I2C header interface. */
export const SparkFunMLX90632FIRTemperatureSensorBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(MLX90632)" as const;

export const SparkFunMLX90632FIRTemperatureSensorBreakout_PIN_LABELS = {
  pin1: ["V3_3", "3V3", "VCC", "VDD"],
  pin2: ["GND"],
  pin3: ["SDA", "SDI", "DATA"],
  pin4: ["SCL", "SCK", "CLOCK"],
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
  requiresVoltage: "3.3V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const SparkFunMLX90632FIRTemperatureSensorBreakout_PIN_ATTRIBUTES = {
  V3_3: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
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

export type SparkFunMLX90632FIRTemperatureSensorBreakoutProps = Omit<
  ChipProps<typeof SparkFunMLX90632FIRTemperatureSensorBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunMLX90632FIRTemperatureSensorBreakout = (
  props: SparkFunMLX90632FIRTemperatureSensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun MLX90632 FIR Temperature Sensor Breakout"
    mfn="SparkFun"
    datasheetUrl="https://learn.sparkfun.com/tutorials/qwiic-ir-thermometer-mlx90632-hookup-guide"
    footprint={SparkFunMLX90632FIRTemperatureSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunMLX90632FIRTemperatureSensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "V3_3",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={SparkFunMLX90632FIRTemperatureSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.4}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["GND", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["V3_3", "SDA"],
      },
    }}
  />
);

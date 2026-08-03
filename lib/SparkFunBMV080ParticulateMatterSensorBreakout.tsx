import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun BMV080 Particulate Matter Sensor Breakout. Header order: V3_3, GND, SDA, SCL. */
export const SparkFunBMV080ParticulateMatterSensorBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(BMV080)" as const;

export const SparkFunBMV080ParticulateMatterSensorBreakout_PIN_LABELS = {
  pin1: ["V3_3", "3V3", "VCC"],
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

export const SparkFunBMV080ParticulateMatterSensorBreakout_PIN_ATTRIBUTES = {
  V3_3: POWER_INPUT_3V3,
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

export type SparkFunBMV080ParticulateMatterSensorBreakoutProps = Omit<
  ChipProps<typeof SparkFunBMV080ParticulateMatterSensorBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunBMV080ParticulateMatterSensorBreakout = (
  props: SparkFunBMV080ParticulateMatterSensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun BMV080 Particulate Matter Sensor Breakout"
    mfn="SparkFun"
    datasheetUrl="https://learn.sparkfun.com/tutorials/sparkfun-bmv080-air-quality-sensor-hookup-guide/all"
    footprint={SparkFunBMV080ParticulateMatterSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunBMV080ParticulateMatterSensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "V3_3",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={SparkFunBMV080ParticulateMatterSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.4}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["V3_3", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "SCL"],
      },
    }}
  />
);

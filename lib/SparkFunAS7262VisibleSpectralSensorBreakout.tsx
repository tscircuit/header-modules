import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun AS7262 Visible Spectral Sensor Breakout. Header order: VIN, V3_3, GND, SCL, SDA, RESET, INT. */
export const SparkFunAS7262VisibleSpectralSensorBreakout_FOOTPRINT =
  "headermodule7_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(AS7262)" as const;

export const SparkFunAS7262VisibleSpectralSensorBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["V3_3", "3V3", "3.3V", "3Vo"],
  pin3: ["GND"],
  pin4: ["SCL", "RX", "CLOCK"],
  pin5: ["SDA", "TX", "DATA"],
  pin6: ["RESET", "RST", "!RESET"],
  pin7: ["INT", "INTERRUPT"],
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

export const SparkFunAS7262VisibleSpectralSensorBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  V3_3: POWER_OUTPUT_3V3,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  RESET: CONTROL,
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

export type SparkFunAS7262VisibleSpectralSensorBreakoutProps = Omit<
  ChipProps<typeof SparkFunAS7262VisibleSpectralSensorBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunAS7262VisibleSpectralSensorBreakout = (
  props: SparkFunAS7262VisibleSpectralSensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun AS7262 Visible Spectral Sensor Breakout"
    mfn="SparkFun"
    datasheetUrl="https://learn.sparkfun.com/tutorials/qwiic-spectral-sensor-as7262-hookup-guide/all"
    footprint={SparkFunAS7262VisibleSpectralSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunAS7262VisibleSpectralSensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "V3_3",
      pin3: "GND",
      pin4: "SCL",
      pin5: "SDA",
      pin6: "RESET",
      pin7: "INT",
    }}
    pinAttributes={SparkFunAS7262VisibleSpectralSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "V3_3", "GND", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "RESET", "INT"],
      },
    }}
  />
);

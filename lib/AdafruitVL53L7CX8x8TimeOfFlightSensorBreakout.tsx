import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit VL53L7CX 8x8 Time-of-Flight Sensor Breakout. Header order: VIN, V3_3, GND, SCL, SDA. */
export const AdafruitVL53L7CX8x8TimeOfFlightSensorBreakout_FOOTPRINT =
  "headermodule5_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(VL53L7CX)" as const;

export const AdafruitVL53L7CX8x8TimeOfFlightSensorBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["V3_3", "3V3", "3.3V", "3Vo"],
  pin3: ["GND"],
  pin4: ["SCL", "SCK", "CLOCK"],
  pin5: ["SDA", "SDI", "DATA"],
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

export const AdafruitVL53L7CX8x8TimeOfFlightSensorBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  V3_3: POWER_OUTPUT_3V3,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
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

export type AdafruitVL53L7CX8x8TimeOfFlightSensorBreakoutProps = Omit<
  ChipProps<typeof AdafruitVL53L7CX8x8TimeOfFlightSensorBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitVL53L7CX8x8TimeOfFlightSensorBreakout = (
  props: AdafruitVL53L7CX8x8TimeOfFlightSensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit VL53L7CX 8x8 Time-of-Flight Sensor Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-vl53l7cx-8x8-tof-sensor/pinouts"
    footprint={AdafruitVL53L7CX8x8TimeOfFlightSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitVL53L7CX8x8TimeOfFlightSensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "V3_3",
      pin3: "GND",
      pin4: "SCL",
      pin5: "SDA",
    }}
    pinAttributes={AdafruitVL53L7CX8x8TimeOfFlightSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "V3_3", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SCL", "SDA"],
      },
    }}
  />
);

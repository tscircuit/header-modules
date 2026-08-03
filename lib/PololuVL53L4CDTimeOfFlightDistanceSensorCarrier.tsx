import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Pololu VL53L4CD Time-of-Flight Distance Sensor Carrier. Header order: VDD, VIN, GND, SDA, SCL, XSHUT, GPIO1. */
export const PololuVL53L4CDTimeOfFlightDistanceSensorCarrier_FOOTPRINT =
  "headermodule7_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(VL53L4CD)" as const;

export const PololuVL53L4CDTimeOfFlightDistanceSensorCarrier_PIN_LABELS = {
  pin1: ["VDD", "2V8", "REGULATED_OUT"],
  pin2: ["VIN", "VS", "VCC"],
  pin3: ["GND"],
  pin4: ["SDA", "SDI", "DATA"],
  pin5: ["SCL", "SCK", "CLOCK"],
  pin6: ["XSHUT", "SHUTDOWN", "!SHUTDOWN"],
  pin7: ["GPIO1", "INT", "INTERRUPT"],
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
const POWER_OUTPUT_2_8 = {
  providesPower: true,
  providesVoltage: "2.8V",
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

export const PololuVL53L4CDTimeOfFlightDistanceSensorCarrier_PIN_ATTRIBUTES = {
  VDD: POWER_OUTPUT_2_8,
  VIN: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  XSHUT: CONTROL,
  GPIO1: GPIO,
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

export type PololuVL53L4CDTimeOfFlightDistanceSensorCarrierProps = Omit<
  ChipProps<typeof PololuVL53L4CDTimeOfFlightDistanceSensorCarrier_PIN_LABELS>,
  FixedProps
>;

export const PololuVL53L4CDTimeOfFlightDistanceSensorCarrier = (
  props: PololuVL53L4CDTimeOfFlightDistanceSensorCarrierProps,
) => (
  <chip
    {...props}
    displayName="Pololu VL53L4CD Time-of-Flight Distance Sensor Carrier"
    mfn="Pololu"
    datasheetUrl="https://www.pololu.com/product/3417"
    footprint={PololuVL53L4CDTimeOfFlightDistanceSensorCarrier_FOOTPRINT}
    pinLabels={PololuVL53L4CDTimeOfFlightDistanceSensorCarrier_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VDD",
      pin2: "VIN",
      pin3: "GND",
      pin4: "SDA",
      pin5: "SCL",
      pin6: "XSHUT",
      pin7: "GPIO1",
    }}
    pinAttributes={
      PololuVL53L4CDTimeOfFlightDistanceSensorCarrier_PIN_ATTRIBUTES
    }
    schWidth={2.8}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VDD", "VIN", "GND", "SDA"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SCL", "XSHUT", "GPIO1"],
      },
    }}
  />
);

import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit MLX90614 Contactless IR Thermometer Breakout. Header order: VIN, GND, SCL, SDA. */
export const AdafruitMLX90614ContactlessIRThermometerBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(MLX90614)" as const;

export const AdafruitMLX90614ContactlessIRThermometerBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD", "V3_3"],
  pin2: ["GND"],
  pin3: ["SCL", "SCK", "CLOCK"],
  pin4: ["SDA", "SDI", "DATA"],
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

export const AdafruitMLX90614ContactlessIRThermometerBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
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

export type AdafruitMLX90614ContactlessIRThermometerBreakoutProps = Omit<
  ChipProps<typeof AdafruitMLX90614ContactlessIRThermometerBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitMLX90614ContactlessIRThermometerBreakout = (
  props: AdafruitMLX90614ContactlessIRThermometerBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit MLX90614 Contactless IR Thermometer Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-mlx90614-ir-temperature-sensor/pinouts"
    footprint={AdafruitMLX90614ContactlessIRThermometerBreakout_FOOTPRINT}
    pinLabels={AdafruitMLX90614ContactlessIRThermometerBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "SCL",
      pin4: "SDA",
    }}
    pinAttributes={
      AdafruitMLX90614ContactlessIRThermometerBreakout_PIN_ATTRIBUTES
    }
    schWidth={2.8}
    schHeight={1.4}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SCL", "SDA"],
      },
    }}
  />
);

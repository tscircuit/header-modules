import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit AHT20 Temperature & Humidity Breakout. Header order: VIN, GND, SCL, SDA. */
export const AdafruitAHT20TemperatureAndHumidityBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(AHT20)" as const;

export const AdafruitAHT20TemperatureAndHumidityBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD", "V3_3"],
  pin2: ["GND"],
  pin3: ["SCL", "SCK", "CLOCK"],
  pin4: ["SDA", "SDI", "DATA"],
} as const;

const POWER_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap;
const I2C_SCL = {
  ...GPIO,
  capabilities: ["i2c_scl"],
} as const satisfies PinAttributeMap;
const I2C_SDA = {
  ...GPIO,
  capabilities: ["i2c_sda"],
} as const satisfies PinAttributeMap;

export const AdafruitAHT20TemperatureAndHumidityBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitAHT20TemperatureAndHumidityBreakoutProps = Omit<
  ChipProps<typeof AdafruitAHT20TemperatureAndHumidityBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitAHT20TemperatureAndHumidityBreakout = (
  props: AdafruitAHT20TemperatureAndHumidityBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit AHT20 Temperature & Humidity Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-aht20/pinouts"
    footprint={AdafruitAHT20TemperatureAndHumidityBreakout_FOOTPRINT}
    pinLabels={AdafruitAHT20TemperatureAndHumidityBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "SCL",
      pin4: "SDA",
    }}
    pinAttributes={AdafruitAHT20TemperatureAndHumidityBreakout_PIN_ATTRIBUTES}
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

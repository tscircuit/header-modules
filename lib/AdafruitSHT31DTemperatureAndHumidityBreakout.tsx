import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit SHT31-D Temperature & Humidity Breakout. Header order: VIN, GND, SCL, SDA, ADDR, RST, ALERT. */
export const AdafruitSHT31DTemperatureAndHumidityBreakout_FOOTPRINT =
  "headermodule7_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SHT31-D)" as const;

export const AdafruitSHT31DTemperatureAndHumidityBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["GND"],
  pin3: ["SCL", "SCK", "CLOCK"],
  pin4: ["SDA", "SDI", "DATA"],
  pin5: ["ADDR", "ADDRESS"],
  pin6: ["RST", "RESET", "!RESET"],
  pin7: ["ALERT", "ALERT_N", "INT"],
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
const CONTROL = {
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const AdafruitSHT31DTemperatureAndHumidityBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  ADDR: CONTROL,
  RST: CONTROL,
  ALERT: GPIO,
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

export type AdafruitSHT31DTemperatureAndHumidityBreakoutProps = Omit<
  ChipProps<typeof AdafruitSHT31DTemperatureAndHumidityBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitSHT31DTemperatureAndHumidityBreakout = (
  props: AdafruitSHT31DTemperatureAndHumidityBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit SHT31-D Temperature & Humidity Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-sht31-d-temperature-and-humidity-sensor-breakout/pinouts"
    footprint={AdafruitSHT31DTemperatureAndHumidityBreakout_FOOTPRINT}
    pinLabels={AdafruitSHT31DTemperatureAndHumidityBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "SCL",
      pin4: "SDA",
      pin5: "ADDR",
      pin6: "RST",
      pin7: "ALERT",
    }}
    pinAttributes={AdafruitSHT31DTemperatureAndHumidityBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "GND", "SCL", "SDA"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["ADDR", "RST", "ALERT"],
      },
    }}
  />
);

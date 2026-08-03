import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit HTU21D-F Temperature & Humidity Breakout. Header order: VIN, V3_3, GND, SDA, SCL. */
export const AdafruitHTU21DFTemperatureAndHumidityBreakout_FOOTPRINT =
  "headermodule5_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(HTU21D-F)" as const;

export const AdafruitHTU21DFTemperatureAndHumidityBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["V3_3", "3V3", "3.3V", "+3V3"],
  pin3: ["GND"],
  pin4: ["SDA", "SDI", "DATA"],
  pin5: ["SCL", "SCK", "CLOCK"],
} as const;

const POWER_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const POWER_OUTPUT = {
  providesPower: true,
  providesVoltage: "3.3V",
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
const I2C_SDA = {
  ...GPIO,
  capabilities: ["i2c_sda"],
} as const satisfies PinAttributeMap;
const I2C_SCL = {
  ...GPIO,
  capabilities: ["i2c_scl"],
} as const satisfies PinAttributeMap;

export const AdafruitHTU21DFTemperatureAndHumidityBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  V3_3: POWER_OUTPUT,
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

export type AdafruitHTU21DFTemperatureAndHumidityBreakoutProps = Omit<
  ChipProps<typeof AdafruitHTU21DFTemperatureAndHumidityBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitHTU21DFTemperatureAndHumidityBreakout = (
  props: AdafruitHTU21DFTemperatureAndHumidityBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit HTU21D-F Temperature & Humidity Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-htu21d-f-temperature-humidity-sensor/pinouts"
    footprint={AdafruitHTU21DFTemperatureAndHumidityBreakout_FOOTPRINT}
    pinLabels={AdafruitHTU21DFTemperatureAndHumidityBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "V3_3",
      pin3: "GND",
      pin4: "SDA",
      pin5: "SCL",
    }}
    pinAttributes={AdafruitHTU21DFTemperatureAndHumidityBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "V3_3", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "SCL"],
      },
    }}
  />
);

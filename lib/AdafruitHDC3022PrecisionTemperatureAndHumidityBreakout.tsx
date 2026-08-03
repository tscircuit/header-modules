import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit HDC3022 Precision Temperature & Humidity Breakout. Header order: VIN, GND, SCL, SDA, RESET, ALERT. */
export const AdafruitHDC3022PrecisionTemperatureAndHumidityBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(HDC3022)" as const;

export const AdafruitHDC3022PrecisionTemperatureAndHumidityBreakout_PIN_LABELS =
  {
    pin1: ["VIN", "VCC", "VDD"],
    pin2: ["GND"],
    pin3: ["SCL", "SCK", "CLOCK"],
    pin4: ["SDA", "SDI", "DATA"],
    pin5: ["RESET", "RST", "!RESET"],
    pin6: ["ALERT", "ALERT_N", "INT"],
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

export const AdafruitHDC3022PrecisionTemperatureAndHumidityBreakout_PIN_ATTRIBUTES =
  {
    VIN: POWER_INPUT,
    GND: GROUND,
    SCL: I2C_SCL,
    SDA: I2C_SDA,
    RESET: CONTROL,
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

export type AdafruitHDC3022PrecisionTemperatureAndHumidityBreakoutProps = Omit<
  ChipProps<
    typeof AdafruitHDC3022PrecisionTemperatureAndHumidityBreakout_PIN_LABELS
  >,
  FixedProps
>;

export const AdafruitHDC3022PrecisionTemperatureAndHumidityBreakout = (
  props: AdafruitHDC3022PrecisionTemperatureAndHumidityBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit HDC3022 Precision Temperature & Humidity Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-hdc3022-precision-temperature-and-humidity-sensor/pinouts"
    footprint={AdafruitHDC3022PrecisionTemperatureAndHumidityBreakout_FOOTPRINT}
    pinLabels={
      AdafruitHDC3022PrecisionTemperatureAndHumidityBreakout_PIN_LABELS
    }
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "SCL",
      pin4: "SDA",
      pin5: "RESET",
      pin6: "ALERT",
    }}
    pinAttributes={
      AdafruitHDC3022PrecisionTemperatureAndHumidityBreakout_PIN_ATTRIBUTES
    }
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "GND", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "RESET", "ALERT"],
      },
    }}
  />
);

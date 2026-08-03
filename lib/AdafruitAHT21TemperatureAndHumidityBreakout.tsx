import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** AHT21 Temperature & Humidity Breakout. Header order: VIN, SDA, GND, SCL. */
export const AdafruitAHT21TemperatureAndHumidityBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(AHT21)" as const;

export const AdafruitAHT21TemperatureAndHumidityBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD", "V3_3"],
  pin2: ["SDA", "SDI", "DATA"],
  pin3: ["GND"],
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
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const AdafruitAHT21TemperatureAndHumidityBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  SDA: I2C_SDA,
  GND: GROUND,
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

export type AdafruitAHT21TemperatureAndHumidityBreakoutProps = Omit<
  ChipProps<typeof AdafruitAHT21TemperatureAndHumidityBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitAHT21TemperatureAndHumidityBreakout = (
  props: AdafruitAHT21TemperatureAndHumidityBreakoutProps,
) => (
  <chip
    {...props}
    displayName="AHT21 Temperature & Humidity Breakout"
    mfn="Aosong/ASAIR"
    datasheetUrl="https://www.aosong.com/userfiles/files/media/AHT21%20%E8%8B%B1%E6%96%87%E7%89%88%E8%AF%B4%E6%98%8E%E4%B9%A6%20A0%202020-12-8.pdf"
    footprint={AdafruitAHT21TemperatureAndHumidityBreakout_FOOTPRINT}
    pinLabels={AdafruitAHT21TemperatureAndHumidityBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "SDA",
      pin3: "GND",
      pin4: "SCL",
    }}
    pinAttributes={AdafruitAHT21TemperatureAndHumidityBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.4}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "SDA"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["GND", "SCL"],
      },
    }}
  />
);

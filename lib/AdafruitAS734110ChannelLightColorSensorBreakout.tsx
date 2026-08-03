import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit AS7341 10-Channel Light/Color Sensor Breakout. Header order: VIN, GND, SCL, SDA, GPIO, INT. */
export const AdafruitAS734110ChannelLightColorSensorBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(AS7341)" as const;

export const AdafruitAS734110ChannelLightColorSensorBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD", "V3_3"],
  pin2: ["GND"],
  pin3: ["SCL", "SCK", "CLOCK"],
  pin4: ["SDA", "SDI", "DATA"],
  pin5: ["GPIO", "G0", "P0"],
  pin6: ["INT", "INTERRUPT", "ALERT"],
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

export const AdafruitAS734110ChannelLightColorSensorBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  GPIO: GPIO,
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

export type AdafruitAS734110ChannelLightColorSensorBreakoutProps = Omit<
  ChipProps<typeof AdafruitAS734110ChannelLightColorSensorBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitAS734110ChannelLightColorSensorBreakout = (
  props: AdafruitAS734110ChannelLightColorSensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit AS7341 10-Channel Light/Color Sensor Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-as7341-10-channel-light-color-sensor-breakout/pinouts"
    footprint={AdafruitAS734110ChannelLightColorSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitAS734110ChannelLightColorSensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "SCL",
      pin4: "SDA",
      pin5: "GPIO",
      pin6: "INT",
    }}
    pinAttributes={
      AdafruitAS734110ChannelLightColorSensorBreakout_PIN_ATTRIBUTES
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
        pins: ["SDA", "GPIO", "INT"],
      },
    }}
  />
);

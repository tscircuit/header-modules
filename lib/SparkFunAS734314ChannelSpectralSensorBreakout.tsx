import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun AS7343 14-Channel Spectral Sensor Breakout with its documented 0.1 in I2C header interface. */
export const SparkFunAS734314ChannelSpectralSensorBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(AS7343)" as const;

export const SparkFunAS734314ChannelSpectralSensorBreakout_PIN_LABELS = {
  pin1: ["V3_3", "3V3", "VCC", "VDD"],
  pin2: ["GND"],
  pin3: ["SDA", "SDI", "DATA"],
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
  requiresVoltage: "3.3V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const SparkFunAS734314ChannelSpectralSensorBreakout_PIN_ATTRIBUTES = {
  V3_3: POWER_INPUT,
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

export type SparkFunAS734314ChannelSpectralSensorBreakoutProps = Omit<
  ChipProps<typeof SparkFunAS734314ChannelSpectralSensorBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunAS734314ChannelSpectralSensorBreakout = (
  props: SparkFunAS734314ChannelSpectralSensorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun AS7343 14-Channel Spectral Sensor Breakout"
    mfn="SparkFun"
    datasheetUrl="https://learn.sparkfun.com/tutorials/qwiic-spectral-sensor-as7343-hookup-guide"
    footprint={SparkFunAS734314ChannelSpectralSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunAS734314ChannelSpectralSensorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "V3_3",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={SparkFunAS734314ChannelSpectralSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.4}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["GND", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["V3_3", "SDA"],
      },
    }}
  />
);

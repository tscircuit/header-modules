import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit DS3502 I2C Digital Potentiometer Breakout — I2C. */
export const AdafruitDS3502I2CDigitalPotentiometerBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit DS3502 I2C Digital Po)" as const;

export const AdafruitDS3502I2CDigitalPotentiometerBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitDS3502I2CDigitalPotentiometerBreakout_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  SDA: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["i2c_sda"],
  },
  SCL: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["i2c_scl"],
  },
} as const satisfies Record<string, PinAttributeMap>;

type FixedProps =
  | "displayName"
  | "footprint"
  | "mfn"
  | "pinAttributes"
  | "pinLabels"
  | "pcbPinLabels"
  | "schHeight"
  | "schPinArrangement"
  | "schWidth";

export type AdafruitDS3502I2CDigitalPotentiometerBreakoutProps = Omit<
  ChipProps<typeof AdafruitDS3502I2CDigitalPotentiometerBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitDS3502I2CDigitalPotentiometerBreakout = (
  props: AdafruitDS3502I2CDigitalPotentiometerBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit DS3502 I2C Digital Potentiometer Breakout"
    mfn="Adafruit"
    footprint={AdafruitDS3502I2CDigitalPotentiometerBreakout_FOOTPRINT}
    pinLabels={AdafruitDS3502I2CDigitalPotentiometerBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={AdafruitDS3502I2CDigitalPotentiometerBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "SCL"],
      },
    }}
  />
);

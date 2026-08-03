import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit DS1841 I2C Logarithmic Potentiometer Breakout — I2C. */
export const AdafruitDS1841I2CLogarithmicPotentiometerBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit DS1841 I2C Logarithmi)" as const;

export const AdafruitDS1841I2CLogarithmicPotentiometerBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitDS1841I2CLogarithmicPotentiometerBreakout_PIN_ATTRIBUTES =
  {
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

export type AdafruitDS1841I2CLogarithmicPotentiometerBreakoutProps = Omit<
  ChipProps<
    typeof AdafruitDS1841I2CLogarithmicPotentiometerBreakout_PIN_LABELS
  >,
  FixedProps
>;

export const AdafruitDS1841I2CLogarithmicPotentiometerBreakout = (
  props: AdafruitDS1841I2CLogarithmicPotentiometerBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit DS1841 I2C Logarithmic Potentiometer Breakout"
    mfn="Adafruit"
    footprint={AdafruitDS1841I2CLogarithmicPotentiometerBreakout_FOOTPRINT}
    pinLabels={AdafruitDS1841I2CLogarithmicPotentiometerBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={
      AdafruitDS1841I2CLogarithmicPotentiometerBreakout_PIN_ATTRIBUTES
    }
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

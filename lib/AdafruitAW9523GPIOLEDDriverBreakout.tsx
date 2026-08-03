import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit AW9523 GPIO/LED Driver Breakout — I2C. */
export const AdafruitAW9523GPIOLEDDriverBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit AW9523 GPIO LED)" as const;

export const AdafruitAW9523GPIOLEDDriverBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitAW9523GPIOLEDDriverBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitAW9523GPIOLEDDriverBreakoutProps = Omit<
  ChipProps<typeof AdafruitAW9523GPIOLEDDriverBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitAW9523GPIOLEDDriverBreakout = (
  props: AdafruitAW9523GPIOLEDDriverBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit AW9523 GPIO/LED Driver Breakout"
    mfn="Adafruit"
    footprint={AdafruitAW9523GPIOLEDDriverBreakout_FOOTPRINT}
    pinLabels={AdafruitAW9523GPIOLEDDriverBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={AdafruitAW9523GPIOLEDDriverBreakout_PIN_ATTRIBUTES}
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

import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit IS31FL3741 13x9 RGB Matrix Driver Breakout — I2C. */
export const AdafruitIS31FL374113x9RGBMatrixDriverBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit IS31FL3741 13x9 RGB M)" as const;

export const AdafruitIS31FL374113x9RGBMatrixDriverBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitIS31FL374113x9RGBMatrixDriverBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitIS31FL374113x9RGBMatrixDriverBreakoutProps = Omit<
  ChipProps<typeof AdafruitIS31FL374113x9RGBMatrixDriverBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitIS31FL374113x9RGBMatrixDriverBreakout = (
  props: AdafruitIS31FL374113x9RGBMatrixDriverBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit IS31FL3741 13x9 RGB Matrix Driver Breakout"
    mfn="Adafruit"
    footprint={AdafruitIS31FL374113x9RGBMatrixDriverBreakout_FOOTPRINT}
    pinLabels={AdafruitIS31FL374113x9RGBMatrixDriverBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={AdafruitIS31FL374113x9RGBMatrixDriverBreakout_PIN_ATTRIBUTES}
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

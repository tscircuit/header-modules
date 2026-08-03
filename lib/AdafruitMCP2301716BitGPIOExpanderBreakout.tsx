import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit MCP23017 16-Bit GPIO Expander Breakout — I2C. */
export const AdafruitMCP2301716BitGPIOExpanderBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit MCP23017 16-Bit GPIO)" as const;

export const AdafruitMCP2301716BitGPIOExpanderBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitMCP2301716BitGPIOExpanderBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitMCP2301716BitGPIOExpanderBreakoutProps = Omit<
  ChipProps<typeof AdafruitMCP2301716BitGPIOExpanderBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitMCP2301716BitGPIOExpanderBreakout = (
  props: AdafruitMCP2301716BitGPIOExpanderBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit MCP23017 16-Bit GPIO Expander Breakout"
    mfn="Adafruit"
    footprint={AdafruitMCP2301716BitGPIOExpanderBreakout_FOOTPRINT}
    pinLabels={AdafruitMCP2301716BitGPIOExpanderBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={AdafruitMCP2301716BitGPIOExpanderBreakout_PIN_ATTRIBUTES}
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

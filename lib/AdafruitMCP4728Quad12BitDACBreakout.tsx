import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit MCP4728 Quad 12-Bit DAC Breakout — I2C. */
export const AdafruitMCP4728Quad12BitDACBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit MCP4728 Quad 12-Bit D)" as const;

export const AdafruitMCP4728Quad12BitDACBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["VOUT"],
  pin6: ["LDAC"],
} as const;

export const AdafruitMCP4728Quad12BitDACBreakout_PIN_ATTRIBUTES = {
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
  VOUT: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  LDAC: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
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

export type AdafruitMCP4728Quad12BitDACBreakoutProps = Omit<
  ChipProps<typeof AdafruitMCP4728Quad12BitDACBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitMCP4728Quad12BitDACBreakout = (
  props: AdafruitMCP4728Quad12BitDACBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit MCP4728 Quad 12-Bit DAC Breakout"
    mfn="Adafruit"
    footprint={AdafruitMCP4728Quad12BitDACBreakout_FOOTPRINT}
    pinLabels={AdafruitMCP4728Quad12BitDACBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
      pin5: "VOUT",
      pin6: "LDAC",
    }}
    pinAttributes={AdafruitMCP4728Quad12BitDACBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.82}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "SDA"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SCL", "VOUT", "LDAC"],
      },
    }}
  />
);

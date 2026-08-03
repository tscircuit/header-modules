import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun u-blox NEO-F10N L1/L5 GNSS Breakout — I2C/UART/SPI. */
export const SparkFunUBloxNEOF10NL1L5GNSSBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun u-blox NEO-F10N L1 L5)" as const;

export const SparkFunUBloxNEOF10NL1L5GNSSBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["TX"],
  pin6: ["RX"],
} as const;

export const SparkFunUBloxNEOF10NL1L5GNSSBreakout_PIN_ATTRIBUTES = {
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
  TX: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["uart_tx"],
  },
  RX: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["uart_rx"],
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

export type SparkFunUBloxNEOF10NL1L5GNSSBreakoutProps = Omit<
  ChipProps<typeof SparkFunUBloxNEOF10NL1L5GNSSBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunUBloxNEOF10NL1L5GNSSBreakout = (
  props: SparkFunUBloxNEOF10NL1L5GNSSBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun u-blox NEO-F10N L1/L5 GNSS Breakout"
    mfn="SparkFun"
    footprint={SparkFunUBloxNEOF10NL1L5GNSSBreakout_FOOTPRINT}
    pinLabels={SparkFunUBloxNEOF10NL1L5GNSSBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
      pin5: "TX",
      pin6: "RX",
    }}
    pinAttributes={SparkFunUBloxNEOF10NL1L5GNSSBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.82}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "SDA"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SCL", "TX", "RX"],
      },
    }}
  />
);

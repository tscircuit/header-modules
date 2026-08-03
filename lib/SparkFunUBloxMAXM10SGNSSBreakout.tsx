import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun u-blox MAX-M10S GNSS Breakout — I2C/UART/SPI. */
export const SparkFunUBloxMAXM10SGNSSBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun u-blox MAX-M10S GNSS)" as const;

export const SparkFunUBloxMAXM10SGNSSBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["TX"],
  pin6: ["RX"],
} as const;

export const SparkFunUBloxMAXM10SGNSSBreakout_PIN_ATTRIBUTES = {
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

export type SparkFunUBloxMAXM10SGNSSBreakoutProps = Omit<
  ChipProps<typeof SparkFunUBloxMAXM10SGNSSBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunUBloxMAXM10SGNSSBreakout = (
  props: SparkFunUBloxMAXM10SGNSSBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun u-blox MAX-M10S GNSS Breakout"
    mfn="SparkFun"
    footprint={SparkFunUBloxMAXM10SGNSSBreakout_FOOTPRINT}
    pinLabels={SparkFunUBloxMAXM10SGNSSBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
      pin5: "TX",
      pin6: "RX",
    }}
    pinAttributes={SparkFunUBloxMAXM10SGNSSBreakout_PIN_ATTRIBUTES}
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

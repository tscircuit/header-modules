import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun u-blox NEO-M9N GNSS Breakout — I2C/UART/SPI. */
export const SparkFunUBloxNEOM9NGNSSBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun u-blox NEO-M9N GNSS)" as const;

export const SparkFunUBloxNEOM9NGNSSBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["TX"],
  pin6: ["RX"],
} as const;

export const SparkFunUBloxNEOM9NGNSSBreakout_PIN_ATTRIBUTES = {
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

export type SparkFunUBloxNEOM9NGNSSBreakoutProps = Omit<
  ChipProps<typeof SparkFunUBloxNEOM9NGNSSBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunUBloxNEOM9NGNSSBreakout = (
  props: SparkFunUBloxNEOM9NGNSSBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun u-blox NEO-M9N GNSS Breakout"
    mfn="SparkFun"
    footprint={SparkFunUBloxNEOM9NGNSSBreakout_FOOTPRINT}
    pinLabels={SparkFunUBloxNEOM9NGNSSBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
      pin5: "TX",
      pin6: "RX",
    }}
    pinAttributes={SparkFunUBloxNEOM9NGNSSBreakout_PIN_ATTRIBUTES}
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

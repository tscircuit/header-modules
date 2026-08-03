import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit PAC1934 Four-Channel Power Monitor Breakout — I2C. */
export const AdafruitPAC1934FourChannelPowerMonitorBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit PAC1934 Four-Channel)" as const;

export const AdafruitPAC1934FourChannelPowerMonitorBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitPAC1934FourChannelPowerMonitorBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitPAC1934FourChannelPowerMonitorBreakoutProps = Omit<
  ChipProps<typeof AdafruitPAC1934FourChannelPowerMonitorBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitPAC1934FourChannelPowerMonitorBreakout = (
  props: AdafruitPAC1934FourChannelPowerMonitorBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit PAC1934 Four-Channel Power Monitor Breakout"
    mfn="Adafruit"
    footprint={AdafruitPAC1934FourChannelPowerMonitorBreakout_FOOTPRINT}
    pinLabels={AdafruitPAC1934FourChannelPowerMonitorBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={
      AdafruitPAC1934FourChannelPowerMonitorBreakout_PIN_ATTRIBUTES
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

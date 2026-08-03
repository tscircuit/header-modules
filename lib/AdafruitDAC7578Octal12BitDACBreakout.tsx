import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit DAC7578 Octal 12-Bit DAC Breakout — I2C. */
export const AdafruitDAC7578Octal12BitDACBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit DAC7578 Octal 12-Bit)" as const;

export const AdafruitDAC7578Octal12BitDACBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["VOUT"],
  pin6: ["LDAC"],
} as const;

export const AdafruitDAC7578Octal12BitDACBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitDAC7578Octal12BitDACBreakoutProps = Omit<
  ChipProps<typeof AdafruitDAC7578Octal12BitDACBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitDAC7578Octal12BitDACBreakout = (
  props: AdafruitDAC7578Octal12BitDACBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit DAC7578 Octal 12-Bit DAC Breakout"
    mfn="Adafruit"
    footprint={AdafruitDAC7578Octal12BitDACBreakout_FOOTPRINT}
    pinLabels={AdafruitDAC7578Octal12BitDACBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
      pin5: "VOUT",
      pin6: "LDAC",
    }}
    pinAttributes={AdafruitDAC7578Octal12BitDACBreakout_PIN_ATTRIBUTES}
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

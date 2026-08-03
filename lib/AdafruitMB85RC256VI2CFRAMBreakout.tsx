import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit MB85RC256V I2C FRAM Breakout — I2C. */
export const AdafruitMB85RC256VI2CFRAMBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit MB85RC256V I2C FRAM)" as const;

export const AdafruitMB85RC256VI2CFRAMBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitMB85RC256VI2CFRAMBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitMB85RC256VI2CFRAMBreakoutProps = Omit<
  ChipProps<typeof AdafruitMB85RC256VI2CFRAMBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitMB85RC256VI2CFRAMBreakout = (
  props: AdafruitMB85RC256VI2CFRAMBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit MB85RC256V I2C FRAM Breakout"
    mfn="Adafruit"
    footprint={AdafruitMB85RC256VI2CFRAMBreakout_FOOTPRINT}
    pinLabels={AdafruitMB85RC256VI2CFRAMBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={AdafruitMB85RC256VI2CFRAMBreakout_PIN_ATTRIBUTES}
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

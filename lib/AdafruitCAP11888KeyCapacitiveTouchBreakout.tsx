import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit CAP1188 8-Key Capacitive Touch Breakout — I2C/SPI. */
export const AdafruitCAP11888KeyCapacitiveTouchBreakout_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit CAP1188 8-Key Capacit)" as const;

export const AdafruitCAP11888KeyCapacitiveTouchBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["SCK"],
  pin6: ["MOSI"],
  pin7: ["MISO"],
  pin8: ["CS"],
} as const;

export const AdafruitCAP11888KeyCapacitiveTouchBreakout_PIN_ATTRIBUTES = {
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
  SCK: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["spi_sck"],
  },
  MOSI: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["spi_mosi"],
  },
  MISO: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["spi_miso"],
  },
  CS: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["spi_cs"],
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

export type AdafruitCAP11888KeyCapacitiveTouchBreakoutProps = Omit<
  ChipProps<typeof AdafruitCAP11888KeyCapacitiveTouchBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitCAP11888KeyCapacitiveTouchBreakout = (
  props: AdafruitCAP11888KeyCapacitiveTouchBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit CAP1188 8-Key Capacitive Touch Breakout"
    mfn="Adafruit"
    footprint={AdafruitCAP11888KeyCapacitiveTouchBreakout_FOOTPRINT}
    pinLabels={AdafruitCAP11888KeyCapacitiveTouchBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
      pin5: "SCK",
      pin6: "MOSI",
      pin7: "MISO",
      pin8: "CS",
    }}
    pinAttributes={AdafruitCAP11888KeyCapacitiveTouchBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.16}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "SDA", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SCK", "MOSI", "MISO", "CS"],
      },
    }}
  />
);

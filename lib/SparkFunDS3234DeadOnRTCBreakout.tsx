import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun DS3234 DeadOn RTC Breakout — SPI. */
export const SparkFunDS3234DeadOnRTCBreakout_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun DS3234 DeadOn RTC)" as const;

export const SparkFunDS3234DeadOnRTCBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
} as const;

export const SparkFunDS3234DeadOnRTCBreakout_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
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

export type SparkFunDS3234DeadOnRTCBreakoutProps = Omit<
  ChipProps<typeof SparkFunDS3234DeadOnRTCBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunDS3234DeadOnRTCBreakout = (
  props: SparkFunDS3234DeadOnRTCBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun DS3234 DeadOn RTC Breakout"
    mfn="SparkFun"
    footprint={SparkFunDS3234DeadOnRTCBreakout_FOOTPRINT}
    pinLabels={SparkFunDS3234DeadOnRTCBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SCK",
      pin4: "MOSI",
      pin5: "MISO",
      pin6: "CS",
    }}
    pinAttributes={SparkFunDS3234DeadOnRTCBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.82}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "SCK"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["MOSI", "MISO", "CS"],
      },
    }}
  />
);

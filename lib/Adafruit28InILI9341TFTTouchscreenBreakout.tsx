import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit 2.8 in ILI9341 TFT Touchscreen Breakout — SPI. */
export const Adafruit28InILI9341TFTTouchscreenBreakout_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit 2.8 in ILI9341 TFT To)" as const;

export const Adafruit28InILI9341TFTTouchscreenBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
  pin7: ["DC"],
  pin8: ["RST"],
} as const;

export const Adafruit28InILI9341TFTTouchscreenBreakout_PIN_ATTRIBUTES = {
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
  DC: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  RST: { includeInBoardPinout: true },
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

export type Adafruit28InILI9341TFTTouchscreenBreakoutProps = Omit<
  ChipProps<typeof Adafruit28InILI9341TFTTouchscreenBreakout_PIN_LABELS>,
  FixedProps
>;

export const Adafruit28InILI9341TFTTouchscreenBreakout = (
  props: Adafruit28InILI9341TFTTouchscreenBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit 2.8 in ILI9341 TFT Touchscreen Breakout"
    mfn="Adafruit"
    footprint={Adafruit28InILI9341TFTTouchscreenBreakout_FOOTPRINT}
    pinLabels={Adafruit28InILI9341TFTTouchscreenBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SCK",
      pin4: "MOSI",
      pin5: "MISO",
      pin6: "CS",
      pin7: "DC",
      pin8: "RST",
    }}
    pinAttributes={Adafruit28InILI9341TFTTouchscreenBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.16}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "SCK", "MOSI"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["MISO", "CS", "DC", "RST"],
      },
    }}
  />
);

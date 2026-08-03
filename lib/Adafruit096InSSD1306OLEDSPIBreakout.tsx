import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit 0.96 in SSD1306 OLED SPI Breakout — 128x64. */
export const Adafruit096InSSD1306OLEDSPIBreakout_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit 0.96 in SSD1306 OLED)" as const;

export const Adafruit096InSSD1306OLEDSPIBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
  pin7: ["DC"],
  pin8: ["RST"],
} as const;

export const Adafruit096InSSD1306OLEDSPIBreakout_PIN_ATTRIBUTES = {
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

export type Adafruit096InSSD1306OLEDSPIBreakoutProps = Omit<
  ChipProps<typeof Adafruit096InSSD1306OLEDSPIBreakout_PIN_LABELS>,
  FixedProps
>;

export const Adafruit096InSSD1306OLEDSPIBreakout = (
  props: Adafruit096InSSD1306OLEDSPIBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit 0.96 in SSD1306 OLED SPI Breakout"
    mfn="Adafruit"
    footprint={Adafruit096InSSD1306OLEDSPIBreakout_FOOTPRINT}
    pinLabels={Adafruit096InSSD1306OLEDSPIBreakout_PIN_LABELS}
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
    pinAttributes={Adafruit096InSSD1306OLEDSPIBreakout_PIN_ATTRIBUTES}
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

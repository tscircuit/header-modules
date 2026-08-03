import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic 1.44 in ST7735 TFT Module — SPI. */
export const Generic144InST7735TFTModule_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic 1.44 in ST7735 TFT)" as const;

export const Generic144InST7735TFTModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
  pin7: ["DC"],
  pin8: ["RST"],
} as const;

export const Generic144InST7735TFTModule_PIN_ATTRIBUTES = {
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

export type Generic144InST7735TFTModuleProps = Omit<
  ChipProps<typeof Generic144InST7735TFTModule_PIN_LABELS>,
  FixedProps
>;

export const Generic144InST7735TFTModule = (
  props: Generic144InST7735TFTModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic 1.44 in ST7735 TFT Module"
    mfn="Generic"
    footprint={Generic144InST7735TFTModule_FOOTPRINT}
    pinLabels={Generic144InST7735TFTModule_PIN_LABELS}
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
    pinAttributes={Generic144InST7735TFTModule_PIN_ATTRIBUTES}
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

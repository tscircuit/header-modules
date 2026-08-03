import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Ai-Thinker Ra-02 SX1278 LoRa Module — SPI. */
export const AiThinkerRa02SX1278LoRaModule_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Ai-Thinker Ra-02 SX1278 LoRa)" as const;

export const AiThinkerRa02SX1278LoRaModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
  pin7: ["IRQ"],
  pin8: ["RST"],
} as const;

export const AiThinkerRa02SX1278LoRaModule_PIN_ATTRIBUTES = {
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
  IRQ: {
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

export type AiThinkerRa02SX1278LoRaModuleProps = Omit<
  ChipProps<typeof AiThinkerRa02SX1278LoRaModule_PIN_LABELS>,
  FixedProps
>;

export const AiThinkerRa02SX1278LoRaModule = (
  props: AiThinkerRa02SX1278LoRaModuleProps,
) => (
  <chip
    {...props}
    displayName="Ai-Thinker Ra-02 SX1278 LoRa Module"
    mfn="Ai-Thinker"
    footprint={AiThinkerRa02SX1278LoRaModule_FOOTPRINT}
    pinLabels={AiThinkerRa02SX1278LoRaModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SCK",
      pin4: "MOSI",
      pin5: "MISO",
      pin6: "CS",
      pin7: "IRQ",
      pin8: "RST",
    }}
    pinAttributes={AiThinkerRa02SX1278LoRaModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.16}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "SCK", "MOSI"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["MISO", "CS", "IRQ", "RST"],
      },
    }}
  />
);

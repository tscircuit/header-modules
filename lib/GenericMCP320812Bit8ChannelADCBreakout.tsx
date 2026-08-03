import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic MCP3208 12-Bit 8-Channel ADC Breakout — SPI. */
export const GenericMCP320812Bit8ChannelADCBreakout_FOOTPRINT =
  "headermodule10_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic MCP3208 12-Bit 8-Chann)" as const;

export const GenericMCP320812Bit8ChannelADCBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
  pin7: ["A0"],
  pin8: ["A1"],
  pin9: ["A2"],
  pin10: ["A3"],
} as const;

export const GenericMCP320812Bit8ChannelADCBreakout_PIN_ATTRIBUTES = {
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
  A0: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  A1: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  A2: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  A3: {
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

export type GenericMCP320812Bit8ChannelADCBreakoutProps = Omit<
  ChipProps<typeof GenericMCP320812Bit8ChannelADCBreakout_PIN_LABELS>,
  FixedProps
>;

export const GenericMCP320812Bit8ChannelADCBreakout = (
  props: GenericMCP320812Bit8ChannelADCBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Generic MCP3208 12-Bit 8-Channel ADC Breakout"
    mfn="Generic"
    footprint={GenericMCP320812Bit8ChannelADCBreakout_FOOTPRINT}
    pinLabels={GenericMCP320812Bit8ChannelADCBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SCK",
      pin4: "MOSI",
      pin5: "MISO",
      pin6: "CS",
      pin7: "A0",
      pin8: "A1",
      pin9: "A2",
      pin10: "A3",
    }}
    pinAttributes={GenericMCP320812Bit8ChannelADCBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.5}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "SCK", "MOSI", "MISO"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["CS", "A0", "A1", "A2", "A3"],
      },
    }}
  />
);

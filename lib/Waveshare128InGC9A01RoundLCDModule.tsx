import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Waveshare 1.28 in GC9A01 Round LCD Module — SPI. */
export const Waveshare128InGC9A01RoundLCDModule_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Waveshare 1.28 in GC9A01 Round)" as const;

export const Waveshare128InGC9A01RoundLCDModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
} as const;

export const Waveshare128InGC9A01RoundLCDModule_PIN_ATTRIBUTES = {
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

export type Waveshare128InGC9A01RoundLCDModuleProps = Omit<
  ChipProps<typeof Waveshare128InGC9A01RoundLCDModule_PIN_LABELS>,
  FixedProps
>;

export const Waveshare128InGC9A01RoundLCDModule = (
  props: Waveshare128InGC9A01RoundLCDModuleProps,
) => (
  <chip
    {...props}
    displayName="Waveshare 1.28 in GC9A01 Round LCD Module"
    mfn="Waveshare"
    footprint={Waveshare128InGC9A01RoundLCDModule_FOOTPRINT}
    pinLabels={Waveshare128InGC9A01RoundLCDModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SCK",
      pin4: "MOSI",
      pin5: "MISO",
      pin6: "CS",
    }}
    pinAttributes={Waveshare128InGC9A01RoundLCDModule_PIN_ATTRIBUTES}
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

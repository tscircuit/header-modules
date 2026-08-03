import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Waveshare 2.9 in e-Paper Display Module — SPI. */
export const Waveshare29InEPaperDisplayModule_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Waveshare 2.9 in e-Paper Displ)" as const;

export const Waveshare29InEPaperDisplayModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
  pin7: ["DC"],
  pin8: ["RST"],
} as const;

export const Waveshare29InEPaperDisplayModule_PIN_ATTRIBUTES = {
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

export type Waveshare29InEPaperDisplayModuleProps = Omit<
  ChipProps<typeof Waveshare29InEPaperDisplayModule_PIN_LABELS>,
  FixedProps
>;

export const Waveshare29InEPaperDisplayModule = (
  props: Waveshare29InEPaperDisplayModuleProps,
) => (
  <chip
    {...props}
    displayName="Waveshare 2.9 in e-Paper Display Module"
    mfn="Waveshare"
    footprint={Waveshare29InEPaperDisplayModule_FOOTPRINT}
    pinLabels={Waveshare29InEPaperDisplayModule_PIN_LABELS}
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
    pinAttributes={Waveshare29InEPaperDisplayModule_PIN_ATTRIBUTES}
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

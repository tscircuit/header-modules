import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic ENC28J60 Ethernet Module — SPI. */
export const GenericENC28J60EthernetModule_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic ENC28J60 Ethernet)" as const;

export const GenericENC28J60EthernetModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
} as const;

export const GenericENC28J60EthernetModule_PIN_ATTRIBUTES = {
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

export type GenericENC28J60EthernetModuleProps = Omit<
  ChipProps<typeof GenericENC28J60EthernetModule_PIN_LABELS>,
  FixedProps
>;

export const GenericENC28J60EthernetModule = (
  props: GenericENC28J60EthernetModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic ENC28J60 Ethernet Module"
    mfn="Generic"
    footprint={GenericENC28J60EthernetModule_FOOTPRINT}
    pinLabels={GenericENC28J60EthernetModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SCK",
      pin4: "MOSI",
      pin5: "MISO",
      pin6: "CS",
    }}
    pinAttributes={GenericENC28J60EthernetModule_PIN_ATTRIBUTES}
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

import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Espressif ESP32-S3-DevKitC-1 — ESP32-S3 dual-row dev board. */
export const EspressifESP32S3DevKitC1_FOOTPRINT =
  "headermodule30_rows2_p2.54mm_py15.24mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Espressif ESP32-S3-DevKitC-1)" as const;

export const EspressifESP32S3DevKitC1_PIN_LABELS = {
  pin1: ["3V3"],
  pin2: ["GND"],
  pin3: ["EN"],
  pin4: ["VP"],
  pin5: ["VN"],
  pin6: ["D34"],
  pin7: ["D35"],
  pin8: ["D32"],
  pin9: ["D33"],
  pin10: ["D25"],
  pin11: ["D26"],
  pin12: ["D27"],
  pin13: ["D14"],
  pin14: ["D12"],
  pin15: ["D13"],
  pin16: ["D15"],
  pin17: ["D2"],
  pin18: ["D4"],
  pin19: ["D16"],
  pin20: ["D17"],
  pin21: ["D5"],
  pin22: ["D18"],
  pin23: ["D19"],
  pin24: ["D21"],
  pin25: ["RX0"],
  pin26: ["TX0"],
  pin27: ["D22"],
  pin28: ["D23"],
  pin29: ["5V"],
  pin30: ["GND_2"],
} as const;

export const EspressifESP32S3DevKitC1_PIN_ATTRIBUTES = {
  "3V3": {
    providesPower: true,
    providesVoltage: "3.3V",
    includeInBoardPinout: true,
  },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  EN: { includeInBoardPinout: true },
  VP: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  VN: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D34: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D35: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D32: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D33: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D25: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D26: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D27: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D14: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D12: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D13: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D15: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D2: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D4: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D16: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D17: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D5: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D18: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["spi_sck"],
  },
  D19: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["spi_miso"],
  },
  D21: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["i2c_sda"],
  },
  RX0: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["uart_rx"],
  },
  TX0: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["uart_tx"],
  },
  D22: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["i2c_scl"],
  },
  D23: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["spi_mosi"],
  },
  "5V": {
    requiresPower: true,
    providesPower: true,
    includeInBoardPinout: true,
  },
  GND_2: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
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

export type EspressifESP32S3DevKitC1Props = Omit<
  ChipProps<typeof EspressifESP32S3DevKitC1_PIN_LABELS>,
  FixedProps
>;

export const EspressifESP32S3DevKitC1 = (
  props: EspressifESP32S3DevKitC1Props,
) => (
  <chip
    {...props}
    displayName="Espressif ESP32-S3-DevKitC-1"
    mfn="Espressif"
    footprint={EspressifESP32S3DevKitC1_FOOTPRINT}
    pinLabels={EspressifESP32S3DevKitC1_PIN_LABELS}
    pcbPinLabels={{
      pin1: "3V3",
      pin2: "GND",
      pin3: "EN",
      pin4: "VP",
      pin5: "VN",
      pin6: "D34",
      pin7: "D35",
      pin8: "D32",
      pin9: "D33",
      pin10: "D25",
      pin11: "D26",
      pin12: "D27",
      pin13: "D14",
      pin14: "D12",
      pin15: "D13",
      pin16: "D15",
      pin17: "D2",
      pin18: "D4",
      pin19: "D16",
      pin20: "D17",
      pin21: "D5",
      pin22: "D18",
      pin23: "D19",
      pin24: "D21",
      pin25: "RX0",
      pin26: "TX0",
      pin27: "D22",
      pin28: "D23",
      pin29: "5V",
      pin30: "GND_2",
    }}
    pinAttributes={EspressifESP32S3DevKitC1_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={5.9}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          "3V3",
          "GND",
          "EN",
          "VP",
          "VN",
          "D34",
          "D35",
          "D32",
          "D33",
          "D25",
          "D26",
          "D27",
          "D14",
          "D12",
          "D13",
        ],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          "D15",
          "D2",
          "D4",
          "D16",
          "D17",
          "D5",
          "D18",
          "D19",
          "D21",
          "RX0",
          "TX0",
          "D22",
          "D23",
          "5V",
          "GND_2",
        ],
      },
    }}
  />
);

import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

/** Adafruit ESP32 Feather V2 12+16 female socket footprint. */
export const ADAFRUIT_FEATHER_ESP32_V2_FOOTPRINT =
  "pinrow28_rows2_cols16_p2.54mm_py20.32mm_missing(1,2,3,4)_id1mm_od1.6mm_female_nopinlabels" as const

export const ADAFRUIT_FEATHER_ESP32_V2_PIN_LABELS = {
  // Short row, USB end to opposite end.
  pin1: ["BAT", "VBAT"],
  pin2: ["EN"],
  pin3: ["USB", "VBUS"],
  pin4: ["D13", "GPIO13", "LED"],
  pin5: ["D12", "GPIO12"],
  pin6: ["D27", "GPIO27"],
  pin7: ["D33", "GPIO33"],
  pin8: ["D15", "GPIO15"],
  pin9: ["D32", "GPIO32"],
  pin10: ["D14", "GPIO14"],
  pin11: ["SCL", "GPIO20"],
  pin12: ["SDA", "GPIO22"],

  // Long row, USB end to opposite end. The AREF position is an unconnected
  // hole on the ESP32 V2; D37 is the input-only GPIO at the last position.
  pin13: ["RST", "RESET"],
  pin14: ["3V3", "V3_3"],
  pin15: ["NC"],
  pin16: ["GND"],
  pin17: ["A0", "GPIO26", "ADC2_CH9", "DAC2"],
  pin18: ["A1", "GPIO25", "ADC2_CH8", "DAC1"],
  pin19: ["A2", "GPIO34", "ADC1_CH6"],
  pin20: ["A3", "GPIO39", "ADC1_CH3"],
  pin21: ["A4", "GPIO36", "ADC1_CH0"],
  pin22: ["A5", "GPIO4", "ADC2_CH0"],
  pin23: ["SCK", "GPIO5"],
  pin24: ["MOSI", "GPIO19"],
  pin25: ["MISO", "GPIO21"],
  pin26: ["RX", "GPIO7"],
  pin27: ["TX", "GPIO8"],
  pin28: ["D37", "I37", "GPIO37", "ADC1_CH1"],
} as const

export const ADAFRUIT_FEATHER_ESP32_V2_PIN_ATTRIBUTES = {
  BAT: { providesPower: true, includeInBoardPinout: true },
  EN: { includeInBoardPinout: true },
  USB: {
    requiresPower: true,
    providesPower: true,
    requiresVoltage: "5V",
    providesVoltage: "5V",
    includeInBoardPinout: true,
  },
  D13: {
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
  D27: {
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
  D15: {
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
  D14: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SCL: {
    isGpio: true,
    capabilities: ["i2c_scl"],
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SDA: {
    isGpio: true,
    capabilities: ["i2c_sda"],
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  RST: { includeInBoardPinout: true },
  "3V3": {
    providesPower: true,
    providesVoltage: "3.3V",
    includeInBoardPinout: true,
  },
  NC: { doNotConnect: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
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
  },
  A3: {
    isGpio: true,
    includeInBoardPinout: true,
  },
  A4: {
    isGpio: true,
    includeInBoardPinout: true,
  },
  A5: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SCK: {
    isGpio: true,
    capabilities: ["spi_sck"],
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUsePushPull: true,
  },
  MOSI: {
    isGpio: true,
    capabilities: ["spi_mosi"],
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUsePushPull: true,
  },
  MISO: {
    isGpio: true,
    capabilities: ["spi_miso"],
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
  },
  RX: {
    isGpio: true,
    capabilities: ["uart_rx"],
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  TX: {
    isGpio: true,
    capabilities: ["uart_tx"],
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  D37: { isGpio: true, includeInBoardPinout: true },
} as const satisfies Record<string, PinAttributeMap>

type FixedProps =
  | "datasheetUrl"
  | "displayName"
  | "footprint"
  | "manufacturerPartNumber"
  | "mfn"
  | "pinAttributes"
  | "pinLabels"
  | "schHeight"
  | "schPinArrangement"
  | "schWidth"

export type AdafruitFeatherESP32V2Props = Omit<
  ChipProps<typeof ADAFRUIT_FEATHER_ESP32_V2_PIN_LABELS>,
  FixedProps
>

export const AdafruitFeatherESP32V2 = (props: AdafruitFeatherESP32V2Props) => (
  <chip
    {...props}
    displayName="Adafruit ESP32 Feather V2"
    mfn="Adafruit"
    manufacturerPartNumber="5400"
    datasheetUrl="https://learn.adafruit.com/adafruit-esp32-feather-v2/pinouts"
    footprint={ADAFRUIT_FEATHER_ESP32_V2_FOOTPRINT}
    pinLabels={ADAFRUIT_FEATHER_ESP32_V2_PIN_LABELS}
    pinAttributes={ADAFRUIT_FEATHER_ESP32_V2_PIN_ATTRIBUTES}
    schWidth={1.5}
    schHeight={2.6}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          "RST",
          "3V3",
          "NC",
          "GND",
          "A0",
          "A1",
          "A2",
          "A3",
          "A4",
          "A5",
          "SCK",
          "MOSI",
          "MISO",
          "RX",
          "TX",
          "D37",
        ],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          "BAT",
          "EN",
          "USB",
          "D13",
          "D12",
          "D27",
          "D33",
          "D15",
          "D32",
          "D14",
          "SCL",
          "SDA",
        ],
      },
    }}
  />
)

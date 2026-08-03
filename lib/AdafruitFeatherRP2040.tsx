import type { ChipProps, PinAttributeMap } from "@tscircuit/props"
import { rp2040Gpio } from "./rp2040PinAttributes"

/**
 * Adafruit Feather RP2040 socket: one 12-pin row and one 16-pin row.
 * USB is on the negative PCB X side when pcbRotation is zero.
 */
export const ADAFRUIT_FEATHER_RP2040_FOOTPRINT =
  "headermodule28_rows2_cols16_p2.54mm_py20.32mm_missing(1,2,3,4)_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(FEATHER RP2040)" as const

export const ADAFRUIT_FEATHER_RP2040_PIN_LABELS = {
  // Short row, USB end to opposite end.
  pin1: ["BAT"],
  pin2: ["EN"],
  pin3: ["USB", "VBUS"],
  pin4: ["D13", "GP13", "GPIO13", "LED"],
  pin5: ["D12", "GP12", "GPIO12"],
  pin6: ["D11", "GP11", "GPIO11"],
  pin7: ["D10", "GP10", "GPIO10"],
  pin8: ["D9", "GP9", "GPIO9"],
  pin9: ["D6", "GP8", "GPIO8"],
  pin10: ["D5", "GP7", "GPIO7"],
  pin11: ["SCL", "GP3", "GPIO3"],
  pin12: ["SDA", "GP2", "GPIO2"],

  // Long row, USB end to opposite end.
  pin13: ["RST", "RESET", "RUN"],
  pin14: ["3V3", "V3V3"],
  pin15: ["3V3_AREF", "AREF", "ADC_VREF"],
  pin16: ["GND"],
  pin17: ["A0", "GP26", "GPIO26", "ADC0"],
  pin18: ["A1", "GP27", "GPIO27", "ADC1"],
  pin19: ["A2", "GP28", "GPIO28", "ADC2"],
  pin20: ["A3", "GP29", "GPIO29", "ADC3"],
  pin21: ["D24", "GP24", "GPIO24"],
  pin22: ["D25", "GP25", "GPIO25"],
  pin23: ["SCK", "GP18", "GPIO18"],
  pin24: ["MOSI", "MO", "GP19", "GPIO19"],
  pin25: ["MISO", "MI", "GP20", "GPIO20"],
  pin26: ["RX", "D0", "GP1", "GPIO1"],
  pin27: ["TX", "D1", "GP0", "GPIO0"],
  pin28: ["D4", "GP6", "GPIO6"],
} as const

export const ADAFRUIT_FEATHER_RP2040_PIN_ATTRIBUTES = {
  BAT: {
    providesPower: true,
    includeInBoardPinout: true,
  },
  EN: { includeInBoardPinout: true },
  USB: {
    requiresPower: true,
    providesPower: true,
    requiresVoltage: "5V",
    providesVoltage: "5V",
    includeInBoardPinout: true,
  },
  D13: rp2040Gpio(13),
  D12: rp2040Gpio(12),
  D11: rp2040Gpio(11),
  D10: rp2040Gpio(10),
  D9: rp2040Gpio(9),
  D6: rp2040Gpio(8),
  D5: rp2040Gpio(7),
  SCL: rp2040Gpio(3),
  SDA: rp2040Gpio(2),
  RST: { includeInBoardPinout: true },
  "3V3": {
    providesPower: true,
    providesVoltage: "3.3V",
    includeInBoardPinout: true,
  },
  "3V3_AREF": {
    providesPower: true,
    providesVoltage: "3.3V",
    includeInBoardPinout: true,
  },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  A0: rp2040Gpio(26),
  A1: rp2040Gpio(27),
  A2: rp2040Gpio(28),
  A3: rp2040Gpio(29),
  D24: rp2040Gpio(24),
  D25: rp2040Gpio(25),
  SCK: rp2040Gpio(18),
  MOSI: rp2040Gpio(19),
  MISO: rp2040Gpio(20),
  RX: rp2040Gpio(1),
  TX: rp2040Gpio(0),
  D4: rp2040Gpio(6),
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

export type AdafruitFeatherRP2040Props = Omit<
  ChipProps<typeof ADAFRUIT_FEATHER_RP2040_PIN_LABELS>,
  FixedProps
>

export const AdafruitFeatherRP2040 = (
  props: AdafruitFeatherRP2040Props,
) => (
  <chip
    {...props}
    displayName="Adafruit Feather RP2040"
    mfn="Adafruit"
    manufacturerPartNumber="4884"
    datasheetUrl="https://learn.adafruit.com/adafruit-feather-rp2040-pico/pinouts"
    footprint={ADAFRUIT_FEATHER_RP2040_FOOTPRINT}
    pinLabels={ADAFRUIT_FEATHER_RP2040_PIN_LABELS}
    pcbPinLabels={{
      pin1: "BAT",
      pin2: "EN",
      pin3: "USB",
      pin4: "D13",
      pin5: "D12",
      pin6: "D11",
      pin7: "D10",
      pin8: "D9",
      pin9: "D6",
      pin10: "D5",
      pin11: "SCL",
      pin12: "SDA",
      pin13: "RST",
      pin14: "3V3",
      pin15: "3V3_AREF",
      pin16: "GND",
      pin17: "A0",
      pin18: "A1",
      pin19: "A2",
      pin20: "A3",
      pin21: "D24",
      pin22: "D25",
      pin23: "SCK",
      pin24: "MOSI",
      pin25: "MISO",
      pin26: "RX",
      pin27: "TX",
      pin28: "D4",
    }}
    pinAttributes={ADAFRUIT_FEATHER_RP2040_PIN_ATTRIBUTES}
    schWidth={1.5}
    schHeight={2.6}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          "RST",
          "3V3",
          "3V3_AREF",
          "GND",
          "A0",
          "A1",
          "A2",
          "A3",
          "D24",
          "D25",
          "SCK",
          "MOSI",
          "MISO",
          "RX",
          "TX",
          "D4",
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
          "D11",
          "D10",
          "D9",
          "D6",
          "D5",
          "SCL",
          "SDA",
        ],
      },
    }}
  />
)

/** @deprecated Use AdafruitFeatherRP2040. */
export const Feather = AdafruitFeatherRP2040
/** @deprecated Use AdafruitFeatherRP2040Props. */
export type FeatherProps = AdafruitFeatherRP2040Props
/** @deprecated Use ADAFRUIT_FEATHER_RP2040_FOOTPRINT. */
export const FEATHER_FOOTPRINT = ADAFRUIT_FEATHER_RP2040_FOOTPRINT

import type { ChipProps, PinAttributeMap } from "@tscircuit/props"
import { rp2040Gpio } from "./rp2040PinAttributes"

/** Adafruit ItsyBitsy RP2040: two 14-pin female header rows. */
export const ADAFRUIT_ITSYBITSY_RP2040_FOOTPRINT =
  "pinrow28_rows2_cols14_p2.54mm_py15.24mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(ITSY RP2040)" as const

export const ADAFRUIT_ITSYBITSY_RP2040_PIN_LABELS = {
  pin1: ["VBAT"],
  pin2: ["GND"],
  pin3: ["VBUS"],
  pin4: ["D13", "GP11", "GPIO11"],
  pin5: ["D12", "GP10", "GPIO10"],
  pin6: ["D11", "GP9", "GPIO9"],
  pin7: ["D10", "GP8", "GPIO8"],
  pin8: ["D9", "GP7", "GPIO7"],
  pin9: ["D7", "GP6", "GPIO6"],
  pin10: ["D5", "GP14", "GPIO14"],
  pin11: ["SCL", "GP3", "GPIO3"],
  pin12: ["SDA", "GP2", "GPIO2"],
  pin13: ["TX", "D1", "GP0", "GPIO0"],
  pin14: ["RX", "D0", "GP1", "GPIO1"],
  pin15: ["D2", "GP12", "GPIO12"],
  pin16: ["MISO", "GP20", "GPIO20"],
  pin17: ["MOSI", "GP19", "GPIO19"],
  pin18: ["SCK", "GP18", "GPIO18"],
  pin19: ["D25", "GP25", "GPIO25"],
  pin20: ["D24", "GP24", "GPIO24"],
  pin21: ["A3", "GP29", "GPIO29"],
  pin22: ["A2", "GP28", "GPIO28"],
  pin23: ["A1", "GP27", "GPIO27"],
  pin24: ["A0", "GP26", "GPIO26"],
  pin25: ["VHI"],
  pin26: ["V3_3", "3V3"],
  pin27: ["V3_3_2", "3V3"],
  pin28: ["RESET", "RUN", "RST"],
} as const

export const ADAFRUIT_ITSYBITSY_RP2040_PIN_ATTRIBUTES = {
  VBAT: { providesPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  VBUS: {
    requiresPower: true,
    providesPower: true,
    requiresVoltage: "5V",
    providesVoltage: "5V",
    includeInBoardPinout: true,
  },
  D13: rp2040Gpio(11),
  D12: rp2040Gpio(10),
  D11: rp2040Gpio(9),
  D10: rp2040Gpio(8),
  D9: rp2040Gpio(7),
  D7: rp2040Gpio(6),
  D5: rp2040Gpio(14),
  SCL: rp2040Gpio(3),
  SDA: rp2040Gpio(2),
  TX: rp2040Gpio(0),
  RX: rp2040Gpio(1),
  D2: rp2040Gpio(12),
  MISO: rp2040Gpio(20),
  MOSI: rp2040Gpio(19),
  SCK: rp2040Gpio(18),
  D25: rp2040Gpio(25),
  D24: rp2040Gpio(24),
  A3: rp2040Gpio(29),
  A2: rp2040Gpio(28),
  A1: rp2040Gpio(27),
  A0: rp2040Gpio(26),
  VHI: { includeInBoardPinout: true },
  V3_3: {
    providesPower: true,
    providesVoltage: "3.3V",
    includeInBoardPinout: true,
  },
  V3_3_2: {
    providesPower: true,
    providesVoltage: "3.3V",
    includeInBoardPinout: true,
  },
  RESET: { includeInBoardPinout: true },
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

export type AdafruitItsyBitsyRP2040Props = Omit<
  ChipProps<typeof ADAFRUIT_ITSYBITSY_RP2040_PIN_LABELS>,
  FixedProps
>

export const AdafruitItsyBitsyRP2040 = (
  props: AdafruitItsyBitsyRP2040Props,
) => (
  <chip
    {...props}
    displayName="Adafruit ItsyBitsy RP2040"
    mfn="Adafruit"
    manufacturerPartNumber="4888"
    datasheetUrl="https://learn.adafruit.com/adafruit-itsybitsy-rp2040/pinouts"
    footprint={ADAFRUIT_ITSYBITSY_RP2040_FOOTPRINT}
    pinLabels={ADAFRUIT_ITSYBITSY_RP2040_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VBAT",
      pin2: "GND",
      pin3: "VBUS",
      pin4: "D13",
      pin5: "D12",
      pin6: "D11",
      pin7: "D10",
      pin8: "D9",
      pin9: "D7",
      pin10: "D5",
      pin11: "SCL",
      pin12: "SDA",
      pin13: "TX",
      pin14: "RX",
      pin15: "D2",
      pin16: "MISO",
      pin17: "MOSI",
      pin18: "SCK",
      pin19: "D25",
      pin20: "D24",
      pin21: "A3",
      pin22: "A2",
      pin23: "A1",
      pin24: "A0",
      pin25: "VHI",
      pin26: "V3_3",
      pin27: "V3_3_2",
      pin28: "RESET",
    }}
    pinAttributes={ADAFRUIT_ITSYBITSY_RP2040_PIN_ATTRIBUTES}
    schWidth={1.8}
    schHeight={2.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [
          "D2",
          "MISO",
          "MOSI",
          "SCK",
          "D25",
          "D24",
          "A3",
          "A2",
          "A1",
          "A0",
          "VHI",
          "V3_3",
          "V3_3_2",
          "RESET",
        ],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: [
          "VBAT",
          "GND",
          "VBUS",
          "D13",
          "D12",
          "D11",
          "D10",
          "D9",
          "D7",
          "D5",
          "SCL",
          "SDA",
          "TX",
          "RX",
        ],
      },
    }}
  />
)

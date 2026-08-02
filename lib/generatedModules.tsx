import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

const POWER_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap

const POWER_IO = {
  requiresPower: true,
  providesPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap

const POWER_3V3_OUT = {
  providesPower: true,
  providesVoltage: "3.3V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap

const POWER_OUTPUT = {
  providesPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap

const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap

const CONTROL = {
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap

const CONTACT = {
  mustBeConnected: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap

const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap

const I2C_SDA = {
  ...GPIO,
  capabilities: ["i2c_sda"],
} as const satisfies PinAttributeMap

const I2C_SCL = {
  ...GPIO,
  capabilities: ["i2c_scl"],
} as const satisfies PinAttributeMap

const SPI_SCK = {
  ...GPIO,
  capabilities: ["spi_sck"],
} as const satisfies PinAttributeMap

const SPI_MOSI = {
  ...GPIO,
  capabilities: ["spi_mosi"],
} as const satisfies PinAttributeMap

const SPI_MISO = {
  ...GPIO,
  capabilities: ["spi_miso"],
} as const satisfies PinAttributeMap

const SPI_CS = {
  ...GPIO,
  capabilities: ["spi_cs"],
} as const satisfies PinAttributeMap

const UART_TX = {
  ...GPIO,
  capabilities: ["uart_tx"],
} as const satisfies PinAttributeMap

const UART_RX = {
  ...GPIO,
  capabilities: ["uart_rx"],
} as const satisfies PinAttributeMap

const FOOTPRINT_F3 = "pinrow3_p2.54mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F4 = "pinrow4_p2.54mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F5 = "pinrow5_p2.54mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F6 = "pinrow6_p2.54mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F8 = "pinrow8_p2.54mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F10 = "pinrow10_p2.54mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F12 = "pinrow12_rows2_p2.54mm_py7.62mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F14 = "pinrow14_rows2_p2.54mm_py15.24mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F16 = "pinrow16_rows2_p2.54mm_py12.7mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F24 = "pinrow24_rows2_p2.54mm_py15.24mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F28 = "pinrow28_rows2_cols16_p2.54mm_py20.32mm_missing(1,2,3,4)_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F30 = "pinrow30_rows2_p2.54mm_py15.24mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F40 = "pinrow40_rows2_p2.54mm_py17.78mm_id1mm_od1.6mm_female_nopinlabels" as const
const FOOTPRINT_F42 = "pinrow42_rows2_p2.54mm_py17.78mm_id1mm_od1.6mm_female_nopinlabels" as const

export const FEATHER28_PIN_LABELS = {
  pin1: ["BAT"],
  pin2: ["EN"],
  pin3: ["USB"],
  pin4: ["D13"],
  pin5: ["D12"],
  pin6: ["D11"],
  pin7: ["D10"],
  pin8: ["D9"],
  pin9: ["D6"],
  pin10: ["D5"],
  pin11: ["SCL"],
  pin12: ["SDA"],
  pin13: ["RST"],
  pin14: ["3V"],
  pin15: ["AREF"],
  pin16: ["GND"],
  pin17: ["A0"],
  pin18: ["A1"],
  pin19: ["A2"],
  pin20: ["A3"],
  pin21: ["A4"],
  pin22: ["A5"],
  pin23: ["SCK"],
  pin24: ["MOSI"],
  pin25: ["MISO"],
  pin26: ["RX"],
  pin27: ["TX"],
  pin28: ["D4"],
} as const

export const FEATHER28_PIN_ATTRIBUTES = {
  BAT: POWER_IO,
  EN: CONTROL,
  USB: POWER_IO,
  D13: GPIO,
  D12: GPIO,
  D11: GPIO,
  D10: GPIO,
  D9: GPIO,
  D6: GPIO,
  D5: GPIO,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  RST: CONTROL,
  "3V": POWER_3V3_OUT,
  AREF: CONTROL,
  GND: GROUND,
  A0: GPIO,
  A1: GPIO,
  A2: GPIO,
  A3: GPIO,
  A4: GPIO,
  A5: GPIO,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  RX: UART_RX,
  TX: UART_TX,
  D4: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const XIAO14_PIN_LABELS = {
  pin1: ["5V"],
  pin2: ["D0"],
  pin3: ["D1"],
  pin4: ["D2"],
  pin5: ["D3"],
  pin6: ["D4"],
  pin7: ["D5"],
  pin8: ["D6"],
  pin9: ["D7"],
  pin10: ["D8"],
  pin11: ["D9"],
  pin12: ["D10"],
  pin13: ["3V3"],
  pin14: ["GND"],
} as const

export const XIAO14_PIN_ATTRIBUTES = {
  "5V": POWER_IO,
  D0: GPIO,
  D1: GPIO,
  D2: GPIO,
  D3: GPIO,
  D4: I2C_SDA,
  D5: I2C_SCL,
  D6: UART_TX,
  D7: UART_RX,
  D8: SPI_SCK,
  D9: SPI_MISO,
  D10: SPI_MOSI,
  "3V3": POWER_3V3_OUT,
  GND: GROUND,
} as const satisfies Record<string, PinAttributeMap>

export const NANO30_PIN_LABELS = {
  pin1: ["TX"],
  pin2: ["RX"],
  pin3: ["RESET"],
  pin4: ["GND"],
  pin5: ["D2"],
  pin6: ["D3"],
  pin7: ["D4"],
  pin8: ["D5"],
  pin9: ["D6"],
  pin10: ["D7"],
  pin11: ["D8"],
  pin12: ["D9"],
  pin13: ["D10"],
  pin14: ["D11"],
  pin15: ["D12"],
  pin16: ["D13"],
  pin17: ["3V3"],
  pin18: ["AREF"],
  pin19: ["A0"],
  pin20: ["A1"],
  pin21: ["A2"],
  pin22: ["A3"],
  pin23: ["A4"],
  pin24: ["A5"],
  pin25: ["A6"],
  pin26: ["A7"],
  pin27: ["5V"],
  pin28: ["RESET_2"],
  pin29: ["GND_2"],
  pin30: ["VIN"],
} as const

export const NANO30_PIN_ATTRIBUTES = {
  TX: UART_TX,
  RX: UART_RX,
  RESET: CONTROL,
  GND: GROUND,
  D2: GPIO,
  D3: GPIO,
  D4: GPIO,
  D5: GPIO,
  D6: GPIO,
  D7: GPIO,
  D8: GPIO,
  D9: GPIO,
  D10: SPI_CS,
  D11: SPI_MOSI,
  D12: SPI_MISO,
  D13: SPI_SCK,
  "3V3": POWER_3V3_OUT,
  AREF: GPIO,
  A0: GPIO,
  A1: GPIO,
  A2: GPIO,
  A3: GPIO,
  A4: I2C_SDA,
  A5: I2C_SCL,
  A6: GPIO,
  A7: GPIO,
  "5V": POWER_IO,
  RESET_2: CONTROL,
  GND_2: GROUND,
  VIN: POWER_INPUT,
} as const satisfies Record<string, PinAttributeMap>

export const PICO40_PIN_LABELS = {
  pin1: ["GP0"],
  pin2: ["GP1"],
  pin3: ["GP2"],
  pin4: ["GP3"],
  pin5: ["GP4"],
  pin6: ["GP5"],
  pin7: ["GP6"],
  pin8: ["GP7"],
  pin9: ["GP8"],
  pin10: ["GP9"],
  pin11: ["GP10"],
  pin12: ["GP11"],
  pin13: ["GP12"],
  pin14: ["GP13"],
  pin15: ["GP14"],
  pin16: ["GP15"],
  pin17: ["GP16"],
  pin18: ["GP17"],
  pin19: ["GP18"],
  pin20: ["GP19"],
  pin21: ["GP20"],
  pin22: ["GP21"],
  pin23: ["GP22"],
  pin24: ["GP23"],
  pin25: ["GP24"],
  pin26: ["GP25"],
  pin27: ["GP26"],
  pin28: ["GP27"],
  pin29: ["GP28"],
  pin30: ["RUN"],
  pin31: ["ADC_VREF"],
  pin32: ["3V3_EN"],
  pin33: ["3V3"],
  pin34: ["VSYS"],
  pin35: ["VBUS"],
  pin36: ["GND1"],
  pin37: ["GND2"],
  pin38: ["GND3"],
  pin39: ["GND4"],
  pin40: ["GND5"],
} as const

export const PICO40_PIN_ATTRIBUTES = {
  GP0: GPIO,
  GP1: GPIO,
  GP2: GPIO,
  GP3: GPIO,
  GP4: GPIO,
  GP5: GPIO,
  GP6: GPIO,
  GP7: GPIO,
  GP8: GPIO,
  GP9: GPIO,
  GP10: GPIO,
  GP11: GPIO,
  GP12: GPIO,
  GP13: GPIO,
  GP14: GPIO,
  GP15: GPIO,
  GP16: GPIO,
  GP17: GPIO,
  GP18: GPIO,
  GP19: GPIO,
  GP20: GPIO,
  GP21: GPIO,
  GP22: GPIO,
  GP23: GPIO,
  GP24: GPIO,
  GP25: GPIO,
  GP26: GPIO,
  GP27: GPIO,
  GP28: GPIO,
  RUN: CONTROL,
  ADC_VREF: CONTROL,
  "3V3_EN": CONTROL,
  "3V3": POWER_3V3_OUT,
  VSYS: POWER_IO,
  VBUS: POWER_IO,
  GND1: GROUND,
  GND2: GROUND,
  GND3: GROUND,
  GND4: GROUND,
  GND5: GROUND,
} as const satisfies Record<string, PinAttributeMap>

export const TEENSY24_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["3V3"],
  pin4: ["USB"],
  pin5: ["RESET"],
  pin6: ["RX1"],
  pin7: ["TX1"],
  pin8: ["D0"],
  pin9: ["D1"],
  pin10: ["D2"],
  pin11: ["D3"],
  pin12: ["D4"],
  pin13: ["D5"],
  pin14: ["D6"],
  pin15: ["D7"],
  pin16: ["D8"],
  pin17: ["D9"],
  pin18: ["D10"],
  pin19: ["D11"],
  pin20: ["D12"],
  pin21: ["D13"],
  pin22: ["A0"],
  pin23: ["A1"],
  pin24: ["A2"],
} as const

export const TEENSY24_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  "3V3": POWER_3V3_OUT,
  USB: POWER_IO,
  RESET: CONTROL,
  RX1: UART_RX,
  TX1: UART_TX,
  D0: GPIO,
  D1: GPIO,
  D2: GPIO,
  D3: GPIO,
  D4: GPIO,
  D5: GPIO,
  D6: GPIO,
  D7: GPIO,
  D8: GPIO,
  D9: GPIO,
  D10: GPIO,
  D11: GPIO,
  D12: GPIO,
  D13: GPIO,
  A0: GPIO,
  A1: GPIO,
  A2: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const TEENSY42_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["3V3"],
  pin4: ["USB"],
  pin5: ["RESET"],
  pin6: ["RX1"],
  pin7: ["TX1"],
  pin8: ["D0"],
  pin9: ["D1"],
  pin10: ["D2"],
  pin11: ["D3"],
  pin12: ["D4"],
  pin13: ["D5"],
  pin14: ["D6"],
  pin15: ["D7"],
  pin16: ["D8"],
  pin17: ["D9"],
  pin18: ["D10"],
  pin19: ["D11"],
  pin20: ["D12"],
  pin21: ["D13"],
  pin22: ["D14"],
  pin23: ["D15"],
  pin24: ["D16"],
  pin25: ["D17"],
  pin26: ["D18"],
  pin27: ["D19"],
  pin28: ["D20"],
  pin29: ["D21"],
  pin30: ["D22"],
  pin31: ["D23"],
  pin32: ["D24"],
  pin33: ["D25"],
  pin34: ["D26"],
  pin35: ["D27"],
  pin36: ["D28"],
  pin37: ["D29"],
  pin38: ["D30"],
  pin39: ["D31"],
  pin40: ["D32"],
  pin41: ["D33"],
  pin42: ["D34"],
} as const

export const TEENSY42_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  "3V3": POWER_3V3_OUT,
  USB: POWER_IO,
  RESET: CONTROL,
  RX1: UART_RX,
  TX1: UART_TX,
  D0: GPIO,
  D1: GPIO,
  D2: GPIO,
  D3: GPIO,
  D4: GPIO,
  D5: GPIO,
  D6: GPIO,
  D7: GPIO,
  D8: GPIO,
  D9: GPIO,
  D10: GPIO,
  D11: GPIO,
  D12: GPIO,
  D13: GPIO,
  D14: GPIO,
  D15: GPIO,
  D16: GPIO,
  D17: GPIO,
  D18: GPIO,
  D19: GPIO,
  D20: GPIO,
  D21: GPIO,
  D22: GPIO,
  D23: GPIO,
  D24: GPIO,
  D25: GPIO,
  D26: GPIO,
  D27: GPIO,
  D28: GPIO,
  D29: GPIO,
  D30: GPIO,
  D31: GPIO,
  D32: GPIO,
  D33: GPIO,
  D34: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const ITSYBITSY24_PIN_LABELS = {
  pin1: ["BAT"],
  pin2: ["G"],
  pin3: ["USB"],
  pin4: ["EN"],
  pin5: ["D13"],
  pin6: ["D12"],
  pin7: ["D11"],
  pin8: ["D10"],
  pin9: ["D9"],
  pin10: ["D7"],
  pin11: ["D5"],
  pin12: ["SCL"],
  pin13: ["SDA"],
  pin14: ["RST"],
  pin15: ["3V"],
  pin16: ["AREF"],
  pin17: ["GND"],
  pin18: ["A0"],
  pin19: ["A1"],
  pin20: ["A2"],
  pin21: ["SCK"],
  pin22: ["MOSI"],
  pin23: ["MISO"],
  pin24: ["D4"],
} as const

export const ITSYBITSY24_PIN_ATTRIBUTES = {
  BAT: POWER_IO,
  G: GROUND,
  USB: POWER_IO,
  EN: CONTROL,
  D13: GPIO,
  D12: GPIO,
  D11: GPIO,
  D10: GPIO,
  D9: GPIO,
  D7: GPIO,
  D5: GPIO,
  SCL: I2C_SCL,
  SDA: I2C_SDA,
  RST: CONTROL,
  "3V": POWER_3V3_OUT,
  AREF: CONTROL,
  GND: GROUND,
  A0: GPIO,
  A1: GPIO,
  A2: GPIO,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  D4: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const QTPY12_PIN_LABELS = {
  pin1: ["5V"],
  pin2: ["GND"],
  pin3: ["3V3"],
  pin4: ["SDA"],
  pin5: ["SCL"],
  pin6: ["D0"],
  pin7: ["D1"],
  pin8: ["D2"],
  pin9: ["D3"],
  pin10: ["D4"],
  pin11: ["D5"],
  pin12: ["D6"],
} as const

export const QTPY12_PIN_ATTRIBUTES = {
  "5V": POWER_IO,
  GND: GROUND,
  "3V3": POWER_3V3_OUT,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  D0: GPIO,
  D1: GPIO,
  D2: GPIO,
  D3: GPIO,
  D4: GPIO,
  D5: GPIO,
  D6: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const PROMICRO24_PIN_LABELS = {
  pin1: ["RAW"],
  pin2: ["GND"],
  pin3: ["RST"],
  pin4: ["VCC"],
  pin5: ["RX"],
  pin6: ["TX"],
  pin7: ["D2"],
  pin8: ["D3"],
  pin9: ["D4"],
  pin10: ["D5"],
  pin11: ["D6"],
  pin12: ["D7"],
  pin13: ["D8"],
  pin14: ["D9"],
  pin15: ["D10"],
  pin16: ["D16"],
  pin17: ["D14"],
  pin18: ["D15"],
  pin19: ["A0"],
  pin20: ["A1"],
  pin21: ["A2"],
  pin22: ["A3"],
  pin23: ["SDA"],
  pin24: ["SCL"],
} as const

export const PROMICRO24_PIN_ATTRIBUTES = {
  RAW: POWER_INPUT,
  GND: GROUND,
  RST: CONTROL,
  VCC: POWER_3V3_OUT,
  RX: UART_RX,
  TX: UART_TX,
  D2: GPIO,
  D3: GPIO,
  D4: GPIO,
  D5: GPIO,
  D6: GPIO,
  D7: GPIO,
  D8: GPIO,
  D9: GPIO,
  D10: GPIO,
  D16: GPIO,
  D14: GPIO,
  D15: GPIO,
  A0: GPIO,
  A1: GPIO,
  A2: GPIO,
  A3: GPIO,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
} as const satisfies Record<string, PinAttributeMap>

export const DEVKIT30_PIN_LABELS = {
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
} as const

export const DEVKIT30_PIN_ATTRIBUTES = {
  "3V3": POWER_3V3_OUT,
  GND: GROUND,
  EN: CONTROL,
  VP: GPIO,
  VN: GPIO,
  D34: GPIO,
  D35: GPIO,
  D32: GPIO,
  D33: GPIO,
  D25: GPIO,
  D26: GPIO,
  D27: GPIO,
  D14: GPIO,
  D12: GPIO,
  D13: GPIO,
  D15: GPIO,
  D2: GPIO,
  D4: GPIO,
  D16: GPIO,
  D17: GPIO,
  D5: GPIO,
  D18: SPI_SCK,
  D19: SPI_MISO,
  D21: I2C_SDA,
  RX0: UART_RX,
  TX0: UART_TX,
  D22: I2C_SCL,
  D23: SPI_MOSI,
  "5V": POWER_IO,
  GND_2: GROUND,
} as const satisfies Record<string, PinAttributeMap>

export const I2C4_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const

export const I2C4_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
} as const satisfies Record<string, PinAttributeMap>

export const I2C5_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["INT"],
} as const

export const I2C5_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  INT: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const I2C6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["ADDR"],
  pin6: ["INT"],
} as const

export const I2C6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  ADDR: GPIO,
  INT: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const I2CSPI8_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["SCK"],
  pin6: ["MOSI"],
  pin7: ["MISO"],
  pin8: ["CS"],
} as const

export const I2CSPI8_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  CS: SPI_CS,
} as const satisfies Record<string, PinAttributeMap>

export const I2CUART6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["TX"],
  pin6: ["RX"],
} as const

export const I2CUART6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  TX: UART_TX,
  RX: UART_RX,
} as const satisfies Record<string, PinAttributeMap>

export const I2CSPIUART10_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["SCK"],
  pin6: ["MOSI"],
  pin7: ["MISO"],
  pin8: ["CS"],
  pin9: ["TX"],
  pin10: ["RX"],
} as const

export const I2CSPIUART10_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  CS: SPI_CS,
  TX: UART_TX,
  RX: UART_RX,
} as const satisfies Record<string, PinAttributeMap>

export const SPI6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
} as const

export const SPI6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  CS: SPI_CS,
} as const satisfies Record<string, PinAttributeMap>

export const SPIUART8_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
  pin7: ["TX"],
  pin8: ["RX"],
} as const

export const SPIUART8_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  CS: SPI_CS,
  TX: UART_TX,
  RX: UART_RX,
} as const satisfies Record<string, PinAttributeMap>

export const UART4_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TX"],
  pin4: ["RX"],
} as const

export const UART4_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  TX: UART_TX,
  RX: UART_RX,
} as const satisfies Record<string, PinAttributeMap>

export const UART5_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TX"],
  pin4: ["RX"],
  pin5: ["AUX"],
} as const

export const UART5_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  TX: UART_TX,
  RX: UART_RX,
  AUX: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const ANALOG3_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const

export const ANALOG3_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  OUT: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const ANALOG4_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["AO"],
  pin4: ["DO"],
} as const

export const ANALOG4_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  AO: GPIO,
  DO: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const DIGITAL3_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const

export const DIGITAL3_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  OUT: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const TRIGGER4_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TRIG"],
  pin4: ["ECHO"],
} as const

export const TRIGGER4_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  TRIG: GPIO,
  ECHO: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const ONEWIRE3_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["DQ"],
} as const

export const ONEWIRE3_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  DQ: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const I2S5_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["BCLK"],
  pin4: ["LRCLK"],
  pin5: ["DIN"],
} as const

export const I2S5_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  BCLK: GPIO,
  LRCLK: GPIO,
  DIN: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const PDM5_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["CLK"],
  pin4: ["DATA"],
  pin5: ["SEL"],
} as const

export const PDM5_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  CLK: GPIO,
  DATA: GPIO,
  SEL: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const LOADCELL4_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["DOUT"],
  pin4: ["SCK"],
} as const

export const LOADCELL4_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  DOUT: GPIO,
  SCK: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const RELAY6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["IN"],
  pin4: ["NO"],
  pin5: ["COM"],
  pin6: ["NC"],
} as const

export const RELAY6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  IN: GPIO,
  NO: CONTACT,
  COM: CONTACT,
  NC: CONTACT,
} as const satisfies Record<string, PinAttributeMap>

export const POWER4_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const

export const POWER4_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  VOUT: POWER_OUTPUT,
  EN: CONTROL,
} as const satisfies Record<string, PinAttributeMap>

export const POWER5_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
  pin5: ["PG"],
} as const

export const POWER5_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  VOUT: POWER_OUTPUT,
  EN: CONTROL,
  PG: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const STEPPER16_PIN_LABELS = {
  pin1: ["ENABLE"],
  pin2: ["VMOT"],
  pin3: ["GND_MOTOR"],
  pin4: ["2B"],
  pin5: ["2A"],
  pin6: ["1A"],
  pin7: ["1B"],
  pin8: ["VDD"],
  pin9: ["GND_LOGIC"],
  pin10: ["DIR"],
  pin11: ["STEP"],
  pin12: ["SLEEP"],
  pin13: ["RESET"],
  pin14: ["MS3"],
  pin15: ["MS2"],
  pin16: ["MS1"],
} as const

export const STEPPER16_PIN_ATTRIBUTES = {
  ENABLE: CONTROL,
  VMOT: POWER_INPUT,
  GND_MOTOR: GROUND,
  "2B": CONTACT,
  "2A": CONTACT,
  "1A": CONTACT,
  "1B": CONTACT,
  VDD: POWER_INPUT,
  GND_LOGIC: GROUND,
  DIR: GPIO,
  STEP: GPIO,
  SLEEP: CONTROL,
  RESET: CONTROL,
  MS3: GPIO,
  MS2: GPIO,
  MS1: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const STEPPER8_PIN_LABELS = {
  pin1: ["VMOT"],
  pin2: ["GND"],
  pin3: ["STEP"],
  pin4: ["DIR"],
  pin5: ["EN"],
  pin6: ["MS1"],
  pin7: ["MS2"],
  pin8: ["MS3"],
} as const

export const STEPPER8_PIN_ATTRIBUTES = {
  VMOT: POWER_INPUT,
  GND: GROUND,
  STEP: GPIO,
  DIR: GPIO,
  EN: CONTROL,
  MS1: GPIO,
  MS2: GPIO,
  MS3: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const MOTOR6_PIN_LABELS = {
  pin1: ["VMOT"],
  pin2: ["GND"],
  pin3: ["VCC"],
  pin4: ["IN1"],
  pin5: ["IN2"],
  pin6: ["FAULT"],
} as const

export const MOTOR6_PIN_ATTRIBUTES = {
  VMOT: POWER_INPUT,
  GND: GROUND,
  VCC: POWER_INPUT,
  IN1: GPIO,
  IN2: GPIO,
  FAULT: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const MOTOR8_PIN_LABELS = {
  pin1: ["VMOT"],
  pin2: ["GND"],
  pin3: ["VCC"],
  pin4: ["IN1"],
  pin5: ["IN2"],
  pin6: ["IN3"],
  pin7: ["EN"],
  pin8: ["FAULT"],
} as const

export const MOTOR8_PIN_ATTRIBUTES = {
  VMOT: POWER_INPUT,
  GND: GROUND,
  VCC: POWER_INPUT,
  IN1: GPIO,
  IN2: GPIO,
  IN3: GPIO,
  EN: CONTROL,
  FAULT: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const NFC8_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["SCK"],
  pin6: ["MOSI"],
  pin7: ["MISO"],
  pin8: ["IRQ"],
} as const

export const NFC8_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  IRQ: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const RADIO8_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
  pin7: ["IRQ"],
  pin8: ["RST"],
} as const

export const RADIO8_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  CS: SPI_CS,
  IRQ: GPIO,
  RST: CONTROL,
} as const satisfies Record<string, PinAttributeMap>

export const CAN6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["CANH"],
  pin4: ["CANL"],
  pin5: ["RX"],
  pin6: ["TX"],
} as const

export const CAN6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  CANH: GPIO,
  CANL: GPIO,
  RX: UART_RX,
  TX: UART_TX,
} as const satisfies Record<string, PinAttributeMap>

export const SERIALBUS6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TX"],
  pin4: ["RX"],
  pin5: ["A"],
  pin6: ["B"],
} as const

export const SERIALBUS6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  TX: UART_TX,
  RX: UART_RX,
  A: GPIO,
  B: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const USB6_PIN_LABELS = {
  pin1: ["VBUS"],
  pin2: ["GND"],
  pin3: ["DPLUS"],
  pin4: ["DMINUS"],
  pin5: ["TX"],
  pin6: ["RX"],
} as const

export const USB6_PIN_ATTRIBUTES = {
  VBUS: POWER_IO,
  GND: GROUND,
  DPLUS: GPIO,
  DMINUS: GPIO,
  TX: UART_TX,
  RX: UART_RX,
} as const satisfies Record<string, PinAttributeMap>

export const LEVEL8_PIN_LABELS = {
  pin1: ["HV"],
  pin2: ["LV"],
  pin3: ["GND"],
  pin4: ["HV1"],
  pin5: ["HV2"],
  pin6: ["HV3"],
  pin7: ["HV4"],
  pin8: ["DIR"],
} as const

export const LEVEL8_PIN_ATTRIBUTES = {
  HV: POWER_INPUT,
  LV: POWER_INPUT,
  GND: GROUND,
  HV1: GPIO,
  HV2: GPIO,
  HV3: GPIO,
  HV4: GPIO,
  DIR: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const LEVEL10_PIN_LABELS = {
  pin1: ["HV"],
  pin2: ["LV"],
  pin3: ["GND"],
  pin4: ["A1"],
  pin5: ["A2"],
  pin6: ["A3"],
  pin7: ["A4"],
  pin8: ["B1"],
  pin9: ["B2"],
  pin10: ["B3"],
} as const

export const LEVEL10_PIN_ATTRIBUTES = {
  HV: POWER_INPUT,
  LV: POWER_INPUT,
  GND: GROUND,
  A1: GPIO,
  A2: GPIO,
  A3: GPIO,
  A4: GPIO,
  B1: GPIO,
  B2: GPIO,
  B3: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const DISPLAY8_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["MISO"],
  pin6: ["CS"],
  pin7: ["DC"],
  pin8: ["RST"],
} as const

export const DISPLAY8_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  CS: SPI_CS,
  DC: GPIO,
  RST: CONTROL,
} as const satisfies Record<string, PinAttributeMap>

export const DISPLAY4_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const

export const DISPLAY4_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
} as const satisfies Record<string, PinAttributeMap>

export const LED4_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["DATA"],
  pin4: ["CLK"],
} as const

export const LED4_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  DATA: GPIO,
  CLK: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const LED5_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["R"],
  pin4: ["G"],
  pin5: ["B"],
} as const

export const LED5_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  R: GPIO,
  G: GPIO,
  B: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const MATRIX8_PIN_LABELS = {
  pin1: ["K1"],
  pin2: ["K2"],
  pin3: ["K3"],
  pin4: ["K4"],
  pin5: ["K5"],
  pin6: ["K6"],
  pin7: ["K7"],
  pin8: ["K8"],
} as const

export const MATRIX8_PIN_ATTRIBUTES = {
  K1: GPIO,
  K2: GPIO,
  K3: GPIO,
  K4: GPIO,
  K5: GPIO,
  K6: GPIO,
  K7: GPIO,
  K8: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const JOYSTICK5_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["X"],
  pin4: ["Y"],
  pin5: ["SW"],
} as const

export const JOYSTICK5_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  X: GPIO,
  Y: GPIO,
  SW: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const ENCODER6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["A"],
  pin4: ["B"],
  pin5: ["SW"],
  pin6: ["INT"],
} as const

export const ENCODER6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  A: GPIO,
  B: GPIO,
  SW: GPIO,
  INT: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const ADC8_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["A0"],
  pin6: ["A1"],
  pin7: ["A2"],
  pin8: ["A3"],
} as const

export const ADC8_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  A0: GPIO,
  A1: GPIO,
  A2: GPIO,
  A3: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const ADC10_PIN_LABELS = {
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
} as const

export const ADC10_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SCK: SPI_SCK,
  MOSI: SPI_MOSI,
  MISO: SPI_MISO,
  CS: SPI_CS,
  A0: GPIO,
  A1: GPIO,
  A2: GPIO,
  A3: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const DAC6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["VOUT"],
  pin6: ["LDAC"],
} as const

export const DAC6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SDA: I2C_SDA,
  SCL: I2C_SCL,
  VOUT: GPIO,
  LDAC: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const AUDIO6_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["IN"],
  pin4: ["OUT"],
  pin5: ["GAIN"],
  pin6: ["SHDN"],
} as const

export const AUDIO6_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  IN: GPIO,
  OUT: GPIO,
  GAIN: GPIO,
  SHDN: CONTROL,
} as const satisfies Record<string, PinAttributeMap>

export const AUDIO8_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["BCLK"],
  pin4: ["LRCLK"],
  pin5: ["DIN"],
  pin6: ["SD"],
  pin7: ["GAIN"],
  pin8: ["FAULT"],
} as const

export const AUDIO8_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  BCLK: GPIO,
  LRCLK: GPIO,
  DIN: GPIO,
  SD: CONTROL,
  GAIN: GPIO,
  FAULT: GPIO,
} as const satisfies Record<string, PinAttributeMap>

export const GENERIC4_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SIG1"],
  pin4: ["SIG2"],
} as const

export const GENERIC4_PIN_ATTRIBUTES = {
  VCC: POWER_INPUT,
  GND: GROUND,
  SIG1: GPIO,
  SIG2: GPIO,
} as const satisfies Record<string, PinAttributeMap>

/** Raspberry Pi Pico H — headered RP2040 module. */
export const RaspberryPiPicoH_PIN_LABELS = PICO40_PIN_LABELS
export const RaspberryPiPicoH_PIN_ATTRIBUTES = PICO40_PIN_ATTRIBUTES
export const RaspberryPiPicoH_FOOTPRINT = FOOTPRINT_F40
export type RaspberryPiPicoHProps = ChipProps<typeof RaspberryPiPicoH_PIN_LABELS>
export const RaspberryPiPicoH = (props: RaspberryPiPicoHProps) => (
  <chip
    {...props}
    displayName="Raspberry Pi Pico H"
    mfn="Raspberry Pi"
    footprint={RaspberryPiPicoH_FOOTPRINT}
    pinLabels={RaspberryPiPicoH_PIN_LABELS}
    pinAttributes={RaspberryPiPicoH_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Raspberry Pi Pico WH — headered wireless RP2040 module. */
export const RaspberryPiPicoWH_PIN_LABELS = PICO40_PIN_LABELS
export const RaspberryPiPicoWH_PIN_ATTRIBUTES = PICO40_PIN_ATTRIBUTES
export const RaspberryPiPicoWH_FOOTPRINT = FOOTPRINT_F40
export type RaspberryPiPicoWHProps = ChipProps<typeof RaspberryPiPicoWH_PIN_LABELS>
export const RaspberryPiPicoWH = (props: RaspberryPiPicoWHProps) => (
  <chip
    {...props}
    displayName="Raspberry Pi Pico WH"
    mfn="Raspberry Pi"
    footprint={RaspberryPiPicoWH_FOOTPRINT}
    pinLabels={RaspberryPiPicoWH_PIN_LABELS}
    pinAttributes={RaspberryPiPicoWH_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Raspberry Pi Pico 2 with headers — RP2350 module. */
export const RaspberryPiPico2WithHeaders_PIN_LABELS = PICO40_PIN_LABELS
export const RaspberryPiPico2WithHeaders_PIN_ATTRIBUTES = PICO40_PIN_ATTRIBUTES
export const RaspberryPiPico2WithHeaders_FOOTPRINT = FOOTPRINT_F40
export type RaspberryPiPico2WithHeadersProps = ChipProps<typeof RaspberryPiPico2WithHeaders_PIN_LABELS>
export const RaspberryPiPico2WithHeaders = (props: RaspberryPiPico2WithHeadersProps) => (
  <chip
    {...props}
    displayName="Raspberry Pi Pico 2 with headers"
    mfn="Raspberry Pi"
    footprint={RaspberryPiPico2WithHeaders_FOOTPRINT}
    pinLabels={RaspberryPiPico2WithHeaders_PIN_LABELS}
    pinAttributes={RaspberryPiPico2WithHeaders_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Raspberry Pi Pico 2 W with headers — wireless RP2350 module. */
export const RaspberryPiPico2WWithHeaders_PIN_LABELS = PICO40_PIN_LABELS
export const RaspberryPiPico2WWithHeaders_PIN_ATTRIBUTES = PICO40_PIN_ATTRIBUTES
export const RaspberryPiPico2WWithHeaders_FOOTPRINT = FOOTPRINT_F40
export type RaspberryPiPico2WWithHeadersProps = ChipProps<typeof RaspberryPiPico2WWithHeaders_PIN_LABELS>
export const RaspberryPiPico2WWithHeaders = (props: RaspberryPiPico2WWithHeadersProps) => (
  <chip
    {...props}
    displayName="Raspberry Pi Pico 2 W with headers"
    mfn="Raspberry Pi"
    footprint={RaspberryPiPico2WWithHeaders_FOOTPRINT}
    pinLabels={RaspberryPiPico2WWithHeaders_PIN_LABELS}
    pinAttributes={RaspberryPiPico2WWithHeaders_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pimoroni PGA2350 — RP2350 board with breadboard pin grid. */
export const PimoroniPGA2350_PIN_LABELS = PICO40_PIN_LABELS
export const PimoroniPGA2350_PIN_ATTRIBUTES = PICO40_PIN_ATTRIBUTES
export const PimoroniPGA2350_FOOTPRINT = FOOTPRINT_F40
export type PimoroniPGA2350Props = ChipProps<typeof PimoroniPGA2350_PIN_LABELS>
export const PimoroniPGA2350 = (props: PimoroniPGA2350Props) => (
  <chip
    {...props}
    displayName="Pimoroni PGA2350"
    mfn="Pimoroni"
    footprint={PimoroniPGA2350_FOOTPRINT}
    pinLabels={PimoroniPGA2350_PIN_LABELS}
    pinAttributes={PimoroniPGA2350_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pimoroni Tiny 2350 — compact RP2350 header-ready board. */
export const PimoroniTiny2350_PIN_LABELS = PICO40_PIN_LABELS
export const PimoroniTiny2350_PIN_ATTRIBUTES = PICO40_PIN_ATTRIBUTES
export const PimoroniTiny2350_FOOTPRINT = FOOTPRINT_F40
export type PimoroniTiny2350Props = ChipProps<typeof PimoroniTiny2350_PIN_LABELS>
export const PimoroniTiny2350 = (props: PimoroniTiny2350Props) => (
  <chip
    {...props}
    displayName="Pimoroni Tiny 2350"
    mfn="Pimoroni"
    footprint={PimoroniTiny2350_FOOTPRINT}
    pinLabels={PimoroniTiny2350_PIN_LABELS}
    pinAttributes={PimoroniTiny2350_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Seeed Studio XIAO SAMD21 — XIAO-format SAMD21 board. */
export const SeeedStudioXIAOSAMD21_PIN_LABELS = XIAO14_PIN_LABELS
export const SeeedStudioXIAOSAMD21_PIN_ATTRIBUTES = XIAO14_PIN_ATTRIBUTES
export const SeeedStudioXIAOSAMD21_FOOTPRINT = FOOTPRINT_F14
export type SeeedStudioXIAOSAMD21Props = ChipProps<typeof SeeedStudioXIAOSAMD21_PIN_LABELS>
export const SeeedStudioXIAOSAMD21 = (props: SeeedStudioXIAOSAMD21Props) => (
  <chip
    {...props}
    displayName="Seeed Studio XIAO SAMD21"
    mfn="Seeed Studio"
    footprint={SeeedStudioXIAOSAMD21_FOOTPRINT}
    pinLabels={SeeedStudioXIAOSAMD21_PIN_LABELS}
    pinAttributes={SeeedStudioXIAOSAMD21_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Seeed Studio XIAO nRF52840 — XIAO-format Bluetooth board. */
export const SeeedStudioXIAONRF52840_PIN_LABELS = XIAO14_PIN_LABELS
export const SeeedStudioXIAONRF52840_PIN_ATTRIBUTES = XIAO14_PIN_ATTRIBUTES
export const SeeedStudioXIAONRF52840_FOOTPRINT = FOOTPRINT_F14
export type SeeedStudioXIAONRF52840Props = ChipProps<typeof SeeedStudioXIAONRF52840_PIN_LABELS>
export const SeeedStudioXIAONRF52840 = (props: SeeedStudioXIAONRF52840Props) => (
  <chip
    {...props}
    displayName="Seeed Studio XIAO nRF52840"
    mfn="Seeed Studio"
    footprint={SeeedStudioXIAONRF52840_FOOTPRINT}
    pinLabels={SeeedStudioXIAONRF52840_PIN_LABELS}
    pinAttributes={SeeedStudioXIAONRF52840_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Seeed Studio XIAO nRF52840 Sense — XIAO-format Bluetooth sensor board. */
export const SeeedStudioXIAONRF52840Sense_PIN_LABELS = XIAO14_PIN_LABELS
export const SeeedStudioXIAONRF52840Sense_PIN_ATTRIBUTES = XIAO14_PIN_ATTRIBUTES
export const SeeedStudioXIAONRF52840Sense_FOOTPRINT = FOOTPRINT_F14
export type SeeedStudioXIAONRF52840SenseProps = ChipProps<typeof SeeedStudioXIAONRF52840Sense_PIN_LABELS>
export const SeeedStudioXIAONRF52840Sense = (props: SeeedStudioXIAONRF52840SenseProps) => (
  <chip
    {...props}
    displayName="Seeed Studio XIAO nRF52840 Sense"
    mfn="Seeed Studio"
    footprint={SeeedStudioXIAONRF52840Sense_FOOTPRINT}
    pinLabels={SeeedStudioXIAONRF52840Sense_PIN_LABELS}
    pinAttributes={SeeedStudioXIAONRF52840Sense_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Seeed Studio XIAO ESP32C3 — XIAO-format Wi-Fi/BLE board. */
export const SeeedStudioXIAOESP32C3_PIN_LABELS = XIAO14_PIN_LABELS
export const SeeedStudioXIAOESP32C3_PIN_ATTRIBUTES = XIAO14_PIN_ATTRIBUTES
export const SeeedStudioXIAOESP32C3_FOOTPRINT = FOOTPRINT_F14
export type SeeedStudioXIAOESP32C3Props = ChipProps<typeof SeeedStudioXIAOESP32C3_PIN_LABELS>
export const SeeedStudioXIAOESP32C3 = (props: SeeedStudioXIAOESP32C3Props) => (
  <chip
    {...props}
    displayName="Seeed Studio XIAO ESP32C3"
    mfn="Seeed Studio"
    footprint={SeeedStudioXIAOESP32C3_FOOTPRINT}
    pinLabels={SeeedStudioXIAOESP32C3_PIN_LABELS}
    pinAttributes={SeeedStudioXIAOESP32C3_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Seeed Studio XIAO ESP32C6 — XIAO-format Wi-Fi 6/Thread board. */
export const SeeedStudioXIAOESP32C6_PIN_LABELS = XIAO14_PIN_LABELS
export const SeeedStudioXIAOESP32C6_PIN_ATTRIBUTES = XIAO14_PIN_ATTRIBUTES
export const SeeedStudioXIAOESP32C6_FOOTPRINT = FOOTPRINT_F14
export type SeeedStudioXIAOESP32C6Props = ChipProps<typeof SeeedStudioXIAOESP32C6_PIN_LABELS>
export const SeeedStudioXIAOESP32C6 = (props: SeeedStudioXIAOESP32C6Props) => (
  <chip
    {...props}
    displayName="Seeed Studio XIAO ESP32C6"
    mfn="Seeed Studio"
    footprint={SeeedStudioXIAOESP32C6_FOOTPRINT}
    pinLabels={SeeedStudioXIAOESP32C6_PIN_LABELS}
    pinAttributes={SeeedStudioXIAOESP32C6_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Seeed Studio XIAO ESP32S3 — XIAO-format ESP32-S3 board. */
export const SeeedStudioXIAOESP32S3_PIN_LABELS = XIAO14_PIN_LABELS
export const SeeedStudioXIAOESP32S3_PIN_ATTRIBUTES = XIAO14_PIN_ATTRIBUTES
export const SeeedStudioXIAOESP32S3_FOOTPRINT = FOOTPRINT_F14
export type SeeedStudioXIAOESP32S3Props = ChipProps<typeof SeeedStudioXIAOESP32S3_PIN_LABELS>
export const SeeedStudioXIAOESP32S3 = (props: SeeedStudioXIAOESP32S3Props) => (
  <chip
    {...props}
    displayName="Seeed Studio XIAO ESP32S3"
    mfn="Seeed Studio"
    footprint={SeeedStudioXIAOESP32S3_FOOTPRINT}
    pinLabels={SeeedStudioXIAOESP32S3_PIN_LABELS}
    pinAttributes={SeeedStudioXIAOESP32S3_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Seeed Studio XIAO ESP32S3 Sense — XIAO-format camera/microphone board. */
export const SeeedStudioXIAOESP32S3Sense_PIN_LABELS = XIAO14_PIN_LABELS
export const SeeedStudioXIAOESP32S3Sense_PIN_ATTRIBUTES = XIAO14_PIN_ATTRIBUTES
export const SeeedStudioXIAOESP32S3Sense_FOOTPRINT = FOOTPRINT_F14
export type SeeedStudioXIAOESP32S3SenseProps = ChipProps<typeof SeeedStudioXIAOESP32S3Sense_PIN_LABELS>
export const SeeedStudioXIAOESP32S3Sense = (props: SeeedStudioXIAOESP32S3SenseProps) => (
  <chip
    {...props}
    displayName="Seeed Studio XIAO ESP32S3 Sense"
    mfn="Seeed Studio"
    footprint={SeeedStudioXIAOESP32S3Sense_FOOTPRINT}
    pinLabels={SeeedStudioXIAOESP32S3Sense_PIN_LABELS}
    pinAttributes={SeeedStudioXIAOESP32S3Sense_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Seeed Studio XIAO RA4M1 — XIAO-format Renesas board. */
export const SeeedStudioXIAORA4M1_PIN_LABELS = XIAO14_PIN_LABELS
export const SeeedStudioXIAORA4M1_PIN_ATTRIBUTES = XIAO14_PIN_ATTRIBUTES
export const SeeedStudioXIAORA4M1_FOOTPRINT = FOOTPRINT_F14
export type SeeedStudioXIAORA4M1Props = ChipProps<typeof SeeedStudioXIAORA4M1_PIN_LABELS>
export const SeeedStudioXIAORA4M1 = (props: SeeedStudioXIAORA4M1Props) => (
  <chip
    {...props}
    displayName="Seeed Studio XIAO RA4M1"
    mfn="Seeed Studio"
    footprint={SeeedStudioXIAORA4M1_FOOTPRINT}
    pinLabels={SeeedStudioXIAORA4M1_PIN_LABELS}
    pinAttributes={SeeedStudioXIAORA4M1_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Seeed Studio XIAO MG24 — XIAO-format Matter/Bluetooth board. */
export const SeeedStudioXIAOMG24_PIN_LABELS = XIAO14_PIN_LABELS
export const SeeedStudioXIAOMG24_PIN_ATTRIBUTES = XIAO14_PIN_ATTRIBUTES
export const SeeedStudioXIAOMG24_FOOTPRINT = FOOTPRINT_F14
export type SeeedStudioXIAOMG24Props = ChipProps<typeof SeeedStudioXIAOMG24_PIN_LABELS>
export const SeeedStudioXIAOMG24 = (props: SeeedStudioXIAOMG24Props) => (
  <chip
    {...props}
    displayName="Seeed Studio XIAO MG24"
    mfn="Seeed Studio"
    footprint={SeeedStudioXIAOMG24_FOOTPRINT}
    pinLabels={SeeedStudioXIAOMG24_PIN_LABELS}
    pinAttributes={SeeedStudioXIAOMG24_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Seeed Studio XIAO RP2350 — XIAO-format RP2350 board. */
export const SeeedStudioXIAORP2350_PIN_LABELS = XIAO14_PIN_LABELS
export const SeeedStudioXIAORP2350_PIN_ATTRIBUTES = XIAO14_PIN_ATTRIBUTES
export const SeeedStudioXIAORP2350_FOOTPRINT = FOOTPRINT_F14
export type SeeedStudioXIAORP2350Props = ChipProps<typeof SeeedStudioXIAORP2350_PIN_LABELS>
export const SeeedStudioXIAORP2350 = (props: SeeedStudioXIAORP2350Props) => (
  <chip
    {...props}
    displayName="Seeed Studio XIAO RP2350"
    mfn="Seeed Studio"
    footprint={SeeedStudioXIAORP2350_FOOTPRINT}
    pinLabels={SeeedStudioXIAORP2350_PIN_LABELS}
    pinAttributes={SeeedStudioXIAORP2350_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun Pro Micro ATmega32U4 — classic Pro Micro module. */
export const SparkFunProMicroATmega32U4_PIN_LABELS = PROMICRO24_PIN_LABELS
export const SparkFunProMicroATmega32U4_PIN_ATTRIBUTES = PROMICRO24_PIN_ATTRIBUTES
export const SparkFunProMicroATmega32U4_FOOTPRINT = FOOTPRINT_F24
export type SparkFunProMicroATmega32U4Props = ChipProps<typeof SparkFunProMicroATmega32U4_PIN_LABELS>
export const SparkFunProMicroATmega32U4 = (props: SparkFunProMicroATmega32U4Props) => (
  <chip
    {...props}
    displayName="SparkFun Pro Micro ATmega32U4"
    mfn="SparkFun"
    footprint={SparkFunProMicroATmega32U4_FOOTPRINT}
    pinLabels={SparkFunProMicroATmega32U4_PIN_LABELS}
    pinAttributes={SparkFunProMicroATmega32U4_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun Qwiic Pro Micro ATmega32U4 — Pro Micro with Qwiic. */
export const SparkFunQwiicProMicroATmega32U4_PIN_LABELS = PROMICRO24_PIN_LABELS
export const SparkFunQwiicProMicroATmega32U4_PIN_ATTRIBUTES = PROMICRO24_PIN_ATTRIBUTES
export const SparkFunQwiicProMicroATmega32U4_FOOTPRINT = FOOTPRINT_F24
export type SparkFunQwiicProMicroATmega32U4Props = ChipProps<typeof SparkFunQwiicProMicroATmega32U4_PIN_LABELS>
export const SparkFunQwiicProMicroATmega32U4 = (props: SparkFunQwiicProMicroATmega32U4Props) => (
  <chip
    {...props}
    displayName="SparkFun Qwiic Pro Micro ATmega32U4"
    mfn="SparkFun"
    footprint={SparkFunQwiicProMicroATmega32U4_FOOTPRINT}
    pinLabels={SparkFunQwiicProMicroATmega32U4_PIN_LABELS}
    pinAttributes={SparkFunQwiicProMicroATmega32U4_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun Pro Micro RP2040 — RP2040 Pro Micro module. */
export const SparkFunProMicroRP2040_PIN_LABELS = PROMICRO24_PIN_LABELS
export const SparkFunProMicroRP2040_PIN_ATTRIBUTES = PROMICRO24_PIN_ATTRIBUTES
export const SparkFunProMicroRP2040_FOOTPRINT = FOOTPRINT_F24
export type SparkFunProMicroRP2040Props = ChipProps<typeof SparkFunProMicroRP2040_PIN_LABELS>
export const SparkFunProMicroRP2040 = (props: SparkFunProMicroRP2040Props) => (
  <chip
    {...props}
    displayName="SparkFun Pro Micro RP2040"
    mfn="SparkFun"
    footprint={SparkFunProMicroRP2040_FOOTPRINT}
    pinLabels={SparkFunProMicroRP2040_PIN_LABELS}
    pinAttributes={SparkFunProMicroRP2040_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun Pro Micro RP2350 — RP2350 Pro Micro module. */
export const SparkFunProMicroRP2350_PIN_LABELS = PROMICRO24_PIN_LABELS
export const SparkFunProMicroRP2350_PIN_ATTRIBUTES = PROMICRO24_PIN_ATTRIBUTES
export const SparkFunProMicroRP2350_FOOTPRINT = FOOTPRINT_F24
export type SparkFunProMicroRP2350Props = ChipProps<typeof SparkFunProMicroRP2350_PIN_LABELS>
export const SparkFunProMicroRP2350 = (props: SparkFunProMicroRP2350Props) => (
  <chip
    {...props}
    displayName="SparkFun Pro Micro RP2350"
    mfn="SparkFun"
    footprint={SparkFunProMicroRP2350_FOOTPRINT}
    pinLabels={SparkFunProMicroRP2350_PIN_LABELS}
    pinAttributes={SparkFunProMicroRP2350_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun Pro Micro ESP32-C3 — ESP32-C3 Pro Micro module. */
export const SparkFunProMicroESP32C3_PIN_LABELS = PROMICRO24_PIN_LABELS
export const SparkFunProMicroESP32C3_PIN_ATTRIBUTES = PROMICRO24_PIN_ATTRIBUTES
export const SparkFunProMicroESP32C3_FOOTPRINT = FOOTPRINT_F24
export type SparkFunProMicroESP32C3Props = ChipProps<typeof SparkFunProMicroESP32C3_PIN_LABELS>
export const SparkFunProMicroESP32C3 = (props: SparkFunProMicroESP32C3Props) => (
  <chip
    {...props}
    displayName="SparkFun Pro Micro ESP32-C3"
    mfn="SparkFun"
    footprint={SparkFunProMicroESP32C3_FOOTPRINT}
    pinLabels={SparkFunProMicroESP32C3_PIN_LABELS}
    pinAttributes={SparkFunProMicroESP32C3_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun Thing Plus ESP32 WROOM USB-C — Feather-compatible ESP32 board. */
export const SparkFunThingPlusESP32WROOMUSBC_PIN_LABELS = FEATHER28_PIN_LABELS
export const SparkFunThingPlusESP32WROOMUSBC_PIN_ATTRIBUTES = FEATHER28_PIN_ATTRIBUTES
export const SparkFunThingPlusESP32WROOMUSBC_FOOTPRINT = FOOTPRINT_F28
export type SparkFunThingPlusESP32WROOMUSBCProps = ChipProps<typeof SparkFunThingPlusESP32WROOMUSBC_PIN_LABELS>
export const SparkFunThingPlusESP32WROOMUSBC = (props: SparkFunThingPlusESP32WROOMUSBCProps) => (
  <chip
    {...props}
    displayName="SparkFun Thing Plus ESP32 WROOM USB-C"
    mfn="SparkFun"
    footprint={SparkFunThingPlusESP32WROOMUSBC_FOOTPRINT}
    pinLabels={SparkFunThingPlusESP32WROOMUSBC_PIN_LABELS}
    pinAttributes={SparkFunThingPlusESP32WROOMUSBC_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun Thing Plus ESP32-C6 — Feather-compatible ESP32-C6 board. */
export const SparkFunThingPlusESP32C6_PIN_LABELS = FEATHER28_PIN_LABELS
export const SparkFunThingPlusESP32C6_PIN_ATTRIBUTES = FEATHER28_PIN_ATTRIBUTES
export const SparkFunThingPlusESP32C6_FOOTPRINT = FOOTPRINT_F28
export type SparkFunThingPlusESP32C6Props = ChipProps<typeof SparkFunThingPlusESP32C6_PIN_LABELS>
export const SparkFunThingPlusESP32C6 = (props: SparkFunThingPlusESP32C6Props) => (
  <chip
    {...props}
    displayName="SparkFun Thing Plus ESP32-C6"
    mfn="SparkFun"
    footprint={SparkFunThingPlusESP32C6_FOOTPRINT}
    pinLabels={SparkFunThingPlusESP32C6_PIN_LABELS}
    pinAttributes={SparkFunThingPlusESP32C6_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun Thing Plus ESP32-S3 — Feather-compatible ESP32-S3 board. */
export const SparkFunThingPlusESP32S3_PIN_LABELS = FEATHER28_PIN_LABELS
export const SparkFunThingPlusESP32S3_PIN_ATTRIBUTES = FEATHER28_PIN_ATTRIBUTES
export const SparkFunThingPlusESP32S3_FOOTPRINT = FOOTPRINT_F28
export type SparkFunThingPlusESP32S3Props = ChipProps<typeof SparkFunThingPlusESP32S3_PIN_LABELS>
export const SparkFunThingPlusESP32S3 = (props: SparkFunThingPlusESP32S3Props) => (
  <chip
    {...props}
    displayName="SparkFun Thing Plus ESP32-S3"
    mfn="SparkFun"
    footprint={SparkFunThingPlusESP32S3_FOOTPRINT}
    pinLabels={SparkFunThingPlusESP32S3_PIN_LABELS}
    pinAttributes={SparkFunThingPlusESP32S3_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun Thing Plus RP2350 — Feather-compatible RP2350 board. */
export const SparkFunThingPlusRP2350_PIN_LABELS = FEATHER28_PIN_LABELS
export const SparkFunThingPlusRP2350_PIN_ATTRIBUTES = FEATHER28_PIN_ATTRIBUTES
export const SparkFunThingPlusRP2350_FOOTPRINT = FOOTPRINT_F28
export type SparkFunThingPlusRP2350Props = ChipProps<typeof SparkFunThingPlusRP2350_PIN_LABELS>
export const SparkFunThingPlusRP2350 = (props: SparkFunThingPlusRP2350Props) => (
  <chip
    {...props}
    displayName="SparkFun Thing Plus RP2350"
    mfn="SparkFun"
    footprint={SparkFunThingPlusRP2350_FOOTPRINT}
    pinLabels={SparkFunThingPlusRP2350_PIN_LABELS}
    pinAttributes={SparkFunThingPlusRP2350_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun Thing Plus RA6M5 — Feather-compatible Renesas board. */
export const SparkFunThingPlusRA6M5_PIN_LABELS = FEATHER28_PIN_LABELS
export const SparkFunThingPlusRA6M5_PIN_ATTRIBUTES = FEATHER28_PIN_ATTRIBUTES
export const SparkFunThingPlusRA6M5_FOOTPRINT = FOOTPRINT_F28
export type SparkFunThingPlusRA6M5Props = ChipProps<typeof SparkFunThingPlusRA6M5_PIN_LABELS>
export const SparkFunThingPlusRA6M5 = (props: SparkFunThingPlusRA6M5Props) => (
  <chip
    {...props}
    displayName="SparkFun Thing Plus RA6M5"
    mfn="SparkFun"
    footprint={SparkFunThingPlusRA6M5_FOOTPRINT}
    pinLabels={SparkFunThingPlusRA6M5_PIN_LABELS}
    pinAttributes={SparkFunThingPlusRA6M5_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** PJRC Teensy 4.0 — compact i.MX RT1062 module. */
export const PJRCTeensy40_PIN_LABELS = TEENSY24_PIN_LABELS
export const PJRCTeensy40_PIN_ATTRIBUTES = TEENSY24_PIN_ATTRIBUTES
export const PJRCTeensy40_FOOTPRINT = FOOTPRINT_F24
export type PJRCTeensy40Props = ChipProps<typeof PJRCTeensy40_PIN_LABELS>
export const PJRCTeensy40 = (props: PJRCTeensy40Props) => (
  <chip
    {...props}
    displayName="PJRC Teensy 4.0"
    mfn="PJRC"
    footprint={PJRCTeensy40_FOOTPRINT}
    pinLabels={PJRCTeensy40_PIN_LABELS}
    pinAttributes={PJRCTeensy40_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** PJRC Teensy 4.1 — expanded i.MX RT1062 module. */
export const PJRCTeensy41_PIN_LABELS = TEENSY42_PIN_LABELS
export const PJRCTeensy41_PIN_ATTRIBUTES = TEENSY42_PIN_ATTRIBUTES
export const PJRCTeensy41_FOOTPRINT = FOOTPRINT_F42
export type PJRCTeensy41Props = ChipProps<typeof PJRCTeensy41_PIN_LABELS>
export const PJRCTeensy41 = (props: PJRCTeensy41Props) => (
  <chip
    {...props}
    displayName="PJRC Teensy 4.1"
    mfn="PJRC"
    footprint={PJRCTeensy41_FOOTPRINT}
    pinLabels={PJRCTeensy41_PIN_LABELS}
    pinAttributes={PJRCTeensy41_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Espressif ESP32-DevKitC V4 — standard ESP32 dual-row dev board. */
export const EspressifESP32DevKitCV4_PIN_LABELS = DEVKIT30_PIN_LABELS
export const EspressifESP32DevKitCV4_PIN_ATTRIBUTES = DEVKIT30_PIN_ATTRIBUTES
export const EspressifESP32DevKitCV4_FOOTPRINT = FOOTPRINT_F30
export type EspressifESP32DevKitCV4Props = ChipProps<typeof EspressifESP32DevKitCV4_PIN_LABELS>
export const EspressifESP32DevKitCV4 = (props: EspressifESP32DevKitCV4Props) => (
  <chip
    {...props}
    displayName="Espressif ESP32-DevKitC V4"
    mfn="Espressif"
    footprint={EspressifESP32DevKitCV4_FOOTPRINT}
    pinLabels={EspressifESP32DevKitCV4_PIN_LABELS}
    pinAttributes={EspressifESP32DevKitCV4_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Espressif ESP32-S3-DevKitC-1 — ESP32-S3 dual-row dev board. */
export const EspressifESP32S3DevKitC1_PIN_LABELS = DEVKIT30_PIN_LABELS
export const EspressifESP32S3DevKitC1_PIN_ATTRIBUTES = DEVKIT30_PIN_ATTRIBUTES
export const EspressifESP32S3DevKitC1_FOOTPRINT = FOOTPRINT_F30
export type EspressifESP32S3DevKitC1Props = ChipProps<typeof EspressifESP32S3DevKitC1_PIN_LABELS>
export const EspressifESP32S3DevKitC1 = (props: EspressifESP32S3DevKitC1Props) => (
  <chip
    {...props}
    displayName="Espressif ESP32-S3-DevKitC-1"
    mfn="Espressif"
    footprint={EspressifESP32S3DevKitC1_FOOTPRINT}
    pinLabels={EspressifESP32S3DevKitC1_PIN_LABELS}
    pinAttributes={EspressifESP32S3DevKitC1_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Espressif ESP32-C3-DevKitM-1 — ESP32-C3 dual-row dev board. */
export const EspressifESP32C3DevKitM1_PIN_LABELS = DEVKIT30_PIN_LABELS
export const EspressifESP32C3DevKitM1_PIN_ATTRIBUTES = DEVKIT30_PIN_ATTRIBUTES
export const EspressifESP32C3DevKitM1_FOOTPRINT = FOOTPRINT_F30
export type EspressifESP32C3DevKitM1Props = ChipProps<typeof EspressifESP32C3DevKitM1_PIN_LABELS>
export const EspressifESP32C3DevKitM1 = (props: EspressifESP32C3DevKitM1Props) => (
  <chip
    {...props}
    displayName="Espressif ESP32-C3-DevKitM-1"
    mfn="Espressif"
    footprint={EspressifESP32C3DevKitM1_FOOTPRINT}
    pinLabels={EspressifESP32C3DevKitM1_PIN_LABELS}
    pinAttributes={EspressifESP32C3DevKitM1_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** NodeMCU ESP8266 DevKit v1.0 — common marketplace ESP8266 board. */
export const NodeMCUESP8266DevKitV10_PIN_LABELS = DEVKIT30_PIN_LABELS
export const NodeMCUESP8266DevKitV10_PIN_ATTRIBUTES = DEVKIT30_PIN_ATTRIBUTES
export const NodeMCUESP8266DevKitV10_FOOTPRINT = FOOTPRINT_F30
export type NodeMCUESP8266DevKitV10Props = ChipProps<typeof NodeMCUESP8266DevKitV10_PIN_LABELS>
export const NodeMCUESP8266DevKitV10 = (props: NodeMCUESP8266DevKitV10Props) => (
  <chip
    {...props}
    displayName="NodeMCU ESP8266 DevKit v1.0"
    mfn="Generic"
    footprint={NodeMCUESP8266DevKitV10_FOOTPRINT}
    pinLabels={NodeMCUESP8266DevKitV10_PIN_LABELS}
    pinAttributes={NodeMCUESP8266DevKitV10_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** LOLIN D1 mini v4 — compact ESP8266 dual-row board. */
export const LOLIND1MiniV4_PIN_LABELS = DEVKIT30_PIN_LABELS
export const LOLIND1MiniV4_PIN_ATTRIBUTES = DEVKIT30_PIN_ATTRIBUTES
export const LOLIND1MiniV4_FOOTPRINT = FOOTPRINT_F30
export type LOLIND1MiniV4Props = ChipProps<typeof LOLIND1MiniV4_PIN_LABELS>
export const LOLIND1MiniV4 = (props: LOLIND1MiniV4Props) => (
  <chip
    {...props}
    displayName="LOLIN D1 mini v4"
    mfn="LOLIN"
    footprint={LOLIND1MiniV4_FOOTPRINT}
    pinLabels={LOLIND1MiniV4_PIN_LABELS}
    pinAttributes={LOLIND1MiniV4_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** WeAct STM32F411 Black Pill — common STM32 dual-row module. */
export const WeActSTM32F411BlackPill_PIN_LABELS = DEVKIT30_PIN_LABELS
export const WeActSTM32F411BlackPill_PIN_ATTRIBUTES = DEVKIT30_PIN_ATTRIBUTES
export const WeActSTM32F411BlackPill_FOOTPRINT = FOOTPRINT_F30
export type WeActSTM32F411BlackPillProps = ChipProps<typeof WeActSTM32F411BlackPill_PIN_LABELS>
export const WeActSTM32F411BlackPill = (props: WeActSTM32F411BlackPillProps) => (
  <chip
    {...props}
    displayName="WeAct STM32F411 Black Pill"
    mfn="WeAct"
    footprint={WeActSTM32F411BlackPill_FOOTPRINT}
    pinLabels={WeActSTM32F411BlackPill_PIN_LABELS}
    pinAttributes={WeActSTM32F411BlackPill_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit AHT20 Temperature & Humidity Breakout — I2C. */
export const AdafruitAHT20TemperatureAndHumidityBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitAHT20TemperatureAndHumidityBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitAHT20TemperatureAndHumidityBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitAHT20TemperatureAndHumidityBreakoutProps = ChipProps<typeof AdafruitAHT20TemperatureAndHumidityBreakout_PIN_LABELS>
export const AdafruitAHT20TemperatureAndHumidityBreakout = (props: AdafruitAHT20TemperatureAndHumidityBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit AHT20 Temperature & Humidity Breakout"
    mfn="Adafruit"
    footprint={AdafruitAHT20TemperatureAndHumidityBreakout_FOOTPRINT}
    pinLabels={AdafruitAHT20TemperatureAndHumidityBreakout_PIN_LABELS}
    pinAttributes={AdafruitAHT20TemperatureAndHumidityBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit AHT21 Temperature & Humidity Breakout — I2C. */
export const AdafruitAHT21TemperatureAndHumidityBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitAHT21TemperatureAndHumidityBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitAHT21TemperatureAndHumidityBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitAHT21TemperatureAndHumidityBreakoutProps = ChipProps<typeof AdafruitAHT21TemperatureAndHumidityBreakout_PIN_LABELS>
export const AdafruitAHT21TemperatureAndHumidityBreakout = (props: AdafruitAHT21TemperatureAndHumidityBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit AHT21 Temperature & Humidity Breakout"
    mfn="Adafruit"
    footprint={AdafruitAHT21TemperatureAndHumidityBreakout_FOOTPRINT}
    pinLabels={AdafruitAHT21TemperatureAndHumidityBreakout_PIN_LABELS}
    pinAttributes={AdafruitAHT21TemperatureAndHumidityBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit SHT31-D Temperature & Humidity Breakout — I2C. */
export const AdafruitSHT31DTemperatureAndHumidityBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitSHT31DTemperatureAndHumidityBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitSHT31DTemperatureAndHumidityBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitSHT31DTemperatureAndHumidityBreakoutProps = ChipProps<typeof AdafruitSHT31DTemperatureAndHumidityBreakout_PIN_LABELS>
export const AdafruitSHT31DTemperatureAndHumidityBreakout = (props: AdafruitSHT31DTemperatureAndHumidityBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit SHT31-D Temperature & Humidity Breakout"
    mfn="Adafruit"
    footprint={AdafruitSHT31DTemperatureAndHumidityBreakout_FOOTPRINT}
    pinLabels={AdafruitSHT31DTemperatureAndHumidityBreakout_PIN_LABELS}
    pinAttributes={AdafruitSHT31DTemperatureAndHumidityBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit SHT40 Temperature & Humidity Breakout — I2C. */
export const AdafruitSHT40TemperatureAndHumidityBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitSHT40TemperatureAndHumidityBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitSHT40TemperatureAndHumidityBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitSHT40TemperatureAndHumidityBreakoutProps = ChipProps<typeof AdafruitSHT40TemperatureAndHumidityBreakout_PIN_LABELS>
export const AdafruitSHT40TemperatureAndHumidityBreakout = (props: AdafruitSHT40TemperatureAndHumidityBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit SHT40 Temperature & Humidity Breakout"
    mfn="Adafruit"
    footprint={AdafruitSHT40TemperatureAndHumidityBreakout_FOOTPRINT}
    pinLabels={AdafruitSHT40TemperatureAndHumidityBreakout_PIN_LABELS}
    pinAttributes={AdafruitSHT40TemperatureAndHumidityBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit SHT41 Temperature & Humidity Breakout — I2C. */
export const AdafruitSHT41TemperatureAndHumidityBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitSHT41TemperatureAndHumidityBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitSHT41TemperatureAndHumidityBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitSHT41TemperatureAndHumidityBreakoutProps = ChipProps<typeof AdafruitSHT41TemperatureAndHumidityBreakout_PIN_LABELS>
export const AdafruitSHT41TemperatureAndHumidityBreakout = (props: AdafruitSHT41TemperatureAndHumidityBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit SHT41 Temperature & Humidity Breakout"
    mfn="Adafruit"
    footprint={AdafruitSHT41TemperatureAndHumidityBreakout_FOOTPRINT}
    pinLabels={AdafruitSHT41TemperatureAndHumidityBreakout_PIN_LABELS}
    pinAttributes={AdafruitSHT41TemperatureAndHumidityBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit HDC3022 Precision Temperature & Humidity Breakout — I2C. */
export const AdafruitHDC3022PrecisionTemperatureAndHumidityBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitHDC3022PrecisionTemperatureAndHumidityBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitHDC3022PrecisionTemperatureAndHumidityBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitHDC3022PrecisionTemperatureAndHumidityBreakoutProps = ChipProps<typeof AdafruitHDC3022PrecisionTemperatureAndHumidityBreakout_PIN_LABELS>
export const AdafruitHDC3022PrecisionTemperatureAndHumidityBreakout = (props: AdafruitHDC3022PrecisionTemperatureAndHumidityBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit HDC3022 Precision Temperature & Humidity Breakout"
    mfn="Adafruit"
    footprint={AdafruitHDC3022PrecisionTemperatureAndHumidityBreakout_FOOTPRINT}
    pinLabels={AdafruitHDC3022PrecisionTemperatureAndHumidityBreakout_PIN_LABELS}
    pinAttributes={AdafruitHDC3022PrecisionTemperatureAndHumidityBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit HTU21D-F Temperature & Humidity Breakout — I2C. */
export const AdafruitHTU21DFTemperatureAndHumidityBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitHTU21DFTemperatureAndHumidityBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitHTU21DFTemperatureAndHumidityBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitHTU21DFTemperatureAndHumidityBreakoutProps = ChipProps<typeof AdafruitHTU21DFTemperatureAndHumidityBreakout_PIN_LABELS>
export const AdafruitHTU21DFTemperatureAndHumidityBreakout = (props: AdafruitHTU21DFTemperatureAndHumidityBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit HTU21D-F Temperature & Humidity Breakout"
    mfn="Adafruit"
    footprint={AdafruitHTU21DFTemperatureAndHumidityBreakout_FOOTPRINT}
    pinLabels={AdafruitHTU21DFTemperatureAndHumidityBreakout_PIN_LABELS}
    pinAttributes={AdafruitHTU21DFTemperatureAndHumidityBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit Si7021 Temperature & Humidity Breakout — I2C. */
export const AdafruitSi7021TemperatureAndHumidityBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitSi7021TemperatureAndHumidityBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitSi7021TemperatureAndHumidityBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitSi7021TemperatureAndHumidityBreakoutProps = ChipProps<typeof AdafruitSi7021TemperatureAndHumidityBreakout_PIN_LABELS>
export const AdafruitSi7021TemperatureAndHumidityBreakout = (props: AdafruitSi7021TemperatureAndHumidityBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit Si7021 Temperature & Humidity Breakout"
    mfn="Adafruit"
    footprint={AdafruitSi7021TemperatureAndHumidityBreakout_FOOTPRINT}
    pinLabels={AdafruitSi7021TemperatureAndHumidityBreakout_PIN_LABELS}
    pinAttributes={AdafruitSi7021TemperatureAndHumidityBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit BME280 Temperature/Humidity/Pressure Breakout — I2C/SPI. */
export const AdafruitBME280TemperatureHumidityPressureBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const AdafruitBME280TemperatureHumidityPressureBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const AdafruitBME280TemperatureHumidityPressureBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitBME280TemperatureHumidityPressureBreakoutProps = ChipProps<typeof AdafruitBME280TemperatureHumidityPressureBreakout_PIN_LABELS>
export const AdafruitBME280TemperatureHumidityPressureBreakout = (props: AdafruitBME280TemperatureHumidityPressureBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit BME280 Temperature/Humidity/Pressure Breakout"
    mfn="Adafruit"
    footprint={AdafruitBME280TemperatureHumidityPressureBreakout_FOOTPRINT}
    pinLabels={AdafruitBME280TemperatureHumidityPressureBreakout_PIN_LABELS}
    pinAttributes={AdafruitBME280TemperatureHumidityPressureBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit BME680 Environmental Sensor Breakout — I2C/SPI. */
export const AdafruitBME680EnvironmentalSensorBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const AdafruitBME680EnvironmentalSensorBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const AdafruitBME680EnvironmentalSensorBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitBME680EnvironmentalSensorBreakoutProps = ChipProps<typeof AdafruitBME680EnvironmentalSensorBreakout_PIN_LABELS>
export const AdafruitBME680EnvironmentalSensorBreakout = (props: AdafruitBME680EnvironmentalSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit BME680 Environmental Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitBME680EnvironmentalSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitBME680EnvironmentalSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitBME680EnvironmentalSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun BME688 Environmental Sensor Breakout — I2C/SPI. */
export const SparkFunBME688EnvironmentalSensorBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const SparkFunBME688EnvironmentalSensorBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const SparkFunBME688EnvironmentalSensorBreakout_FOOTPRINT = FOOTPRINT_F8
export type SparkFunBME688EnvironmentalSensorBreakoutProps = ChipProps<typeof SparkFunBME688EnvironmentalSensorBreakout_PIN_LABELS>
export const SparkFunBME688EnvironmentalSensorBreakout = (props: SparkFunBME688EnvironmentalSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun BME688 Environmental Sensor Breakout"
    mfn="SparkFun"
    footprint={SparkFunBME688EnvironmentalSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunBME688EnvironmentalSensorBreakout_PIN_LABELS}
    pinAttributes={SparkFunBME688EnvironmentalSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit BMP280 Pressure Sensor Breakout — I2C/SPI. */
export const AdafruitBMP280PressureSensorBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const AdafruitBMP280PressureSensorBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const AdafruitBMP280PressureSensorBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitBMP280PressureSensorBreakoutProps = ChipProps<typeof AdafruitBMP280PressureSensorBreakout_PIN_LABELS>
export const AdafruitBMP280PressureSensorBreakout = (props: AdafruitBMP280PressureSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit BMP280 Pressure Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitBMP280PressureSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitBMP280PressureSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitBMP280PressureSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit BMP388 Precision Barometric Pressure Breakout — I2C/SPI. */
export const AdafruitBMP388PrecisionBarometricPressureBreakout_PIN_LABELS = AUDIO6_PIN_LABELS
export const AdafruitBMP388PrecisionBarometricPressureBreakout_PIN_ATTRIBUTES = AUDIO6_PIN_ATTRIBUTES
export const AdafruitBMP388PrecisionBarometricPressureBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitBMP388PrecisionBarometricPressureBreakoutProps = ChipProps<typeof AdafruitBMP388PrecisionBarometricPressureBreakout_PIN_LABELS>
export const AdafruitBMP388PrecisionBarometricPressureBreakout = (props: AdafruitBMP388PrecisionBarometricPressureBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit BMP388 Precision Barometric Pressure Breakout"
    mfn="Adafruit"
    footprint={AdafruitBMP388PrecisionBarometricPressureBreakout_FOOTPRINT}
    pinLabels={AdafruitBMP388PrecisionBarometricPressureBreakout_PIN_LABELS}
    pinAttributes={AdafruitBMP388PrecisionBarometricPressureBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit BMP390 Precision Barometric Pressure Breakout — I2C/SPI. */
export const AdafruitBMP390PrecisionBarometricPressureBreakout_PIN_LABELS = AUDIO6_PIN_LABELS
export const AdafruitBMP390PrecisionBarometricPressureBreakout_PIN_ATTRIBUTES = AUDIO6_PIN_ATTRIBUTES
export const AdafruitBMP390PrecisionBarometricPressureBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitBMP390PrecisionBarometricPressureBreakoutProps = ChipProps<typeof AdafruitBMP390PrecisionBarometricPressureBreakout_PIN_LABELS>
export const AdafruitBMP390PrecisionBarometricPressureBreakout = (props: AdafruitBMP390PrecisionBarometricPressureBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit BMP390 Precision Barometric Pressure Breakout"
    mfn="Adafruit"
    footprint={AdafruitBMP390PrecisionBarometricPressureBreakout_FOOTPRINT}
    pinLabels={AdafruitBMP390PrecisionBarometricPressureBreakout_PIN_LABELS}
    pinAttributes={AdafruitBMP390PrecisionBarometricPressureBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit BMP580 Pressure Sensor Breakout — I2C/SPI. */
export const AdafruitBMP580PressureSensorBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const AdafruitBMP580PressureSensorBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const AdafruitBMP580PressureSensorBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitBMP580PressureSensorBreakoutProps = ChipProps<typeof AdafruitBMP580PressureSensorBreakout_PIN_LABELS>
export const AdafruitBMP580PressureSensorBreakout = (props: AdafruitBMP580PressureSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit BMP580 Pressure Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitBMP580PressureSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitBMP580PressureSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitBMP580PressureSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit DPS310 Precision Barometric Pressure Breakout — I2C/SPI. */
export const AdafruitDPS310PrecisionBarometricPressureBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const AdafruitDPS310PrecisionBarometricPressureBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const AdafruitDPS310PrecisionBarometricPressureBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitDPS310PrecisionBarometricPressureBreakoutProps = ChipProps<typeof AdafruitDPS310PrecisionBarometricPressureBreakout_PIN_LABELS>
export const AdafruitDPS310PrecisionBarometricPressureBreakout = (props: AdafruitDPS310PrecisionBarometricPressureBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit DPS310 Precision Barometric Pressure Breakout"
    mfn="Adafruit"
    footprint={AdafruitDPS310PrecisionBarometricPressureBreakout_FOOTPRINT}
    pinLabels={AdafruitDPS310PrecisionBarometricPressureBreakout_PIN_LABELS}
    pinAttributes={AdafruitDPS310PrecisionBarometricPressureBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit LPS22HB Pressure Sensor Breakout — I2C/SPI. */
export const AdafruitLPS22HBPressureSensorBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const AdafruitLPS22HBPressureSensorBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const AdafruitLPS22HBPressureSensorBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitLPS22HBPressureSensorBreakoutProps = ChipProps<typeof AdafruitLPS22HBPressureSensorBreakout_PIN_LABELS>
export const AdafruitLPS22HBPressureSensorBreakout = (props: AdafruitLPS22HBPressureSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit LPS22HB Pressure Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitLPS22HBPressureSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitLPS22HBPressureSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitLPS22HBPressureSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MCP9808 High-Accuracy Temperature Breakout — I2C. */
export const AdafruitMCP9808HighAccuracyTemperatureBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitMCP9808HighAccuracyTemperatureBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitMCP9808HighAccuracyTemperatureBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitMCP9808HighAccuracyTemperatureBreakoutProps = ChipProps<typeof AdafruitMCP9808HighAccuracyTemperatureBreakout_PIN_LABELS>
export const AdafruitMCP9808HighAccuracyTemperatureBreakout = (props: AdafruitMCP9808HighAccuracyTemperatureBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MCP9808 High-Accuracy Temperature Breakout"
    mfn="Adafruit"
    footprint={AdafruitMCP9808HighAccuracyTemperatureBreakout_FOOTPRINT}
    pinLabels={AdafruitMCP9808HighAccuracyTemperatureBreakout_PIN_LABELS}
    pinAttributes={AdafruitMCP9808HighAccuracyTemperatureBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit TMP117 High-Accuracy Temperature Breakout — I2C. */
export const AdafruitTMP117HighAccuracyTemperatureBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitTMP117HighAccuracyTemperatureBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitTMP117HighAccuracyTemperatureBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitTMP117HighAccuracyTemperatureBreakoutProps = ChipProps<typeof AdafruitTMP117HighAccuracyTemperatureBreakout_PIN_LABELS>
export const AdafruitTMP117HighAccuracyTemperatureBreakout = (props: AdafruitTMP117HighAccuracyTemperatureBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit TMP117 High-Accuracy Temperature Breakout"
    mfn="Adafruit"
    footprint={AdafruitTMP117HighAccuracyTemperatureBreakout_FOOTPRINT}
    pinLabels={AdafruitTMP117HighAccuracyTemperatureBreakout_PIN_LABELS}
    pinAttributes={AdafruitTMP117HighAccuracyTemperatureBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit ADT7410 High-Accuracy Temperature Breakout — I2C. */
export const AdafruitADT7410HighAccuracyTemperatureBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitADT7410HighAccuracyTemperatureBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitADT7410HighAccuracyTemperatureBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitADT7410HighAccuracyTemperatureBreakoutProps = ChipProps<typeof AdafruitADT7410HighAccuracyTemperatureBreakout_PIN_LABELS>
export const AdafruitADT7410HighAccuracyTemperatureBreakout = (props: AdafruitADT7410HighAccuracyTemperatureBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit ADT7410 High-Accuracy Temperature Breakout"
    mfn="Adafruit"
    footprint={AdafruitADT7410HighAccuracyTemperatureBreakout_FOOTPRINT}
    pinLabels={AdafruitADT7410HighAccuracyTemperatureBreakout_PIN_LABELS}
    pinAttributes={AdafruitADT7410HighAccuracyTemperatureBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MLX90614 Contactless IR Thermometer Breakout — I2C. */
export const AdafruitMLX90614ContactlessIRThermometerBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitMLX90614ContactlessIRThermometerBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitMLX90614ContactlessIRThermometerBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitMLX90614ContactlessIRThermometerBreakoutProps = ChipProps<typeof AdafruitMLX90614ContactlessIRThermometerBreakout_PIN_LABELS>
export const AdafruitMLX90614ContactlessIRThermometerBreakout = (props: AdafruitMLX90614ContactlessIRThermometerBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MLX90614 Contactless IR Thermometer Breakout"
    mfn="Adafruit"
    footprint={AdafruitMLX90614ContactlessIRThermometerBreakout_FOOTPRINT}
    pinLabels={AdafruitMLX90614ContactlessIRThermometerBreakout_PIN_LABELS}
    pinAttributes={AdafruitMLX90614ContactlessIRThermometerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MCP9600 Thermocouple Amplifier Breakout — I2C. */
export const AdafruitMCP9600ThermocoupleAmplifierBreakout_PIN_LABELS = AUDIO6_PIN_LABELS
export const AdafruitMCP9600ThermocoupleAmplifierBreakout_PIN_ATTRIBUTES = AUDIO6_PIN_ATTRIBUTES
export const AdafruitMCP9600ThermocoupleAmplifierBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitMCP9600ThermocoupleAmplifierBreakoutProps = ChipProps<typeof AdafruitMCP9600ThermocoupleAmplifierBreakout_PIN_LABELS>
export const AdafruitMCP9600ThermocoupleAmplifierBreakout = (props: AdafruitMCP9600ThermocoupleAmplifierBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MCP9600 Thermocouple Amplifier Breakout"
    mfn="Adafruit"
    footprint={AdafruitMCP9600ThermocoupleAmplifierBreakout_FOOTPRINT}
    pinLabels={AdafruitMCP9600ThermocoupleAmplifierBreakout_PIN_LABELS}
    pinAttributes={AdafruitMCP9600ThermocoupleAmplifierBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MAX31855 Thermocouple Amplifier Breakout — SPI. */
export const AdafruitMAX31855ThermocoupleAmplifierBreakout_PIN_LABELS = AUDIO6_PIN_LABELS
export const AdafruitMAX31855ThermocoupleAmplifierBreakout_PIN_ATTRIBUTES = AUDIO6_PIN_ATTRIBUTES
export const AdafruitMAX31855ThermocoupleAmplifierBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitMAX31855ThermocoupleAmplifierBreakoutProps = ChipProps<typeof AdafruitMAX31855ThermocoupleAmplifierBreakout_PIN_LABELS>
export const AdafruitMAX31855ThermocoupleAmplifierBreakout = (props: AdafruitMAX31855ThermocoupleAmplifierBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MAX31855 Thermocouple Amplifier Breakout"
    mfn="Adafruit"
    footprint={AdafruitMAX31855ThermocoupleAmplifierBreakout_FOOTPRINT}
    pinLabels={AdafruitMAX31855ThermocoupleAmplifierBreakout_PIN_LABELS}
    pinAttributes={AdafruitMAX31855ThermocoupleAmplifierBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MAX31856 Universal Thermocouple Amplifier Breakout — SPI. */
export const AdafruitMAX31856UniversalThermocoupleAmplifierBreakout_PIN_LABELS = AUDIO6_PIN_LABELS
export const AdafruitMAX31856UniversalThermocoupleAmplifierBreakout_PIN_ATTRIBUTES = AUDIO6_PIN_ATTRIBUTES
export const AdafruitMAX31856UniversalThermocoupleAmplifierBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitMAX31856UniversalThermocoupleAmplifierBreakoutProps = ChipProps<typeof AdafruitMAX31856UniversalThermocoupleAmplifierBreakout_PIN_LABELS>
export const AdafruitMAX31856UniversalThermocoupleAmplifierBreakout = (props: AdafruitMAX31856UniversalThermocoupleAmplifierBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MAX31856 Universal Thermocouple Amplifier Breakout"
    mfn="Adafruit"
    footprint={AdafruitMAX31856UniversalThermocoupleAmplifierBreakout_FOOTPRINT}
    pinLabels={AdafruitMAX31856UniversalThermocoupleAmplifierBreakout_PIN_LABELS}
    pinAttributes={AdafruitMAX31856UniversalThermocoupleAmplifierBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MAX31865 RTD PT100/PT1000 Amplifier Breakout — SPI. */
export const AdafruitMAX31865RTDPT100PT1000AmplifierBreakout_PIN_LABELS = AUDIO6_PIN_LABELS
export const AdafruitMAX31865RTDPT100PT1000AmplifierBreakout_PIN_ATTRIBUTES = AUDIO6_PIN_ATTRIBUTES
export const AdafruitMAX31865RTDPT100PT1000AmplifierBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitMAX31865RTDPT100PT1000AmplifierBreakoutProps = ChipProps<typeof AdafruitMAX31865RTDPT100PT1000AmplifierBreakout_PIN_LABELS>
export const AdafruitMAX31865RTDPT100PT1000AmplifierBreakout = (props: AdafruitMAX31865RTDPT100PT1000AmplifierBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MAX31865 RTD PT100/PT1000 Amplifier Breakout"
    mfn="Adafruit"
    footprint={AdafruitMAX31865RTDPT100PT1000AmplifierBreakout_FOOTPRINT}
    pinLabels={AdafruitMAX31865RTDPT100PT1000AmplifierBreakout_PIN_LABELS}
    pinAttributes={AdafruitMAX31865RTDPT100PT1000AmplifierBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit SCD30 NDIR CO2 Breakout — I2C. */
export const AdafruitSCD30NDIRCO2Breakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitSCD30NDIRCO2Breakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitSCD30NDIRCO2Breakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitSCD30NDIRCO2BreakoutProps = ChipProps<typeof AdafruitSCD30NDIRCO2Breakout_PIN_LABELS>
export const AdafruitSCD30NDIRCO2Breakout = (props: AdafruitSCD30NDIRCO2BreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit SCD30 NDIR CO2 Breakout"
    mfn="Adafruit"
    footprint={AdafruitSCD30NDIRCO2Breakout_FOOTPRINT}
    pinLabels={AdafruitSCD30NDIRCO2Breakout_PIN_LABELS}
    pinAttributes={AdafruitSCD30NDIRCO2Breakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit SCD40 CO2 Sensor Breakout — I2C. */
export const AdafruitSCD40CO2SensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitSCD40CO2SensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitSCD40CO2SensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitSCD40CO2SensorBreakoutProps = ChipProps<typeof AdafruitSCD40CO2SensorBreakout_PIN_LABELS>
export const AdafruitSCD40CO2SensorBreakout = (props: AdafruitSCD40CO2SensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit SCD40 CO2 Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitSCD40CO2SensorBreakout_FOOTPRINT}
    pinLabels={AdafruitSCD40CO2SensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitSCD40CO2SensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit SCD41 CO2 Sensor Breakout — I2C. */
export const AdafruitSCD41CO2SensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitSCD41CO2SensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitSCD41CO2SensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitSCD41CO2SensorBreakoutProps = ChipProps<typeof AdafruitSCD41CO2SensorBreakout_PIN_LABELS>
export const AdafruitSCD41CO2SensorBreakout = (props: AdafruitSCD41CO2SensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit SCD41 CO2 Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitSCD41CO2SensorBreakout_FOOTPRINT}
    pinLabels={AdafruitSCD41CO2SensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitSCD41CO2SensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit SGP30 Air Quality Sensor Breakout — I2C. */
export const AdafruitSGP30AirQualitySensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitSGP30AirQualitySensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitSGP30AirQualitySensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitSGP30AirQualitySensorBreakoutProps = ChipProps<typeof AdafruitSGP30AirQualitySensorBreakout_PIN_LABELS>
export const AdafruitSGP30AirQualitySensorBreakout = (props: AdafruitSGP30AirQualitySensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit SGP30 Air Quality Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitSGP30AirQualitySensorBreakout_FOOTPRINT}
    pinLabels={AdafruitSGP30AirQualitySensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitSGP30AirQualitySensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit SGP40 Air Quality Sensor Breakout — I2C. */
export const AdafruitSGP40AirQualitySensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitSGP40AirQualitySensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitSGP40AirQualitySensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitSGP40AirQualitySensorBreakoutProps = ChipProps<typeof AdafruitSGP40AirQualitySensorBreakout_PIN_LABELS>
export const AdafruitSGP40AirQualitySensorBreakout = (props: AdafruitSGP40AirQualitySensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit SGP40 Air Quality Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitSGP40AirQualitySensorBreakout_FOOTPRINT}
    pinLabels={AdafruitSGP40AirQualitySensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitSGP40AirQualitySensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit SGP41 Air Quality Sensor Breakout — I2C. */
export const AdafruitSGP41AirQualitySensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitSGP41AirQualitySensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitSGP41AirQualitySensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitSGP41AirQualitySensorBreakoutProps = ChipProps<typeof AdafruitSGP41AirQualitySensorBreakout_PIN_LABELS>
export const AdafruitSGP41AirQualitySensorBreakout = (props: AdafruitSGP41AirQualitySensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit SGP41 Air Quality Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitSGP41AirQualitySensorBreakout_FOOTPRINT}
    pinLabels={AdafruitSGP41AirQualitySensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitSGP41AirQualitySensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun ENS160 Indoor Air Quality Breakout — I2C/SPI. */
export const SparkFunENS160IndoorAirQualityBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const SparkFunENS160IndoorAirQualityBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const SparkFunENS160IndoorAirQualityBreakout_FOOTPRINT = FOOTPRINT_F8
export type SparkFunENS160IndoorAirQualityBreakoutProps = ChipProps<typeof SparkFunENS160IndoorAirQualityBreakout_PIN_LABELS>
export const SparkFunENS160IndoorAirQualityBreakout = (props: SparkFunENS160IndoorAirQualityBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun ENS160 Indoor Air Quality Breakout"
    mfn="SparkFun"
    footprint={SparkFunENS160IndoorAirQualityBreakout_FOOTPRINT}
    pinLabels={SparkFunENS160IndoorAirQualityBreakout_PIN_LABELS}
    pinAttributes={SparkFunENS160IndoorAirQualityBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun ENS160 + BME280 Environmental Combo Breakout — I2C. */
export const SparkFunENS160BME280EnvironmentalComboBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const SparkFunENS160BME280EnvironmentalComboBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const SparkFunENS160BME280EnvironmentalComboBreakout_FOOTPRINT = FOOTPRINT_F4
export type SparkFunENS160BME280EnvironmentalComboBreakoutProps = ChipProps<typeof SparkFunENS160BME280EnvironmentalComboBreakout_PIN_LABELS>
export const SparkFunENS160BME280EnvironmentalComboBreakout = (props: SparkFunENS160BME280EnvironmentalComboBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun ENS160 + BME280 Environmental Combo Breakout"
    mfn="SparkFun"
    footprint={SparkFunENS160BME280EnvironmentalComboBreakout_FOOTPRINT}
    pinLabels={SparkFunENS160BME280EnvironmentalComboBreakout_PIN_LABELS}
    pinAttributes={SparkFunENS160BME280EnvironmentalComboBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit PMSA003I Particulate Matter Sensor Breakout — I2C/UART adapter. */
export const AdafruitPMSA003IParticulateMatterSensorBreakout_PIN_LABELS = I2CUART6_PIN_LABELS
export const AdafruitPMSA003IParticulateMatterSensorBreakout_PIN_ATTRIBUTES = I2CUART6_PIN_ATTRIBUTES
export const AdafruitPMSA003IParticulateMatterSensorBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitPMSA003IParticulateMatterSensorBreakoutProps = ChipProps<typeof AdafruitPMSA003IParticulateMatterSensorBreakout_PIN_LABELS>
export const AdafruitPMSA003IParticulateMatterSensorBreakout = (props: AdafruitPMSA003IParticulateMatterSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit PMSA003I Particulate Matter Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitPMSA003IParticulateMatterSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitPMSA003IParticulateMatterSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitPMSA003IParticulateMatterSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun BMV080 Particulate Matter Sensor Breakout — I2C/SPI. */
export const SparkFunBMV080ParticulateMatterSensorBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const SparkFunBMV080ParticulateMatterSensorBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const SparkFunBMV080ParticulateMatterSensorBreakout_FOOTPRINT = FOOTPRINT_F8
export type SparkFunBMV080ParticulateMatterSensorBreakoutProps = ChipProps<typeof SparkFunBMV080ParticulateMatterSensorBreakout_PIN_LABELS>
export const SparkFunBMV080ParticulateMatterSensorBreakout = (props: SparkFunBMV080ParticulateMatterSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun BMV080 Particulate Matter Sensor Breakout"
    mfn="SparkFun"
    footprint={SparkFunBMV080ParticulateMatterSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunBMV080ParticulateMatterSensorBreakout_PIN_LABELS}
    pinAttributes={SparkFunBMV080ParticulateMatterSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit BH1750 Ambient Light Sensor Breakout — I2C. */
export const AdafruitBH1750AmbientLightSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitBH1750AmbientLightSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitBH1750AmbientLightSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitBH1750AmbientLightSensorBreakoutProps = ChipProps<typeof AdafruitBH1750AmbientLightSensorBreakout_PIN_LABELS>
export const AdafruitBH1750AmbientLightSensorBreakout = (props: AdafruitBH1750AmbientLightSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit BH1750 Ambient Light Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitBH1750AmbientLightSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitBH1750AmbientLightSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitBH1750AmbientLightSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit TSL2591 High Dynamic Range Light Sensor Breakout — I2C. */
export const AdafruitTSL2591HighDynamicRangeLightSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitTSL2591HighDynamicRangeLightSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitTSL2591HighDynamicRangeLightSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitTSL2591HighDynamicRangeLightSensorBreakoutProps = ChipProps<typeof AdafruitTSL2591HighDynamicRangeLightSensorBreakout_PIN_LABELS>
export const AdafruitTSL2591HighDynamicRangeLightSensorBreakout = (props: AdafruitTSL2591HighDynamicRangeLightSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit TSL2591 High Dynamic Range Light Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitTSL2591HighDynamicRangeLightSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitTSL2591HighDynamicRangeLightSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitTSL2591HighDynamicRangeLightSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit TSL2561 Digital Luminosity Sensor Breakout — I2C. */
export const AdafruitTSL2561DigitalLuminositySensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitTSL2561DigitalLuminositySensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitTSL2561DigitalLuminositySensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitTSL2561DigitalLuminositySensorBreakoutProps = ChipProps<typeof AdafruitTSL2561DigitalLuminositySensorBreakout_PIN_LABELS>
export const AdafruitTSL2561DigitalLuminositySensorBreakout = (props: AdafruitTSL2561DigitalLuminositySensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit TSL2561 Digital Luminosity Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitTSL2561DigitalLuminositySensorBreakout_FOOTPRINT}
    pinLabels={AdafruitTSL2561DigitalLuminositySensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitTSL2561DigitalLuminositySensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit VEML7700 Lux Sensor Breakout — I2C. */
export const AdafruitVEML7700LuxSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitVEML7700LuxSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitVEML7700LuxSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitVEML7700LuxSensorBreakoutProps = ChipProps<typeof AdafruitVEML7700LuxSensorBreakout_PIN_LABELS>
export const AdafruitVEML7700LuxSensorBreakout = (props: AdafruitVEML7700LuxSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit VEML7700 Lux Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitVEML7700LuxSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitVEML7700LuxSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitVEML7700LuxSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun VEML6030 Ambient Light Sensor Breakout — I2C. */
export const SparkFunVEML6030AmbientLightSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const SparkFunVEML6030AmbientLightSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const SparkFunVEML6030AmbientLightSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type SparkFunVEML6030AmbientLightSensorBreakoutProps = ChipProps<typeof SparkFunVEML6030AmbientLightSensorBreakout_PIN_LABELS>
export const SparkFunVEML6030AmbientLightSensorBreakout = (props: SparkFunVEML6030AmbientLightSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun VEML6030 Ambient Light Sensor Breakout"
    mfn="SparkFun"
    footprint={SparkFunVEML6030AmbientLightSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunVEML6030AmbientLightSensorBreakout_PIN_LABELS}
    pinAttributes={SparkFunVEML6030AmbientLightSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit LTR390 UV Light Sensor Breakout — I2C. */
export const AdafruitLTR390UVLightSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitLTR390UVLightSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitLTR390UVLightSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitLTR390UVLightSensorBreakoutProps = ChipProps<typeof AdafruitLTR390UVLightSensorBreakout_PIN_LABELS>
export const AdafruitLTR390UVLightSensorBreakout = (props: AdafruitLTR390UVLightSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit LTR390 UV Light Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitLTR390UVLightSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitLTR390UVLightSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitLTR390UVLightSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun VEML6075 UVA/UVB Sensor Breakout — I2C. */
export const SparkFunVEML6075UVAUVBSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const SparkFunVEML6075UVAUVBSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const SparkFunVEML6075UVAUVBSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type SparkFunVEML6075UVAUVBSensorBreakoutProps = ChipProps<typeof SparkFunVEML6075UVAUVBSensorBreakout_PIN_LABELS>
export const SparkFunVEML6075UVAUVBSensorBreakout = (props: SparkFunVEML6075UVAUVBSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun VEML6075 UVA/UVB Sensor Breakout"
    mfn="SparkFun"
    footprint={SparkFunVEML6075UVAUVBSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunVEML6075UVAUVBSensorBreakout_PIN_LABELS}
    pinAttributes={SparkFunVEML6075UVAUVBSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit AS7341 10-Channel Light/Color Sensor Breakout — I2C. */
export const AdafruitAS734110ChannelLightColorSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitAS734110ChannelLightColorSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitAS734110ChannelLightColorSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitAS734110ChannelLightColorSensorBreakoutProps = ChipProps<typeof AdafruitAS734110ChannelLightColorSensorBreakout_PIN_LABELS>
export const AdafruitAS734110ChannelLightColorSensorBreakout = (props: AdafruitAS734110ChannelLightColorSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit AS7341 10-Channel Light/Color Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitAS734110ChannelLightColorSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitAS734110ChannelLightColorSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitAS734110ChannelLightColorSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun AS7343 14-Channel Spectral Sensor Breakout — I2C. */
export const SparkFunAS734314ChannelSpectralSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const SparkFunAS734314ChannelSpectralSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const SparkFunAS734314ChannelSpectralSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type SparkFunAS734314ChannelSpectralSensorBreakoutProps = ChipProps<typeof SparkFunAS734314ChannelSpectralSensorBreakout_PIN_LABELS>
export const SparkFunAS734314ChannelSpectralSensorBreakout = (props: SparkFunAS734314ChannelSpectralSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun AS7343 14-Channel Spectral Sensor Breakout"
    mfn="SparkFun"
    footprint={SparkFunAS734314ChannelSpectralSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunAS734314ChannelSpectralSensorBreakout_PIN_LABELS}
    pinAttributes={SparkFunAS734314ChannelSpectralSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun AS7262 Visible Spectral Sensor Breakout — I2C/UART. */
export const SparkFunAS7262VisibleSpectralSensorBreakout_PIN_LABELS = I2CUART6_PIN_LABELS
export const SparkFunAS7262VisibleSpectralSensorBreakout_PIN_ATTRIBUTES = I2CUART6_PIN_ATTRIBUTES
export const SparkFunAS7262VisibleSpectralSensorBreakout_FOOTPRINT = FOOTPRINT_F6
export type SparkFunAS7262VisibleSpectralSensorBreakoutProps = ChipProps<typeof SparkFunAS7262VisibleSpectralSensorBreakout_PIN_LABELS>
export const SparkFunAS7262VisibleSpectralSensorBreakout = (props: SparkFunAS7262VisibleSpectralSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun AS7262 Visible Spectral Sensor Breakout"
    mfn="SparkFun"
    footprint={SparkFunAS7262VisibleSpectralSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunAS7262VisibleSpectralSensorBreakout_PIN_LABELS}
    pinAttributes={SparkFunAS7262VisibleSpectralSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun AS7263 NIR Spectral Sensor Breakout — I2C/UART. */
export const SparkFunAS7263NIRSpectralSensorBreakout_PIN_LABELS = I2CUART6_PIN_LABELS
export const SparkFunAS7263NIRSpectralSensorBreakout_PIN_ATTRIBUTES = I2CUART6_PIN_ATTRIBUTES
export const SparkFunAS7263NIRSpectralSensorBreakout_FOOTPRINT = FOOTPRINT_F6
export type SparkFunAS7263NIRSpectralSensorBreakoutProps = ChipProps<typeof SparkFunAS7263NIRSpectralSensorBreakout_PIN_LABELS>
export const SparkFunAS7263NIRSpectralSensorBreakout = (props: SparkFunAS7263NIRSpectralSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun AS7263 NIR Spectral Sensor Breakout"
    mfn="SparkFun"
    footprint={SparkFunAS7263NIRSpectralSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunAS7263NIRSpectralSensorBreakout_PIN_LABELS}
    pinAttributes={SparkFunAS7263NIRSpectralSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit APDS9960 Proximity/Gesture/RGB Breakout — I2C. */
export const AdafruitAPDS9960ProximityGestureRGBBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitAPDS9960ProximityGestureRGBBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitAPDS9960ProximityGestureRGBBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitAPDS9960ProximityGestureRGBBreakoutProps = ChipProps<typeof AdafruitAPDS9960ProximityGestureRGBBreakout_PIN_LABELS>
export const AdafruitAPDS9960ProximityGestureRGBBreakout = (props: AdafruitAPDS9960ProximityGestureRGBBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit APDS9960 Proximity/Gesture/RGB Breakout"
    mfn="Adafruit"
    footprint={AdafruitAPDS9960ProximityGestureRGBBreakout_FOOTPRINT}
    pinLabels={AdafruitAPDS9960ProximityGestureRGBBreakout_PIN_LABELS}
    pinAttributes={AdafruitAPDS9960ProximityGestureRGBBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit APDS9250 Digital RGB/IR Sensor Breakout — I2C. */
export const AdafruitAPDS9250DigitalRGBIRSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitAPDS9250DigitalRGBIRSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitAPDS9250DigitalRGBIRSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitAPDS9250DigitalRGBIRSensorBreakoutProps = ChipProps<typeof AdafruitAPDS9250DigitalRGBIRSensorBreakout_PIN_LABELS>
export const AdafruitAPDS9250DigitalRGBIRSensorBreakout = (props: AdafruitAPDS9250DigitalRGBIRSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit APDS9250 Digital RGB/IR Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitAPDS9250DigitalRGBIRSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitAPDS9250DigitalRGBIRSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitAPDS9250DigitalRGBIRSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit APDS9999 Proximity/Lux/Color Sensor Breakout — I2C. */
export const AdafruitAPDS9999ProximityLuxColorSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitAPDS9999ProximityLuxColorSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitAPDS9999ProximityLuxColorSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitAPDS9999ProximityLuxColorSensorBreakoutProps = ChipProps<typeof AdafruitAPDS9999ProximityLuxColorSensorBreakout_PIN_LABELS>
export const AdafruitAPDS9999ProximityLuxColorSensorBreakout = (props: AdafruitAPDS9999ProximityLuxColorSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit APDS9999 Proximity/Lux/Color Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitAPDS9999ProximityLuxColorSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitAPDS9999ProximityLuxColorSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitAPDS9999ProximityLuxColorSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun OPT4048 Tristimulus Color Sensor Breakout — I2C. */
export const SparkFunOPT4048TristimulusColorSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const SparkFunOPT4048TristimulusColorSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const SparkFunOPT4048TristimulusColorSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type SparkFunOPT4048TristimulusColorSensorBreakoutProps = ChipProps<typeof SparkFunOPT4048TristimulusColorSensorBreakout_PIN_LABELS>
export const SparkFunOPT4048TristimulusColorSensorBreakout = (props: SparkFunOPT4048TristimulusColorSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun OPT4048 Tristimulus Color Sensor Breakout"
    mfn="SparkFun"
    footprint={SparkFunOPT4048TristimulusColorSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunOPT4048TristimulusColorSensorBreakout_PIN_LABELS}
    pinAttributes={SparkFunOPT4048TristimulusColorSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit VCNL4040 Proximity and Lux Sensor Breakout — I2C. */
export const AdafruitVCNL4040ProximityAndLuxSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitVCNL4040ProximityAndLuxSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitVCNL4040ProximityAndLuxSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitVCNL4040ProximityAndLuxSensorBreakoutProps = ChipProps<typeof AdafruitVCNL4040ProximityAndLuxSensorBreakout_PIN_LABELS>
export const AdafruitVCNL4040ProximityAndLuxSensorBreakout = (props: AdafruitVCNL4040ProximityAndLuxSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit VCNL4040 Proximity and Lux Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitVCNL4040ProximityAndLuxSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitVCNL4040ProximityAndLuxSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitVCNL4040ProximityAndLuxSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit VCNL4020 Proximity and Light Sensor Breakout — I2C. */
export const AdafruitVCNL4020ProximityAndLightSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitVCNL4020ProximityAndLightSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitVCNL4020ProximityAndLightSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitVCNL4020ProximityAndLightSensorBreakoutProps = ChipProps<typeof AdafruitVCNL4020ProximityAndLightSensorBreakout_PIN_LABELS>
export const AdafruitVCNL4020ProximityAndLightSensorBreakout = (props: AdafruitVCNL4020ProximityAndLightSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit VCNL4020 Proximity and Light Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitVCNL4020ProximityAndLightSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitVCNL4020ProximityAndLightSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitVCNL4020ProximityAndLightSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun TEMT6000 Ambient Light Sensor Breakout — analog. */
export const SparkFunTEMT6000AmbientLightSensorBreakout_PIN_LABELS = ANALOG3_PIN_LABELS
export const SparkFunTEMT6000AmbientLightSensorBreakout_PIN_ATTRIBUTES = ANALOG3_PIN_ATTRIBUTES
export const SparkFunTEMT6000AmbientLightSensorBreakout_FOOTPRINT = FOOTPRINT_F3
export type SparkFunTEMT6000AmbientLightSensorBreakoutProps = ChipProps<typeof SparkFunTEMT6000AmbientLightSensorBreakout_PIN_LABELS>
export const SparkFunTEMT6000AmbientLightSensorBreakout = (props: SparkFunTEMT6000AmbientLightSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun TEMT6000 Ambient Light Sensor Breakout"
    mfn="SparkFun"
    footprint={SparkFunTEMT6000AmbientLightSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunTEMT6000AmbientLightSensorBreakout_PIN_LABELS}
    pinAttributes={SparkFunTEMT6000AmbientLightSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit GA1A12S202 Log-Scale Analog Light Sensor Breakout — analog. */
export const AdafruitGA1A12S202LogScaleAnalogLightSensorBreakout_PIN_LABELS = ANALOG3_PIN_LABELS
export const AdafruitGA1A12S202LogScaleAnalogLightSensorBreakout_PIN_ATTRIBUTES = ANALOG3_PIN_ATTRIBUTES
export const AdafruitGA1A12S202LogScaleAnalogLightSensorBreakout_FOOTPRINT = FOOTPRINT_F3
export type AdafruitGA1A12S202LogScaleAnalogLightSensorBreakoutProps = ChipProps<typeof AdafruitGA1A12S202LogScaleAnalogLightSensorBreakout_PIN_LABELS>
export const AdafruitGA1A12S202LogScaleAnalogLightSensorBreakout = (props: AdafruitGA1A12S202LogScaleAnalogLightSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit GA1A12S202 Log-Scale Analog Light Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitGA1A12S202LogScaleAnalogLightSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitGA1A12S202LogScaleAnalogLightSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitGA1A12S202LogScaleAnalogLightSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun ML8511 UV Sensor Breakout — analog. */
export const SparkFunML8511UVSensorBreakout_PIN_LABELS = ANALOG3_PIN_LABELS
export const SparkFunML8511UVSensorBreakout_PIN_ATTRIBUTES = ANALOG3_PIN_ATTRIBUTES
export const SparkFunML8511UVSensorBreakout_FOOTPRINT = FOOTPRINT_F3
export type SparkFunML8511UVSensorBreakoutProps = ChipProps<typeof SparkFunML8511UVSensorBreakout_PIN_LABELS>
export const SparkFunML8511UVSensorBreakout = (props: SparkFunML8511UVSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun ML8511 UV Sensor Breakout"
    mfn="SparkFun"
    footprint={SparkFunML8511UVSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunML8511UVSensorBreakout_PIN_LABELS}
    pinAttributes={SparkFunML8511UVSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit AMG8833 Grid-EYE 8x8 Thermal Camera Breakout — I2C. */
export const AdafruitAMG8833GridEYE8x8ThermalCameraBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitAMG8833GridEYE8x8ThermalCameraBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitAMG8833GridEYE8x8ThermalCameraBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitAMG8833GridEYE8x8ThermalCameraBreakoutProps = ChipProps<typeof AdafruitAMG8833GridEYE8x8ThermalCameraBreakout_PIN_LABELS>
export const AdafruitAMG8833GridEYE8x8ThermalCameraBreakout = (props: AdafruitAMG8833GridEYE8x8ThermalCameraBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit AMG8833 Grid-EYE 8x8 Thermal Camera Breakout"
    mfn="Adafruit"
    footprint={AdafruitAMG8833GridEYE8x8ThermalCameraBreakout_FOOTPRINT}
    pinLabels={AdafruitAMG8833GridEYE8x8ThermalCameraBreakout_PIN_LABELS}
    pinAttributes={AdafruitAMG8833GridEYE8x8ThermalCameraBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MLX90640 24x32 Thermal Camera Breakout, 55 degree — I2C. */
export const AdafruitMLX9064024x32ThermalCameraBreakout55Degree_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitMLX9064024x32ThermalCameraBreakout55Degree_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitMLX9064024x32ThermalCameraBreakout55Degree_FOOTPRINT = FOOTPRINT_F4
export type AdafruitMLX9064024x32ThermalCameraBreakout55DegreeProps = ChipProps<typeof AdafruitMLX9064024x32ThermalCameraBreakout55Degree_PIN_LABELS>
export const AdafruitMLX9064024x32ThermalCameraBreakout55Degree = (props: AdafruitMLX9064024x32ThermalCameraBreakout55DegreeProps) => (
  <chip
    {...props}
    displayName="Adafruit MLX90640 24x32 Thermal Camera Breakout, 55 degree"
    mfn="Adafruit"
    footprint={AdafruitMLX9064024x32ThermalCameraBreakout55Degree_FOOTPRINT}
    pinLabels={AdafruitMLX9064024x32ThermalCameraBreakout55Degree_PIN_LABELS}
    pinAttributes={AdafruitMLX9064024x32ThermalCameraBreakout55Degree_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MLX90640 24x32 Thermal Camera Breakout, 110 degree — I2C. */
export const AdafruitMLX9064024x32ThermalCameraBreakout110Degree_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitMLX9064024x32ThermalCameraBreakout110Degree_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitMLX9064024x32ThermalCameraBreakout110Degree_FOOTPRINT = FOOTPRINT_F4
export type AdafruitMLX9064024x32ThermalCameraBreakout110DegreeProps = ChipProps<typeof AdafruitMLX9064024x32ThermalCameraBreakout110Degree_PIN_LABELS>
export const AdafruitMLX9064024x32ThermalCameraBreakout110Degree = (props: AdafruitMLX9064024x32ThermalCameraBreakout110DegreeProps) => (
  <chip
    {...props}
    displayName="Adafruit MLX90640 24x32 Thermal Camera Breakout, 110 degree"
    mfn="Adafruit"
    footprint={AdafruitMLX9064024x32ThermalCameraBreakout110Degree_FOOTPRINT}
    pinLabels={AdafruitMLX9064024x32ThermalCameraBreakout110Degree_PIN_LABELS}
    pinAttributes={AdafruitMLX9064024x32ThermalCameraBreakout110Degree_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MLX90641 16x12 Thermal Camera Breakout — I2C. */
export const AdafruitMLX9064116x12ThermalCameraBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitMLX9064116x12ThermalCameraBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitMLX9064116x12ThermalCameraBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitMLX9064116x12ThermalCameraBreakoutProps = ChipProps<typeof AdafruitMLX9064116x12ThermalCameraBreakout_PIN_LABELS>
export const AdafruitMLX9064116x12ThermalCameraBreakout = (props: AdafruitMLX9064116x12ThermalCameraBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MLX90641 16x12 Thermal Camera Breakout"
    mfn="Adafruit"
    footprint={AdafruitMLX9064116x12ThermalCameraBreakout_FOOTPRINT}
    pinLabels={AdafruitMLX9064116x12ThermalCameraBreakout_PIN_LABELS}
    pinAttributes={AdafruitMLX9064116x12ThermalCameraBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun MLX90632 FIR Temperature Sensor Breakout — I2C. */
export const SparkFunMLX90632FIRTemperatureSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const SparkFunMLX90632FIRTemperatureSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const SparkFunMLX90632FIRTemperatureSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type SparkFunMLX90632FIRTemperatureSensorBreakoutProps = ChipProps<typeof SparkFunMLX90632FIRTemperatureSensorBreakout_PIN_LABELS>
export const SparkFunMLX90632FIRTemperatureSensorBreakout = (props: SparkFunMLX90632FIRTemperatureSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun MLX90632 FIR Temperature Sensor Breakout"
    mfn="SparkFun"
    footprint={SparkFunMLX90632FIRTemperatureSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunMLX90632FIRTemperatureSensorBreakout_PIN_LABELS}
    pinAttributes={SparkFunMLX90632FIRTemperatureSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit LIS3DH Triple-Axis Accelerometer Breakout — I2C/SPI. */
export const AdafruitLIS3DHTripleAxisAccelerometerBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const AdafruitLIS3DHTripleAxisAccelerometerBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const AdafruitLIS3DHTripleAxisAccelerometerBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitLIS3DHTripleAxisAccelerometerBreakoutProps = ChipProps<typeof AdafruitLIS3DHTripleAxisAccelerometerBreakout_PIN_LABELS>
export const AdafruitLIS3DHTripleAxisAccelerometerBreakout = (props: AdafruitLIS3DHTripleAxisAccelerometerBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit LIS3DH Triple-Axis Accelerometer Breakout"
    mfn="Adafruit"
    footprint={AdafruitLIS3DHTripleAxisAccelerometerBreakout_FOOTPRINT}
    pinLabels={AdafruitLIS3DHTripleAxisAccelerometerBreakout_PIN_LABELS}
    pinAttributes={AdafruitLIS3DHTripleAxisAccelerometerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit LIS2DW12 Triple-Axis Accelerometer Breakout — I2C/SPI. */
export const AdafruitLIS2DW12TripleAxisAccelerometerBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const AdafruitLIS2DW12TripleAxisAccelerometerBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const AdafruitLIS2DW12TripleAxisAccelerometerBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitLIS2DW12TripleAxisAccelerometerBreakoutProps = ChipProps<typeof AdafruitLIS2DW12TripleAxisAccelerometerBreakout_PIN_LABELS>
export const AdafruitLIS2DW12TripleAxisAccelerometerBreakout = (props: AdafruitLIS2DW12TripleAxisAccelerometerBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit LIS2DW12 Triple-Axis Accelerometer Breakout"
    mfn="Adafruit"
    footprint={AdafruitLIS2DW12TripleAxisAccelerometerBreakout_FOOTPRINT}
    pinLabels={AdafruitLIS2DW12TripleAxisAccelerometerBreakout_PIN_LABELS}
    pinAttributes={AdafruitLIS2DW12TripleAxisAccelerometerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu LIS331HH High-g Accelerometer Carrier — I2C/SPI. */
export const PololuLIS331HHHighGAccelerometerCarrier_PIN_LABELS = I2CSPI8_PIN_LABELS
export const PololuLIS331HHHighGAccelerometerCarrier_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const PololuLIS331HHHighGAccelerometerCarrier_FOOTPRINT = FOOTPRINT_F8
export type PololuLIS331HHHighGAccelerometerCarrierProps = ChipProps<typeof PololuLIS331HHHighGAccelerometerCarrier_PIN_LABELS>
export const PololuLIS331HHHighGAccelerometerCarrier = (props: PololuLIS331HHHighGAccelerometerCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu LIS331HH High-g Accelerometer Carrier"
    mfn="Pololu"
    footprint={PololuLIS331HHHighGAccelerometerCarrier_FOOTPRINT}
    pinLabels={PololuLIS331HHHighGAccelerometerCarrier_PIN_LABELS}
    pinAttributes={PololuLIS331HHHighGAccelerometerCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit ADXL343 Triple-Axis Accelerometer Breakout — I2C/SPI. */
export const AdafruitADXL343TripleAxisAccelerometerBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const AdafruitADXL343TripleAxisAccelerometerBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const AdafruitADXL343TripleAxisAccelerometerBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitADXL343TripleAxisAccelerometerBreakoutProps = ChipProps<typeof AdafruitADXL343TripleAxisAccelerometerBreakout_PIN_LABELS>
export const AdafruitADXL343TripleAxisAccelerometerBreakout = (props: AdafruitADXL343TripleAxisAccelerometerBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit ADXL343 Triple-Axis Accelerometer Breakout"
    mfn="Adafruit"
    footprint={AdafruitADXL343TripleAxisAccelerometerBreakout_FOOTPRINT}
    pinLabels={AdafruitADXL343TripleAxisAccelerometerBreakout_PIN_LABELS}
    pinAttributes={AdafruitADXL343TripleAxisAccelerometerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic ADXL345 GY-291 Accelerometer Module — I2C/SPI. */
export const GenericADXL345GY291AccelerometerModule_PIN_LABELS = I2CSPI8_PIN_LABELS
export const GenericADXL345GY291AccelerometerModule_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const GenericADXL345GY291AccelerometerModule_FOOTPRINT = FOOTPRINT_F8
export type GenericADXL345GY291AccelerometerModuleProps = ChipProps<typeof GenericADXL345GY291AccelerometerModule_PIN_LABELS>
export const GenericADXL345GY291AccelerometerModule = (props: GenericADXL345GY291AccelerometerModuleProps) => (
  <chip
    {...props}
    displayName="Generic ADXL345 GY-291 Accelerometer Module"
    mfn="Generic"
    footprint={GenericADXL345GY291AccelerometerModule_FOOTPRINT}
    pinLabels={GenericADXL345GY291AccelerometerModule_PIN_LABELS}
    pinAttributes={GenericADXL345GY291AccelerometerModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun ADXL375 High-g Accelerometer Breakout — I2C/SPI. */
export const SparkFunADXL375HighGAccelerometerBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const SparkFunADXL375HighGAccelerometerBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const SparkFunADXL375HighGAccelerometerBreakout_FOOTPRINT = FOOTPRINT_F8
export type SparkFunADXL375HighGAccelerometerBreakoutProps = ChipProps<typeof SparkFunADXL375HighGAccelerometerBreakout_PIN_LABELS>
export const SparkFunADXL375HighGAccelerometerBreakout = (props: SparkFunADXL375HighGAccelerometerBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun ADXL375 High-g Accelerometer Breakout"
    mfn="SparkFun"
    footprint={SparkFunADXL375HighGAccelerometerBreakout_FOOTPRINT}
    pinLabels={SparkFunADXL375HighGAccelerometerBreakout_PIN_LABELS}
    pinAttributes={SparkFunADXL375HighGAccelerometerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MMA8451 Triple-Axis Accelerometer Breakout — I2C. */
export const AdafruitMMA8451TripleAxisAccelerometerBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitMMA8451TripleAxisAccelerometerBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitMMA8451TripleAxisAccelerometerBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitMMA8451TripleAxisAccelerometerBreakoutProps = ChipProps<typeof AdafruitMMA8451TripleAxisAccelerometerBreakout_PIN_LABELS>
export const AdafruitMMA8451TripleAxisAccelerometerBreakout = (props: AdafruitMMA8451TripleAxisAccelerometerBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MMA8451 Triple-Axis Accelerometer Breakout"
    mfn="Adafruit"
    footprint={AdafruitMMA8451TripleAxisAccelerometerBreakout_FOOTPRINT}
    pinLabels={AdafruitMMA8451TripleAxisAccelerometerBreakout_PIN_LABELS}
    pinAttributes={AdafruitMMA8451TripleAxisAccelerometerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun BMA400 Triple-Axis Accelerometer Breakout — I2C/SPI. */
export const SparkFunBMA400TripleAxisAccelerometerBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const SparkFunBMA400TripleAxisAccelerometerBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const SparkFunBMA400TripleAxisAccelerometerBreakout_FOOTPRINT = FOOTPRINT_F8
export type SparkFunBMA400TripleAxisAccelerometerBreakoutProps = ChipProps<typeof SparkFunBMA400TripleAxisAccelerometerBreakout_PIN_LABELS>
export const SparkFunBMA400TripleAxisAccelerometerBreakout = (props: SparkFunBMA400TripleAxisAccelerometerBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun BMA400 Triple-Axis Accelerometer Breakout"
    mfn="SparkFun"
    footprint={SparkFunBMA400TripleAxisAccelerometerBreakout_FOOTPRINT}
    pinLabels={SparkFunBMA400TripleAxisAccelerometerBreakout_PIN_LABELS}
    pinAttributes={SparkFunBMA400TripleAxisAccelerometerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun KX134 High-g Accelerometer Breakout — I2C/SPI. */
export const SparkFunKX134HighGAccelerometerBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const SparkFunKX134HighGAccelerometerBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const SparkFunKX134HighGAccelerometerBreakout_FOOTPRINT = FOOTPRINT_F8
export type SparkFunKX134HighGAccelerometerBreakoutProps = ChipProps<typeof SparkFunKX134HighGAccelerometerBreakout_PIN_LABELS>
export const SparkFunKX134HighGAccelerometerBreakout = (props: SparkFunKX134HighGAccelerometerBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun KX134 High-g Accelerometer Breakout"
    mfn="SparkFun"
    footprint={SparkFunKX134HighGAccelerometerBreakout_FOOTPRINT}
    pinLabels={SparkFunKX134HighGAccelerometerBreakout_PIN_LABELS}
    pinAttributes={SparkFunKX134HighGAccelerometerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit L3GD20H Triple-Axis Gyroscope Breakout — I2C/SPI. */
export const AdafruitL3GD20HTripleAxisGyroscopeBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const AdafruitL3GD20HTripleAxisGyroscopeBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const AdafruitL3GD20HTripleAxisGyroscopeBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitL3GD20HTripleAxisGyroscopeBreakoutProps = ChipProps<typeof AdafruitL3GD20HTripleAxisGyroscopeBreakout_PIN_LABELS>
export const AdafruitL3GD20HTripleAxisGyroscopeBreakout = (props: AdafruitL3GD20HTripleAxisGyroscopeBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit L3GD20H Triple-Axis Gyroscope Breakout"
    mfn="Adafruit"
    footprint={AdafruitL3GD20HTripleAxisGyroscopeBreakout_FOOTPRINT}
    pinLabels={AdafruitL3GD20HTripleAxisGyroscopeBreakout_PIN_LABELS}
    pinAttributes={AdafruitL3GD20HTripleAxisGyroscopeBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit LSM6DSOX 6-DoF IMU Breakout — I2C/SPI. */
export const AdafruitLSM6DSOX6DoFIMUBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const AdafruitLSM6DSOX6DoFIMUBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const AdafruitLSM6DSOX6DoFIMUBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitLSM6DSOX6DoFIMUBreakoutProps = ChipProps<typeof AdafruitLSM6DSOX6DoFIMUBreakout_PIN_LABELS>
export const AdafruitLSM6DSOX6DoFIMUBreakout = (props: AdafruitLSM6DSOX6DoFIMUBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit LSM6DSOX 6-DoF IMU Breakout"
    mfn="Adafruit"
    footprint={AdafruitLSM6DSOX6DoFIMUBreakout_FOOTPRINT}
    pinLabels={AdafruitLSM6DSOX6DoFIMUBreakout_PIN_LABELS}
    pinAttributes={AdafruitLSM6DSOX6DoFIMUBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit LSM6DS3TR-C 6-DoF IMU Breakout — I2C/SPI. */
export const AdafruitLSM6DS3TRC6DoFIMUBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const AdafruitLSM6DS3TRC6DoFIMUBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const AdafruitLSM6DS3TRC6DoFIMUBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitLSM6DS3TRC6DoFIMUBreakoutProps = ChipProps<typeof AdafruitLSM6DS3TRC6DoFIMUBreakout_PIN_LABELS>
export const AdafruitLSM6DS3TRC6DoFIMUBreakout = (props: AdafruitLSM6DS3TRC6DoFIMUBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit LSM6DS3TR-C 6-DoF IMU Breakout"
    mfn="Adafruit"
    footprint={AdafruitLSM6DS3TRC6DoFIMUBreakout_FOOTPRINT}
    pinLabels={AdafruitLSM6DS3TRC6DoFIMUBreakout_PIN_LABELS}
    pinAttributes={AdafruitLSM6DS3TRC6DoFIMUBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit ISM330DHCX 6-DoF IMU Breakout — I2C/SPI. */
export const AdafruitISM330DHCX6DoFIMUBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const AdafruitISM330DHCX6DoFIMUBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const AdafruitISM330DHCX6DoFIMUBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitISM330DHCX6DoFIMUBreakoutProps = ChipProps<typeof AdafruitISM330DHCX6DoFIMUBreakout_PIN_LABELS>
export const AdafruitISM330DHCX6DoFIMUBreakout = (props: AdafruitISM330DHCX6DoFIMUBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit ISM330DHCX 6-DoF IMU Breakout"
    mfn="Adafruit"
    footprint={AdafruitISM330DHCX6DoFIMUBreakout_FOOTPRINT}
    pinLabels={AdafruitISM330DHCX6DoFIMUBreakout_PIN_LABELS}
    pinAttributes={AdafruitISM330DHCX6DoFIMUBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun ICM-20948 9-DoF IMU Breakout — I2C/SPI. */
export const SparkFunICM209489DoFIMUBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const SparkFunICM209489DoFIMUBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const SparkFunICM209489DoFIMUBreakout_FOOTPRINT = FOOTPRINT_F8
export type SparkFunICM209489DoFIMUBreakoutProps = ChipProps<typeof SparkFunICM209489DoFIMUBreakout_PIN_LABELS>
export const SparkFunICM209489DoFIMUBreakout = (props: SparkFunICM209489DoFIMUBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun ICM-20948 9-DoF IMU Breakout"
    mfn="SparkFun"
    footprint={SparkFunICM209489DoFIMUBreakout_FOOTPRINT}
    pinLabels={SparkFunICM209489DoFIMUBreakout_PIN_LABELS}
    pinAttributes={SparkFunICM209489DoFIMUBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun ICM-42688-P 6-DoF IMU Breakout — I2C/SPI. */
export const SparkFunICM42688P6DoFIMUBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const SparkFunICM42688P6DoFIMUBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const SparkFunICM42688P6DoFIMUBreakout_FOOTPRINT = FOOTPRINT_F8
export type SparkFunICM42688P6DoFIMUBreakoutProps = ChipProps<typeof SparkFunICM42688P6DoFIMUBreakout_PIN_LABELS>
export const SparkFunICM42688P6DoFIMUBreakout = (props: SparkFunICM42688P6DoFIMUBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun ICM-42688-P 6-DoF IMU Breakout"
    mfn="SparkFun"
    footprint={SparkFunICM42688P6DoFIMUBreakout_FOOTPRINT}
    pinLabels={SparkFunICM42688P6DoFIMUBreakout_PIN_LABELS}
    pinAttributes={SparkFunICM42688P6DoFIMUBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic MPU-6050 GY-521 IMU Module — I2C. */
export const GenericMPU6050GY521IMUModule_PIN_LABELS = I2C4_PIN_LABELS
export const GenericMPU6050GY521IMUModule_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const GenericMPU6050GY521IMUModule_FOOTPRINT = FOOTPRINT_F4
export type GenericMPU6050GY521IMUModuleProps = ChipProps<typeof GenericMPU6050GY521IMUModule_PIN_LABELS>
export const GenericMPU6050GY521IMUModule = (props: GenericMPU6050GY521IMUModuleProps) => (
  <chip
    {...props}
    displayName="Generic MPU-6050 GY-521 IMU Module"
    mfn="Generic"
    footprint={GenericMPU6050GY521IMUModule_FOOTPRINT}
    pinLabels={GenericMPU6050GY521IMUModule_PIN_LABELS}
    pinAttributes={GenericMPU6050GY521IMUModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic MPU-9250 GY-91 9-DoF Module — I2C/SPI. */
export const GenericMPU9250GY919DoFModule_PIN_LABELS = I2CSPI8_PIN_LABELS
export const GenericMPU9250GY919DoFModule_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const GenericMPU9250GY919DoFModule_FOOTPRINT = FOOTPRINT_F8
export type GenericMPU9250GY919DoFModuleProps = ChipProps<typeof GenericMPU9250GY919DoFModule_PIN_LABELS>
export const GenericMPU9250GY919DoFModule = (props: GenericMPU9250GY919DoFModuleProps) => (
  <chip
    {...props}
    displayName="Generic MPU-9250 GY-91 9-DoF Module"
    mfn="Generic"
    footprint={GenericMPU9250GY919DoFModule_FOOTPRINT}
    pinLabels={GenericMPU9250GY919DoFModule_PIN_LABELS}
    pinAttributes={GenericMPU9250GY919DoFModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit BNO055 Absolute Orientation Breakout — I2C/UART. */
export const AdafruitBNO055AbsoluteOrientationBreakout_PIN_LABELS = I2CUART6_PIN_LABELS
export const AdafruitBNO055AbsoluteOrientationBreakout_PIN_ATTRIBUTES = I2CUART6_PIN_ATTRIBUTES
export const AdafruitBNO055AbsoluteOrientationBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitBNO055AbsoluteOrientationBreakoutProps = ChipProps<typeof AdafruitBNO055AbsoluteOrientationBreakout_PIN_LABELS>
export const AdafruitBNO055AbsoluteOrientationBreakout = (props: AdafruitBNO055AbsoluteOrientationBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit BNO055 Absolute Orientation Breakout"
    mfn="Adafruit"
    footprint={AdafruitBNO055AbsoluteOrientationBreakout_FOOTPRINT}
    pinLabels={AdafruitBNO055AbsoluteOrientationBreakout_PIN_LABELS}
    pinAttributes={AdafruitBNO055AbsoluteOrientationBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit BNO085 9-DoF Orientation Breakout — I2C/SPI/UART. */
export const AdafruitBNO0859DoFOrientationBreakout_PIN_LABELS = I2CSPIUART10_PIN_LABELS
export const AdafruitBNO0859DoFOrientationBreakout_PIN_ATTRIBUTES = I2CSPIUART10_PIN_ATTRIBUTES
export const AdafruitBNO0859DoFOrientationBreakout_FOOTPRINT = FOOTPRINT_F10
export type AdafruitBNO0859DoFOrientationBreakoutProps = ChipProps<typeof AdafruitBNO0859DoFOrientationBreakout_PIN_LABELS>
export const AdafruitBNO0859DoFOrientationBreakout = (props: AdafruitBNO0859DoFOrientationBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit BNO085 9-DoF Orientation Breakout"
    mfn="Adafruit"
    footprint={AdafruitBNO0859DoFOrientationBreakout_FOOTPRINT}
    pinLabels={AdafruitBNO0859DoFOrientationBreakout_PIN_LABELS}
    pinAttributes={AdafruitBNO0859DoFOrientationBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun BNO086 9-DoF IMU Breakout — I2C/SPI/UART. */
export const SparkFunBNO0869DoFIMUBreakout_PIN_LABELS = I2CSPIUART10_PIN_LABELS
export const SparkFunBNO0869DoFIMUBreakout_PIN_ATTRIBUTES = I2CSPIUART10_PIN_ATTRIBUTES
export const SparkFunBNO0869DoFIMUBreakout_FOOTPRINT = FOOTPRINT_F10
export type SparkFunBNO0869DoFIMUBreakoutProps = ChipProps<typeof SparkFunBNO0869DoFIMUBreakout_PIN_LABELS>
export const SparkFunBNO0869DoFIMUBreakout = (props: SparkFunBNO0869DoFIMUBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun BNO086 9-DoF IMU Breakout"
    mfn="SparkFun"
    footprint={SparkFunBNO0869DoFIMUBreakout_FOOTPRINT}
    pinLabels={SparkFunBNO0869DoFIMUBreakout_PIN_LABELS}
    pinAttributes={SparkFunBNO0869DoFIMUBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit NXP FXOS8700 + FXAS21002 9-DoF Breakout — I2C. */
export const AdafruitNXPFXOS8700FXAS210029DoFBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitNXPFXOS8700FXAS210029DoFBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitNXPFXOS8700FXAS210029DoFBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitNXPFXOS8700FXAS210029DoFBreakoutProps = ChipProps<typeof AdafruitNXPFXOS8700FXAS210029DoFBreakout_PIN_LABELS>
export const AdafruitNXPFXOS8700FXAS210029DoFBreakout = (props: AdafruitNXPFXOS8700FXAS210029DoFBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit NXP FXOS8700 + FXAS21002 9-DoF Breakout"
    mfn="Adafruit"
    footprint={AdafruitNXPFXOS8700FXAS210029DoFBreakout_FOOTPRINT}
    pinLabels={AdafruitNXPFXOS8700FXAS210029DoFBreakout_PIN_LABELS}
    pinAttributes={AdafruitNXPFXOS8700FXAS210029DoFBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit LSM303AGR Accelerometer/Magnetometer Breakout — I2C/SPI. */
export const AdafruitLSM303AGRAccelerometerMagnetometerBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const AdafruitLSM303AGRAccelerometerMagnetometerBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const AdafruitLSM303AGRAccelerometerMagnetometerBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitLSM303AGRAccelerometerMagnetometerBreakoutProps = ChipProps<typeof AdafruitLSM303AGRAccelerometerMagnetometerBreakout_PIN_LABELS>
export const AdafruitLSM303AGRAccelerometerMagnetometerBreakout = (props: AdafruitLSM303AGRAccelerometerMagnetometerBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit LSM303AGR Accelerometer/Magnetometer Breakout"
    mfn="Adafruit"
    footprint={AdafruitLSM303AGRAccelerometerMagnetometerBreakout_FOOTPRINT}
    pinLabels={AdafruitLSM303AGRAccelerometerMagnetometerBreakout_PIN_LABELS}
    pinAttributes={AdafruitLSM303AGRAccelerometerMagnetometerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu LIS3MDL 3-Axis Magnetometer Carrier — I2C/SPI. */
export const PololuLIS3MDL3AxisMagnetometerCarrier_PIN_LABELS = I2CSPI8_PIN_LABELS
export const PololuLIS3MDL3AxisMagnetometerCarrier_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const PololuLIS3MDL3AxisMagnetometerCarrier_FOOTPRINT = FOOTPRINT_F8
export type PololuLIS3MDL3AxisMagnetometerCarrierProps = ChipProps<typeof PololuLIS3MDL3AxisMagnetometerCarrier_PIN_LABELS>
export const PololuLIS3MDL3AxisMagnetometerCarrier = (props: PololuLIS3MDL3AxisMagnetometerCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu LIS3MDL 3-Axis Magnetometer Carrier"
    mfn="Pololu"
    footprint={PololuLIS3MDL3AxisMagnetometerCarrier_FOOTPRINT}
    pinLabels={PololuLIS3MDL3AxisMagnetometerCarrier_PIN_LABELS}
    pinAttributes={PololuLIS3MDL3AxisMagnetometerCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MMC5603 Triple-Axis Magnetometer Breakout — I2C. */
export const AdafruitMMC5603TripleAxisMagnetometerBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitMMC5603TripleAxisMagnetometerBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitMMC5603TripleAxisMagnetometerBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitMMC5603TripleAxisMagnetometerBreakoutProps = ChipProps<typeof AdafruitMMC5603TripleAxisMagnetometerBreakout_PIN_LABELS>
export const AdafruitMMC5603TripleAxisMagnetometerBreakout = (props: AdafruitMMC5603TripleAxisMagnetometerBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MMC5603 Triple-Axis Magnetometer Breakout"
    mfn="Adafruit"
    footprint={AdafruitMMC5603TripleAxisMagnetometerBreakout_FOOTPRINT}
    pinLabels={AdafruitMMC5603TripleAxisMagnetometerBreakout_PIN_LABELS}
    pinAttributes={AdafruitMMC5603TripleAxisMagnetometerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun MLX90393 Triple-Axis Magnetometer Breakout — I2C/SPI. */
export const SparkFunMLX90393TripleAxisMagnetometerBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const SparkFunMLX90393TripleAxisMagnetometerBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const SparkFunMLX90393TripleAxisMagnetometerBreakout_FOOTPRINT = FOOTPRINT_F8
export type SparkFunMLX90393TripleAxisMagnetometerBreakoutProps = ChipProps<typeof SparkFunMLX90393TripleAxisMagnetometerBreakout_PIN_LABELS>
export const SparkFunMLX90393TripleAxisMagnetometerBreakout = (props: SparkFunMLX90393TripleAxisMagnetometerBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun MLX90393 Triple-Axis Magnetometer Breakout"
    mfn="SparkFun"
    footprint={SparkFunMLX90393TripleAxisMagnetometerBreakout_FOOTPRINT}
    pinLabels={SparkFunMLX90393TripleAxisMagnetometerBreakout_PIN_LABELS}
    pinAttributes={SparkFunMLX90393TripleAxisMagnetometerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit TLV493D Triple-Axis Magnetometer Breakout — I2C. */
export const AdafruitTLV493DTripleAxisMagnetometerBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitTLV493DTripleAxisMagnetometerBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitTLV493DTripleAxisMagnetometerBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitTLV493DTripleAxisMagnetometerBreakoutProps = ChipProps<typeof AdafruitTLV493DTripleAxisMagnetometerBreakout_PIN_LABELS>
export const AdafruitTLV493DTripleAxisMagnetometerBreakout = (props: AdafruitTLV493DTripleAxisMagnetometerBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit TLV493D Triple-Axis Magnetometer Breakout"
    mfn="Adafruit"
    footprint={AdafruitTLV493DTripleAxisMagnetometerBreakout_FOOTPRINT}
    pinLabels={AdafruitTLV493DTripleAxisMagnetometerBreakout_PIN_LABELS}
    pinAttributes={AdafruitTLV493DTripleAxisMagnetometerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit TMAG5273 Triple-Axis Hall Sensor Breakout — I2C. */
export const AdafruitTMAG5273TripleAxisHallSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitTMAG5273TripleAxisHallSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitTMAG5273TripleAxisHallSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitTMAG5273TripleAxisHallSensorBreakoutProps = ChipProps<typeof AdafruitTMAG5273TripleAxisHallSensorBreakout_PIN_LABELS>
export const AdafruitTMAG5273TripleAxisHallSensorBreakout = (props: AdafruitTMAG5273TripleAxisHallSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit TMAG5273 Triple-Axis Hall Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitTMAG5273TripleAxisHallSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitTMAG5273TripleAxisHallSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitTMAG5273TripleAxisHallSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic QMC5883L GY-271 Compass Module — I2C. */
export const GenericQMC5883LGY271CompassModule_PIN_LABELS = I2C4_PIN_LABELS
export const GenericQMC5883LGY271CompassModule_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const GenericQMC5883LGY271CompassModule_FOOTPRINT = FOOTPRINT_F4
export type GenericQMC5883LGY271CompassModuleProps = ChipProps<typeof GenericQMC5883LGY271CompassModule_PIN_LABELS>
export const GenericQMC5883LGY271CompassModule = (props: GenericQMC5883LGY271CompassModuleProps) => (
  <chip
    {...props}
    displayName="Generic QMC5883L GY-271 Compass Module"
    mfn="Generic"
    footprint={GenericQMC5883LGY271CompassModule_FOOTPRINT}
    pinLabels={GenericQMC5883LGY271CompassModule_PIN_LABELS}
    pinAttributes={GenericQMC5883LGY271CompassModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit AS5600 Magnetic Angle Sensor Breakout — I2C/analog. */
export const AdafruitAS5600MagneticAngleSensorBreakout_PIN_LABELS = I2C5_PIN_LABELS
export const AdafruitAS5600MagneticAngleSensorBreakout_PIN_ATTRIBUTES = I2C5_PIN_ATTRIBUTES
export const AdafruitAS5600MagneticAngleSensorBreakout_FOOTPRINT = FOOTPRINT_F5
export type AdafruitAS5600MagneticAngleSensorBreakoutProps = ChipProps<typeof AdafruitAS5600MagneticAngleSensorBreakout_PIN_LABELS>
export const AdafruitAS5600MagneticAngleSensorBreakout = (props: AdafruitAS5600MagneticAngleSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit AS5600 Magnetic Angle Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitAS5600MagneticAngleSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitAS5600MagneticAngleSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitAS5600MagneticAngleSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic AS5048A Magnetic Encoder Breakout — SPI/PWM. */
export const GenericAS5048AMagneticEncoderBreakout_PIN_LABELS = ENCODER6_PIN_LABELS
export const GenericAS5048AMagneticEncoderBreakout_PIN_ATTRIBUTES = ENCODER6_PIN_ATTRIBUTES
export const GenericAS5048AMagneticEncoderBreakout_FOOTPRINT = FOOTPRINT_F6
export type GenericAS5048AMagneticEncoderBreakoutProps = ChipProps<typeof GenericAS5048AMagneticEncoderBreakout_PIN_LABELS>
export const GenericAS5048AMagneticEncoderBreakout = (props: GenericAS5048AMagneticEncoderBreakoutProps) => (
  <chip
    {...props}
    displayName="Generic AS5048A Magnetic Encoder Breakout"
    mfn="Generic"
    footprint={GenericAS5048AMagneticEncoderBreakout_FOOTPRINT}
    pinLabels={GenericAS5048AMagneticEncoderBreakout_PIN_LABELS}
    pinAttributes={GenericAS5048AMagneticEncoderBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic AS5047P Magnetic Encoder Breakout — SPI/ABI. */
export const GenericAS5047PMagneticEncoderBreakout_PIN_LABELS = ENCODER6_PIN_LABELS
export const GenericAS5047PMagneticEncoderBreakout_PIN_ATTRIBUTES = ENCODER6_PIN_ATTRIBUTES
export const GenericAS5047PMagneticEncoderBreakout_FOOTPRINT = FOOTPRINT_F6
export type GenericAS5047PMagneticEncoderBreakoutProps = ChipProps<typeof GenericAS5047PMagneticEncoderBreakout_PIN_LABELS>
export const GenericAS5047PMagneticEncoderBreakout = (props: GenericAS5047PMagneticEncoderBreakoutProps) => (
  <chip
    {...props}
    displayName="Generic AS5047P Magnetic Encoder Breakout"
    mfn="Generic"
    footprint={GenericAS5047PMagneticEncoderBreakout_FOOTPRINT}
    pinLabels={GenericAS5047PMagneticEncoderBreakout_PIN_LABELS}
    pinAttributes={GenericAS5047PMagneticEncoderBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Infineon TLE5012B Magnetic Angle Sensor Breakout — SPI/PWM. */
export const InfineonTLE5012BMagneticAngleSensorBreakout_PIN_LABELS = SPI6_PIN_LABELS
export const InfineonTLE5012BMagneticAngleSensorBreakout_PIN_ATTRIBUTES = SPI6_PIN_ATTRIBUTES
export const InfineonTLE5012BMagneticAngleSensorBreakout_FOOTPRINT = FOOTPRINT_F6
export type InfineonTLE5012BMagneticAngleSensorBreakoutProps = ChipProps<typeof InfineonTLE5012BMagneticAngleSensorBreakout_PIN_LABELS>
export const InfineonTLE5012BMagneticAngleSensorBreakout = (props: InfineonTLE5012BMagneticAngleSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Infineon TLE5012B Magnetic Angle Sensor Breakout"
    mfn="Infineon"
    footprint={InfineonTLE5012BMagneticAngleSensorBreakout_FOOTPRINT}
    pinLabels={InfineonTLE5012BMagneticAngleSensorBreakout_PIN_LABELS}
    pinAttributes={InfineonTLE5012BMagneticAngleSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic MT6701 Magnetic Encoder Module — SSI/ABI/UVW. */
export const GenericMT6701MagneticEncoderModule_PIN_LABELS = ENCODER6_PIN_LABELS
export const GenericMT6701MagneticEncoderModule_PIN_ATTRIBUTES = ENCODER6_PIN_ATTRIBUTES
export const GenericMT6701MagneticEncoderModule_FOOTPRINT = FOOTPRINT_F6
export type GenericMT6701MagneticEncoderModuleProps = ChipProps<typeof GenericMT6701MagneticEncoderModule_PIN_LABELS>
export const GenericMT6701MagneticEncoderModule = (props: GenericMT6701MagneticEncoderModuleProps) => (
  <chip
    {...props}
    displayName="Generic MT6701 Magnetic Encoder Module"
    mfn="Generic"
    footprint={GenericMT6701MagneticEncoderModule_FOOTPRINT}
    pinLabels={GenericMT6701MagneticEncoderModule_PIN_LABELS}
    pinAttributes={GenericMT6701MagneticEncoderModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit LSM6DS3TR-C + LIS3MDL 9-DoF Breakout — I2C/SPI. */
export const AdafruitLSM6DS3TRCLIS3MDL9DoFBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const AdafruitLSM6DS3TRCLIS3MDL9DoFBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const AdafruitLSM6DS3TRCLIS3MDL9DoFBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitLSM6DS3TRCLIS3MDL9DoFBreakoutProps = ChipProps<typeof AdafruitLSM6DS3TRCLIS3MDL9DoFBreakout_PIN_LABELS>
export const AdafruitLSM6DS3TRCLIS3MDL9DoFBreakout = (props: AdafruitLSM6DS3TRCLIS3MDL9DoFBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit LSM6DS3TR-C + LIS3MDL 9-DoF Breakout"
    mfn="Adafruit"
    footprint={AdafruitLSM6DS3TRCLIS3MDL9DoFBreakout_FOOTPRINT}
    pinLabels={AdafruitLSM6DS3TRCLIS3MDL9DoFBreakout_PIN_LABELS}
    pinAttributes={AdafruitLSM6DS3TRCLIS3MDL9DoFBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun Optical Tracking Odometry Sensor Breakout — SPI/Qwiic. */
export const SparkFunOpticalTrackingOdometrySensorBreakout_PIN_LABELS = SPI6_PIN_LABELS
export const SparkFunOpticalTrackingOdometrySensorBreakout_PIN_ATTRIBUTES = SPI6_PIN_ATTRIBUTES
export const SparkFunOpticalTrackingOdometrySensorBreakout_FOOTPRINT = FOOTPRINT_F6
export type SparkFunOpticalTrackingOdometrySensorBreakoutProps = ChipProps<typeof SparkFunOpticalTrackingOdometrySensorBreakout_PIN_LABELS>
export const SparkFunOpticalTrackingOdometrySensorBreakout = (props: SparkFunOpticalTrackingOdometrySensorBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun Optical Tracking Odometry Sensor Breakout"
    mfn="SparkFun"
    footprint={SparkFunOpticalTrackingOdometrySensorBreakout_FOOTPRINT}
    pinLabels={SparkFunOpticalTrackingOdometrySensorBreakout_PIN_LABELS}
    pinAttributes={SparkFunOpticalTrackingOdometrySensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu VL53L0X Time-of-Flight Distance Sensor Carrier — I2C. */
export const PololuVL53L0XTimeOfFlightDistanceSensorCarrier_PIN_LABELS = I2C4_PIN_LABELS
export const PololuVL53L0XTimeOfFlightDistanceSensorCarrier_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const PololuVL53L0XTimeOfFlightDistanceSensorCarrier_FOOTPRINT = FOOTPRINT_F4
export type PololuVL53L0XTimeOfFlightDistanceSensorCarrierProps = ChipProps<typeof PololuVL53L0XTimeOfFlightDistanceSensorCarrier_PIN_LABELS>
export const PololuVL53L0XTimeOfFlightDistanceSensorCarrier = (props: PololuVL53L0XTimeOfFlightDistanceSensorCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu VL53L0X Time-of-Flight Distance Sensor Carrier"
    mfn="Pololu"
    footprint={PololuVL53L0XTimeOfFlightDistanceSensorCarrier_FOOTPRINT}
    pinLabels={PololuVL53L0XTimeOfFlightDistanceSensorCarrier_PIN_LABELS}
    pinAttributes={PololuVL53L0XTimeOfFlightDistanceSensorCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu VL53L1X Time-of-Flight Distance Sensor Carrier — I2C. */
export const PololuVL53L1XTimeOfFlightDistanceSensorCarrier_PIN_LABELS = I2C4_PIN_LABELS
export const PololuVL53L1XTimeOfFlightDistanceSensorCarrier_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const PololuVL53L1XTimeOfFlightDistanceSensorCarrier_FOOTPRINT = FOOTPRINT_F4
export type PololuVL53L1XTimeOfFlightDistanceSensorCarrierProps = ChipProps<typeof PololuVL53L1XTimeOfFlightDistanceSensorCarrier_PIN_LABELS>
export const PololuVL53L1XTimeOfFlightDistanceSensorCarrier = (props: PololuVL53L1XTimeOfFlightDistanceSensorCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu VL53L1X Time-of-Flight Distance Sensor Carrier"
    mfn="Pololu"
    footprint={PololuVL53L1XTimeOfFlightDistanceSensorCarrier_FOOTPRINT}
    pinLabels={PololuVL53L1XTimeOfFlightDistanceSensorCarrier_PIN_LABELS}
    pinAttributes={PololuVL53L1XTimeOfFlightDistanceSensorCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu VL53L4CD Time-of-Flight Distance Sensor Carrier — I2C. */
export const PololuVL53L4CDTimeOfFlightDistanceSensorCarrier_PIN_LABELS = I2C4_PIN_LABELS
export const PololuVL53L4CDTimeOfFlightDistanceSensorCarrier_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const PololuVL53L4CDTimeOfFlightDistanceSensorCarrier_FOOTPRINT = FOOTPRINT_F4
export type PololuVL53L4CDTimeOfFlightDistanceSensorCarrierProps = ChipProps<typeof PololuVL53L4CDTimeOfFlightDistanceSensorCarrier_PIN_LABELS>
export const PololuVL53L4CDTimeOfFlightDistanceSensorCarrier = (props: PololuVL53L4CDTimeOfFlightDistanceSensorCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu VL53L4CD Time-of-Flight Distance Sensor Carrier"
    mfn="Pololu"
    footprint={PololuVL53L4CDTimeOfFlightDistanceSensorCarrier_FOOTPRINT}
    pinLabels={PololuVL53L4CDTimeOfFlightDistanceSensorCarrier_PIN_LABELS}
    pinAttributes={PololuVL53L4CDTimeOfFlightDistanceSensorCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu VL53L4CX Time-of-Flight Distance Sensor Carrier — I2C. */
export const PololuVL53L4CXTimeOfFlightDistanceSensorCarrier_PIN_LABELS = I2C4_PIN_LABELS
export const PololuVL53L4CXTimeOfFlightDistanceSensorCarrier_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const PololuVL53L4CXTimeOfFlightDistanceSensorCarrier_FOOTPRINT = FOOTPRINT_F4
export type PololuVL53L4CXTimeOfFlightDistanceSensorCarrierProps = ChipProps<typeof PololuVL53L4CXTimeOfFlightDistanceSensorCarrier_PIN_LABELS>
export const PololuVL53L4CXTimeOfFlightDistanceSensorCarrier = (props: PololuVL53L4CXTimeOfFlightDistanceSensorCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu VL53L4CX Time-of-Flight Distance Sensor Carrier"
    mfn="Pololu"
    footprint={PololuVL53L4CXTimeOfFlightDistanceSensorCarrier_FOOTPRINT}
    pinLabels={PololuVL53L4CXTimeOfFlightDistanceSensorCarrier_PIN_LABELS}
    pinAttributes={PololuVL53L4CXTimeOfFlightDistanceSensorCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit VL53L5CX 8x8 Time-of-Flight Sensor Breakout — I2C. */
export const AdafruitVL53L5CX8x8TimeOfFlightSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitVL53L5CX8x8TimeOfFlightSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitVL53L5CX8x8TimeOfFlightSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitVL53L5CX8x8TimeOfFlightSensorBreakoutProps = ChipProps<typeof AdafruitVL53L5CX8x8TimeOfFlightSensorBreakout_PIN_LABELS>
export const AdafruitVL53L5CX8x8TimeOfFlightSensorBreakout = (props: AdafruitVL53L5CX8x8TimeOfFlightSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit VL53L5CX 8x8 Time-of-Flight Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitVL53L5CX8x8TimeOfFlightSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitVL53L5CX8x8TimeOfFlightSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitVL53L5CX8x8TimeOfFlightSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit VL53L7CX 8x8 Time-of-Flight Sensor Breakout — I2C. */
export const AdafruitVL53L7CX8x8TimeOfFlightSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitVL53L7CX8x8TimeOfFlightSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitVL53L7CX8x8TimeOfFlightSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitVL53L7CX8x8TimeOfFlightSensorBreakoutProps = ChipProps<typeof AdafruitVL53L7CX8x8TimeOfFlightSensorBreakout_PIN_LABELS>
export const AdafruitVL53L7CX8x8TimeOfFlightSensorBreakout = (props: AdafruitVL53L7CX8x8TimeOfFlightSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit VL53L7CX 8x8 Time-of-Flight Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitVL53L7CX8x8TimeOfFlightSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitVL53L7CX8x8TimeOfFlightSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitVL53L7CX8x8TimeOfFlightSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit VL6180X Time-of-Flight Distance Sensor Breakout — I2C. */
export const AdafruitVL6180XTimeOfFlightDistanceSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitVL6180XTimeOfFlightDistanceSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitVL6180XTimeOfFlightDistanceSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitVL6180XTimeOfFlightDistanceSensorBreakoutProps = ChipProps<typeof AdafruitVL6180XTimeOfFlightDistanceSensorBreakout_PIN_LABELS>
export const AdafruitVL6180XTimeOfFlightDistanceSensorBreakout = (props: AdafruitVL6180XTimeOfFlightDistanceSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit VL6180X Time-of-Flight Distance Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitVL6180XTimeOfFlightDistanceSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitVL6180XTimeOfFlightDistanceSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitVL6180XTimeOfFlightDistanceSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit TMF8821 Multi-Zone Time-of-Flight Breakout — I2C. */
export const AdafruitTMF8821MultiZoneTimeOfFlightBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitTMF8821MultiZoneTimeOfFlightBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitTMF8821MultiZoneTimeOfFlightBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitTMF8821MultiZoneTimeOfFlightBreakoutProps = ChipProps<typeof AdafruitTMF8821MultiZoneTimeOfFlightBreakout_PIN_LABELS>
export const AdafruitTMF8821MultiZoneTimeOfFlightBreakout = (props: AdafruitTMF8821MultiZoneTimeOfFlightBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit TMF8821 Multi-Zone Time-of-Flight Breakout"
    mfn="Adafruit"
    footprint={AdafruitTMF8821MultiZoneTimeOfFlightBreakout_FOOTPRINT}
    pinLabels={AdafruitTMF8821MultiZoneTimeOfFlightBreakout_PIN_LABELS}
    pinAttributes={AdafruitTMF8821MultiZoneTimeOfFlightBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun TMF8801 Time-of-Flight Sensor Breakout — I2C. */
export const SparkFunTMF8801TimeOfFlightSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const SparkFunTMF8801TimeOfFlightSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const SparkFunTMF8801TimeOfFlightSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type SparkFunTMF8801TimeOfFlightSensorBreakoutProps = ChipProps<typeof SparkFunTMF8801TimeOfFlightSensorBreakout_PIN_LABELS>
export const SparkFunTMF8801TimeOfFlightSensorBreakout = (props: SparkFunTMF8801TimeOfFlightSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun TMF8801 Time-of-Flight Sensor Breakout"
    mfn="SparkFun"
    footprint={SparkFunTMF8801TimeOfFlightSensorBreakout_FOOTPRINT}
    pinLabels={SparkFunTMF8801TimeOfFlightSensorBreakout_PIN_LABELS}
    pinAttributes={SparkFunTMF8801TimeOfFlightSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic HC-SR04 Ultrasonic Distance Module — trigger/echo. */
export const GenericHCSR04UltrasonicDistanceModule_PIN_LABELS = TRIGGER4_PIN_LABELS
export const GenericHCSR04UltrasonicDistanceModule_PIN_ATTRIBUTES = TRIGGER4_PIN_ATTRIBUTES
export const GenericHCSR04UltrasonicDistanceModule_FOOTPRINT = FOOTPRINT_F4
export type GenericHCSR04UltrasonicDistanceModuleProps = ChipProps<typeof GenericHCSR04UltrasonicDistanceModule_PIN_LABELS>
export const GenericHCSR04UltrasonicDistanceModule = (props: GenericHCSR04UltrasonicDistanceModuleProps) => (
  <chip
    {...props}
    displayName="Generic HC-SR04 Ultrasonic Distance Module"
    mfn="Generic"
    footprint={GenericHCSR04UltrasonicDistanceModule_FOOTPRINT}
    pinLabels={GenericHCSR04UltrasonicDistanceModule_PIN_LABELS}
    pinAttributes={GenericHCSR04UltrasonicDistanceModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit RCWL-1601 HC-SR04-Compatible Ultrasonic Module — trigger/echo. */
export const AdafruitRCWL1601HCSR04CompatibleUltrasonicModule_PIN_LABELS = TRIGGER4_PIN_LABELS
export const AdafruitRCWL1601HCSR04CompatibleUltrasonicModule_PIN_ATTRIBUTES = TRIGGER4_PIN_ATTRIBUTES
export const AdafruitRCWL1601HCSR04CompatibleUltrasonicModule_FOOTPRINT = FOOTPRINT_F4
export type AdafruitRCWL1601HCSR04CompatibleUltrasonicModuleProps = ChipProps<typeof AdafruitRCWL1601HCSR04CompatibleUltrasonicModule_PIN_LABELS>
export const AdafruitRCWL1601HCSR04CompatibleUltrasonicModule = (props: AdafruitRCWL1601HCSR04CompatibleUltrasonicModuleProps) => (
  <chip
    {...props}
    displayName="Adafruit RCWL-1601 HC-SR04-Compatible Ultrasonic Module"
    mfn="Adafruit"
    footprint={AdafruitRCWL1601HCSR04CompatibleUltrasonicModule_FOOTPRINT}
    pinLabels={AdafruitRCWL1601HCSR04CompatibleUltrasonicModule_PIN_LABELS}
    pinAttributes={AdafruitRCWL1601HCSR04CompatibleUltrasonicModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic US-100 Ultrasonic Distance Module — trigger/echo/UART. */
export const GenericUS100UltrasonicDistanceModule_PIN_LABELS = TRIGGER4_PIN_LABELS
export const GenericUS100UltrasonicDistanceModule_PIN_ATTRIBUTES = TRIGGER4_PIN_ATTRIBUTES
export const GenericUS100UltrasonicDistanceModule_FOOTPRINT = FOOTPRINT_F4
export type GenericUS100UltrasonicDistanceModuleProps = ChipProps<typeof GenericUS100UltrasonicDistanceModule_PIN_LABELS>
export const GenericUS100UltrasonicDistanceModule = (props: GenericUS100UltrasonicDistanceModuleProps) => (
  <chip
    {...props}
    displayName="Generic US-100 Ultrasonic Distance Module"
    mfn="Generic"
    footprint={GenericUS100UltrasonicDistanceModule_FOOTPRINT}
    pinLabels={GenericUS100UltrasonicDistanceModule_PIN_LABELS}
    pinAttributes={GenericUS100UltrasonicDistanceModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic JSN-SR04T Waterproof Ultrasonic Module — trigger/echo. */
export const GenericJSNSR04TWaterproofUltrasonicModule_PIN_LABELS = TRIGGER4_PIN_LABELS
export const GenericJSNSR04TWaterproofUltrasonicModule_PIN_ATTRIBUTES = TRIGGER4_PIN_ATTRIBUTES
export const GenericJSNSR04TWaterproofUltrasonicModule_FOOTPRINT = FOOTPRINT_F4
export type GenericJSNSR04TWaterproofUltrasonicModuleProps = ChipProps<typeof GenericJSNSR04TWaterproofUltrasonicModule_PIN_LABELS>
export const GenericJSNSR04TWaterproofUltrasonicModule = (props: GenericJSNSR04TWaterproofUltrasonicModuleProps) => (
  <chip
    {...props}
    displayName="Generic JSN-SR04T Waterproof Ultrasonic Module"
    mfn="Generic"
    footprint={GenericJSNSR04TWaterproofUltrasonicModule_FOOTPRINT}
    pinLabels={GenericJSNSR04TWaterproofUltrasonicModule_PIN_LABELS}
    pinAttributes={GenericJSNSR04TWaterproofUltrasonicModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Sharp GP2Y0A21YK0F IR Distance Sensor Adapter Breakout — analog. */
export const SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakout_PIN_LABELS = ANALOG3_PIN_LABELS
export const SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakout_PIN_ATTRIBUTES = ANALOG3_PIN_ATTRIBUTES
export const SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakout_FOOTPRINT = FOOTPRINT_F3
export type SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakoutProps = ChipProps<typeof SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakout_PIN_LABELS>
export const SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakout = (props: SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakoutProps) => (
  <chip
    {...props}
    displayName="Sharp GP2Y0A21YK0F IR Distance Sensor Adapter Breakout"
    mfn="Generic"
    footprint={SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakout_FOOTPRINT}
    pinLabels={SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakout_PIN_LABELS}
    pinAttributes={SharpGP2Y0A21YK0FIRDistanceSensorAdapterBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic HC-SR501 PIR Motion Sensor Module — digital. */
export const GenericHCSR501PIRMotionSensorModule_PIN_LABELS = DIGITAL3_PIN_LABELS
export const GenericHCSR501PIRMotionSensorModule_PIN_ATTRIBUTES = DIGITAL3_PIN_ATTRIBUTES
export const GenericHCSR501PIRMotionSensorModule_FOOTPRINT = FOOTPRINT_F3
export type GenericHCSR501PIRMotionSensorModuleProps = ChipProps<typeof GenericHCSR501PIRMotionSensorModule_PIN_LABELS>
export const GenericHCSR501PIRMotionSensorModule = (props: GenericHCSR501PIRMotionSensorModuleProps) => (
  <chip
    {...props}
    displayName="Generic HC-SR501 PIR Motion Sensor Module"
    mfn="Generic"
    footprint={GenericHCSR501PIRMotionSensorModule_FOOTPRINT}
    pinLabels={GenericHCSR501PIRMotionSensorModule_PIN_LABELS}
    pinAttributes={GenericHCSR501PIRMotionSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic AM312 Mini PIR Motion Sensor Module — digital. */
export const GenericAM312MiniPIRMotionSensorModule_PIN_LABELS = DIGITAL3_PIN_LABELS
export const GenericAM312MiniPIRMotionSensorModule_PIN_ATTRIBUTES = DIGITAL3_PIN_ATTRIBUTES
export const GenericAM312MiniPIRMotionSensorModule_FOOTPRINT = FOOTPRINT_F3
export type GenericAM312MiniPIRMotionSensorModuleProps = ChipProps<typeof GenericAM312MiniPIRMotionSensorModule_PIN_LABELS>
export const GenericAM312MiniPIRMotionSensorModule = (props: GenericAM312MiniPIRMotionSensorModuleProps) => (
  <chip
    {...props}
    displayName="Generic AM312 Mini PIR Motion Sensor Module"
    mfn="Generic"
    footprint={GenericAM312MiniPIRMotionSensorModule_FOOTPRINT}
    pinLabels={GenericAM312MiniPIRMotionSensorModule_PIN_LABELS}
    pinAttributes={GenericAM312MiniPIRMotionSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun Panasonic EKMC PIR Breakout — digital. */
export const SparkFunPanasonicEKMCPIRBreakout_PIN_LABELS = DIGITAL3_PIN_LABELS
export const SparkFunPanasonicEKMCPIRBreakout_PIN_ATTRIBUTES = DIGITAL3_PIN_ATTRIBUTES
export const SparkFunPanasonicEKMCPIRBreakout_FOOTPRINT = FOOTPRINT_F3
export type SparkFunPanasonicEKMCPIRBreakoutProps = ChipProps<typeof SparkFunPanasonicEKMCPIRBreakout_PIN_LABELS>
export const SparkFunPanasonicEKMCPIRBreakout = (props: SparkFunPanasonicEKMCPIRBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun Panasonic EKMC PIR Breakout"
    mfn="SparkFun"
    footprint={SparkFunPanasonicEKMCPIRBreakout_FOOTPRINT}
    pinLabels={SparkFunPanasonicEKMCPIRBreakout_PIN_LABELS}
    pinAttributes={SparkFunPanasonicEKMCPIRBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic RCWL-0516 Microwave Motion Sensor Module — digital. */
export const GenericRCWL0516MicrowaveMotionSensorModule_PIN_LABELS = DIGITAL3_PIN_LABELS
export const GenericRCWL0516MicrowaveMotionSensorModule_PIN_ATTRIBUTES = DIGITAL3_PIN_ATTRIBUTES
export const GenericRCWL0516MicrowaveMotionSensorModule_FOOTPRINT = FOOTPRINT_F3
export type GenericRCWL0516MicrowaveMotionSensorModuleProps = ChipProps<typeof GenericRCWL0516MicrowaveMotionSensorModule_PIN_LABELS>
export const GenericRCWL0516MicrowaveMotionSensorModule = (props: GenericRCWL0516MicrowaveMotionSensorModuleProps) => (
  <chip
    {...props}
    displayName="Generic RCWL-0516 Microwave Motion Sensor Module"
    mfn="Generic"
    footprint={GenericRCWL0516MicrowaveMotionSensorModule_FOOTPRINT}
    pinLabels={GenericRCWL0516MicrowaveMotionSensorModule_PIN_LABELS}
    pinAttributes={GenericRCWL0516MicrowaveMotionSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** HLK-LD2410C 24GHz Presence Radar Module — UART/digital. */
export const HLKLD2410C24GHzPresenceRadarModule_PIN_LABELS = UART4_PIN_LABELS
export const HLKLD2410C24GHzPresenceRadarModule_PIN_ATTRIBUTES = UART4_PIN_ATTRIBUTES
export const HLKLD2410C24GHzPresenceRadarModule_FOOTPRINT = FOOTPRINT_F4
export type HLKLD2410C24GHzPresenceRadarModuleProps = ChipProps<typeof HLKLD2410C24GHzPresenceRadarModule_PIN_LABELS>
export const HLKLD2410C24GHzPresenceRadarModule = (props: HLKLD2410C24GHzPresenceRadarModuleProps) => (
  <chip
    {...props}
    displayName="HLK-LD2410C 24GHz Presence Radar Module"
    mfn="HLK"
    footprint={HLKLD2410C24GHzPresenceRadarModule_FOOTPRINT}
    pinLabels={HLKLD2410C24GHzPresenceRadarModule_PIN_LABELS}
    pinAttributes={HLKLD2410C24GHzPresenceRadarModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MPR121 12-Key Capacitive Touch Breakout — I2C. */
export const AdafruitMPR12112KeyCapacitiveTouchBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitMPR12112KeyCapacitiveTouchBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitMPR12112KeyCapacitiveTouchBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitMPR12112KeyCapacitiveTouchBreakoutProps = ChipProps<typeof AdafruitMPR12112KeyCapacitiveTouchBreakout_PIN_LABELS>
export const AdafruitMPR12112KeyCapacitiveTouchBreakout = (props: AdafruitMPR12112KeyCapacitiveTouchBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MPR121 12-Key Capacitive Touch Breakout"
    mfn="Adafruit"
    footprint={AdafruitMPR12112KeyCapacitiveTouchBreakout_FOOTPRINT}
    pinLabels={AdafruitMPR12112KeyCapacitiveTouchBreakout_PIN_LABELS}
    pinAttributes={AdafruitMPR12112KeyCapacitiveTouchBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit CAP1188 8-Key Capacitive Touch Breakout — I2C/SPI. */
export const AdafruitCAP11888KeyCapacitiveTouchBreakout_PIN_LABELS = I2CSPI8_PIN_LABELS
export const AdafruitCAP11888KeyCapacitiveTouchBreakout_PIN_ATTRIBUTES = I2CSPI8_PIN_ATTRIBUTES
export const AdafruitCAP11888KeyCapacitiveTouchBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitCAP11888KeyCapacitiveTouchBreakoutProps = ChipProps<typeof AdafruitCAP11888KeyCapacitiveTouchBreakout_PIN_LABELS>
export const AdafruitCAP11888KeyCapacitiveTouchBreakout = (props: AdafruitCAP11888KeyCapacitiveTouchBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit CAP1188 8-Key Capacitive Touch Breakout"
    mfn="Adafruit"
    footprint={AdafruitCAP11888KeyCapacitiveTouchBreakout_FOOTPRINT}
    pinLabels={AdafruitCAP11888KeyCapacitiveTouchBreakout_PIN_LABELS}
    pinAttributes={AdafruitCAP11888KeyCapacitiveTouchBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit AT42QT1010 Capacitive Touch Breakout — digital. */
export const AdafruitAT42QT1010CapacitiveTouchBreakout_PIN_LABELS = DIGITAL3_PIN_LABELS
export const AdafruitAT42QT1010CapacitiveTouchBreakout_PIN_ATTRIBUTES = DIGITAL3_PIN_ATTRIBUTES
export const AdafruitAT42QT1010CapacitiveTouchBreakout_FOOTPRINT = FOOTPRINT_F3
export type AdafruitAT42QT1010CapacitiveTouchBreakoutProps = ChipProps<typeof AdafruitAT42QT1010CapacitiveTouchBreakout_PIN_LABELS>
export const AdafruitAT42QT1010CapacitiveTouchBreakout = (props: AdafruitAT42QT1010CapacitiveTouchBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit AT42QT1010 Capacitive Touch Breakout"
    mfn="Adafruit"
    footprint={AdafruitAT42QT1010CapacitiveTouchBreakout_FOOTPRINT}
    pinLabels={AdafruitAT42QT1010CapacitiveTouchBreakout_PIN_LABELS}
    pinAttributes={AdafruitAT42QT1010CapacitiveTouchBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit AT42QT1070 5-Pad Capacitive Touch Breakout — digital. */
export const AdafruitAT42QT10705PadCapacitiveTouchBreakout_PIN_LABELS = DIGITAL3_PIN_LABELS
export const AdafruitAT42QT10705PadCapacitiveTouchBreakout_PIN_ATTRIBUTES = DIGITAL3_PIN_ATTRIBUTES
export const AdafruitAT42QT10705PadCapacitiveTouchBreakout_FOOTPRINT = FOOTPRINT_F3
export type AdafruitAT42QT10705PadCapacitiveTouchBreakoutProps = ChipProps<typeof AdafruitAT42QT10705PadCapacitiveTouchBreakout_PIN_LABELS>
export const AdafruitAT42QT10705PadCapacitiveTouchBreakout = (props: AdafruitAT42QT10705PadCapacitiveTouchBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit AT42QT1070 5-Pad Capacitive Touch Breakout"
    mfn="Adafruit"
    footprint={AdafruitAT42QT10705PadCapacitiveTouchBreakout_FOOTPRINT}
    pinLabels={AdafruitAT42QT10705PadCapacitiveTouchBreakout_PIN_LABELS}
    pinAttributes={AdafruitAT42QT10705PadCapacitiveTouchBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic TTP223 Capacitive Touch Module — digital. */
export const GenericTTP223CapacitiveTouchModule_PIN_LABELS = DIGITAL3_PIN_LABELS
export const GenericTTP223CapacitiveTouchModule_PIN_ATTRIBUTES = DIGITAL3_PIN_ATTRIBUTES
export const GenericTTP223CapacitiveTouchModule_FOOTPRINT = FOOTPRINT_F3
export type GenericTTP223CapacitiveTouchModuleProps = ChipProps<typeof GenericTTP223CapacitiveTouchModule_PIN_LABELS>
export const GenericTTP223CapacitiveTouchModule = (props: GenericTTP223CapacitiveTouchModuleProps) => (
  <chip
    {...props}
    displayName="Generic TTP223 Capacitive Touch Module"
    mfn="Generic"
    footprint={GenericTTP223CapacitiveTouchModule_FOOTPRINT}
    pinLabels={GenericTTP223CapacitiveTouchModule_PIN_LABELS}
    pinAttributes={GenericTTP223CapacitiveTouchModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun HX711 Load Cell Amplifier Breakout — two-wire digital. */
export const SparkFunHX711LoadCellAmplifierBreakout_PIN_LABELS = LOADCELL4_PIN_LABELS
export const SparkFunHX711LoadCellAmplifierBreakout_PIN_ATTRIBUTES = LOADCELL4_PIN_ATTRIBUTES
export const SparkFunHX711LoadCellAmplifierBreakout_FOOTPRINT = FOOTPRINT_F4
export type SparkFunHX711LoadCellAmplifierBreakoutProps = ChipProps<typeof SparkFunHX711LoadCellAmplifierBreakout_PIN_LABELS>
export const SparkFunHX711LoadCellAmplifierBreakout = (props: SparkFunHX711LoadCellAmplifierBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun HX711 Load Cell Amplifier Breakout"
    mfn="SparkFun"
    footprint={SparkFunHX711LoadCellAmplifierBreakout_FOOTPRINT}
    pinLabels={SparkFunHX711LoadCellAmplifierBreakout_PIN_LABELS}
    pinAttributes={SparkFunHX711LoadCellAmplifierBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit NAU7802 24-Bit Load Cell ADC Breakout — I2C. */
export const AdafruitNAU780224BitLoadCellADCBreakout_PIN_LABELS = LOADCELL4_PIN_LABELS
export const AdafruitNAU780224BitLoadCellADCBreakout_PIN_ATTRIBUTES = LOADCELL4_PIN_ATTRIBUTES
export const AdafruitNAU780224BitLoadCellADCBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitNAU780224BitLoadCellADCBreakoutProps = ChipProps<typeof AdafruitNAU780224BitLoadCellADCBreakout_PIN_LABELS>
export const AdafruitNAU780224BitLoadCellADCBreakout = (props: AdafruitNAU780224BitLoadCellADCBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit NAU7802 24-Bit Load Cell ADC Breakout"
    mfn="Adafruit"
    footprint={AdafruitNAU780224BitLoadCellADCBreakout_FOOTPRINT}
    pinLabels={AdafruitNAU780224BitLoadCellADCBreakout_PIN_LABELS}
    pinAttributes={AdafruitNAU780224BitLoadCellADCBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun FSR Force Sensitive Resistor Adapter Breakout — analog. */
export const SparkFunFSRForceSensitiveResistorAdapterBreakout_PIN_LABELS = ANALOG3_PIN_LABELS
export const SparkFunFSRForceSensitiveResistorAdapterBreakout_PIN_ATTRIBUTES = ANALOG3_PIN_ATTRIBUTES
export const SparkFunFSRForceSensitiveResistorAdapterBreakout_FOOTPRINT = FOOTPRINT_F3
export type SparkFunFSRForceSensitiveResistorAdapterBreakoutProps = ChipProps<typeof SparkFunFSRForceSensitiveResistorAdapterBreakout_PIN_LABELS>
export const SparkFunFSRForceSensitiveResistorAdapterBreakout = (props: SparkFunFSRForceSensitiveResistorAdapterBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun FSR Force Sensitive Resistor Adapter Breakout"
    mfn="SparkFun"
    footprint={SparkFunFSRForceSensitiveResistorAdapterBreakout_FOOTPRINT}
    pinLabels={SparkFunFSRForceSensitiveResistorAdapterBreakout_PIN_LABELS}
    pinAttributes={SparkFunFSRForceSensitiveResistorAdapterBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun MAX30101 + MAX32664 Pulse Oximeter Breakout — I2C. */
export const SparkFunMAX30101MAX32664PulseOximeterBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const SparkFunMAX30101MAX32664PulseOximeterBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const SparkFunMAX30101MAX32664PulseOximeterBreakout_FOOTPRINT = FOOTPRINT_F4
export type SparkFunMAX30101MAX32664PulseOximeterBreakoutProps = ChipProps<typeof SparkFunMAX30101MAX32664PulseOximeterBreakout_PIN_LABELS>
export const SparkFunMAX30101MAX32664PulseOximeterBreakout = (props: SparkFunMAX30101MAX32664PulseOximeterBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun MAX30101 + MAX32664 Pulse Oximeter Breakout"
    mfn="SparkFun"
    footprint={SparkFunMAX30101MAX32664PulseOximeterBreakout_FOOTPRINT}
    pinLabels={SparkFunMAX30101MAX32664PulseOximeterBreakout_PIN_LABELS}
    pinAttributes={SparkFunMAX30101MAX32664PulseOximeterBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic MAX30102 Heart-Rate/Oximeter Module — I2C. */
export const GenericMAX30102HeartRateOximeterModule_PIN_LABELS = I2C4_PIN_LABELS
export const GenericMAX30102HeartRateOximeterModule_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const GenericMAX30102HeartRateOximeterModule_FOOTPRINT = FOOTPRINT_F4
export type GenericMAX30102HeartRateOximeterModuleProps = ChipProps<typeof GenericMAX30102HeartRateOximeterModule_PIN_LABELS>
export const GenericMAX30102HeartRateOximeterModule = (props: GenericMAX30102HeartRateOximeterModuleProps) => (
  <chip
    {...props}
    displayName="Generic MAX30102 Heart-Rate/Oximeter Module"
    mfn="Generic"
    footprint={GenericMAX30102HeartRateOximeterModule_FOOTPRINT}
    pinLabels={GenericMAX30102HeartRateOximeterModule_PIN_LABELS}
    pinAttributes={GenericMAX30102HeartRateOximeterModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun AD8232 Single-Lead ECG Monitor Breakout — analog. */
export const SparkFunAD8232SingleLeadECGMonitorBreakout_PIN_LABELS = ANALOG3_PIN_LABELS
export const SparkFunAD8232SingleLeadECGMonitorBreakout_PIN_ATTRIBUTES = ANALOG3_PIN_ATTRIBUTES
export const SparkFunAD8232SingleLeadECGMonitorBreakout_FOOTPRINT = FOOTPRINT_F3
export type SparkFunAD8232SingleLeadECGMonitorBreakoutProps = ChipProps<typeof SparkFunAD8232SingleLeadECGMonitorBreakout_PIN_LABELS>
export const SparkFunAD8232SingleLeadECGMonitorBreakout = (props: SparkFunAD8232SingleLeadECGMonitorBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun AD8232 Single-Lead ECG Monitor Breakout"
    mfn="SparkFun"
    footprint={SparkFunAD8232SingleLeadECGMonitorBreakout_FOOTPRINT}
    pinLabels={SparkFunAD8232SingleLeadECGMonitorBreakout_PIN_LABELS}
    pinAttributes={SparkFunAD8232SingleLeadECGMonitorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit Ultimate GPS Breakout, PA6H/MTK3339 — UART. */
export const AdafruitUltimateGPSBreakoutPA6HMTK3339_PIN_LABELS = UART4_PIN_LABELS
export const AdafruitUltimateGPSBreakoutPA6HMTK3339_PIN_ATTRIBUTES = UART4_PIN_ATTRIBUTES
export const AdafruitUltimateGPSBreakoutPA6HMTK3339_FOOTPRINT = FOOTPRINT_F4
export type AdafruitUltimateGPSBreakoutPA6HMTK3339Props = ChipProps<typeof AdafruitUltimateGPSBreakoutPA6HMTK3339_PIN_LABELS>
export const AdafruitUltimateGPSBreakoutPA6HMTK3339 = (props: AdafruitUltimateGPSBreakoutPA6HMTK3339Props) => (
  <chip
    {...props}
    displayName="Adafruit Ultimate GPS Breakout, PA6H/MTK3339"
    mfn="Adafruit"
    footprint={AdafruitUltimateGPSBreakoutPA6HMTK3339_FOOTPRINT}
    pinLabels={AdafruitUltimateGPSBreakoutPA6HMTK3339_PIN_LABELS}
    pinAttributes={AdafruitUltimateGPSBreakoutPA6HMTK3339_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit PA1010D Mini GPS Breakout — I2C/UART. */
export const AdafruitPA1010DMiniGPSBreakout_PIN_LABELS = I2CUART6_PIN_LABELS
export const AdafruitPA1010DMiniGPSBreakout_PIN_ATTRIBUTES = I2CUART6_PIN_ATTRIBUTES
export const AdafruitPA1010DMiniGPSBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitPA1010DMiniGPSBreakoutProps = ChipProps<typeof AdafruitPA1010DMiniGPSBreakout_PIN_LABELS>
export const AdafruitPA1010DMiniGPSBreakout = (props: AdafruitPA1010DMiniGPSBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit PA1010D Mini GPS Breakout"
    mfn="Adafruit"
    footprint={AdafruitPA1010DMiniGPSBreakout_FOOTPRINT}
    pinLabels={AdafruitPA1010DMiniGPSBreakout_PIN_LABELS}
    pinAttributes={AdafruitPA1010DMiniGPSBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun u-blox MAX-M10S GNSS Breakout — I2C/UART/SPI. */
export const SparkFunUBloxMAXM10SGNSSBreakout_PIN_LABELS = I2CUART6_PIN_LABELS
export const SparkFunUBloxMAXM10SGNSSBreakout_PIN_ATTRIBUTES = I2CUART6_PIN_ATTRIBUTES
export const SparkFunUBloxMAXM10SGNSSBreakout_FOOTPRINT = FOOTPRINT_F6
export type SparkFunUBloxMAXM10SGNSSBreakoutProps = ChipProps<typeof SparkFunUBloxMAXM10SGNSSBreakout_PIN_LABELS>
export const SparkFunUBloxMAXM10SGNSSBreakout = (props: SparkFunUBloxMAXM10SGNSSBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun u-blox MAX-M10S GNSS Breakout"
    mfn="SparkFun"
    footprint={SparkFunUBloxMAXM10SGNSSBreakout_FOOTPRINT}
    pinLabels={SparkFunUBloxMAXM10SGNSSBreakout_PIN_LABELS}
    pinAttributes={SparkFunUBloxMAXM10SGNSSBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun u-blox SAM-M10Q GNSS Breakout — I2C/UART. */
export const SparkFunUBloxSAMM10QGNSSBreakout_PIN_LABELS = I2CUART6_PIN_LABELS
export const SparkFunUBloxSAMM10QGNSSBreakout_PIN_ATTRIBUTES = I2CUART6_PIN_ATTRIBUTES
export const SparkFunUBloxSAMM10QGNSSBreakout_FOOTPRINT = FOOTPRINT_F6
export type SparkFunUBloxSAMM10QGNSSBreakoutProps = ChipProps<typeof SparkFunUBloxSAMM10QGNSSBreakout_PIN_LABELS>
export const SparkFunUBloxSAMM10QGNSSBreakout = (props: SparkFunUBloxSAMM10QGNSSBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun u-blox SAM-M10Q GNSS Breakout"
    mfn="SparkFun"
    footprint={SparkFunUBloxSAMM10QGNSSBreakout_FOOTPRINT}
    pinLabels={SparkFunUBloxSAMM10QGNSSBreakout_PIN_LABELS}
    pinAttributes={SparkFunUBloxSAMM10QGNSSBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun u-blox NEO-M9N GNSS Breakout — I2C/UART/SPI. */
export const SparkFunUBloxNEOM9NGNSSBreakout_PIN_LABELS = I2CUART6_PIN_LABELS
export const SparkFunUBloxNEOM9NGNSSBreakout_PIN_ATTRIBUTES = I2CUART6_PIN_ATTRIBUTES
export const SparkFunUBloxNEOM9NGNSSBreakout_FOOTPRINT = FOOTPRINT_F6
export type SparkFunUBloxNEOM9NGNSSBreakoutProps = ChipProps<typeof SparkFunUBloxNEOM9NGNSSBreakout_PIN_LABELS>
export const SparkFunUBloxNEOM9NGNSSBreakout = (props: SparkFunUBloxNEOM9NGNSSBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun u-blox NEO-M9N GNSS Breakout"
    mfn="SparkFun"
    footprint={SparkFunUBloxNEOM9NGNSSBreakout_FOOTPRINT}
    pinLabels={SparkFunUBloxNEOM9NGNSSBreakout_PIN_LABELS}
    pinAttributes={SparkFunUBloxNEOM9NGNSSBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun u-blox ZED-F9P RTK GNSS Breakout — I2C/UART/SPI. */
export const SparkFunUBloxZEDF9PRTKGNSSBreakout_PIN_LABELS = I2CUART6_PIN_LABELS
export const SparkFunUBloxZEDF9PRTKGNSSBreakout_PIN_ATTRIBUTES = I2CUART6_PIN_ATTRIBUTES
export const SparkFunUBloxZEDF9PRTKGNSSBreakout_FOOTPRINT = FOOTPRINT_F6
export type SparkFunUBloxZEDF9PRTKGNSSBreakoutProps = ChipProps<typeof SparkFunUBloxZEDF9PRTKGNSSBreakout_PIN_LABELS>
export const SparkFunUBloxZEDF9PRTKGNSSBreakout = (props: SparkFunUBloxZEDF9PRTKGNSSBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun u-blox ZED-F9P RTK GNSS Breakout"
    mfn="SparkFun"
    footprint={SparkFunUBloxZEDF9PRTKGNSSBreakout_FOOTPRINT}
    pinLabels={SparkFunUBloxZEDF9PRTKGNSSBreakout_PIN_LABELS}
    pinAttributes={SparkFunUBloxZEDF9PRTKGNSSBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun u-blox NEO-F10N L1/L5 GNSS Breakout — I2C/UART/SPI. */
export const SparkFunUBloxNEOF10NL1L5GNSSBreakout_PIN_LABELS = I2CUART6_PIN_LABELS
export const SparkFunUBloxNEOF10NL1L5GNSSBreakout_PIN_ATTRIBUTES = I2CUART6_PIN_ATTRIBUTES
export const SparkFunUBloxNEOF10NL1L5GNSSBreakout_FOOTPRINT = FOOTPRINT_F6
export type SparkFunUBloxNEOF10NL1L5GNSSBreakoutProps = ChipProps<typeof SparkFunUBloxNEOF10NL1L5GNSSBreakout_PIN_LABELS>
export const SparkFunUBloxNEOF10NL1L5GNSSBreakout = (props: SparkFunUBloxNEOF10NL1L5GNSSBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun u-blox NEO-F10N L1/L5 GNSS Breakout"
    mfn="SparkFun"
    footprint={SparkFunUBloxNEOF10NL1L5GNSSBreakout_FOOTPRINT}
    pinLabels={SparkFunUBloxNEOF10NL1L5GNSSBreakout_PIN_LABELS}
    pinAttributes={SparkFunUBloxNEOF10NL1L5GNSSBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic u-blox NEO-6M GY-GPS6MV2 Module — UART. */
export const GenericUBloxNEO6MGYGPS6MV2Module_PIN_LABELS = UART4_PIN_LABELS
export const GenericUBloxNEO6MGYGPS6MV2Module_PIN_ATTRIBUTES = UART4_PIN_ATTRIBUTES
export const GenericUBloxNEO6MGYGPS6MV2Module_FOOTPRINT = FOOTPRINT_F4
export type GenericUBloxNEO6MGYGPS6MV2ModuleProps = ChipProps<typeof GenericUBloxNEO6MGYGPS6MV2Module_PIN_LABELS>
export const GenericUBloxNEO6MGYGPS6MV2Module = (props: GenericUBloxNEO6MGYGPS6MV2ModuleProps) => (
  <chip
    {...props}
    displayName="Generic u-blox NEO-6M GY-GPS6MV2 Module"
    mfn="Generic"
    footprint={GenericUBloxNEO6MGYGPS6MV2Module_FOOTPRINT}
    pinLabels={GenericUBloxNEO6MGYGPS6MV2Module_PIN_LABELS}
    pinAttributes={GenericUBloxNEO6MGYGPS6MV2Module_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic u-blox NEO-M8N GPS Module — UART/I2C. */
export const GenericUBloxNEOM8NGPSModule_PIN_LABELS = I2CUART6_PIN_LABELS
export const GenericUBloxNEOM8NGPSModule_PIN_ATTRIBUTES = I2CUART6_PIN_ATTRIBUTES
export const GenericUBloxNEOM8NGPSModule_FOOTPRINT = FOOTPRINT_F6
export type GenericUBloxNEOM8NGPSModuleProps = ChipProps<typeof GenericUBloxNEOM8NGPSModule_PIN_LABELS>
export const GenericUBloxNEOM8NGPSModule = (props: GenericUBloxNEOM8NGPSModuleProps) => (
  <chip
    {...props}
    displayName="Generic u-blox NEO-M8N GPS Module"
    mfn="Generic"
    footprint={GenericUBloxNEOM8NGPSModule_FOOTPRINT}
    pinLabels={GenericUBloxNEOM8NGPSModule_PIN_LABELS}
    pinAttributes={GenericUBloxNEOM8NGPSModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Waveshare L76K GNSS Module — UART. */
export const WaveshareL76KGNSSModule_PIN_LABELS = UART4_PIN_LABELS
export const WaveshareL76KGNSSModule_PIN_ATTRIBUTES = UART4_PIN_ATTRIBUTES
export const WaveshareL76KGNSSModule_FOOTPRINT = FOOTPRINT_F4
export type WaveshareL76KGNSSModuleProps = ChipProps<typeof WaveshareL76KGNSSModule_PIN_LABELS>
export const WaveshareL76KGNSSModule = (props: WaveshareL76KGNSSModuleProps) => (
  <chip
    {...props}
    displayName="Waveshare L76K GNSS Module"
    mfn="Waveshare"
    footprint={WaveshareL76KGNSSModule_FOOTPRINT}
    pinLabels={WaveshareL76KGNSSModule_PIN_LABELS}
    pinAttributes={WaveshareL76KGNSSModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Nordic nRF24L01+ 2.4GHz Radio Module — SPI. */
export const NordicNRF24L0124GHzRadioModule_PIN_LABELS = RADIO8_PIN_LABELS
export const NordicNRF24L0124GHzRadioModule_PIN_ATTRIBUTES = RADIO8_PIN_ATTRIBUTES
export const NordicNRF24L0124GHzRadioModule_FOOTPRINT = FOOTPRINT_F8
export type NordicNRF24L0124GHzRadioModuleProps = ChipProps<typeof NordicNRF24L0124GHzRadioModule_PIN_LABELS>
export const NordicNRF24L0124GHzRadioModule = (props: NordicNRF24L0124GHzRadioModuleProps) => (
  <chip
    {...props}
    displayName="Nordic nRF24L01+ 2.4GHz Radio Module"
    mfn="Nordic"
    footprint={NordicNRF24L0124GHzRadioModule_FOOTPRINT}
    pinLabels={NordicNRF24L0124GHzRadioModule_PIN_LABELS}
    pinAttributes={NordicNRF24L0124GHzRadioModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** nRF24L01+ PA/LNA Antenna Module — SPI. */
export const NRF24L01PALNAAntennaModule_PIN_LABELS = RADIO8_PIN_LABELS
export const NRF24L01PALNAAntennaModule_PIN_ATTRIBUTES = RADIO8_PIN_ATTRIBUTES
export const NRF24L01PALNAAntennaModule_FOOTPRINT = FOOTPRINT_F8
export type NRF24L01PALNAAntennaModuleProps = ChipProps<typeof NRF24L01PALNAAntennaModule_PIN_LABELS>
export const NRF24L01PALNAAntennaModule = (props: NRF24L01PALNAAntennaModuleProps) => (
  <chip
    {...props}
    displayName="nRF24L01+ PA/LNA Antenna Module"
    mfn="Generic"
    footprint={NRF24L01PALNAAntennaModule_FOOTPRINT}
    pinLabels={NRF24L01PALNAAntennaModule_PIN_LABELS}
    pinAttributes={NRF24L01PALNAAntennaModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit RFM69HCW Packet Radio Breakout — SPI. */
export const AdafruitRFM69HCWPacketRadioBreakout_PIN_LABELS = RADIO8_PIN_LABELS
export const AdafruitRFM69HCWPacketRadioBreakout_PIN_ATTRIBUTES = RADIO8_PIN_ATTRIBUTES
export const AdafruitRFM69HCWPacketRadioBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitRFM69HCWPacketRadioBreakoutProps = ChipProps<typeof AdafruitRFM69HCWPacketRadioBreakout_PIN_LABELS>
export const AdafruitRFM69HCWPacketRadioBreakout = (props: AdafruitRFM69HCWPacketRadioBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit RFM69HCW Packet Radio Breakout"
    mfn="Adafruit"
    footprint={AdafruitRFM69HCWPacketRadioBreakout_FOOTPRINT}
    pinLabels={AdafruitRFM69HCWPacketRadioBreakout_PIN_LABELS}
    pinAttributes={AdafruitRFM69HCWPacketRadioBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit RFM95W LoRa Radio Breakout — SPI. */
export const AdafruitRFM95WLoRaRadioBreakout_PIN_LABELS = RADIO8_PIN_LABELS
export const AdafruitRFM95WLoRaRadioBreakout_PIN_ATTRIBUTES = RADIO8_PIN_ATTRIBUTES
export const AdafruitRFM95WLoRaRadioBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitRFM95WLoRaRadioBreakoutProps = ChipProps<typeof AdafruitRFM95WLoRaRadioBreakout_PIN_LABELS>
export const AdafruitRFM95WLoRaRadioBreakout = (props: AdafruitRFM95WLoRaRadioBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit RFM95W LoRa Radio Breakout"
    mfn="Adafruit"
    footprint={AdafruitRFM95WLoRaRadioBreakout_FOOTPRINT}
    pinLabels={AdafruitRFM95WLoRaRadioBreakout_PIN_LABELS}
    pinAttributes={AdafruitRFM95WLoRaRadioBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit RFM96W LoRa Radio Breakout — SPI. */
export const AdafruitRFM96WLoRaRadioBreakout_PIN_LABELS = RADIO8_PIN_LABELS
export const AdafruitRFM96WLoRaRadioBreakout_PIN_ATTRIBUTES = RADIO8_PIN_ATTRIBUTES
export const AdafruitRFM96WLoRaRadioBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitRFM96WLoRaRadioBreakoutProps = ChipProps<typeof AdafruitRFM96WLoRaRadioBreakout_PIN_LABELS>
export const AdafruitRFM96WLoRaRadioBreakout = (props: AdafruitRFM96WLoRaRadioBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit RFM96W LoRa Radio Breakout"
    mfn="Adafruit"
    footprint={AdafruitRFM96WLoRaRadioBreakout_FOOTPRINT}
    pinLabels={AdafruitRFM96WLoRaRadioBreakout_PIN_LABELS}
    pinAttributes={AdafruitRFM96WLoRaRadioBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Ai-Thinker Ra-02 SX1278 LoRa Module — SPI. */
export const AiThinkerRa02SX1278LoRaModule_PIN_LABELS = RADIO8_PIN_LABELS
export const AiThinkerRa02SX1278LoRaModule_PIN_ATTRIBUTES = RADIO8_PIN_ATTRIBUTES
export const AiThinkerRa02SX1278LoRaModule_FOOTPRINT = FOOTPRINT_F8
export type AiThinkerRa02SX1278LoRaModuleProps = ChipProps<typeof AiThinkerRa02SX1278LoRaModule_PIN_LABELS>
export const AiThinkerRa02SX1278LoRaModule = (props: AiThinkerRa02SX1278LoRaModuleProps) => (
  <chip
    {...props}
    displayName="Ai-Thinker Ra-02 SX1278 LoRa Module"
    mfn="Ai-Thinker"
    footprint={AiThinkerRa02SX1278LoRaModule_FOOTPRINT}
    pinLabels={AiThinkerRa02SX1278LoRaModule_PIN_LABELS}
    pinAttributes={AiThinkerRa02SX1278LoRaModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Waveshare SX1262 LoRa HAT-Style Core Module — SPI/UART header variant. */
export const WaveshareSX1262LoRaHATStyleCoreModule_PIN_LABELS = UART5_PIN_LABELS
export const WaveshareSX1262LoRaHATStyleCoreModule_PIN_ATTRIBUTES = UART5_PIN_ATTRIBUTES
export const WaveshareSX1262LoRaHATStyleCoreModule_FOOTPRINT = FOOTPRINT_F5
export type WaveshareSX1262LoRaHATStyleCoreModuleProps = ChipProps<typeof WaveshareSX1262LoRaHATStyleCoreModule_PIN_LABELS>
export const WaveshareSX1262LoRaHATStyleCoreModule = (props: WaveshareSX1262LoRaHATStyleCoreModuleProps) => (
  <chip
    {...props}
    displayName="Waveshare SX1262 LoRa HAT-Style Core Module"
    mfn="Waveshare"
    footprint={WaveshareSX1262LoRaHATStyleCoreModule_FOOTPRINT}
    pinLabels={WaveshareSX1262LoRaHATStyleCoreModule_PIN_LABELS}
    pinAttributes={WaveshareSX1262LoRaHATStyleCoreModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Seeed Wio-E5 Mini LoRaWAN Board — UART. */
export const SeeedWioE5MiniLoRaWANBoard_PIN_LABELS = UART5_PIN_LABELS
export const SeeedWioE5MiniLoRaWANBoard_PIN_ATTRIBUTES = UART5_PIN_ATTRIBUTES
export const SeeedWioE5MiniLoRaWANBoard_FOOTPRINT = FOOTPRINT_F5
export type SeeedWioE5MiniLoRaWANBoardProps = ChipProps<typeof SeeedWioE5MiniLoRaWANBoard_PIN_LABELS>
export const SeeedWioE5MiniLoRaWANBoard = (props: SeeedWioE5MiniLoRaWANBoardProps) => (
  <chip
    {...props}
    displayName="Seeed Wio-E5 Mini LoRaWAN Board"
    mfn="Generic"
    footprint={SeeedWioE5MiniLoRaWANBoard_FOOTPRINT}
    pinLabels={SeeedWioE5MiniLoRaWANBoard_PIN_LABELS}
    pinAttributes={SeeedWioE5MiniLoRaWANBoard_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** REYAX RYLR896 LoRa Module — UART. */
export const REYAXRYLR896LoRaModule_PIN_LABELS = UART5_PIN_LABELS
export const REYAXRYLR896LoRaModule_PIN_ATTRIBUTES = UART5_PIN_ATTRIBUTES
export const REYAXRYLR896LoRaModule_FOOTPRINT = FOOTPRINT_F5
export type REYAXRYLR896LoRaModuleProps = ChipProps<typeof REYAXRYLR896LoRaModule_PIN_LABELS>
export const REYAXRYLR896LoRaModule = (props: REYAXRYLR896LoRaModuleProps) => (
  <chip
    {...props}
    displayName="REYAX RYLR896 LoRa Module"
    mfn="REYAX"
    footprint={REYAXRYLR896LoRaModule_FOOTPRINT}
    pinLabels={REYAXRYLR896LoRaModule_PIN_LABELS}
    pinAttributes={REYAXRYLR896LoRaModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic HC-05 Bluetooth Classic Module — UART. */
export const GenericHC05BluetoothClassicModule_PIN_LABELS = UART4_PIN_LABELS
export const GenericHC05BluetoothClassicModule_PIN_ATTRIBUTES = UART4_PIN_ATTRIBUTES
export const GenericHC05BluetoothClassicModule_FOOTPRINT = FOOTPRINT_F4
export type GenericHC05BluetoothClassicModuleProps = ChipProps<typeof GenericHC05BluetoothClassicModule_PIN_LABELS>
export const GenericHC05BluetoothClassicModule = (props: GenericHC05BluetoothClassicModuleProps) => (
  <chip
    {...props}
    displayName="Generic HC-05 Bluetooth Classic Module"
    mfn="Generic"
    footprint={GenericHC05BluetoothClassicModule_FOOTPRINT}
    pinLabels={GenericHC05BluetoothClassicModule_PIN_LABELS}
    pinAttributes={GenericHC05BluetoothClassicModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic HC-06 Bluetooth Classic Module — UART. */
export const GenericHC06BluetoothClassicModule_PIN_LABELS = UART4_PIN_LABELS
export const GenericHC06BluetoothClassicModule_PIN_ATTRIBUTES = UART4_PIN_ATTRIBUTES
export const GenericHC06BluetoothClassicModule_FOOTPRINT = FOOTPRINT_F4
export type GenericHC06BluetoothClassicModuleProps = ChipProps<typeof GenericHC06BluetoothClassicModule_PIN_LABELS>
export const GenericHC06BluetoothClassicModule = (props: GenericHC06BluetoothClassicModuleProps) => (
  <chip
    {...props}
    displayName="Generic HC-06 Bluetooth Classic Module"
    mfn="Generic"
    footprint={GenericHC06BluetoothClassicModule_FOOTPRINT}
    pinLabels={GenericHC06BluetoothClassicModule_PIN_LABELS}
    pinAttributes={GenericHC06BluetoothClassicModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic HM-10 BLE Module with Baseboard — UART. */
export const GenericHM10BLEModuleWithBaseboard_PIN_LABELS = UART4_PIN_LABELS
export const GenericHM10BLEModuleWithBaseboard_PIN_ATTRIBUTES = UART4_PIN_ATTRIBUTES
export const GenericHM10BLEModuleWithBaseboard_FOOTPRINT = FOOTPRINT_F4
export type GenericHM10BLEModuleWithBaseboardProps = ChipProps<typeof GenericHM10BLEModuleWithBaseboard_PIN_LABELS>
export const GenericHM10BLEModuleWithBaseboard = (props: GenericHM10BLEModuleWithBaseboardProps) => (
  <chip
    {...props}
    displayName="Generic HM-10 BLE Module with Baseboard"
    mfn="Generic"
    footprint={GenericHM10BLEModuleWithBaseboard_FOOTPRINT}
    pinLabels={GenericHM10BLEModuleWithBaseboard_PIN_LABELS}
    pinAttributes={GenericHM10BLEModuleWithBaseboard_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Espressif ESP-01S Wi-Fi Module — 2x4 header. */
export const EspressifESP01SWiFiModule_PIN_LABELS = GENERIC4_PIN_LABELS
export const EspressifESP01SWiFiModule_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const EspressifESP01SWiFiModule_FOOTPRINT = FOOTPRINT_F4
export type EspressifESP01SWiFiModuleProps = ChipProps<typeof EspressifESP01SWiFiModule_PIN_LABELS>
export const EspressifESP01SWiFiModule = (props: EspressifESP01SWiFiModuleProps) => (
  <chip
    {...props}
    displayName="Espressif ESP-01S Wi-Fi Module"
    mfn="Espressif"
    footprint={EspressifESP01SWiFiModule_FOOTPRINT}
    pinLabels={EspressifESP01SWiFiModule_PIN_LABELS}
    pinAttributes={EspressifESP01SWiFiModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun XBee Explorer Regulated — 0.1 in XBee adapter. */
export const SparkFunXBeeExplorerRegulated_PIN_LABELS = GENERIC4_PIN_LABELS
export const SparkFunXBeeExplorerRegulated_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const SparkFunXBeeExplorerRegulated_FOOTPRINT = FOOTPRINT_F4
export type SparkFunXBeeExplorerRegulatedProps = ChipProps<typeof SparkFunXBeeExplorerRegulated_PIN_LABELS>
export const SparkFunXBeeExplorerRegulated = (props: SparkFunXBeeExplorerRegulatedProps) => (
  <chip
    {...props}
    displayName="SparkFun XBee Explorer Regulated"
    mfn="SparkFun"
    footprint={SparkFunXBeeExplorerRegulated_FOOTPRINT}
    pinLabels={SparkFunXBeeExplorerRegulated_PIN_LABELS}
    pinAttributes={SparkFunXBeeExplorerRegulated_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** WIZnet W5500 Ethernet Module — SPI. */
export const WIZnetW5500EthernetModule_PIN_LABELS = SPI6_PIN_LABELS
export const WIZnetW5500EthernetModule_PIN_ATTRIBUTES = SPI6_PIN_ATTRIBUTES
export const WIZnetW5500EthernetModule_FOOTPRINT = FOOTPRINT_F6
export type WIZnetW5500EthernetModuleProps = ChipProps<typeof WIZnetW5500EthernetModule_PIN_LABELS>
export const WIZnetW5500EthernetModule = (props: WIZnetW5500EthernetModuleProps) => (
  <chip
    {...props}
    displayName="WIZnet W5500 Ethernet Module"
    mfn="Generic"
    footprint={WIZnetW5500EthernetModule_FOOTPRINT}
    pinLabels={WIZnetW5500EthernetModule_PIN_LABELS}
    pinAttributes={WIZnetW5500EthernetModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** WIZnet WIZ850io Ethernet Module — SPI dual-row. */
export const WIZnetWIZ850ioEthernetModule_PIN_LABELS = SPI6_PIN_LABELS
export const WIZnetWIZ850ioEthernetModule_PIN_ATTRIBUTES = SPI6_PIN_ATTRIBUTES
export const WIZnetWIZ850ioEthernetModule_FOOTPRINT = FOOTPRINT_F6
export type WIZnetWIZ850ioEthernetModuleProps = ChipProps<typeof WIZnetWIZ850ioEthernetModule_PIN_LABELS>
export const WIZnetWIZ850ioEthernetModule = (props: WIZnetWIZ850ioEthernetModuleProps) => (
  <chip
    {...props}
    displayName="WIZnet WIZ850io Ethernet Module"
    mfn="Generic"
    footprint={WIZnetWIZ850ioEthernetModule_FOOTPRINT}
    pinLabels={WIZnetWIZ850ioEthernetModule_PIN_LABELS}
    pinAttributes={WIZnetWIZ850ioEthernetModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic ENC28J60 Ethernet Module — SPI. */
export const GenericENC28J60EthernetModule_PIN_LABELS = SPI6_PIN_LABELS
export const GenericENC28J60EthernetModule_PIN_ATTRIBUTES = SPI6_PIN_ATTRIBUTES
export const GenericENC28J60EthernetModule_FOOTPRINT = FOOTPRINT_F6
export type GenericENC28J60EthernetModuleProps = ChipProps<typeof GenericENC28J60EthernetModule_PIN_LABELS>
export const GenericENC28J60EthernetModule = (props: GenericENC28J60EthernetModuleProps) => (
  <chip
    {...props}
    displayName="Generic ENC28J60 Ethernet Module"
    mfn="Generic"
    footprint={GenericENC28J60EthernetModule_FOOTPRINT}
    pinLabels={GenericENC28J60EthernetModule_PIN_LABELS}
    pinAttributes={GenericENC28J60EthernetModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic MCP2515 CAN Bus Module — SPI. */
export const GenericMCP2515CANBusModule_PIN_LABELS = CAN6_PIN_LABELS
export const GenericMCP2515CANBusModule_PIN_ATTRIBUTES = CAN6_PIN_ATTRIBUTES
export const GenericMCP2515CANBusModule_FOOTPRINT = FOOTPRINT_F6
export type GenericMCP2515CANBusModuleProps = ChipProps<typeof GenericMCP2515CANBusModule_PIN_LABELS>
export const GenericMCP2515CANBusModule = (props: GenericMCP2515CANBusModuleProps) => (
  <chip
    {...props}
    displayName="Generic MCP2515 CAN Bus Module"
    mfn="Generic"
    footprint={GenericMCP2515CANBusModule_FOOTPRINT}
    pinLabels={GenericMCP2515CANBusModule_PIN_LABELS}
    pinAttributes={GenericMCP2515CANBusModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic SN65HVD230 CAN Transceiver Module — logic/CAN. */
export const GenericSN65HVD230CANTransceiverModule_PIN_LABELS = CAN6_PIN_LABELS
export const GenericSN65HVD230CANTransceiverModule_PIN_ATTRIBUTES = CAN6_PIN_ATTRIBUTES
export const GenericSN65HVD230CANTransceiverModule_FOOTPRINT = FOOTPRINT_F6
export type GenericSN65HVD230CANTransceiverModuleProps = ChipProps<typeof GenericSN65HVD230CANTransceiverModule_PIN_LABELS>
export const GenericSN65HVD230CANTransceiverModule = (props: GenericSN65HVD230CANTransceiverModuleProps) => (
  <chip
    {...props}
    displayName="Generic SN65HVD230 CAN Transceiver Module"
    mfn="Generic"
    footprint={GenericSN65HVD230CANTransceiverModule_FOOTPRINT}
    pinLabels={GenericSN65HVD230CANTransceiverModule_PIN_LABELS}
    pinAttributes={GenericSN65HVD230CANTransceiverModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic MAX485 RS-485 Transceiver Module — UART/RS-485. */
export const GenericMAX485RS485TransceiverModule_PIN_LABELS = SERIALBUS6_PIN_LABELS
export const GenericMAX485RS485TransceiverModule_PIN_ATTRIBUTES = SERIALBUS6_PIN_ATTRIBUTES
export const GenericMAX485RS485TransceiverModule_FOOTPRINT = FOOTPRINT_F6
export type GenericMAX485RS485TransceiverModuleProps = ChipProps<typeof GenericMAX485RS485TransceiverModule_PIN_LABELS>
export const GenericMAX485RS485TransceiverModule = (props: GenericMAX485RS485TransceiverModuleProps) => (
  <chip
    {...props}
    displayName="Generic MAX485 RS-485 Transceiver Module"
    mfn="Generic"
    footprint={GenericMAX485RS485TransceiverModule_FOOTPRINT}
    pinLabels={GenericMAX485RS485TransceiverModule_PIN_LABELS}
    pinAttributes={GenericMAX485RS485TransceiverModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun SP3485 RS-485 Breakout — UART/RS-485. */
export const SparkFunSP3485RS485Breakout_PIN_LABELS = SERIALBUS6_PIN_LABELS
export const SparkFunSP3485RS485Breakout_PIN_ATTRIBUTES = SERIALBUS6_PIN_ATTRIBUTES
export const SparkFunSP3485RS485Breakout_FOOTPRINT = FOOTPRINT_F6
export type SparkFunSP3485RS485BreakoutProps = ChipProps<typeof SparkFunSP3485RS485Breakout_PIN_LABELS>
export const SparkFunSP3485RS485Breakout = (props: SparkFunSP3485RS485BreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun SP3485 RS-485 Breakout"
    mfn="SparkFun"
    footprint={SparkFunSP3485RS485Breakout_FOOTPRINT}
    pinLabels={SparkFunSP3485RS485Breakout_PIN_LABELS}
    pinAttributes={SparkFunSP3485RS485Breakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic MAX3232 RS-232 Transceiver Module — UART/RS-232. */
export const GenericMAX3232RS232TransceiverModule_PIN_LABELS = SERIALBUS6_PIN_LABELS
export const GenericMAX3232RS232TransceiverModule_PIN_ATTRIBUTES = SERIALBUS6_PIN_ATTRIBUTES
export const GenericMAX3232RS232TransceiverModule_FOOTPRINT = FOOTPRINT_F6
export type GenericMAX3232RS232TransceiverModuleProps = ChipProps<typeof GenericMAX3232RS232TransceiverModule_PIN_LABELS>
export const GenericMAX3232RS232TransceiverModule = (props: GenericMAX3232RS232TransceiverModuleProps) => (
  <chip
    {...props}
    displayName="Generic MAX3232 RS-232 Transceiver Module"
    mfn="Generic"
    footprint={GenericMAX3232RS232TransceiverModule_FOOTPRINT}
    pinLabels={GenericMAX3232RS232TransceiverModule_PIN_LABELS}
    pinAttributes={GenericMAX3232RS232TransceiverModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit PN532 NFC/RFID Controller Breakout — I2C/SPI/UART. */
export const AdafruitPN532NFCRFIDControllerBreakout_PIN_LABELS = NFC8_PIN_LABELS
export const AdafruitPN532NFCRFIDControllerBreakout_PIN_ATTRIBUTES = NFC8_PIN_ATTRIBUTES
export const AdafruitPN532NFCRFIDControllerBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitPN532NFCRFIDControllerBreakoutProps = ChipProps<typeof AdafruitPN532NFCRFIDControllerBreakout_PIN_LABELS>
export const AdafruitPN532NFCRFIDControllerBreakout = (props: AdafruitPN532NFCRFIDControllerBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit PN532 NFC/RFID Controller Breakout"
    mfn="Adafruit"
    footprint={AdafruitPN532NFCRFIDControllerBreakout_FOOTPRINT}
    pinLabels={AdafruitPN532NFCRFIDControllerBreakout_PIN_LABELS}
    pinAttributes={AdafruitPN532NFCRFIDControllerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic MFRC522 RFID Reader Module — SPI. */
export const GenericMFRC522RFIDReaderModule_PIN_LABELS = NFC8_PIN_LABELS
export const GenericMFRC522RFIDReaderModule_PIN_ATTRIBUTES = NFC8_PIN_ATTRIBUTES
export const GenericMFRC522RFIDReaderModule_FOOTPRINT = FOOTPRINT_F8
export type GenericMFRC522RFIDReaderModuleProps = ChipProps<typeof GenericMFRC522RFIDReaderModule_PIN_LABELS>
export const GenericMFRC522RFIDReaderModule = (props: GenericMFRC522RFIDReaderModuleProps) => (
  <chip
    {...props}
    displayName="Generic MFRC522 RFID Reader Module"
    mfn="Generic"
    footprint={GenericMFRC522RFIDReaderModule_FOOTPRINT}
    pinLabels={GenericMFRC522RFIDReaderModule_PIN_LABELS}
    pinAttributes={GenericMFRC522RFIDReaderModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit ST25DV16K I2C RFID EEPROM Breakout — I2C/RF. */
export const AdafruitST25DV16KI2CRFIDEEPROMBreakout_PIN_LABELS = NFC8_PIN_LABELS
export const AdafruitST25DV16KI2CRFIDEEPROMBreakout_PIN_ATTRIBUTES = NFC8_PIN_ATTRIBUTES
export const AdafruitST25DV16KI2CRFIDEEPROMBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitST25DV16KI2CRFIDEEPROMBreakoutProps = ChipProps<typeof AdafruitST25DV16KI2CRFIDEEPROMBreakout_PIN_LABELS>
export const AdafruitST25DV16KI2CRFIDEEPROMBreakout = (props: AdafruitST25DV16KI2CRFIDEEPROMBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit ST25DV16K I2C RFID EEPROM Breakout"
    mfn="Adafruit"
    footprint={AdafruitST25DV16KI2CRFIDEEPROMBreakout_FOOTPRINT}
    pinLabels={AdafruitST25DV16KI2CRFIDEEPROMBreakout_PIN_LABELS}
    pinAttributes={AdafruitST25DV16KI2CRFIDEEPROMBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit DS3231 Precision RTC Breakout — I2C. */
export const AdafruitDS3231PrecisionRTCBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitDS3231PrecisionRTCBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitDS3231PrecisionRTCBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitDS3231PrecisionRTCBreakoutProps = ChipProps<typeof AdafruitDS3231PrecisionRTCBreakout_PIN_LABELS>
export const AdafruitDS3231PrecisionRTCBreakout = (props: AdafruitDS3231PrecisionRTCBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit DS3231 Precision RTC Breakout"
    mfn="Adafruit"
    footprint={AdafruitDS3231PrecisionRTCBreakout_FOOTPRINT}
    pinLabels={AdafruitDS3231PrecisionRTCBreakout_PIN_LABELS}
    pinAttributes={AdafruitDS3231PrecisionRTCBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit PCF8523 RTC Breakout — I2C. */
export const AdafruitPCF8523RTCBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitPCF8523RTCBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitPCF8523RTCBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitPCF8523RTCBreakoutProps = ChipProps<typeof AdafruitPCF8523RTCBreakout_PIN_LABELS>
export const AdafruitPCF8523RTCBreakout = (props: AdafruitPCF8523RTCBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit PCF8523 RTC Breakout"
    mfn="Adafruit"
    footprint={AdafruitPCF8523RTCBreakout_FOOTPRINT}
    pinLabels={AdafruitPCF8523RTCBreakout_PIN_LABELS}
    pinAttributes={AdafruitPCF8523RTCBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit DS1307 RTC Breakout — I2C. */
export const AdafruitDS1307RTCBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitDS1307RTCBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitDS1307RTCBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitDS1307RTCBreakoutProps = ChipProps<typeof AdafruitDS1307RTCBreakout_PIN_LABELS>
export const AdafruitDS1307RTCBreakout = (props: AdafruitDS1307RTCBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit DS1307 RTC Breakout"
    mfn="Adafruit"
    footprint={AdafruitDS1307RTCBreakout_FOOTPRINT}
    pinLabels={AdafruitDS1307RTCBreakout_PIN_LABELS}
    pinAttributes={AdafruitDS1307RTCBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit RV-3028 RTC Breakout — I2C. */
export const AdafruitRV3028RTCBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitRV3028RTCBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitRV3028RTCBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitRV3028RTCBreakoutProps = ChipProps<typeof AdafruitRV3028RTCBreakout_PIN_LABELS>
export const AdafruitRV3028RTCBreakout = (props: AdafruitRV3028RTCBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit RV-3028 RTC Breakout"
    mfn="Adafruit"
    footprint={AdafruitRV3028RTCBreakout_FOOTPRINT}
    pinLabels={AdafruitRV3028RTCBreakout_PIN_LABELS}
    pinAttributes={AdafruitRV3028RTCBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun RV-8803 RTC Breakout — I2C. */
export const SparkFunRV8803RTCBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const SparkFunRV8803RTCBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const SparkFunRV8803RTCBreakout_FOOTPRINT = FOOTPRINT_F4
export type SparkFunRV8803RTCBreakoutProps = ChipProps<typeof SparkFunRV8803RTCBreakout_PIN_LABELS>
export const SparkFunRV8803RTCBreakout = (props: SparkFunRV8803RTCBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun RV-8803 RTC Breakout"
    mfn="SparkFun"
    footprint={SparkFunRV8803RTCBreakout_FOOTPRINT}
    pinLabels={SparkFunRV8803RTCBreakout_PIN_LABELS}
    pinAttributes={SparkFunRV8803RTCBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic PCF8563 RTC Module — I2C. */
export const GenericPCF8563RTCModule_PIN_LABELS = I2C4_PIN_LABELS
export const GenericPCF8563RTCModule_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const GenericPCF8563RTCModule_FOOTPRINT = FOOTPRINT_F4
export type GenericPCF8563RTCModuleProps = ChipProps<typeof GenericPCF8563RTCModule_PIN_LABELS>
export const GenericPCF8563RTCModule = (props: GenericPCF8563RTCModuleProps) => (
  <chip
    {...props}
    displayName="Generic PCF8563 RTC Module"
    mfn="Generic"
    footprint={GenericPCF8563RTCModule_FOOTPRINT}
    pinLabels={GenericPCF8563RTCModule_PIN_LABELS}
    pinAttributes={GenericPCF8563RTCModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun DS3234 DeadOn RTC Breakout — SPI. */
export const SparkFunDS3234DeadOnRTCBreakout_PIN_LABELS = SPI6_PIN_LABELS
export const SparkFunDS3234DeadOnRTCBreakout_PIN_ATTRIBUTES = SPI6_PIN_ATTRIBUTES
export const SparkFunDS3234DeadOnRTCBreakout_FOOTPRINT = FOOTPRINT_F6
export type SparkFunDS3234DeadOnRTCBreakoutProps = ChipProps<typeof SparkFunDS3234DeadOnRTCBreakout_PIN_LABELS>
export const SparkFunDS3234DeadOnRTCBreakout = (props: SparkFunDS3234DeadOnRTCBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun DS3234 DeadOn RTC Breakout"
    mfn="SparkFun"
    footprint={SparkFunDS3234DeadOnRTCBreakout_FOOTPRINT}
    pinLabels={SparkFunDS3234DeadOnRTCBreakout_PIN_LABELS}
    pinAttributes={SparkFunDS3234DeadOnRTCBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit Micro SD SPI/SDIO Card Breakout — SPI/SDIO. */
export const AdafruitMicroSDSPISDIOCardBreakout_PIN_LABELS = SPI6_PIN_LABELS
export const AdafruitMicroSDSPISDIOCardBreakout_PIN_ATTRIBUTES = SPI6_PIN_ATTRIBUTES
export const AdafruitMicroSDSPISDIOCardBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitMicroSDSPISDIOCardBreakoutProps = ChipProps<typeof AdafruitMicroSDSPISDIOCardBreakout_PIN_LABELS>
export const AdafruitMicroSDSPISDIOCardBreakout = (props: AdafruitMicroSDSPISDIOCardBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit Micro SD SPI/SDIO Card Breakout"
    mfn="Adafruit"
    footprint={AdafruitMicroSDSPISDIOCardBreakout_FOOTPRINT}
    pinLabels={AdafruitMicroSDSPISDIOCardBreakout_PIN_LABELS}
    pinAttributes={AdafruitMicroSDSPISDIOCardBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu Breakout Board for microSD Card — raw SD contacts. */
export const PololuBreakoutBoardForMicroSDCard_PIN_LABELS = GENERIC4_PIN_LABELS
export const PololuBreakoutBoardForMicroSDCard_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const PololuBreakoutBoardForMicroSDCard_FOOTPRINT = FOOTPRINT_F4
export type PololuBreakoutBoardForMicroSDCardProps = ChipProps<typeof PololuBreakoutBoardForMicroSDCard_PIN_LABELS>
export const PololuBreakoutBoardForMicroSDCard = (props: PololuBreakoutBoardForMicroSDCardProps) => (
  <chip
    {...props}
    displayName="Pololu Breakout Board for microSD Card"
    mfn="Pololu"
    footprint={PololuBreakoutBoardForMicroSDCard_FOOTPRINT}
    pinLabels={PololuBreakoutBoardForMicroSDCard_PIN_LABELS}
    pinAttributes={PololuBreakoutBoardForMicroSDCard_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic MicroSD Module with 3.3V Regulator and Level Shifter — SPI. */
export const GenericMicroSDModuleWith33VRegulatorAndLevelShifter_PIN_LABELS = LEVEL8_PIN_LABELS
export const GenericMicroSDModuleWith33VRegulatorAndLevelShifter_PIN_ATTRIBUTES = LEVEL8_PIN_ATTRIBUTES
export const GenericMicroSDModuleWith33VRegulatorAndLevelShifter_FOOTPRINT = FOOTPRINT_F8
export type GenericMicroSDModuleWith33VRegulatorAndLevelShifterProps = ChipProps<typeof GenericMicroSDModuleWith33VRegulatorAndLevelShifter_PIN_LABELS>
export const GenericMicroSDModuleWith33VRegulatorAndLevelShifter = (props: GenericMicroSDModuleWith33VRegulatorAndLevelShifterProps) => (
  <chip
    {...props}
    displayName="Generic MicroSD Module with 3.3V Regulator and Level Shifter"
    mfn="Generic"
    footprint={GenericMicroSDModuleWith33VRegulatorAndLevelShifter_FOOTPRINT}
    pinLabels={GenericMicroSDModuleWith33VRegulatorAndLevelShifter_PIN_LABELS}
    pinAttributes={GenericMicroSDModuleWith33VRegulatorAndLevelShifter_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit W25Q128 SPI Flash Breakout — SPI. */
export const AdafruitW25Q128SPIFlashBreakout_PIN_LABELS = SPI6_PIN_LABELS
export const AdafruitW25Q128SPIFlashBreakout_PIN_ATTRIBUTES = SPI6_PIN_ATTRIBUTES
export const AdafruitW25Q128SPIFlashBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitW25Q128SPIFlashBreakoutProps = ChipProps<typeof AdafruitW25Q128SPIFlashBreakout_PIN_LABELS>
export const AdafruitW25Q128SPIFlashBreakout = (props: AdafruitW25Q128SPIFlashBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit W25Q128 SPI Flash Breakout"
    mfn="Adafruit"
    footprint={AdafruitW25Q128SPIFlashBreakout_FOOTPRINT}
    pinLabels={AdafruitW25Q128SPIFlashBreakout_PIN_LABELS}
    pinAttributes={AdafruitW25Q128SPIFlashBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MB85RC256V I2C FRAM Breakout — I2C. */
export const AdafruitMB85RC256VI2CFRAMBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitMB85RC256VI2CFRAMBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitMB85RC256VI2CFRAMBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitMB85RC256VI2CFRAMBreakoutProps = ChipProps<typeof AdafruitMB85RC256VI2CFRAMBreakout_PIN_LABELS>
export const AdafruitMB85RC256VI2CFRAMBreakout = (props: AdafruitMB85RC256VI2CFRAMBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MB85RC256V I2C FRAM Breakout"
    mfn="Adafruit"
    footprint={AdafruitMB85RC256VI2CFRAMBreakout_FOOTPRINT}
    pinLabels={AdafruitMB85RC256VI2CFRAMBreakout_PIN_LABELS}
    pinAttributes={AdafruitMB85RC256VI2CFRAMBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MB85RS4MT SPI FRAM Breakout — SPI. */
export const AdafruitMB85RS4MTSPIFRAMBreakout_PIN_LABELS = SPI6_PIN_LABELS
export const AdafruitMB85RS4MTSPIFRAMBreakout_PIN_ATTRIBUTES = SPI6_PIN_ATTRIBUTES
export const AdafruitMB85RS4MTSPIFRAMBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitMB85RS4MTSPIFRAMBreakoutProps = ChipProps<typeof AdafruitMB85RS4MTSPIFRAMBreakout_PIN_LABELS>
export const AdafruitMB85RS4MTSPIFRAMBreakout = (props: AdafruitMB85RS4MTSPIFRAMBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MB85RS4MT SPI FRAM Breakout"
    mfn="Adafruit"
    footprint={AdafruitMB85RS4MTSPIFRAMBreakout_FOOTPRINT}
    pinLabels={AdafruitMB85RS4MTSPIFRAMBreakout_PIN_LABELS}
    pinAttributes={AdafruitMB85RS4MTSPIFRAMBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic 24LC256 EEPROM Module — I2C. */
export const Generic24LC256EEPROMModule_PIN_LABELS = I2C4_PIN_LABELS
export const Generic24LC256EEPROMModule_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const Generic24LC256EEPROMModule_FOOTPRINT = FOOTPRINT_F4
export type Generic24LC256EEPROMModuleProps = ChipProps<typeof Generic24LC256EEPROMModule_PIN_LABELS>
export const Generic24LC256EEPROMModule = (props: Generic24LC256EEPROMModuleProps) => (
  <chip
    {...props}
    displayName="Generic 24LC256 EEPROM Module"
    mfn="Generic"
    footprint={Generic24LC256EEPROMModule_FOOTPRINT}
    pinLabels={Generic24LC256EEPROMModule_PIN_LABELS}
    pinAttributes={Generic24LC256EEPROMModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit TCA9548A 8-Channel I2C Multiplexer Breakout — I2C. */
export const AdafruitTCA9548A8ChannelI2CMultiplexerBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitTCA9548A8ChannelI2CMultiplexerBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitTCA9548A8ChannelI2CMultiplexerBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitTCA9548A8ChannelI2CMultiplexerBreakoutProps = ChipProps<typeof AdafruitTCA9548A8ChannelI2CMultiplexerBreakout_PIN_LABELS>
export const AdafruitTCA9548A8ChannelI2CMultiplexerBreakout = (props: AdafruitTCA9548A8ChannelI2CMultiplexerBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit TCA9548A 8-Channel I2C Multiplexer Breakout"
    mfn="Adafruit"
    footprint={AdafruitTCA9548A8ChannelI2CMultiplexerBreakout_FOOTPRINT}
    pinLabels={AdafruitTCA9548A8ChannelI2CMultiplexerBreakout_PIN_LABELS}
    pinAttributes={AdafruitTCA9548A8ChannelI2CMultiplexerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit PCA9546A 4-Channel I2C Multiplexer Breakout — I2C. */
export const AdafruitPCA9546A4ChannelI2CMultiplexerBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitPCA9546A4ChannelI2CMultiplexerBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitPCA9546A4ChannelI2CMultiplexerBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitPCA9546A4ChannelI2CMultiplexerBreakoutProps = ChipProps<typeof AdafruitPCA9546A4ChannelI2CMultiplexerBreakout_PIN_LABELS>
export const AdafruitPCA9546A4ChannelI2CMultiplexerBreakout = (props: AdafruitPCA9546A4ChannelI2CMultiplexerBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit PCA9546A 4-Channel I2C Multiplexer Breakout"
    mfn="Adafruit"
    footprint={AdafruitPCA9546A4ChannelI2CMultiplexerBreakout_FOOTPRINT}
    pinLabels={AdafruitPCA9546A4ChannelI2CMultiplexerBreakout_PIN_LABELS}
    pinAttributes={AdafruitPCA9546A4ChannelI2CMultiplexerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun PCA9615 Differential I2C Breakout — differential I2C. */
export const SparkFunPCA9615DifferentialI2CBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const SparkFunPCA9615DifferentialI2CBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const SparkFunPCA9615DifferentialI2CBreakout_FOOTPRINT = FOOTPRINT_F4
export type SparkFunPCA9615DifferentialI2CBreakoutProps = ChipProps<typeof SparkFunPCA9615DifferentialI2CBreakout_PIN_LABELS>
export const SparkFunPCA9615DifferentialI2CBreakout = (props: SparkFunPCA9615DifferentialI2CBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun PCA9615 Differential I2C Breakout"
    mfn="SparkFun"
    footprint={SparkFunPCA9615DifferentialI2CBreakout_FOOTPRINT}
    pinLabels={SparkFunPCA9615DifferentialI2CBreakout_PIN_LABELS}
    pinAttributes={SparkFunPCA9615DifferentialI2CBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit LTC4311 I2C Active Terminator Breakout — I2C. */
export const AdafruitLTC4311I2CActiveTerminatorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitLTC4311I2CActiveTerminatorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitLTC4311I2CActiveTerminatorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitLTC4311I2CActiveTerminatorBreakoutProps = ChipProps<typeof AdafruitLTC4311I2CActiveTerminatorBreakout_PIN_LABELS>
export const AdafruitLTC4311I2CActiveTerminatorBreakout = (props: AdafruitLTC4311I2CActiveTerminatorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit LTC4311 I2C Active Terminator Breakout"
    mfn="Adafruit"
    footprint={AdafruitLTC4311I2CActiveTerminatorBreakout_FOOTPRINT}
    pinLabels={AdafruitLTC4311I2CActiveTerminatorBreakout_PIN_LABELS}
    pinAttributes={AdafruitLTC4311I2CActiveTerminatorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit DS2482S-800 8-Channel I2C-to-1-Wire Breakout — I2C/1-Wire. */
export const AdafruitDS2482S8008ChannelI2CTo1WireBreakout_PIN_LABELS = ONEWIRE3_PIN_LABELS
export const AdafruitDS2482S8008ChannelI2CTo1WireBreakout_PIN_ATTRIBUTES = ONEWIRE3_PIN_ATTRIBUTES
export const AdafruitDS2482S8008ChannelI2CTo1WireBreakout_FOOTPRINT = FOOTPRINT_F3
export type AdafruitDS2482S8008ChannelI2CTo1WireBreakoutProps = ChipProps<typeof AdafruitDS2482S8008ChannelI2CTo1WireBreakout_PIN_LABELS>
export const AdafruitDS2482S8008ChannelI2CTo1WireBreakout = (props: AdafruitDS2482S8008ChannelI2CTo1WireBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit DS2482S-800 8-Channel I2C-to-1-Wire Breakout"
    mfn="Adafruit"
    footprint={AdafruitDS2482S8008ChannelI2CTo1WireBreakout_FOOTPRINT}
    pinLabels={AdafruitDS2482S8008ChannelI2CTo1WireBreakout_PIN_LABELS}
    pinAttributes={AdafruitDS2482S8008ChannelI2CTo1WireBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MCP23017 16-Bit GPIO Expander Breakout — I2C. */
export const AdafruitMCP2301716BitGPIOExpanderBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitMCP2301716BitGPIOExpanderBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitMCP2301716BitGPIOExpanderBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitMCP2301716BitGPIOExpanderBreakoutProps = ChipProps<typeof AdafruitMCP2301716BitGPIOExpanderBreakout_PIN_LABELS>
export const AdafruitMCP2301716BitGPIOExpanderBreakout = (props: AdafruitMCP2301716BitGPIOExpanderBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MCP23017 16-Bit GPIO Expander Breakout"
    mfn="Adafruit"
    footprint={AdafruitMCP2301716BitGPIOExpanderBreakout_FOOTPRINT}
    pinLabels={AdafruitMCP2301716BitGPIOExpanderBreakout_PIN_LABELS}
    pinAttributes={AdafruitMCP2301716BitGPIOExpanderBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MCP23008 8-Bit GPIO Expander Breakout — I2C. */
export const AdafruitMCP230088BitGPIOExpanderBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitMCP230088BitGPIOExpanderBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitMCP230088BitGPIOExpanderBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitMCP230088BitGPIOExpanderBreakoutProps = ChipProps<typeof AdafruitMCP230088BitGPIOExpanderBreakout_PIN_LABELS>
export const AdafruitMCP230088BitGPIOExpanderBreakout = (props: AdafruitMCP230088BitGPIOExpanderBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MCP23008 8-Bit GPIO Expander Breakout"
    mfn="Adafruit"
    footprint={AdafruitMCP230088BitGPIOExpanderBreakout_FOOTPRINT}
    pinLabels={AdafruitMCP230088BitGPIOExpanderBreakout_PIN_LABELS}
    pinAttributes={AdafruitMCP230088BitGPIOExpanderBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic PCF8574 I2C GPIO Expander Module — I2C. */
export const GenericPCF8574I2CGPIOExpanderModule_PIN_LABELS = I2C4_PIN_LABELS
export const GenericPCF8574I2CGPIOExpanderModule_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const GenericPCF8574I2CGPIOExpanderModule_FOOTPRINT = FOOTPRINT_F4
export type GenericPCF8574I2CGPIOExpanderModuleProps = ChipProps<typeof GenericPCF8574I2CGPIOExpanderModule_PIN_LABELS>
export const GenericPCF8574I2CGPIOExpanderModule = (props: GenericPCF8574I2CGPIOExpanderModuleProps) => (
  <chip
    {...props}
    displayName="Generic PCF8574 I2C GPIO Expander Module"
    mfn="Generic"
    footprint={GenericPCF8574I2CGPIOExpanderModule_FOOTPRINT}
    pinLabels={GenericPCF8574I2CGPIOExpanderModule_PIN_LABELS}
    pinAttributes={GenericPCF8574I2CGPIOExpanderModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit TCA9534 8-Bit GPIO Expander Breakout — I2C. */
export const AdafruitTCA95348BitGPIOExpanderBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitTCA95348BitGPIOExpanderBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitTCA95348BitGPIOExpanderBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitTCA95348BitGPIOExpanderBreakoutProps = ChipProps<typeof AdafruitTCA95348BitGPIOExpanderBreakout_PIN_LABELS>
export const AdafruitTCA95348BitGPIOExpanderBreakout = (props: AdafruitTCA95348BitGPIOExpanderBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit TCA9534 8-Bit GPIO Expander Breakout"
    mfn="Adafruit"
    footprint={AdafruitTCA95348BitGPIOExpanderBreakout_FOOTPRINT}
    pinLabels={AdafruitTCA95348BitGPIOExpanderBreakout_PIN_LABELS}
    pinAttributes={AdafruitTCA95348BitGPIOExpanderBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic PCA9555 16-Bit GPIO Expander Module — I2C. */
export const GenericPCA955516BitGPIOExpanderModule_PIN_LABELS = I2C4_PIN_LABELS
export const GenericPCA955516BitGPIOExpanderModule_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const GenericPCA955516BitGPIOExpanderModule_FOOTPRINT = FOOTPRINT_F4
export type GenericPCA955516BitGPIOExpanderModuleProps = ChipProps<typeof GenericPCA955516BitGPIOExpanderModule_PIN_LABELS>
export const GenericPCA955516BitGPIOExpanderModule = (props: GenericPCA955516BitGPIOExpanderModuleProps) => (
  <chip
    {...props}
    displayName="Generic PCA9555 16-Bit GPIO Expander Module"
    mfn="Generic"
    footprint={GenericPCA955516BitGPIOExpanderModule_FOOTPRINT}
    pinLabels={GenericPCA955516BitGPIOExpanderModule_PIN_LABELS}
    pinAttributes={GenericPCA955516BitGPIOExpanderModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit AW9523 GPIO/LED Driver Breakout — I2C. */
export const AdafruitAW9523GPIOLEDDriverBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitAW9523GPIOLEDDriverBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitAW9523GPIOLEDDriverBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitAW9523GPIOLEDDriverBreakoutProps = ChipProps<typeof AdafruitAW9523GPIOLEDDriverBreakout_PIN_LABELS>
export const AdafruitAW9523GPIOLEDDriverBreakout = (props: AdafruitAW9523GPIOLEDDriverBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit AW9523 GPIO/LED Driver Breakout"
    mfn="Adafruit"
    footprint={AdafruitAW9523GPIOLEDDriverBreakout_FOOTPRINT}
    pinLabels={AdafruitAW9523GPIOLEDDriverBreakout_PIN_LABELS}
    pinAttributes={AdafruitAW9523GPIOLEDDriverBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit FT232H USB-to-Multi-Protocol Breakout — USB/I2C/SPI/UART. */
export const AdafruitFT232HUSBToMultiProtocolBreakout_PIN_LABELS = USB6_PIN_LABELS
export const AdafruitFT232HUSBToMultiProtocolBreakout_PIN_ATTRIBUTES = USB6_PIN_ATTRIBUTES
export const AdafruitFT232HUSBToMultiProtocolBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitFT232HUSBToMultiProtocolBreakoutProps = ChipProps<typeof AdafruitFT232HUSBToMultiProtocolBreakout_PIN_LABELS>
export const AdafruitFT232HUSBToMultiProtocolBreakout = (props: AdafruitFT232HUSBToMultiProtocolBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit FT232H USB-to-Multi-Protocol Breakout"
    mfn="Adafruit"
    footprint={AdafruitFT232HUSBToMultiProtocolBreakout_FOOTPRINT}
    pinLabels={AdafruitFT232HUSBToMultiProtocolBreakout_PIN_LABELS}
    pinAttributes={AdafruitFT232HUSBToMultiProtocolBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun FT231X USB-to-UART Breakout — USB/UART. */
export const SparkFunFT231XUSBToUARTBreakout_PIN_LABELS = USB6_PIN_LABELS
export const SparkFunFT231XUSBToUARTBreakout_PIN_ATTRIBUTES = USB6_PIN_ATTRIBUTES
export const SparkFunFT231XUSBToUARTBreakout_FOOTPRINT = FOOTPRINT_F6
export type SparkFunFT231XUSBToUARTBreakoutProps = ChipProps<typeof SparkFunFT231XUSBToUARTBreakout_PIN_LABELS>
export const SparkFunFT231XUSBToUARTBreakout = (props: SparkFunFT231XUSBToUARTBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun FT231X USB-to-UART Breakout"
    mfn="SparkFun"
    footprint={SparkFunFT231XUSBToUARTBreakout_FOOTPRINT}
    pinLabels={SparkFunFT231XUSBToUARTBreakout_PIN_LABELS}
    pinAttributes={SparkFunFT231XUSBToUARTBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic CP2102 USB-to-UART Module — USB/UART. */
export const GenericCP2102USBToUARTModule_PIN_LABELS = USB6_PIN_LABELS
export const GenericCP2102USBToUARTModule_PIN_ATTRIBUTES = USB6_PIN_ATTRIBUTES
export const GenericCP2102USBToUARTModule_FOOTPRINT = FOOTPRINT_F6
export type GenericCP2102USBToUARTModuleProps = ChipProps<typeof GenericCP2102USBToUARTModule_PIN_LABELS>
export const GenericCP2102USBToUARTModule = (props: GenericCP2102USBToUARTModuleProps) => (
  <chip
    {...props}
    displayName="Generic CP2102 USB-to-UART Module"
    mfn="Generic"
    footprint={GenericCP2102USBToUARTModule_FOOTPRINT}
    pinLabels={GenericCP2102USBToUARTModule_PIN_LABELS}
    pinAttributes={GenericCP2102USBToUARTModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic CH340G USB-to-UART Module — USB/UART. */
export const GenericCH340GUSBToUARTModule_PIN_LABELS = USB6_PIN_LABELS
export const GenericCH340GUSBToUARTModule_PIN_ATTRIBUTES = USB6_PIN_ATTRIBUTES
export const GenericCH340GUSBToUARTModule_FOOTPRINT = FOOTPRINT_F6
export type GenericCH340GUSBToUARTModuleProps = ChipProps<typeof GenericCH340GUSBToUARTModule_PIN_LABELS>
export const GenericCH340GUSBToUARTModule = (props: GenericCH340GUSBToUARTModuleProps) => (
  <chip
    {...props}
    displayName="Generic CH340G USB-to-UART Module"
    mfn="Generic"
    footprint={GenericCH340GUSBToUARTModule_FOOTPRINT}
    pinLabels={GenericCH340GUSBToUARTModule_PIN_LABELS}
    pinAttributes={GenericCH340GUSBToUARTModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MAX3421E USB Host Breakout — SPI/USB host. */
export const AdafruitMAX3421EUSBHostBreakout_PIN_LABELS = USB6_PIN_LABELS
export const AdafruitMAX3421EUSBHostBreakout_PIN_ATTRIBUTES = USB6_PIN_ATTRIBUTES
export const AdafruitMAX3421EUSBHostBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitMAX3421EUSBHostBreakoutProps = ChipProps<typeof AdafruitMAX3421EUSBHostBreakout_PIN_LABELS>
export const AdafruitMAX3421EUSBHostBreakout = (props: AdafruitMAX3421EUSBHostBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MAX3421E USB Host Breakout"
    mfn="Adafruit"
    footprint={AdafruitMAX3421EUSBHostBreakout_FOOTPRINT}
    pinLabels={AdafruitMAX3421EUSBHostBreakout_PIN_LABELS}
    pinAttributes={AdafruitMAX3421EUSBHostBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic 0.96 in SSD1306 OLED I2C Module — 128x64. */
export const Generic096InSSD1306OLEDI2CModule_PIN_LABELS = DISPLAY4_PIN_LABELS
export const Generic096InSSD1306OLEDI2CModule_PIN_ATTRIBUTES = DISPLAY4_PIN_ATTRIBUTES
export const Generic096InSSD1306OLEDI2CModule_FOOTPRINT = FOOTPRINT_F4
export type Generic096InSSD1306OLEDI2CModuleProps = ChipProps<typeof Generic096InSSD1306OLEDI2CModule_PIN_LABELS>
export const Generic096InSSD1306OLEDI2CModule = (props: Generic096InSSD1306OLEDI2CModuleProps) => (
  <chip
    {...props}
    displayName="Generic 0.96 in SSD1306 OLED I2C Module"
    mfn="Generic"
    footprint={Generic096InSSD1306OLEDI2CModule_FOOTPRINT}
    pinLabels={Generic096InSSD1306OLEDI2CModule_PIN_LABELS}
    pinAttributes={Generic096InSSD1306OLEDI2CModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit 0.96 in SSD1306 OLED SPI Breakout — 128x64. */
export const Adafruit096InSSD1306OLEDSPIBreakout_PIN_LABELS = DISPLAY8_PIN_LABELS
export const Adafruit096InSSD1306OLEDSPIBreakout_PIN_ATTRIBUTES = DISPLAY8_PIN_ATTRIBUTES
export const Adafruit096InSSD1306OLEDSPIBreakout_FOOTPRINT = FOOTPRINT_F8
export type Adafruit096InSSD1306OLEDSPIBreakoutProps = ChipProps<typeof Adafruit096InSSD1306OLEDSPIBreakout_PIN_LABELS>
export const Adafruit096InSSD1306OLEDSPIBreakout = (props: Adafruit096InSSD1306OLEDSPIBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit 0.96 in SSD1306 OLED SPI Breakout"
    mfn="Adafruit"
    footprint={Adafruit096InSSD1306OLEDSPIBreakout_FOOTPRINT}
    pinLabels={Adafruit096InSSD1306OLEDSPIBreakout_PIN_LABELS}
    pinAttributes={Adafruit096InSSD1306OLEDSPIBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic 1.3 in SH1106 OLED I2C Module — 128x64. */
export const Generic13InSH1106OLEDI2CModule_PIN_LABELS = DISPLAY4_PIN_LABELS
export const Generic13InSH1106OLEDI2CModule_PIN_ATTRIBUTES = DISPLAY4_PIN_ATTRIBUTES
export const Generic13InSH1106OLEDI2CModule_FOOTPRINT = FOOTPRINT_F4
export type Generic13InSH1106OLEDI2CModuleProps = ChipProps<typeof Generic13InSH1106OLEDI2CModule_PIN_LABELS>
export const Generic13InSH1106OLEDI2CModule = (props: Generic13InSH1106OLEDI2CModuleProps) => (
  <chip
    {...props}
    displayName="Generic 1.3 in SH1106 OLED I2C Module"
    mfn="Generic"
    footprint={Generic13InSH1106OLEDI2CModule_FOOTPRINT}
    pinLabels={Generic13InSH1106OLEDI2CModule_PIN_LABELS}
    pinAttributes={Generic13InSH1106OLEDI2CModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit 1.5 in SSD1327 Grayscale OLED Breakout — 128x128. */
export const Adafruit15InSSD1327GrayscaleOLEDBreakout_PIN_LABELS = DISPLAY8_PIN_LABELS
export const Adafruit15InSSD1327GrayscaleOLEDBreakout_PIN_ATTRIBUTES = DISPLAY8_PIN_ATTRIBUTES
export const Adafruit15InSSD1327GrayscaleOLEDBreakout_FOOTPRINT = FOOTPRINT_F8
export type Adafruit15InSSD1327GrayscaleOLEDBreakoutProps = ChipProps<typeof Adafruit15InSSD1327GrayscaleOLEDBreakout_PIN_LABELS>
export const Adafruit15InSSD1327GrayscaleOLEDBreakout = (props: Adafruit15InSSD1327GrayscaleOLEDBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit 1.5 in SSD1327 Grayscale OLED Breakout"
    mfn="Adafruit"
    footprint={Adafruit15InSSD1327GrayscaleOLEDBreakout_FOOTPRINT}
    pinLabels={Adafruit15InSSD1327GrayscaleOLEDBreakout_PIN_LABELS}
    pinAttributes={Adafruit15InSSD1327GrayscaleOLEDBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit 1.27 in SSD1351 Color OLED Breakout — 128x96. */
export const Adafruit127InSSD1351ColorOLEDBreakout_PIN_LABELS = DISPLAY8_PIN_LABELS
export const Adafruit127InSSD1351ColorOLEDBreakout_PIN_ATTRIBUTES = DISPLAY8_PIN_ATTRIBUTES
export const Adafruit127InSSD1351ColorOLEDBreakout_FOOTPRINT = FOOTPRINT_F8
export type Adafruit127InSSD1351ColorOLEDBreakoutProps = ChipProps<typeof Adafruit127InSSD1351ColorOLEDBreakout_PIN_LABELS>
export const Adafruit127InSSD1351ColorOLEDBreakout = (props: Adafruit127InSSD1351ColorOLEDBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit 1.27 in SSD1351 Color OLED Breakout"
    mfn="Adafruit"
    footprint={Adafruit127InSSD1351ColorOLEDBreakout_FOOTPRINT}
    pinLabels={Adafruit127InSSD1351ColorOLEDBreakout_PIN_LABELS}
    pinAttributes={Adafruit127InSSD1351ColorOLEDBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit 1.5 in SSD1351 Color OLED Breakout — 128x128. */
export const Adafruit15InSSD1351ColorOLEDBreakout_PIN_LABELS = DISPLAY8_PIN_LABELS
export const Adafruit15InSSD1351ColorOLEDBreakout_PIN_ATTRIBUTES = DISPLAY8_PIN_ATTRIBUTES
export const Adafruit15InSSD1351ColorOLEDBreakout_FOOTPRINT = FOOTPRINT_F8
export type Adafruit15InSSD1351ColorOLEDBreakoutProps = ChipProps<typeof Adafruit15InSSD1351ColorOLEDBreakout_PIN_LABELS>
export const Adafruit15InSSD1351ColorOLEDBreakout = (props: Adafruit15InSSD1351ColorOLEDBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit 1.5 in SSD1351 Color OLED Breakout"
    mfn="Adafruit"
    footprint={Adafruit15InSSD1351ColorOLEDBreakout_FOOTPRINT}
    pinLabels={Adafruit15InSSD1351ColorOLEDBreakout_PIN_LABELS}
    pinAttributes={Adafruit15InSSD1351ColorOLEDBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic 1.44 in ST7735 TFT Module — SPI. */
export const Generic144InST7735TFTModule_PIN_LABELS = DISPLAY8_PIN_LABELS
export const Generic144InST7735TFTModule_PIN_ATTRIBUTES = DISPLAY8_PIN_ATTRIBUTES
export const Generic144InST7735TFTModule_FOOTPRINT = FOOTPRINT_F8
export type Generic144InST7735TFTModuleProps = ChipProps<typeof Generic144InST7735TFTModule_PIN_LABELS>
export const Generic144InST7735TFTModule = (props: Generic144InST7735TFTModuleProps) => (
  <chip
    {...props}
    displayName="Generic 1.44 in ST7735 TFT Module"
    mfn="Generic"
    footprint={Generic144InST7735TFTModule_FOOTPRINT}
    pinLabels={Generic144InST7735TFTModule_PIN_LABELS}
    pinAttributes={Generic144InST7735TFTModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit 1.8 in ST7735R TFT Breakout — SPI. */
export const Adafruit18InST7735RTFTBreakout_PIN_LABELS = DISPLAY8_PIN_LABELS
export const Adafruit18InST7735RTFTBreakout_PIN_ATTRIBUTES = DISPLAY8_PIN_ATTRIBUTES
export const Adafruit18InST7735RTFTBreakout_FOOTPRINT = FOOTPRINT_F8
export type Adafruit18InST7735RTFTBreakoutProps = ChipProps<typeof Adafruit18InST7735RTFTBreakout_PIN_LABELS>
export const Adafruit18InST7735RTFTBreakout = (props: Adafruit18InST7735RTFTBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit 1.8 in ST7735R TFT Breakout"
    mfn="Adafruit"
    footprint={Adafruit18InST7735RTFTBreakout_FOOTPRINT}
    pinLabels={Adafruit18InST7735RTFTBreakout_PIN_LABELS}
    pinAttributes={Adafruit18InST7735RTFTBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit 2.0 in ST7789 TFT Breakout — SPI. */
export const Adafruit20InST7789TFTBreakout_PIN_LABELS = DISPLAY8_PIN_LABELS
export const Adafruit20InST7789TFTBreakout_PIN_ATTRIBUTES = DISPLAY8_PIN_ATTRIBUTES
export const Adafruit20InST7789TFTBreakout_FOOTPRINT = FOOTPRINT_F8
export type Adafruit20InST7789TFTBreakoutProps = ChipProps<typeof Adafruit20InST7789TFTBreakout_PIN_LABELS>
export const Adafruit20InST7789TFTBreakout = (props: Adafruit20InST7789TFTBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit 2.0 in ST7789 TFT Breakout"
    mfn="Adafruit"
    footprint={Adafruit20InST7789TFTBreakout_FOOTPRINT}
    pinLabels={Adafruit20InST7789TFTBreakout_PIN_LABELS}
    pinAttributes={Adafruit20InST7789TFTBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic 2.4 in ILI9341 TFT Module — SPI/parallel variants. */
export const Generic24InILI9341TFTModule_PIN_LABELS = DISPLAY8_PIN_LABELS
export const Generic24InILI9341TFTModule_PIN_ATTRIBUTES = DISPLAY8_PIN_ATTRIBUTES
export const Generic24InILI9341TFTModule_FOOTPRINT = FOOTPRINT_F8
export type Generic24InILI9341TFTModuleProps = ChipProps<typeof Generic24InILI9341TFTModule_PIN_LABELS>
export const Generic24InILI9341TFTModule = (props: Generic24InILI9341TFTModuleProps) => (
  <chip
    {...props}
    displayName="Generic 2.4 in ILI9341 TFT Module"
    mfn="Generic"
    footprint={Generic24InILI9341TFTModule_FOOTPRINT}
    pinLabels={Generic24InILI9341TFTModule_PIN_LABELS}
    pinAttributes={Generic24InILI9341TFTModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit 2.8 in ILI9341 TFT Touchscreen Breakout — SPI. */
export const Adafruit28InILI9341TFTTouchscreenBreakout_PIN_LABELS = DISPLAY8_PIN_LABELS
export const Adafruit28InILI9341TFTTouchscreenBreakout_PIN_ATTRIBUTES = DISPLAY8_PIN_ATTRIBUTES
export const Adafruit28InILI9341TFTTouchscreenBreakout_FOOTPRINT = FOOTPRINT_F8
export type Adafruit28InILI9341TFTTouchscreenBreakoutProps = ChipProps<typeof Adafruit28InILI9341TFTTouchscreenBreakout_PIN_LABELS>
export const Adafruit28InILI9341TFTTouchscreenBreakout = (props: Adafruit28InILI9341TFTTouchscreenBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit 2.8 in ILI9341 TFT Touchscreen Breakout"
    mfn="Adafruit"
    footprint={Adafruit28InILI9341TFTTouchscreenBreakout_FOOTPRINT}
    pinLabels={Adafruit28InILI9341TFTTouchscreenBreakout_PIN_LABELS}
    pinAttributes={Adafruit28InILI9341TFTTouchscreenBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit 3.5 in HX8357 TFT Touchscreen Breakout — SPI. */
export const Adafruit35InHX8357TFTTouchscreenBreakout_PIN_LABELS = DISPLAY8_PIN_LABELS
export const Adafruit35InHX8357TFTTouchscreenBreakout_PIN_ATTRIBUTES = DISPLAY8_PIN_ATTRIBUTES
export const Adafruit35InHX8357TFTTouchscreenBreakout_FOOTPRINT = FOOTPRINT_F8
export type Adafruit35InHX8357TFTTouchscreenBreakoutProps = ChipProps<typeof Adafruit35InHX8357TFTTouchscreenBreakout_PIN_LABELS>
export const Adafruit35InHX8357TFTTouchscreenBreakout = (props: Adafruit35InHX8357TFTTouchscreenBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit 3.5 in HX8357 TFT Touchscreen Breakout"
    mfn="Adafruit"
    footprint={Adafruit35InHX8357TFTTouchscreenBreakout_FOOTPRINT}
    pinLabels={Adafruit35InHX8357TFTTouchscreenBreakout_PIN_LABELS}
    pinAttributes={Adafruit35InHX8357TFTTouchscreenBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Waveshare 1.28 in GC9A01 Round LCD Module — SPI. */
export const Waveshare128InGC9A01RoundLCDModule_PIN_LABELS = SPI6_PIN_LABELS
export const Waveshare128InGC9A01RoundLCDModule_PIN_ATTRIBUTES = SPI6_PIN_ATTRIBUTES
export const Waveshare128InGC9A01RoundLCDModule_FOOTPRINT = FOOTPRINT_F6
export type Waveshare128InGC9A01RoundLCDModuleProps = ChipProps<typeof Waveshare128InGC9A01RoundLCDModule_PIN_LABELS>
export const Waveshare128InGC9A01RoundLCDModule = (props: Waveshare128InGC9A01RoundLCDModuleProps) => (
  <chip
    {...props}
    displayName="Waveshare 1.28 in GC9A01 Round LCD Module"
    mfn="Waveshare"
    footprint={Waveshare128InGC9A01RoundLCDModule_FOOTPRINT}
    pinLabels={Waveshare128InGC9A01RoundLCDModule_PIN_LABELS}
    pinAttributes={Waveshare128InGC9A01RoundLCDModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Waveshare 1.54 in e-Paper Display Module — SPI. */
export const Waveshare154InEPaperDisplayModule_PIN_LABELS = DISPLAY8_PIN_LABELS
export const Waveshare154InEPaperDisplayModule_PIN_ATTRIBUTES = DISPLAY8_PIN_ATTRIBUTES
export const Waveshare154InEPaperDisplayModule_FOOTPRINT = FOOTPRINT_F8
export type Waveshare154InEPaperDisplayModuleProps = ChipProps<typeof Waveshare154InEPaperDisplayModule_PIN_LABELS>
export const Waveshare154InEPaperDisplayModule = (props: Waveshare154InEPaperDisplayModuleProps) => (
  <chip
    {...props}
    displayName="Waveshare 1.54 in e-Paper Display Module"
    mfn="Waveshare"
    footprint={Waveshare154InEPaperDisplayModule_FOOTPRINT}
    pinLabels={Waveshare154InEPaperDisplayModule_PIN_LABELS}
    pinAttributes={Waveshare154InEPaperDisplayModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Waveshare 2.13 in e-Paper Display Module — SPI. */
export const Waveshare213InEPaperDisplayModule_PIN_LABELS = DISPLAY8_PIN_LABELS
export const Waveshare213InEPaperDisplayModule_PIN_ATTRIBUTES = DISPLAY8_PIN_ATTRIBUTES
export const Waveshare213InEPaperDisplayModule_FOOTPRINT = FOOTPRINT_F8
export type Waveshare213InEPaperDisplayModuleProps = ChipProps<typeof Waveshare213InEPaperDisplayModule_PIN_LABELS>
export const Waveshare213InEPaperDisplayModule = (props: Waveshare213InEPaperDisplayModuleProps) => (
  <chip
    {...props}
    displayName="Waveshare 2.13 in e-Paper Display Module"
    mfn="Waveshare"
    footprint={Waveshare213InEPaperDisplayModule_FOOTPRINT}
    pinLabels={Waveshare213InEPaperDisplayModule_PIN_LABELS}
    pinAttributes={Waveshare213InEPaperDisplayModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Waveshare 2.9 in e-Paper Display Module — SPI. */
export const Waveshare29InEPaperDisplayModule_PIN_LABELS = DISPLAY8_PIN_LABELS
export const Waveshare29InEPaperDisplayModule_PIN_ATTRIBUTES = DISPLAY8_PIN_ATTRIBUTES
export const Waveshare29InEPaperDisplayModule_FOOTPRINT = FOOTPRINT_F8
export type Waveshare29InEPaperDisplayModuleProps = ChipProps<typeof Waveshare29InEPaperDisplayModule_PIN_LABELS>
export const Waveshare29InEPaperDisplayModule = (props: Waveshare29InEPaperDisplayModuleProps) => (
  <chip
    {...props}
    displayName="Waveshare 2.9 in e-Paper Display Module"
    mfn="Waveshare"
    footprint={Waveshare29InEPaperDisplayModule_FOOTPRINT}
    pinLabels={Waveshare29InEPaperDisplayModule_PIN_LABELS}
    pinAttributes={Waveshare29InEPaperDisplayModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Waveshare 4.2 in e-Paper Display Module — SPI. */
export const Waveshare42InEPaperDisplayModule_PIN_LABELS = DISPLAY8_PIN_LABELS
export const Waveshare42InEPaperDisplayModule_PIN_ATTRIBUTES = DISPLAY8_PIN_ATTRIBUTES
export const Waveshare42InEPaperDisplayModule_FOOTPRINT = FOOTPRINT_F8
export type Waveshare42InEPaperDisplayModuleProps = ChipProps<typeof Waveshare42InEPaperDisplayModule_PIN_LABELS>
export const Waveshare42InEPaperDisplayModule = (props: Waveshare42InEPaperDisplayModuleProps) => (
  <chip
    {...props}
    displayName="Waveshare 4.2 in e-Paper Display Module"
    mfn="Waveshare"
    footprint={Waveshare42InEPaperDisplayModule_FOOTPRINT}
    pinLabels={Waveshare42InEPaperDisplayModule_PIN_LABELS}
    pinAttributes={Waveshare42InEPaperDisplayModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic MAX7219 8x8 LED Matrix Module — SPI-like. */
export const GenericMAX72198x8LEDMatrixModule_PIN_LABELS = DISPLAY8_PIN_LABELS
export const GenericMAX72198x8LEDMatrixModule_PIN_ATTRIBUTES = DISPLAY8_PIN_ATTRIBUTES
export const GenericMAX72198x8LEDMatrixModule_FOOTPRINT = FOOTPRINT_F8
export type GenericMAX72198x8LEDMatrixModuleProps = ChipProps<typeof GenericMAX72198x8LEDMatrixModule_PIN_LABELS>
export const GenericMAX72198x8LEDMatrixModule = (props: GenericMAX72198x8LEDMatrixModuleProps) => (
  <chip
    {...props}
    displayName="Generic MAX7219 8x8 LED Matrix Module"
    mfn="Generic"
    footprint={GenericMAX72198x8LEDMatrixModule_FOOTPRINT}
    pinLabels={GenericMAX72198x8LEDMatrixModule_PIN_LABELS}
    pinAttributes={GenericMAX72198x8LEDMatrixModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit HT16K33 8x8 LED Matrix Backpack — I2C. */
export const AdafruitHT16K338x8LEDMatrixBackpack_PIN_LABELS = DISPLAY4_PIN_LABELS
export const AdafruitHT16K338x8LEDMatrixBackpack_PIN_ATTRIBUTES = DISPLAY4_PIN_ATTRIBUTES
export const AdafruitHT16K338x8LEDMatrixBackpack_FOOTPRINT = FOOTPRINT_F4
export type AdafruitHT16K338x8LEDMatrixBackpackProps = ChipProps<typeof AdafruitHT16K338x8LEDMatrixBackpack_PIN_LABELS>
export const AdafruitHT16K338x8LEDMatrixBackpack = (props: AdafruitHT16K338x8LEDMatrixBackpackProps) => (
  <chip
    {...props}
    displayName="Adafruit HT16K33 8x8 LED Matrix Backpack"
    mfn="Adafruit"
    footprint={AdafruitHT16K338x8LEDMatrixBackpack_FOOTPRINT}
    pinLabels={AdafruitHT16K338x8LEDMatrixBackpack_PIN_LABELS}
    pinAttributes={AdafruitHT16K338x8LEDMatrixBackpack_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit HT16K33 Bicolor 8x8 LED Matrix Backpack — I2C. */
export const AdafruitHT16K33Bicolor8x8LEDMatrixBackpack_PIN_LABELS = DISPLAY4_PIN_LABELS
export const AdafruitHT16K33Bicolor8x8LEDMatrixBackpack_PIN_ATTRIBUTES = DISPLAY4_PIN_ATTRIBUTES
export const AdafruitHT16K33Bicolor8x8LEDMatrixBackpack_FOOTPRINT = FOOTPRINT_F4
export type AdafruitHT16K33Bicolor8x8LEDMatrixBackpackProps = ChipProps<typeof AdafruitHT16K33Bicolor8x8LEDMatrixBackpack_PIN_LABELS>
export const AdafruitHT16K33Bicolor8x8LEDMatrixBackpack = (props: AdafruitHT16K33Bicolor8x8LEDMatrixBackpackProps) => (
  <chip
    {...props}
    displayName="Adafruit HT16K33 Bicolor 8x8 LED Matrix Backpack"
    mfn="Adafruit"
    footprint={AdafruitHT16K33Bicolor8x8LEDMatrixBackpack_FOOTPRINT}
    pinLabels={AdafruitHT16K33Bicolor8x8LEDMatrixBackpack_PIN_LABELS}
    pinAttributes={AdafruitHT16K33Bicolor8x8LEDMatrixBackpack_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit HT16K33 4-Digit 7-Segment Backpack — I2C. */
export const AdafruitHT16K334Digit7SegmentBackpack_PIN_LABELS = DISPLAY4_PIN_LABELS
export const AdafruitHT16K334Digit7SegmentBackpack_PIN_ATTRIBUTES = DISPLAY4_PIN_ATTRIBUTES
export const AdafruitHT16K334Digit7SegmentBackpack_FOOTPRINT = FOOTPRINT_F4
export type AdafruitHT16K334Digit7SegmentBackpackProps = ChipProps<typeof AdafruitHT16K334Digit7SegmentBackpack_PIN_LABELS>
export const AdafruitHT16K334Digit7SegmentBackpack = (props: AdafruitHT16K334Digit7SegmentBackpackProps) => (
  <chip
    {...props}
    displayName="Adafruit HT16K33 4-Digit 7-Segment Backpack"
    mfn="Adafruit"
    footprint={AdafruitHT16K334Digit7SegmentBackpack_FOOTPRINT}
    pinLabels={AdafruitHT16K334Digit7SegmentBackpack_PIN_LABELS}
    pinAttributes={AdafruitHT16K334Digit7SegmentBackpack_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit HT16K33 4-Character 14-Segment Backpack — I2C. */
export const AdafruitHT16K334Character14SegmentBackpack_PIN_LABELS = DISPLAY4_PIN_LABELS
export const AdafruitHT16K334Character14SegmentBackpack_PIN_ATTRIBUTES = DISPLAY4_PIN_ATTRIBUTES
export const AdafruitHT16K334Character14SegmentBackpack_FOOTPRINT = FOOTPRINT_F4
export type AdafruitHT16K334Character14SegmentBackpackProps = ChipProps<typeof AdafruitHT16K334Character14SegmentBackpack_PIN_LABELS>
export const AdafruitHT16K334Character14SegmentBackpack = (props: AdafruitHT16K334Character14SegmentBackpackProps) => (
  <chip
    {...props}
    displayName="Adafruit HT16K33 4-Character 14-Segment Backpack"
    mfn="Adafruit"
    footprint={AdafruitHT16K334Character14SegmentBackpack_FOOTPRINT}
    pinLabels={AdafruitHT16K334Character14SegmentBackpack_PIN_LABELS}
    pinAttributes={AdafruitHT16K334Character14SegmentBackpack_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit IS31FL3731 16x9 Charlieplex LED Driver Breakout — I2C. */
export const AdafruitIS31FL373116x9CharlieplexLEDDriverBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitIS31FL373116x9CharlieplexLEDDriverBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitIS31FL373116x9CharlieplexLEDDriverBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitIS31FL373116x9CharlieplexLEDDriverBreakoutProps = ChipProps<typeof AdafruitIS31FL373116x9CharlieplexLEDDriverBreakout_PIN_LABELS>
export const AdafruitIS31FL373116x9CharlieplexLEDDriverBreakout = (props: AdafruitIS31FL373116x9CharlieplexLEDDriverBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit IS31FL3731 16x9 Charlieplex LED Driver Breakout"
    mfn="Adafruit"
    footprint={AdafruitIS31FL373116x9CharlieplexLEDDriverBreakout_FOOTPRINT}
    pinLabels={AdafruitIS31FL373116x9CharlieplexLEDDriverBreakout_PIN_LABELS}
    pinAttributes={AdafruitIS31FL373116x9CharlieplexLEDDriverBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit IS31FL3741 13x9 RGB Matrix Driver Breakout — I2C. */
export const AdafruitIS31FL374113x9RGBMatrixDriverBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitIS31FL374113x9RGBMatrixDriverBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitIS31FL374113x9RGBMatrixDriverBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitIS31FL374113x9RGBMatrixDriverBreakoutProps = ChipProps<typeof AdafruitIS31FL374113x9RGBMatrixDriverBreakout_PIN_LABELS>
export const AdafruitIS31FL374113x9RGBMatrixDriverBreakout = (props: AdafruitIS31FL374113x9RGBMatrixDriverBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit IS31FL3741 13x9 RGB Matrix Driver Breakout"
    mfn="Adafruit"
    footprint={AdafruitIS31FL374113x9RGBMatrixDriverBreakout_FOOTPRINT}
    pinLabels={AdafruitIS31FL374113x9RGBMatrixDriverBreakout_PIN_LABELS}
    pinAttributes={AdafruitIS31FL374113x9RGBMatrixDriverBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit TLC5947 24-Channel PWM LED Driver Breakout — serial. */
export const AdafruitTLC594724ChannelPWMLEDDriverBreakout_PIN_LABELS = GENERIC4_PIN_LABELS
export const AdafruitTLC594724ChannelPWMLEDDriverBreakout_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const AdafruitTLC594724ChannelPWMLEDDriverBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitTLC594724ChannelPWMLEDDriverBreakoutProps = ChipProps<typeof AdafruitTLC594724ChannelPWMLEDDriverBreakout_PIN_LABELS>
export const AdafruitTLC594724ChannelPWMLEDDriverBreakout = (props: AdafruitTLC594724ChannelPWMLEDDriverBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit TLC5947 24-Channel PWM LED Driver Breakout"
    mfn="Adafruit"
    footprint={AdafruitTLC594724ChannelPWMLEDDriverBreakout_FOOTPRINT}
    pinLabels={AdafruitTLC594724ChannelPWMLEDDriverBreakout_PIN_LABELS}
    pinAttributes={AdafruitTLC594724ChannelPWMLEDDriverBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit TLC59711 12-Channel PWM LED Driver Breakout — SPI-like. */
export const AdafruitTLC5971112ChannelPWMLEDDriverBreakout_PIN_LABELS = SPI6_PIN_LABELS
export const AdafruitTLC5971112ChannelPWMLEDDriverBreakout_PIN_ATTRIBUTES = SPI6_PIN_ATTRIBUTES
export const AdafruitTLC5971112ChannelPWMLEDDriverBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitTLC5971112ChannelPWMLEDDriverBreakoutProps = ChipProps<typeof AdafruitTLC5971112ChannelPWMLEDDriverBreakout_PIN_LABELS>
export const AdafruitTLC5971112ChannelPWMLEDDriverBreakout = (props: AdafruitTLC5971112ChannelPWMLEDDriverBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit TLC59711 12-Channel PWM LED Driver Breakout"
    mfn="Adafruit"
    footprint={AdafruitTLC5971112ChannelPWMLEDDriverBreakout_FOOTPRINT}
    pinLabels={AdafruitTLC5971112ChannelPWMLEDDriverBreakout_PIN_LABELS}
    pinAttributes={AdafruitTLC5971112ChannelPWMLEDDriverBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit NeoPixel Stick, 8 x WS2812B — single-wire. */
export const AdafruitNeoPixelStick8XWS2812B_PIN_LABELS = ONEWIRE3_PIN_LABELS
export const AdafruitNeoPixelStick8XWS2812B_PIN_ATTRIBUTES = ONEWIRE3_PIN_ATTRIBUTES
export const AdafruitNeoPixelStick8XWS2812B_FOOTPRINT = FOOTPRINT_F3
export type AdafruitNeoPixelStick8XWS2812BProps = ChipProps<typeof AdafruitNeoPixelStick8XWS2812B_PIN_LABELS>
export const AdafruitNeoPixelStick8XWS2812B = (props: AdafruitNeoPixelStick8XWS2812BProps) => (
  <chip
    {...props}
    displayName="Adafruit NeoPixel Stick, 8 x WS2812B"
    mfn="Adafruit"
    footprint={AdafruitNeoPixelStick8XWS2812B_FOOTPRINT}
    pinLabels={AdafruitNeoPixelStick8XWS2812B_PIN_LABELS}
    pinAttributes={AdafruitNeoPixelStick8XWS2812B_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit DotStar Stick, 8 x APA102 — clock/data. */
export const AdafruitDotStarStick8XAPA102_PIN_LABELS = GENERIC4_PIN_LABELS
export const AdafruitDotStarStick8XAPA102_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const AdafruitDotStarStick8XAPA102_FOOTPRINT = FOOTPRINT_F4
export type AdafruitDotStarStick8XAPA102Props = ChipProps<typeof AdafruitDotStarStick8XAPA102_PIN_LABELS>
export const AdafruitDotStarStick8XAPA102 = (props: AdafruitDotStarStick8XAPA102Props) => (
  <chip
    {...props}
    displayName="Adafruit DotStar Stick, 8 x APA102"
    mfn="Adafruit"
    footprint={AdafruitDotStarStick8XAPA102_FOOTPRINT}
    pinLabels={AdafruitDotStarStick8XAPA102_PIN_LABELS}
    pinAttributes={AdafruitDotStarStick8XAPA102_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit Seesaw Rotary Encoder Breakout — I2C. */
export const AdafruitSeesawRotaryEncoderBreakout_PIN_LABELS = ENCODER6_PIN_LABELS
export const AdafruitSeesawRotaryEncoderBreakout_PIN_ATTRIBUTES = ENCODER6_PIN_ATTRIBUTES
export const AdafruitSeesawRotaryEncoderBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitSeesawRotaryEncoderBreakoutProps = ChipProps<typeof AdafruitSeesawRotaryEncoderBreakout_PIN_LABELS>
export const AdafruitSeesawRotaryEncoderBreakout = (props: AdafruitSeesawRotaryEncoderBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit Seesaw Rotary Encoder Breakout"
    mfn="Adafruit"
    footprint={AdafruitSeesawRotaryEncoderBreakout_FOOTPRINT}
    pinLabels={AdafruitSeesawRotaryEncoderBreakout_PIN_LABELS}
    pinAttributes={AdafruitSeesawRotaryEncoderBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun Qwiic Twist RGB Rotary Encoder Breakout — I2C. */
export const SparkFunQwiicTwistRGBRotaryEncoderBreakout_PIN_LABELS = ENCODER6_PIN_LABELS
export const SparkFunQwiicTwistRGBRotaryEncoderBreakout_PIN_ATTRIBUTES = ENCODER6_PIN_ATTRIBUTES
export const SparkFunQwiicTwistRGBRotaryEncoderBreakout_FOOTPRINT = FOOTPRINT_F6
export type SparkFunQwiicTwistRGBRotaryEncoderBreakoutProps = ChipProps<typeof SparkFunQwiicTwistRGBRotaryEncoderBreakout_PIN_LABELS>
export const SparkFunQwiicTwistRGBRotaryEncoderBreakout = (props: SparkFunQwiicTwistRGBRotaryEncoderBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun Qwiic Twist RGB Rotary Encoder Breakout"
    mfn="SparkFun"
    footprint={SparkFunQwiicTwistRGBRotaryEncoderBreakout_FOOTPRINT}
    pinLabels={SparkFunQwiicTwistRGBRotaryEncoderBreakout_PIN_LABELS}
    pinAttributes={SparkFunQwiicTwistRGBRotaryEncoderBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit 5-Way Navigation Switch Breakout — digital. */
export const Adafruit5WayNavigationSwitchBreakout_PIN_LABELS = DIGITAL3_PIN_LABELS
export const Adafruit5WayNavigationSwitchBreakout_PIN_ATTRIBUTES = DIGITAL3_PIN_ATTRIBUTES
export const Adafruit5WayNavigationSwitchBreakout_FOOTPRINT = FOOTPRINT_F3
export type Adafruit5WayNavigationSwitchBreakoutProps = ChipProps<typeof Adafruit5WayNavigationSwitchBreakout_PIN_LABELS>
export const Adafruit5WayNavigationSwitchBreakout = (props: Adafruit5WayNavigationSwitchBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit 5-Way Navigation Switch Breakout"
    mfn="Adafruit"
    footprint={Adafruit5WayNavigationSwitchBreakout_FOOTPRINT}
    pinLabels={Adafruit5WayNavigationSwitchBreakout_PIN_LABELS}
    pinAttributes={Adafruit5WayNavigationSwitchBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun Thumb Joystick Breakout — dual analog + switch. */
export const SparkFunThumbJoystickBreakout_PIN_LABELS = JOYSTICK5_PIN_LABELS
export const SparkFunThumbJoystickBreakout_PIN_ATTRIBUTES = JOYSTICK5_PIN_ATTRIBUTES
export const SparkFunThumbJoystickBreakout_FOOTPRINT = FOOTPRINT_F5
export type SparkFunThumbJoystickBreakoutProps = ChipProps<typeof SparkFunThumbJoystickBreakout_PIN_LABELS>
export const SparkFunThumbJoystickBreakout = (props: SparkFunThumbJoystickBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun Thumb Joystick Breakout"
    mfn="SparkFun"
    footprint={SparkFunThumbJoystickBreakout_FOOTPRINT}
    pinLabels={SparkFunThumbJoystickBreakout_PIN_LABELS}
    pinAttributes={SparkFunThumbJoystickBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic KY-040 Rotary Encoder Module — quadrature + switch. */
export const GenericKY040RotaryEncoderModule_PIN_LABELS = ENCODER6_PIN_LABELS
export const GenericKY040RotaryEncoderModule_PIN_ATTRIBUTES = ENCODER6_PIN_ATTRIBUTES
export const GenericKY040RotaryEncoderModule_FOOTPRINT = FOOTPRINT_F6
export type GenericKY040RotaryEncoderModuleProps = ChipProps<typeof GenericKY040RotaryEncoderModule_PIN_LABELS>
export const GenericKY040RotaryEncoderModule = (props: GenericKY040RotaryEncoderModuleProps) => (
  <chip
    {...props}
    displayName="Generic KY-040 Rotary Encoder Module"
    mfn="Generic"
    footprint={GenericKY040RotaryEncoderModule_FOOTPRINT}
    pinLabels={GenericKY040RotaryEncoderModule_PIN_LABELS}
    pinAttributes={GenericKY040RotaryEncoderModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic TTP229 16-Key Capacitive Keypad Module — serial/digital. */
export const GenericTTP22916KeyCapacitiveKeypadModule_PIN_LABELS = MATRIX8_PIN_LABELS
export const GenericTTP22916KeyCapacitiveKeypadModule_PIN_ATTRIBUTES = MATRIX8_PIN_ATTRIBUTES
export const GenericTTP22916KeyCapacitiveKeypadModule_FOOTPRINT = FOOTPRINT_F8
export type GenericTTP22916KeyCapacitiveKeypadModuleProps = ChipProps<typeof GenericTTP22916KeyCapacitiveKeypadModule_PIN_LABELS>
export const GenericTTP22916KeyCapacitiveKeypadModule = (props: GenericTTP22916KeyCapacitiveKeypadModuleProps) => (
  <chip
    {...props}
    displayName="Generic TTP229 16-Key Capacitive Keypad Module"
    mfn="Generic"
    footprint={GenericTTP22916KeyCapacitiveKeypadModule_FOOTPRINT}
    pinLabels={GenericTTP22916KeyCapacitiveKeypadModule_PIN_LABELS}
    pinAttributes={GenericTTP22916KeyCapacitiveKeypadModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic 4x4 Matrix Keypad 0.1 in Breakout Adapter — 8-pin matrix. */
export const Generic4x4MatrixKeypad01InBreakoutAdapter_PIN_LABELS = MATRIX8_PIN_LABELS
export const Generic4x4MatrixKeypad01InBreakoutAdapter_PIN_ATTRIBUTES = MATRIX8_PIN_ATTRIBUTES
export const Generic4x4MatrixKeypad01InBreakoutAdapter_FOOTPRINT = FOOTPRINT_F8
export type Generic4x4MatrixKeypad01InBreakoutAdapterProps = ChipProps<typeof Generic4x4MatrixKeypad01InBreakoutAdapter_PIN_LABELS>
export const Generic4x4MatrixKeypad01InBreakoutAdapter = (props: Generic4x4MatrixKeypad01InBreakoutAdapterProps) => (
  <chip
    {...props}
    displayName="Generic 4x4 Matrix Keypad 0.1 in Breakout Adapter"
    mfn="Generic"
    footprint={Generic4x4MatrixKeypad01InBreakoutAdapter_FOOTPRINT}
    pinLabels={Generic4x4MatrixKeypad01InBreakoutAdapter_PIN_LABELS}
    pinAttributes={Generic4x4MatrixKeypad01InBreakoutAdapter_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu DRV8825 Stepper Motor Driver Carrier — StepStick-compatible. */
export const PololuDRV8825StepperMotorDriverCarrier_PIN_LABELS = STEPPER16_PIN_LABELS
export const PololuDRV8825StepperMotorDriverCarrier_PIN_ATTRIBUTES = STEPPER16_PIN_ATTRIBUTES
export const PololuDRV8825StepperMotorDriverCarrier_FOOTPRINT = FOOTPRINT_F16
export type PololuDRV8825StepperMotorDriverCarrierProps = ChipProps<typeof PololuDRV8825StepperMotorDriverCarrier_PIN_LABELS>
export const PololuDRV8825StepperMotorDriverCarrier = (props: PololuDRV8825StepperMotorDriverCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu DRV8825 Stepper Motor Driver Carrier"
    mfn="Pololu"
    footprint={PololuDRV8825StepperMotorDriverCarrier_FOOTPRINT}
    pinLabels={PololuDRV8825StepperMotorDriverCarrier_PIN_LABELS}
    pinAttributes={PololuDRV8825StepperMotorDriverCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu DRV8834 Low-Voltage Stepper Driver Carrier — StepStick-compatible. */
export const PololuDRV8834LowVoltageStepperDriverCarrier_PIN_LABELS = STEPPER16_PIN_LABELS
export const PololuDRV8834LowVoltageStepperDriverCarrier_PIN_ATTRIBUTES = STEPPER16_PIN_ATTRIBUTES
export const PololuDRV8834LowVoltageStepperDriverCarrier_FOOTPRINT = FOOTPRINT_F16
export type PololuDRV8834LowVoltageStepperDriverCarrierProps = ChipProps<typeof PololuDRV8834LowVoltageStepperDriverCarrier_PIN_LABELS>
export const PololuDRV8834LowVoltageStepperDriverCarrier = (props: PololuDRV8834LowVoltageStepperDriverCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu DRV8834 Low-Voltage Stepper Driver Carrier"
    mfn="Pololu"
    footprint={PololuDRV8834LowVoltageStepperDriverCarrier_FOOTPRINT}
    pinLabels={PololuDRV8834LowVoltageStepperDriverCarrier_PIN_LABELS}
    pinAttributes={PololuDRV8834LowVoltageStepperDriverCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu DRV8880 Stepper Motor Driver Carrier — microstepping carrier. */
export const PololuDRV8880StepperMotorDriverCarrier_PIN_LABELS = STEPPER16_PIN_LABELS
export const PololuDRV8880StepperMotorDriverCarrier_PIN_ATTRIBUTES = STEPPER16_PIN_ATTRIBUTES
export const PololuDRV8880StepperMotorDriverCarrier_FOOTPRINT = FOOTPRINT_F16
export type PololuDRV8880StepperMotorDriverCarrierProps = ChipProps<typeof PololuDRV8880StepperMotorDriverCarrier_PIN_LABELS>
export const PololuDRV8880StepperMotorDriverCarrier = (props: PololuDRV8880StepperMotorDriverCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu DRV8880 Stepper Motor Driver Carrier"
    mfn="Pololu"
    footprint={PololuDRV8880StepperMotorDriverCarrier_FOOTPRINT}
    pinLabels={PololuDRV8880StepperMotorDriverCarrier_PIN_LABELS}
    pinAttributes={PololuDRV8880StepperMotorDriverCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu STSPIN220 Low-Voltage Stepper Driver Carrier — StepStick-compatible. */
export const PololuSTSPIN220LowVoltageStepperDriverCarrier_PIN_LABELS = STEPPER16_PIN_LABELS
export const PololuSTSPIN220LowVoltageStepperDriverCarrier_PIN_ATTRIBUTES = STEPPER16_PIN_ATTRIBUTES
export const PololuSTSPIN220LowVoltageStepperDriverCarrier_FOOTPRINT = FOOTPRINT_F16
export type PololuSTSPIN220LowVoltageStepperDriverCarrierProps = ChipProps<typeof PololuSTSPIN220LowVoltageStepperDriverCarrier_PIN_LABELS>
export const PololuSTSPIN220LowVoltageStepperDriverCarrier = (props: PololuSTSPIN220LowVoltageStepperDriverCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu STSPIN220 Low-Voltage Stepper Driver Carrier"
    mfn="Pololu"
    footprint={PololuSTSPIN220LowVoltageStepperDriverCarrier_FOOTPRINT}
    pinLabels={PololuSTSPIN220LowVoltageStepperDriverCarrier_PIN_LABELS}
    pinAttributes={PololuSTSPIN220LowVoltageStepperDriverCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu TB67S249FTG Stepper Motor Driver Carrier — high-current carrier. */
export const PololuTB67S249FTGStepperMotorDriverCarrier_PIN_LABELS = STEPPER16_PIN_LABELS
export const PololuTB67S249FTGStepperMotorDriverCarrier_PIN_ATTRIBUTES = STEPPER16_PIN_ATTRIBUTES
export const PololuTB67S249FTGStepperMotorDriverCarrier_FOOTPRINT = FOOTPRINT_F16
export type PololuTB67S249FTGStepperMotorDriverCarrierProps = ChipProps<typeof PololuTB67S249FTGStepperMotorDriverCarrier_PIN_LABELS>
export const PololuTB67S249FTGStepperMotorDriverCarrier = (props: PololuTB67S249FTGStepperMotorDriverCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu TB67S249FTG Stepper Motor Driver Carrier"
    mfn="Pololu"
    footprint={PololuTB67S249FTGStepperMotorDriverCarrier_FOOTPRINT}
    pinLabels={PololuTB67S249FTGStepperMotorDriverCarrier_PIN_LABELS}
    pinAttributes={PololuTB67S249FTGStepperMotorDriverCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Trinamic TMC2209 StepStick Module — UART stepper driver. */
export const TrinamicTMC2209StepStickModule_PIN_LABELS = STEPPER16_PIN_LABELS
export const TrinamicTMC2209StepStickModule_PIN_ATTRIBUTES = STEPPER16_PIN_ATTRIBUTES
export const TrinamicTMC2209StepStickModule_FOOTPRINT = FOOTPRINT_F16
export type TrinamicTMC2209StepStickModuleProps = ChipProps<typeof TrinamicTMC2209StepStickModule_PIN_LABELS>
export const TrinamicTMC2209StepStickModule = (props: TrinamicTMC2209StepStickModuleProps) => (
  <chip
    {...props}
    displayName="Trinamic TMC2209 StepStick Module"
    mfn="Trinamic"
    footprint={TrinamicTMC2209StepStickModule_FOOTPRINT}
    pinLabels={TrinamicTMC2209StepStickModule_PIN_LABELS}
    pinAttributes={TrinamicTMC2209StepStickModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Trinamic TMC2208 StepStick Module — UART stepper driver. */
export const TrinamicTMC2208StepStickModule_PIN_LABELS = STEPPER16_PIN_LABELS
export const TrinamicTMC2208StepStickModule_PIN_ATTRIBUTES = STEPPER16_PIN_ATTRIBUTES
export const TrinamicTMC2208StepStickModule_FOOTPRINT = FOOTPRINT_F16
export type TrinamicTMC2208StepStickModuleProps = ChipProps<typeof TrinamicTMC2208StepStickModule_PIN_LABELS>
export const TrinamicTMC2208StepStickModule = (props: TrinamicTMC2208StepStickModuleProps) => (
  <chip
    {...props}
    displayName="Trinamic TMC2208 StepStick Module"
    mfn="Trinamic"
    footprint={TrinamicTMC2208StepStickModule_FOOTPRINT}
    pinLabels={TrinamicTMC2208StepStickModule_PIN_LABELS}
    pinAttributes={TrinamicTMC2208StepStickModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Trinamic TMC2130 StepStick Module — SPI stepper driver. */
export const TrinamicTMC2130StepStickModule_PIN_LABELS = STEPPER16_PIN_LABELS
export const TrinamicTMC2130StepStickModule_PIN_ATTRIBUTES = STEPPER16_PIN_ATTRIBUTES
export const TrinamicTMC2130StepStickModule_FOOTPRINT = FOOTPRINT_F16
export type TrinamicTMC2130StepStickModuleProps = ChipProps<typeof TrinamicTMC2130StepStickModule_PIN_LABELS>
export const TrinamicTMC2130StepStickModule = (props: TrinamicTMC2130StepStickModuleProps) => (
  <chip
    {...props}
    displayName="Trinamic TMC2130 StepStick Module"
    mfn="Trinamic"
    footprint={TrinamicTMC2130StepStickModule_FOOTPRINT}
    pinLabels={TrinamicTMC2130StepStickModule_PIN_LABELS}
    pinAttributes={TrinamicTMC2130StepStickModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Trinamic TMC5160 StepStick Module — SPI high-voltage stepper driver. */
export const TrinamicTMC5160StepStickModule_PIN_LABELS = STEPPER16_PIN_LABELS
export const TrinamicTMC5160StepStickModule_PIN_ATTRIBUTES = STEPPER16_PIN_ATTRIBUTES
export const TrinamicTMC5160StepStickModule_FOOTPRINT = FOOTPRINT_F16
export type TrinamicTMC5160StepStickModuleProps = ChipProps<typeof TrinamicTMC5160StepStickModule_PIN_LABELS>
export const TrinamicTMC5160StepStickModule = (props: TrinamicTMC5160StepStickModuleProps) => (
  <chip
    {...props}
    displayName="Trinamic TMC5160 StepStick Module"
    mfn="Trinamic"
    footprint={TrinamicTMC5160StepStickModule_FOOTPRINT}
    pinLabels={TrinamicTMC5160StepStickModule_PIN_LABELS}
    pinAttributes={TrinamicTMC5160StepStickModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu MP6500 Stepper Motor Driver Carrier — StepStick-compatible. */
export const PololuMP6500StepperMotorDriverCarrier_PIN_LABELS = STEPPER16_PIN_LABELS
export const PololuMP6500StepperMotorDriverCarrier_PIN_ATTRIBUTES = STEPPER16_PIN_ATTRIBUTES
export const PololuMP6500StepperMotorDriverCarrier_FOOTPRINT = FOOTPRINT_F16
export type PololuMP6500StepperMotorDriverCarrierProps = ChipProps<typeof PololuMP6500StepperMotorDriverCarrier_PIN_LABELS>
export const PololuMP6500StepperMotorDriverCarrier = (props: PololuMP6500StepperMotorDriverCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu MP6500 Stepper Motor Driver Carrier"
    mfn="Pololu"
    footprint={PololuMP6500StepperMotorDriverCarrier_FOOTPRINT}
    pinLabels={PololuMP6500StepperMotorDriverCarrier_PIN_LABELS}
    pinAttributes={PololuMP6500StepperMotorDriverCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic LV8729 Stepper Motor Driver Module — StepStick-compatible. */
export const GenericLV8729StepperMotorDriverModule_PIN_LABELS = STEPPER16_PIN_LABELS
export const GenericLV8729StepperMotorDriverModule_PIN_ATTRIBUTES = STEPPER16_PIN_ATTRIBUTES
export const GenericLV8729StepperMotorDriverModule_FOOTPRINT = FOOTPRINT_F16
export type GenericLV8729StepperMotorDriverModuleProps = ChipProps<typeof GenericLV8729StepperMotorDriverModule_PIN_LABELS>
export const GenericLV8729StepperMotorDriverModule = (props: GenericLV8729StepperMotorDriverModuleProps) => (
  <chip
    {...props}
    displayName="Generic LV8729 Stepper Motor Driver Module"
    mfn="Generic"
    footprint={GenericLV8729StepperMotorDriverModule_FOOTPRINT}
    pinLabels={GenericLV8729StepperMotorDriverModule_PIN_LABELS}
    pinAttributes={GenericLV8729StepperMotorDriverModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic ULN2003 28BYJ-48 Stepper Driver Board — 1x4 logic header. */
export const GenericULN200328BYJ48StepperDriverBoard_PIN_LABELS = MOTOR6_PIN_LABELS
export const GenericULN200328BYJ48StepperDriverBoard_PIN_ATTRIBUTES = MOTOR6_PIN_ATTRIBUTES
export const GenericULN200328BYJ48StepperDriverBoard_FOOTPRINT = FOOTPRINT_F6
export type GenericULN200328BYJ48StepperDriverBoardProps = ChipProps<typeof GenericULN200328BYJ48StepperDriverBoard_PIN_LABELS>
export const GenericULN200328BYJ48StepperDriverBoard = (props: GenericULN200328BYJ48StepperDriverBoardProps) => (
  <chip
    {...props}
    displayName="Generic ULN2003 28BYJ-48 Stepper Driver Board"
    mfn="Generic"
    footprint={GenericULN200328BYJ48StepperDriverBoard_FOOTPRINT}
    pinLabels={GenericULN200328BYJ48StepperDriverBoard_PIN_LABELS}
    pinAttributes={GenericULN200328BYJ48StepperDriverBoard_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic L298N Dual H-Bridge Module — logic/control headers. */
export const GenericL298NDualHBridgeModule_PIN_LABELS = GENERIC4_PIN_LABELS
export const GenericL298NDualHBridgeModule_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const GenericL298NDualHBridgeModule_FOOTPRINT = FOOTPRINT_F4
export type GenericL298NDualHBridgeModuleProps = ChipProps<typeof GenericL298NDualHBridgeModule_PIN_LABELS>
export const GenericL298NDualHBridgeModule = (props: GenericL298NDualHBridgeModuleProps) => (
  <chip
    {...props}
    displayName="Generic L298N Dual H-Bridge Module"
    mfn="Generic"
    footprint={GenericL298NDualHBridgeModule_FOOTPRINT}
    pinLabels={GenericL298NDualHBridgeModule_PIN_LABELS}
    pinAttributes={GenericL298NDualHBridgeModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun TB6612FNG Dual Motor Driver Breakout — dual H-bridge. */
export const SparkFunTB6612FNGDualMotorDriverBreakout_PIN_LABELS = GENERIC4_PIN_LABELS
export const SparkFunTB6612FNGDualMotorDriverBreakout_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const SparkFunTB6612FNGDualMotorDriverBreakout_FOOTPRINT = FOOTPRINT_F4
export type SparkFunTB6612FNGDualMotorDriverBreakoutProps = ChipProps<typeof SparkFunTB6612FNGDualMotorDriverBreakout_PIN_LABELS>
export const SparkFunTB6612FNGDualMotorDriverBreakout = (props: SparkFunTB6612FNGDualMotorDriverBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun TB6612FNG Dual Motor Driver Breakout"
    mfn="SparkFun"
    footprint={SparkFunTB6612FNGDualMotorDriverBreakout_FOOTPRINT}
    pinLabels={SparkFunTB6612FNGDualMotorDriverBreakout_PIN_LABELS}
    pinAttributes={SparkFunTB6612FNGDualMotorDriverBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit DRV8833 Dual Motor Driver Breakout — dual H-bridge. */
export const AdafruitDRV8833DualMotorDriverBreakout_PIN_LABELS = GENERIC4_PIN_LABELS
export const AdafruitDRV8833DualMotorDriverBreakout_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const AdafruitDRV8833DualMotorDriverBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitDRV8833DualMotorDriverBreakoutProps = ChipProps<typeof AdafruitDRV8833DualMotorDriverBreakout_PIN_LABELS>
export const AdafruitDRV8833DualMotorDriverBreakout = (props: AdafruitDRV8833DualMotorDriverBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit DRV8833 Dual Motor Driver Breakout"
    mfn="Adafruit"
    footprint={AdafruitDRV8833DualMotorDriverBreakout_FOOTPRINT}
    pinLabels={AdafruitDRV8833DualMotorDriverBreakout_PIN_LABELS}
    pinAttributes={AdafruitDRV8833DualMotorDriverBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit DRV8871 DC Motor Driver Breakout — single H-bridge. */
export const AdafruitDRV8871DCMotorDriverBreakout_PIN_LABELS = GENERIC4_PIN_LABELS
export const AdafruitDRV8871DCMotorDriverBreakout_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const AdafruitDRV8871DCMotorDriverBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitDRV8871DCMotorDriverBreakoutProps = ChipProps<typeof AdafruitDRV8871DCMotorDriverBreakout_PIN_LABELS>
export const AdafruitDRV8871DCMotorDriverBreakout = (props: AdafruitDRV8871DCMotorDriverBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit DRV8871 DC Motor Driver Breakout"
    mfn="Adafruit"
    footprint={AdafruitDRV8871DCMotorDriverBreakout_FOOTPRINT}
    pinLabels={AdafruitDRV8871DCMotorDriverBreakout_PIN_LABELS}
    pinAttributes={AdafruitDRV8871DCMotorDriverBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu DRV8876 Motor Driver Carrier — single H-bridge. */
export const PololuDRV8876MotorDriverCarrier_PIN_LABELS = GENERIC4_PIN_LABELS
export const PololuDRV8876MotorDriverCarrier_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const PololuDRV8876MotorDriverCarrier_FOOTPRINT = FOOTPRINT_F4
export type PololuDRV8876MotorDriverCarrierProps = ChipProps<typeof PololuDRV8876MotorDriverCarrier_PIN_LABELS>
export const PololuDRV8876MotorDriverCarrier = (props: PololuDRV8876MotorDriverCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu DRV8876 Motor Driver Carrier"
    mfn="Pololu"
    footprint={PololuDRV8876MotorDriverCarrier_FOOTPRINT}
    pinLabels={PololuDRV8876MotorDriverCarrier_PIN_LABELS}
    pinAttributes={PololuDRV8876MotorDriverCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu DRV8251A Motor Driver Carrier — single H-bridge. */
export const PololuDRV8251AMotorDriverCarrier_PIN_LABELS = GENERIC4_PIN_LABELS
export const PololuDRV8251AMotorDriverCarrier_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const PololuDRV8251AMotorDriverCarrier_FOOTPRINT = FOOTPRINT_F4
export type PololuDRV8251AMotorDriverCarrierProps = ChipProps<typeof PololuDRV8251AMotorDriverCarrier_PIN_LABELS>
export const PololuDRV8251AMotorDriverCarrier = (props: PololuDRV8251AMotorDriverCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu DRV8251A Motor Driver Carrier"
    mfn="Pololu"
    footprint={PololuDRV8251AMotorDriverCarrier_FOOTPRINT}
    pinLabels={PololuDRV8251AMotorDriverCarrier_PIN_LABELS}
    pinAttributes={PololuDRV8251AMotorDriverCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu MAX14870 Motor Driver Carrier — single H-bridge. */
export const PololuMAX14870MotorDriverCarrier_PIN_LABELS = GENERIC4_PIN_LABELS
export const PololuMAX14870MotorDriverCarrier_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const PololuMAX14870MotorDriverCarrier_FOOTPRINT = FOOTPRINT_F4
export type PololuMAX14870MotorDriverCarrierProps = ChipProps<typeof PololuMAX14870MotorDriverCarrier_PIN_LABELS>
export const PololuMAX14870MotorDriverCarrier = (props: PololuMAX14870MotorDriverCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu MAX14870 Motor Driver Carrier"
    mfn="Pololu"
    footprint={PololuMAX14870MotorDriverCarrier_FOOTPRINT}
    pinLabels={PololuMAX14870MotorDriverCarrier_PIN_LABELS}
    pinAttributes={PololuMAX14870MotorDriverCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu VNH5019 Motor Driver Carrier — high-current H-bridge. */
export const PololuVNH5019MotorDriverCarrier_PIN_LABELS = GENERIC4_PIN_LABELS
export const PololuVNH5019MotorDriverCarrier_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const PololuVNH5019MotorDriverCarrier_FOOTPRINT = FOOTPRINT_F4
export type PololuVNH5019MotorDriverCarrierProps = ChipProps<typeof PololuVNH5019MotorDriverCarrier_PIN_LABELS>
export const PololuVNH5019MotorDriverCarrier = (props: PololuVNH5019MotorDriverCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu VNH5019 Motor Driver Carrier"
    mfn="Pololu"
    footprint={PololuVNH5019MotorDriverCarrier_FOOTPRINT}
    pinLabels={PololuVNH5019MotorDriverCarrier_PIN_LABELS}
    pinAttributes={PololuVNH5019MotorDriverCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic BTS7960 IBT-2 Motor Driver Module — high-current H-bridge. */
export const GenericBTS7960IBT2MotorDriverModule_PIN_LABELS = GENERIC4_PIN_LABELS
export const GenericBTS7960IBT2MotorDriverModule_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const GenericBTS7960IBT2MotorDriverModule_FOOTPRINT = FOOTPRINT_F4
export type GenericBTS7960IBT2MotorDriverModuleProps = ChipProps<typeof GenericBTS7960IBT2MotorDriverModule_PIN_LABELS>
export const GenericBTS7960IBT2MotorDriverModule = (props: GenericBTS7960IBT2MotorDriverModuleProps) => (
  <chip
    {...props}
    displayName="Generic BTS7960 IBT-2 Motor Driver Module"
    mfn="Generic"
    footprint={GenericBTS7960IBT2MotorDriverModule_FOOTPRINT}
    pinLabels={GenericBTS7960IBT2MotorDriverModule_PIN_LABELS}
    pinAttributes={GenericBTS7960IBT2MotorDriverModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit PCA9685 16-Channel PWM/Servo Driver — I2C. */
export const AdafruitPCA968516ChannelPWMServoDriver_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitPCA968516ChannelPWMServoDriver_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitPCA968516ChannelPWMServoDriver_FOOTPRINT = FOOTPRINT_F4
export type AdafruitPCA968516ChannelPWMServoDriverProps = ChipProps<typeof AdafruitPCA968516ChannelPWMServoDriver_PIN_LABELS>
export const AdafruitPCA968516ChannelPWMServoDriver = (props: AdafruitPCA968516ChannelPWMServoDriverProps) => (
  <chip
    {...props}
    displayName="Adafruit PCA9685 16-Channel PWM/Servo Driver"
    mfn="Adafruit"
    footprint={AdafruitPCA968516ChannelPWMServoDriver_FOOTPRINT}
    pinLabels={AdafruitPCA968516ChannelPWMServoDriver_PIN_LABELS}
    pinAttributes={AdafruitPCA968516ChannelPWMServoDriver_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu Micro Maestro 6-Channel USB Servo Controller — signal headers. */
export const PololuMicroMaestro6ChannelUSBServoController_PIN_LABELS = GENERIC4_PIN_LABELS
export const PololuMicroMaestro6ChannelUSBServoController_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const PololuMicroMaestro6ChannelUSBServoController_FOOTPRINT = FOOTPRINT_F4
export type PololuMicroMaestro6ChannelUSBServoControllerProps = ChipProps<typeof PololuMicroMaestro6ChannelUSBServoController_PIN_LABELS>
export const PololuMicroMaestro6ChannelUSBServoController = (props: PololuMicroMaestro6ChannelUSBServoControllerProps) => (
  <chip
    {...props}
    displayName="Pololu Micro Maestro 6-Channel USB Servo Controller"
    mfn="Pololu"
    footprint={PololuMicroMaestro6ChannelUSBServoController_FOOTPRINT}
    pinLabels={PololuMicroMaestro6ChannelUSBServoController_PIN_LABELS}
    pinAttributes={PololuMicroMaestro6ChannelUSBServoController_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun TMC6300 Three-Phase Motor Driver Breakout — three half-bridges. */
export const SparkFunTMC6300ThreePhaseMotorDriverBreakout_PIN_LABELS = STEPPER16_PIN_LABELS
export const SparkFunTMC6300ThreePhaseMotorDriverBreakout_PIN_ATTRIBUTES = STEPPER16_PIN_ATTRIBUTES
export const SparkFunTMC6300ThreePhaseMotorDriverBreakout_FOOTPRINT = FOOTPRINT_F16
export type SparkFunTMC6300ThreePhaseMotorDriverBreakoutProps = ChipProps<typeof SparkFunTMC6300ThreePhaseMotorDriverBreakout_PIN_LABELS>
export const SparkFunTMC6300ThreePhaseMotorDriverBreakout = (props: SparkFunTMC6300ThreePhaseMotorDriverBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun TMC6300 Three-Phase Motor Driver Breakout"
    mfn="SparkFun"
    footprint={SparkFunTMC6300ThreePhaseMotorDriverBreakout_FOOTPRINT}
    pinLabels={SparkFunTMC6300ThreePhaseMotorDriverBreakout_PIN_LABELS}
    pinAttributes={SparkFunTMC6300ThreePhaseMotorDriverBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit DRV8313 Brushless Motor Driver Breakout — three half-bridges. */
export const AdafruitDRV8313BrushlessMotorDriverBreakout_PIN_LABELS = GENERIC4_PIN_LABELS
export const AdafruitDRV8313BrushlessMotorDriverBreakout_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const AdafruitDRV8313BrushlessMotorDriverBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitDRV8313BrushlessMotorDriverBreakoutProps = ChipProps<typeof AdafruitDRV8313BrushlessMotorDriverBreakout_PIN_LABELS>
export const AdafruitDRV8313BrushlessMotorDriverBreakout = (props: AdafruitDRV8313BrushlessMotorDriverBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit DRV8313 Brushless Motor Driver Breakout"
    mfn="Adafruit"
    footprint={AdafruitDRV8313BrushlessMotorDriverBreakout_FOOTPRINT}
    pinLabels={AdafruitDRV8313BrushlessMotorDriverBreakout_PIN_LABELS}
    pinAttributes={AdafruitDRV8313BrushlessMotorDriverBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic 1-Channel 5V Relay Module — digital input. */
export const Generic1Channel5VRelayModule_PIN_LABELS = RELAY6_PIN_LABELS
export const Generic1Channel5VRelayModule_PIN_ATTRIBUTES = RELAY6_PIN_ATTRIBUTES
export const Generic1Channel5VRelayModule_FOOTPRINT = FOOTPRINT_F6
export type Generic1Channel5VRelayModuleProps = ChipProps<typeof Generic1Channel5VRelayModule_PIN_LABELS>
export const Generic1Channel5VRelayModule = (props: Generic1Channel5VRelayModuleProps) => (
  <chip
    {...props}
    displayName="Generic 1-Channel 5V Relay Module"
    mfn="Generic"
    footprint={Generic1Channel5VRelayModule_FOOTPRINT}
    pinLabels={Generic1Channel5VRelayModule_PIN_LABELS}
    pinAttributes={Generic1Channel5VRelayModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic 2-Channel 5V Relay Module — digital inputs. */
export const Generic2Channel5VRelayModule_PIN_LABELS = RELAY6_PIN_LABELS
export const Generic2Channel5VRelayModule_PIN_ATTRIBUTES = RELAY6_PIN_ATTRIBUTES
export const Generic2Channel5VRelayModule_FOOTPRINT = FOOTPRINT_F6
export type Generic2Channel5VRelayModuleProps = ChipProps<typeof Generic2Channel5VRelayModule_PIN_LABELS>
export const Generic2Channel5VRelayModule = (props: Generic2Channel5VRelayModuleProps) => (
  <chip
    {...props}
    displayName="Generic 2-Channel 5V Relay Module"
    mfn="Generic"
    footprint={Generic2Channel5VRelayModule_FOOTPRINT}
    pinLabels={Generic2Channel5VRelayModule_PIN_LABELS}
    pinAttributes={Generic2Channel5VRelayModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic 4-Channel 5V Relay Module — digital inputs. */
export const Generic4Channel5VRelayModule_PIN_LABELS = RELAY6_PIN_LABELS
export const Generic4Channel5VRelayModule_PIN_ATTRIBUTES = RELAY6_PIN_ATTRIBUTES
export const Generic4Channel5VRelayModule_FOOTPRINT = FOOTPRINT_F6
export type Generic4Channel5VRelayModuleProps = ChipProps<typeof Generic4Channel5VRelayModule_PIN_LABELS>
export const Generic4Channel5VRelayModule = (props: Generic4Channel5VRelayModuleProps) => (
  <chip
    {...props}
    displayName="Generic 4-Channel 5V Relay Module"
    mfn="Generic"
    footprint={Generic4Channel5VRelayModule_FOOTPRINT}
    pinLabels={Generic4Channel5VRelayModule_PIN_LABELS}
    pinAttributes={Generic4Channel5VRelayModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic 1-Channel Solid-State Relay Module — digital input. */
export const Generic1ChannelSolidStateRelayModule_PIN_LABELS = RELAY6_PIN_LABELS
export const Generic1ChannelSolidStateRelayModule_PIN_ATTRIBUTES = RELAY6_PIN_ATTRIBUTES
export const Generic1ChannelSolidStateRelayModule_FOOTPRINT = FOOTPRINT_F6
export type Generic1ChannelSolidStateRelayModuleProps = ChipProps<typeof Generic1ChannelSolidStateRelayModule_PIN_LABELS>
export const Generic1ChannelSolidStateRelayModule = (props: Generic1ChannelSolidStateRelayModuleProps) => (
  <chip
    {...props}
    displayName="Generic 1-Channel Solid-State Relay Module"
    mfn="Generic"
    footprint={Generic1ChannelSolidStateRelayModule_FOOTPRINT}
    pinLabels={Generic1ChannelSolidStateRelayModule_PIN_LABELS}
    pinAttributes={Generic1ChannelSolidStateRelayModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MOSFET Driver Breakout — logic-controlled load output. */
export const AdafruitMOSFETDriverBreakout_PIN_LABELS = GENERIC4_PIN_LABELS
export const AdafruitMOSFETDriverBreakout_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const AdafruitMOSFETDriverBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitMOSFETDriverBreakoutProps = ChipProps<typeof AdafruitMOSFETDriverBreakout_PIN_LABELS>
export const AdafruitMOSFETDriverBreakout = (props: AdafruitMOSFETDriverBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MOSFET Driver Breakout"
    mfn="Adafruit"
    footprint={AdafruitMOSFETDriverBreakout_FOOTPRINT}
    pinLabels={AdafruitMOSFETDriverBreakout_PIN_LABELS}
    pinAttributes={AdafruitMOSFETDriverBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit INA219 High-Side Current Sensor Breakout — I2C. */
export const AdafruitINA219HighSideCurrentSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitINA219HighSideCurrentSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitINA219HighSideCurrentSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitINA219HighSideCurrentSensorBreakoutProps = ChipProps<typeof AdafruitINA219HighSideCurrentSensorBreakout_PIN_LABELS>
export const AdafruitINA219HighSideCurrentSensorBreakout = (props: AdafruitINA219HighSideCurrentSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit INA219 High-Side Current Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitINA219HighSideCurrentSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitINA219HighSideCurrentSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitINA219HighSideCurrentSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit INA260 Current/Voltage/Power Sensor Breakout — I2C. */
export const AdafruitINA260CurrentVoltagePowerSensorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitINA260CurrentVoltagePowerSensorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitINA260CurrentVoltagePowerSensorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitINA260CurrentVoltagePowerSensorBreakoutProps = ChipProps<typeof AdafruitINA260CurrentVoltagePowerSensorBreakout_PIN_LABELS>
export const AdafruitINA260CurrentVoltagePowerSensorBreakout = (props: AdafruitINA260CurrentVoltagePowerSensorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit INA260 Current/Voltage/Power Sensor Breakout"
    mfn="Adafruit"
    footprint={AdafruitINA260CurrentVoltagePowerSensorBreakout_FOOTPRINT}
    pinLabels={AdafruitINA260CurrentVoltagePowerSensorBreakout_PIN_LABELS}
    pinAttributes={AdafruitINA260CurrentVoltagePowerSensorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun INA228 High-Precision Power Monitor Breakout — I2C. */
export const SparkFunINA228HighPrecisionPowerMonitorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const SparkFunINA228HighPrecisionPowerMonitorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const SparkFunINA228HighPrecisionPowerMonitorBreakout_FOOTPRINT = FOOTPRINT_F4
export type SparkFunINA228HighPrecisionPowerMonitorBreakoutProps = ChipProps<typeof SparkFunINA228HighPrecisionPowerMonitorBreakout_PIN_LABELS>
export const SparkFunINA228HighPrecisionPowerMonitorBreakout = (props: SparkFunINA228HighPrecisionPowerMonitorBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun INA228 High-Precision Power Monitor Breakout"
    mfn="SparkFun"
    footprint={SparkFunINA228HighPrecisionPowerMonitorBreakout_FOOTPRINT}
    pinLabels={SparkFunINA228HighPrecisionPowerMonitorBreakout_PIN_LABELS}
    pinAttributes={SparkFunINA228HighPrecisionPowerMonitorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun INA237 Power Monitor Breakout — I2C. */
export const SparkFunINA237PowerMonitorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const SparkFunINA237PowerMonitorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const SparkFunINA237PowerMonitorBreakout_FOOTPRINT = FOOTPRINT_F4
export type SparkFunINA237PowerMonitorBreakoutProps = ChipProps<typeof SparkFunINA237PowerMonitorBreakout_PIN_LABELS>
export const SparkFunINA237PowerMonitorBreakout = (props: SparkFunINA237PowerMonitorBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun INA237 Power Monitor Breakout"
    mfn="SparkFun"
    footprint={SparkFunINA237PowerMonitorBreakout_FOOTPRINT}
    pinLabels={SparkFunINA237PowerMonitorBreakout_PIN_LABELS}
    pinAttributes={SparkFunINA237PowerMonitorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic INA3221 Three-Channel Current Sensor Module — I2C. */
export const GenericINA3221ThreeChannelCurrentSensorModule_PIN_LABELS = I2C4_PIN_LABELS
export const GenericINA3221ThreeChannelCurrentSensorModule_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const GenericINA3221ThreeChannelCurrentSensorModule_FOOTPRINT = FOOTPRINT_F4
export type GenericINA3221ThreeChannelCurrentSensorModuleProps = ChipProps<typeof GenericINA3221ThreeChannelCurrentSensorModule_PIN_LABELS>
export const GenericINA3221ThreeChannelCurrentSensorModule = (props: GenericINA3221ThreeChannelCurrentSensorModuleProps) => (
  <chip
    {...props}
    displayName="Generic INA3221 Three-Channel Current Sensor Module"
    mfn="Generic"
    footprint={GenericINA3221ThreeChannelCurrentSensorModule_FOOTPRINT}
    pinLabels={GenericINA3221ThreeChannelCurrentSensorModule_PIN_LABELS}
    pinAttributes={GenericINA3221ThreeChannelCurrentSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit PAC1934 Four-Channel Power Monitor Breakout — I2C. */
export const AdafruitPAC1934FourChannelPowerMonitorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitPAC1934FourChannelPowerMonitorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitPAC1934FourChannelPowerMonitorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitPAC1934FourChannelPowerMonitorBreakoutProps = ChipProps<typeof AdafruitPAC1934FourChannelPowerMonitorBreakout_PIN_LABELS>
export const AdafruitPAC1934FourChannelPowerMonitorBreakout = (props: AdafruitPAC1934FourChannelPowerMonitorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit PAC1934 Four-Channel Power Monitor Breakout"
    mfn="Adafruit"
    footprint={AdafruitPAC1934FourChannelPowerMonitorBreakout_FOOTPRINT}
    pinLabels={AdafruitPAC1934FourChannelPowerMonitorBreakout_PIN_LABELS}
    pinAttributes={AdafruitPAC1934FourChannelPowerMonitorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MAX17048 LiPo Fuel Gauge Breakout — I2C. */
export const AdafruitMAX17048LiPoFuelGaugeBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitMAX17048LiPoFuelGaugeBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitMAX17048LiPoFuelGaugeBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitMAX17048LiPoFuelGaugeBreakoutProps = ChipProps<typeof AdafruitMAX17048LiPoFuelGaugeBreakout_PIN_LABELS>
export const AdafruitMAX17048LiPoFuelGaugeBreakout = (props: AdafruitMAX17048LiPoFuelGaugeBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MAX17048 LiPo Fuel Gauge Breakout"
    mfn="Adafruit"
    footprint={AdafruitMAX17048LiPoFuelGaugeBreakout_FOOTPRINT}
    pinLabels={AdafruitMAX17048LiPoFuelGaugeBreakout_PIN_LABELS}
    pinAttributes={AdafruitMAX17048LiPoFuelGaugeBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit LC709203F LiPoly Fuel Gauge Breakout — I2C. */
export const AdafruitLC709203FLiPolyFuelGaugeBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitLC709203FLiPolyFuelGaugeBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitLC709203FLiPolyFuelGaugeBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitLC709203FLiPolyFuelGaugeBreakoutProps = ChipProps<typeof AdafruitLC709203FLiPolyFuelGaugeBreakout_PIN_LABELS>
export const AdafruitLC709203FLiPolyFuelGaugeBreakout = (props: AdafruitLC709203FLiPolyFuelGaugeBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit LC709203F LiPoly Fuel Gauge Breakout"
    mfn="Adafruit"
    footprint={AdafruitLC709203FLiPolyFuelGaugeBreakout_FOOTPRINT}
    pinLabels={AdafruitLC709203FLiPolyFuelGaugeBreakout_PIN_LABELS}
    pinAttributes={AdafruitLC709203FLiPolyFuelGaugeBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun BQ27441 LiPo Fuel Gauge Breakout — I2C. */
export const SparkFunBQ27441LiPoFuelGaugeBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const SparkFunBQ27441LiPoFuelGaugeBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const SparkFunBQ27441LiPoFuelGaugeBreakout_FOOTPRINT = FOOTPRINT_F4
export type SparkFunBQ27441LiPoFuelGaugeBreakoutProps = ChipProps<typeof SparkFunBQ27441LiPoFuelGaugeBreakout_PIN_LABELS>
export const SparkFunBQ27441LiPoFuelGaugeBreakout = (props: SparkFunBQ27441LiPoFuelGaugeBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun BQ27441 LiPo Fuel Gauge Breakout"
    mfn="SparkFun"
    footprint={SparkFunBQ27441LiPoFuelGaugeBreakout_FOOTPRINT}
    pinLabels={SparkFunBQ27441LiPoFuelGaugeBreakout_PIN_LABELS}
    pinAttributes={SparkFunBQ27441LiPoFuelGaugeBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MPM3610 5V Buck Converter Breakout — regulated output. */
export const AdafruitMPM36105VBuckConverterBreakout_PIN_LABELS = POWER4_PIN_LABELS
export const AdafruitMPM36105VBuckConverterBreakout_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const AdafruitMPM36105VBuckConverterBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitMPM36105VBuckConverterBreakoutProps = ChipProps<typeof AdafruitMPM36105VBuckConverterBreakout_PIN_LABELS>
export const AdafruitMPM36105VBuckConverterBreakout = (props: AdafruitMPM36105VBuckConverterBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MPM3610 5V Buck Converter Breakout"
    mfn="Adafruit"
    footprint={AdafruitMPM36105VBuckConverterBreakout_FOOTPRINT}
    pinLabels={AdafruitMPM36105VBuckConverterBreakout_PIN_LABELS}
    pinAttributes={AdafruitMPM36105VBuckConverterBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun AP3429A Buck Regulator Breakout — adjustable/fixed variants. */
export const SparkFunAP3429ABuckRegulatorBreakout_PIN_LABELS = POWER4_PIN_LABELS
export const SparkFunAP3429ABuckRegulatorBreakout_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const SparkFunAP3429ABuckRegulatorBreakout_FOOTPRINT = FOOTPRINT_F4
export type SparkFunAP3429ABuckRegulatorBreakoutProps = ChipProps<typeof SparkFunAP3429ABuckRegulatorBreakout_PIN_LABELS>
export const SparkFunAP3429ABuckRegulatorBreakout = (props: SparkFunAP3429ABuckRegulatorBreakoutProps) => (
  <chip
    {...props}
    displayName="SparkFun AP3429A Buck Regulator Breakout"
    mfn="SparkFun"
    footprint={SparkFunAP3429ABuckRegulatorBreakout_FOOTPRINT}
    pinLabels={SparkFunAP3429ABuckRegulatorBreakout_PIN_LABELS}
    pinAttributes={SparkFunAP3429ABuckRegulatorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit TPS62827 3.3V Buck Converter Breakout — regulated output. */
export const AdafruitTPS6282733VBuckConverterBreakout_PIN_LABELS = POWER4_PIN_LABELS
export const AdafruitTPS6282733VBuckConverterBreakout_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const AdafruitTPS6282733VBuckConverterBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitTPS6282733VBuckConverterBreakoutProps = ChipProps<typeof AdafruitTPS6282733VBuckConverterBreakout_PIN_LABELS>
export const AdafruitTPS6282733VBuckConverterBreakout = (props: AdafruitTPS6282733VBuckConverterBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit TPS62827 3.3V Buck Converter Breakout"
    mfn="Adafruit"
    footprint={AdafruitTPS6282733VBuckConverterBreakout_FOOTPRINT}
    pinLabels={AdafruitTPS6282733VBuckConverterBreakout_PIN_LABELS}
    pinAttributes={AdafruitTPS6282733VBuckConverterBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit TPS61023 5V Boost Converter Breakout — regulated output. */
export const AdafruitTPS610235VBoostConverterBreakout_PIN_LABELS = POWER4_PIN_LABELS
export const AdafruitTPS610235VBoostConverterBreakout_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const AdafruitTPS610235VBoostConverterBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitTPS610235VBoostConverterBreakoutProps = ChipProps<typeof AdafruitTPS610235VBoostConverterBreakout_PIN_LABELS>
export const AdafruitTPS610235VBoostConverterBreakout = (props: AdafruitTPS610235VBoostConverterBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit TPS61023 5V Boost Converter Breakout"
    mfn="Adafruit"
    footprint={AdafruitTPS610235VBoostConverterBreakout_FOOTPRINT}
    pinLabels={AdafruitTPS610235VBoostConverterBreakout_PIN_LABELS}
    pinAttributes={AdafruitTPS610235VBoostConverterBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit PowerBoost 500 Basic — 5V boost converter. */
export const AdafruitPowerBoost500Basic_PIN_LABELS = POWER4_PIN_LABELS
export const AdafruitPowerBoost500Basic_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const AdafruitPowerBoost500Basic_FOOTPRINT = FOOTPRINT_F4
export type AdafruitPowerBoost500BasicProps = ChipProps<typeof AdafruitPowerBoost500Basic_PIN_LABELS>
export const AdafruitPowerBoost500Basic = (props: AdafruitPowerBoost500BasicProps) => (
  <chip
    {...props}
    displayName="Adafruit PowerBoost 500 Basic"
    mfn="Adafruit"
    footprint={AdafruitPowerBoost500Basic_FOOTPRINT}
    pinLabels={AdafruitPowerBoost500Basic_PIN_LABELS}
    pinAttributes={AdafruitPowerBoost500Basic_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit PowerBoost 1000 Basic — 5V boost converter. */
export const AdafruitPowerBoost1000Basic_PIN_LABELS = POWER4_PIN_LABELS
export const AdafruitPowerBoost1000Basic_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const AdafruitPowerBoost1000Basic_FOOTPRINT = FOOTPRINT_F4
export type AdafruitPowerBoost1000BasicProps = ChipProps<typeof AdafruitPowerBoost1000Basic_PIN_LABELS>
export const AdafruitPowerBoost1000Basic = (props: AdafruitPowerBoost1000BasicProps) => (
  <chip
    {...props}
    displayName="Adafruit PowerBoost 1000 Basic"
    mfn="Adafruit"
    footprint={AdafruitPowerBoost1000Basic_FOOTPRINT}
    pinLabels={AdafruitPowerBoost1000Basic_PIN_LABELS}
    pinAttributes={AdafruitPowerBoost1000Basic_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MCP73871 Solar LiPo Charger Breakout — load sharing. */
export const AdafruitMCP73871SolarLiPoChargerBreakout_PIN_LABELS = POWER4_PIN_LABELS
export const AdafruitMCP73871SolarLiPoChargerBreakout_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const AdafruitMCP73871SolarLiPoChargerBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitMCP73871SolarLiPoChargerBreakoutProps = ChipProps<typeof AdafruitMCP73871SolarLiPoChargerBreakout_PIN_LABELS>
export const AdafruitMCP73871SolarLiPoChargerBreakout = (props: AdafruitMCP73871SolarLiPoChargerBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MCP73871 Solar LiPo Charger Breakout"
    mfn="Adafruit"
    footprint={AdafruitMCP73871SolarLiPoChargerBreakout_FOOTPRINT}
    pinLabels={AdafruitMCP73871SolarLiPoChargerBreakout_PIN_LABELS}
    pinAttributes={AdafruitMCP73871SolarLiPoChargerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MCP73831 Micro-LiPo Charger Breakout — LiPo charger. */
export const AdafruitMCP73831MicroLiPoChargerBreakout_PIN_LABELS = POWER4_PIN_LABELS
export const AdafruitMCP73831MicroLiPoChargerBreakout_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const AdafruitMCP73831MicroLiPoChargerBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitMCP73831MicroLiPoChargerBreakoutProps = ChipProps<typeof AdafruitMCP73831MicroLiPoChargerBreakout_PIN_LABELS>
export const AdafruitMCP73831MicroLiPoChargerBreakout = (props: AdafruitMCP73831MicroLiPoChargerBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MCP73831 Micro-LiPo Charger Breakout"
    mfn="Adafruit"
    footprint={AdafruitMCP73831MicroLiPoChargerBreakout_FOOTPRINT}
    pinLabels={AdafruitMCP73831MicroLiPoChargerBreakout_PIN_LABELS}
    pinAttributes={AdafruitMCP73831MicroLiPoChargerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit BQ24074 USB/DC/Solar LiPo Charger Breakout — load sharing. */
export const AdafruitBQ24074USBDCSolarLiPoChargerBreakout_PIN_LABELS = POWER4_PIN_LABELS
export const AdafruitBQ24074USBDCSolarLiPoChargerBreakout_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const AdafruitBQ24074USBDCSolarLiPoChargerBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitBQ24074USBDCSolarLiPoChargerBreakoutProps = ChipProps<typeof AdafruitBQ24074USBDCSolarLiPoChargerBreakout_PIN_LABELS>
export const AdafruitBQ24074USBDCSolarLiPoChargerBreakout = (props: AdafruitBQ24074USBDCSolarLiPoChargerBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit BQ24074 USB/DC/Solar LiPo Charger Breakout"
    mfn="Adafruit"
    footprint={AdafruitBQ24074USBDCSolarLiPoChargerBreakout_FOOTPRINT}
    pinLabels={AdafruitBQ24074USBDCSolarLiPoChargerBreakout_PIN_LABELS}
    pinAttributes={AdafruitBQ24074USBDCSolarLiPoChargerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic TP4056 USB-C Li-Ion Charger/Protection Module — charger. */
export const GenericTP4056USBCLiIonChargerProtectionModule_PIN_LABELS = POWER4_PIN_LABELS
export const GenericTP4056USBCLiIonChargerProtectionModule_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const GenericTP4056USBCLiIonChargerProtectionModule_FOOTPRINT = FOOTPRINT_F4
export type GenericTP4056USBCLiIonChargerProtectionModuleProps = ChipProps<typeof GenericTP4056USBCLiIonChargerProtectionModule_PIN_LABELS>
export const GenericTP4056USBCLiIonChargerProtectionModule = (props: GenericTP4056USBCLiIonChargerProtectionModuleProps) => (
  <chip
    {...props}
    displayName="Generic TP4056 USB-C Li-Ion Charger/Protection Module"
    mfn="Generic"
    footprint={GenericTP4056USBCLiIonChargerProtectionModule_FOOTPRINT}
    pinLabels={GenericTP4056USBCLiIonChargerProtectionModule_PIN_LABELS}
    pinAttributes={GenericTP4056USBCLiIonChargerProtectionModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic AMS1117-3.3 Regulator Module — linear regulator. */
export const GenericAMS111733RegulatorModule_PIN_LABELS = POWER4_PIN_LABELS
export const GenericAMS111733RegulatorModule_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const GenericAMS111733RegulatorModule_FOOTPRINT = FOOTPRINT_F4
export type GenericAMS111733RegulatorModuleProps = ChipProps<typeof GenericAMS111733RegulatorModule_PIN_LABELS>
export const GenericAMS111733RegulatorModule = (props: GenericAMS111733RegulatorModuleProps) => (
  <chip
    {...props}
    displayName="Generic AMS1117-3.3 Regulator Module"
    mfn="Generic"
    footprint={GenericAMS111733RegulatorModule_FOOTPRINT}
    pinLabels={GenericAMS111733RegulatorModule_PIN_LABELS}
    pinAttributes={GenericAMS111733RegulatorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic AMS1117-5.0 Regulator Module — linear regulator. */
export const GenericAMS111750RegulatorModule_PIN_LABELS = POWER4_PIN_LABELS
export const GenericAMS111750RegulatorModule_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const GenericAMS111750RegulatorModule_FOOTPRINT = FOOTPRINT_F4
export type GenericAMS111750RegulatorModuleProps = ChipProps<typeof GenericAMS111750RegulatorModule_PIN_LABELS>
export const GenericAMS111750RegulatorModule = (props: GenericAMS111750RegulatorModuleProps) => (
  <chip
    {...props}
    displayName="Generic AMS1117-5.0 Regulator Module"
    mfn="Generic"
    footprint={GenericAMS111750RegulatorModule_FOOTPRINT}
    pinLabels={GenericAMS111750RegulatorModule_PIN_LABELS}
    pinAttributes={GenericAMS111750RegulatorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic MP1584 Mini Adjustable Buck Module — buck converter. */
export const GenericMP1584MiniAdjustableBuckModule_PIN_LABELS = POWER4_PIN_LABELS
export const GenericMP1584MiniAdjustableBuckModule_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const GenericMP1584MiniAdjustableBuckModule_FOOTPRINT = FOOTPRINT_F4
export type GenericMP1584MiniAdjustableBuckModuleProps = ChipProps<typeof GenericMP1584MiniAdjustableBuckModule_PIN_LABELS>
export const GenericMP1584MiniAdjustableBuckModule = (props: GenericMP1584MiniAdjustableBuckModuleProps) => (
  <chip
    {...props}
    displayName="Generic MP1584 Mini Adjustable Buck Module"
    mfn="Generic"
    footprint={GenericMP1584MiniAdjustableBuckModule_FOOTPRINT}
    pinLabels={GenericMP1584MiniAdjustableBuckModule_PIN_LABELS}
    pinAttributes={GenericMP1584MiniAdjustableBuckModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic LM2596 Adjustable Buck Module — buck converter. */
export const GenericLM2596AdjustableBuckModule_PIN_LABELS = POWER4_PIN_LABELS
export const GenericLM2596AdjustableBuckModule_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const GenericLM2596AdjustableBuckModule_FOOTPRINT = FOOTPRINT_F4
export type GenericLM2596AdjustableBuckModuleProps = ChipProps<typeof GenericLM2596AdjustableBuckModule_PIN_LABELS>
export const GenericLM2596AdjustableBuckModule = (props: GenericLM2596AdjustableBuckModuleProps) => (
  <chip
    {...props}
    displayName="Generic LM2596 Adjustable Buck Module"
    mfn="Generic"
    footprint={GenericLM2596AdjustableBuckModule_FOOTPRINT}
    pinLabels={GenericLM2596AdjustableBuckModule_PIN_LABELS}
    pinAttributes={GenericLM2596AdjustableBuckModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic MT3608 Adjustable Boost Module — boost converter. */
export const GenericMT3608AdjustableBoostModule_PIN_LABELS = POWER4_PIN_LABELS
export const GenericMT3608AdjustableBoostModule_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const GenericMT3608AdjustableBoostModule_FOOTPRINT = FOOTPRINT_F4
export type GenericMT3608AdjustableBoostModuleProps = ChipProps<typeof GenericMT3608AdjustableBoostModule_PIN_LABELS>
export const GenericMT3608AdjustableBoostModule = (props: GenericMT3608AdjustableBoostModuleProps) => (
  <chip
    {...props}
    displayName="Generic MT3608 Adjustable Boost Module"
    mfn="Generic"
    footprint={GenericMT3608AdjustableBoostModule_FOOTPRINT}
    pinLabels={GenericMT3608AdjustableBoostModule_PIN_LABELS}
    pinAttributes={GenericMT3608AdjustableBoostModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic XL6009 Adjustable Buck-Boost Module — buck-boost converter. */
export const GenericXL6009AdjustableBuckBoostModule_PIN_LABELS = POWER4_PIN_LABELS
export const GenericXL6009AdjustableBuckBoostModule_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const GenericXL6009AdjustableBuckBoostModule_FOOTPRINT = FOOTPRINT_F4
export type GenericXL6009AdjustableBuckBoostModuleProps = ChipProps<typeof GenericXL6009AdjustableBuckBoostModule_PIN_LABELS>
export const GenericXL6009AdjustableBuckBoostModule = (props: GenericXL6009AdjustableBuckBoostModuleProps) => (
  <chip
    {...props}
    displayName="Generic XL6009 Adjustable Buck-Boost Module"
    mfn="Generic"
    footprint={GenericXL6009AdjustableBuckBoostModule_FOOTPRINT}
    pinLabels={GenericXL6009AdjustableBuckBoostModule_PIN_LABELS}
    pinAttributes={GenericXL6009AdjustableBuckBoostModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu S7V8F3 3.3V Step-Up/Step-Down Regulator — carrier. */
export const PololuS7V8F333VStepUpStepDownRegulator_PIN_LABELS = POWER4_PIN_LABELS
export const PololuS7V8F333VStepUpStepDownRegulator_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const PololuS7V8F333VStepUpStepDownRegulator_FOOTPRINT = FOOTPRINT_F4
export type PololuS7V8F333VStepUpStepDownRegulatorProps = ChipProps<typeof PololuS7V8F333VStepUpStepDownRegulator_PIN_LABELS>
export const PololuS7V8F333VStepUpStepDownRegulator = (props: PololuS7V8F333VStepUpStepDownRegulatorProps) => (
  <chip
    {...props}
    displayName="Pololu S7V8F3 3.3V Step-Up/Step-Down Regulator"
    mfn="Pololu"
    footprint={PololuS7V8F333VStepUpStepDownRegulator_FOOTPRINT}
    pinLabels={PololuS7V8F333VStepUpStepDownRegulator_PIN_LABELS}
    pinAttributes={PololuS7V8F333VStepUpStepDownRegulator_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu S7V8F5 5V Step-Up/Step-Down Regulator — carrier. */
export const PololuS7V8F55VStepUpStepDownRegulator_PIN_LABELS = POWER4_PIN_LABELS
export const PololuS7V8F55VStepUpStepDownRegulator_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const PololuS7V8F55VStepUpStepDownRegulator_FOOTPRINT = FOOTPRINT_F4
export type PololuS7V8F55VStepUpStepDownRegulatorProps = ChipProps<typeof PololuS7V8F55VStepUpStepDownRegulator_PIN_LABELS>
export const PololuS7V8F55VStepUpStepDownRegulator = (props: PololuS7V8F55VStepUpStepDownRegulatorProps) => (
  <chip
    {...props}
    displayName="Pololu S7V8F5 5V Step-Up/Step-Down Regulator"
    mfn="Pololu"
    footprint={PololuS7V8F55VStepUpStepDownRegulator_FOOTPRINT}
    pinLabels={PololuS7V8F55VStepUpStepDownRegulator_PIN_LABELS}
    pinAttributes={PololuS7V8F55VStepUpStepDownRegulator_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu D24V5F5 5V Step-Down Regulator — carrier. */
export const PololuD24V5F55VStepDownRegulator_PIN_LABELS = POWER4_PIN_LABELS
export const PololuD24V5F55VStepDownRegulator_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const PololuD24V5F55VStepDownRegulator_FOOTPRINT = FOOTPRINT_F4
export type PololuD24V5F55VStepDownRegulatorProps = ChipProps<typeof PololuD24V5F55VStepDownRegulator_PIN_LABELS>
export const PololuD24V5F55VStepDownRegulator = (props: PololuD24V5F55VStepDownRegulatorProps) => (
  <chip
    {...props}
    displayName="Pololu D24V5F5 5V Step-Down Regulator"
    mfn="Pololu"
    footprint={PololuD24V5F55VStepDownRegulator_FOOTPRINT}
    pinLabels={PololuD24V5F55VStepDownRegulator_PIN_LABELS}
    pinAttributes={PololuD24V5F55VStepDownRegulator_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu D24V22F5 5V Step-Down Regulator — carrier. */
export const PololuD24V22F55VStepDownRegulator_PIN_LABELS = POWER4_PIN_LABELS
export const PololuD24V22F55VStepDownRegulator_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const PololuD24V22F55VStepDownRegulator_FOOTPRINT = FOOTPRINT_F4
export type PololuD24V22F55VStepDownRegulatorProps = ChipProps<typeof PololuD24V22F55VStepDownRegulator_PIN_LABELS>
export const PololuD24V22F55VStepDownRegulator = (props: PololuD24V22F55VStepDownRegulatorProps) => (
  <chip
    {...props}
    displayName="Pololu D24V22F5 5V Step-Down Regulator"
    mfn="Pololu"
    footprint={PololuD24V22F55VStepDownRegulator_FOOTPRINT}
    pinLabels={PololuD24V22F55VStepDownRegulator_PIN_LABELS}
    pinAttributes={PololuD24V22F55VStepDownRegulator_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu D36V6F12 12V Step-Down Regulator — carrier. */
export const PololuD36V6F1212VStepDownRegulator_PIN_LABELS = POWER4_PIN_LABELS
export const PololuD36V6F1212VStepDownRegulator_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const PololuD36V6F1212VStepDownRegulator_FOOTPRINT = FOOTPRINT_F4
export type PololuD36V6F1212VStepDownRegulatorProps = ChipProps<typeof PololuD36V6F1212VStepDownRegulator_PIN_LABELS>
export const PololuD36V6F1212VStepDownRegulator = (props: PololuD36V6F1212VStepDownRegulatorProps) => (
  <chip
    {...props}
    displayName="Pololu D36V6F12 12V Step-Down Regulator"
    mfn="Pololu"
    footprint={PololuD36V6F1212VStepDownRegulator_FOOTPRINT}
    pinLabels={PololuD36V6F1212VStepDownRegulator_PIN_LABELS}
    pinAttributes={PololuD36V6F1212VStepDownRegulator_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SparkFun Buck-Boost Converter COM-15208 — adjustable regulator. */
export const SparkFunBuckBoostConverterCOM15208_PIN_LABELS = POWER4_PIN_LABELS
export const SparkFunBuckBoostConverterCOM15208_PIN_ATTRIBUTES = POWER4_PIN_ATTRIBUTES
export const SparkFunBuckBoostConverterCOM15208_FOOTPRINT = FOOTPRINT_F4
export type SparkFunBuckBoostConverterCOM15208Props = ChipProps<typeof SparkFunBuckBoostConverterCOM15208_PIN_LABELS>
export const SparkFunBuckBoostConverterCOM15208 = (props: SparkFunBuckBoostConverterCOM15208Props) => (
  <chip
    {...props}
    displayName="SparkFun Buck-Boost Converter COM-15208"
    mfn="SparkFun"
    footprint={SparkFunBuckBoostConverterCOM15208_FOOTPRINT}
    pinLabels={SparkFunBuckBoostConverterCOM15208_PIN_LABELS}
    pinAttributes={SparkFunBuckBoostConverterCOM15208_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit LTC4316 I2C Address Translator Breakout — powered bus utility. */
export const AdafruitLTC4316I2CAddressTranslatorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitLTC4316I2CAddressTranslatorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitLTC4316I2CAddressTranslatorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitLTC4316I2CAddressTranslatorBreakoutProps = ChipProps<typeof AdafruitLTC4316I2CAddressTranslatorBreakout_PIN_LABELS>
export const AdafruitLTC4316I2CAddressTranslatorBreakout = (props: AdafruitLTC4316I2CAddressTranslatorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit LTC4316 I2C Address Translator Breakout"
    mfn="Adafruit"
    footprint={AdafruitLTC4316I2CAddressTranslatorBreakout_FOOTPRINT}
    pinLabels={AdafruitLTC4316I2CAddressTranslatorBreakout_PIN_LABELS}
    pinAttributes={AdafruitLTC4316I2CAddressTranslatorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic ACS712 5A Current Sensor Module — analog. */
export const GenericACS7125ACurrentSensorModule_PIN_LABELS = ANALOG3_PIN_LABELS
export const GenericACS7125ACurrentSensorModule_PIN_ATTRIBUTES = ANALOG3_PIN_ATTRIBUTES
export const GenericACS7125ACurrentSensorModule_FOOTPRINT = FOOTPRINT_F3
export type GenericACS7125ACurrentSensorModuleProps = ChipProps<typeof GenericACS7125ACurrentSensorModule_PIN_LABELS>
export const GenericACS7125ACurrentSensorModule = (props: GenericACS7125ACurrentSensorModuleProps) => (
  <chip
    {...props}
    displayName="Generic ACS712 5A Current Sensor Module"
    mfn="Generic"
    footprint={GenericACS7125ACurrentSensorModule_FOOTPRINT}
    pinLabels={GenericACS7125ACurrentSensorModule_PIN_LABELS}
    pinAttributes={GenericACS7125ACurrentSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic ACS712 20A Current Sensor Module — analog. */
export const GenericACS71220ACurrentSensorModule_PIN_LABELS = ANALOG3_PIN_LABELS
export const GenericACS71220ACurrentSensorModule_PIN_ATTRIBUTES = ANALOG3_PIN_ATTRIBUTES
export const GenericACS71220ACurrentSensorModule_FOOTPRINT = FOOTPRINT_F3
export type GenericACS71220ACurrentSensorModuleProps = ChipProps<typeof GenericACS71220ACurrentSensorModule_PIN_LABELS>
export const GenericACS71220ACurrentSensorModule = (props: GenericACS71220ACurrentSensorModuleProps) => (
  <chip
    {...props}
    displayName="Generic ACS712 20A Current Sensor Module"
    mfn="Generic"
    footprint={GenericACS71220ACurrentSensorModule_FOOTPRINT}
    pinLabels={GenericACS71220ACurrentSensorModule_PIN_LABELS}
    pinAttributes={GenericACS71220ACurrentSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic ACS712 30A Current Sensor Module — analog. */
export const GenericACS71230ACurrentSensorModule_PIN_LABELS = ANALOG3_PIN_LABELS
export const GenericACS71230ACurrentSensorModule_PIN_ATTRIBUTES = ANALOG3_PIN_ATTRIBUTES
export const GenericACS71230ACurrentSensorModule_FOOTPRINT = FOOTPRINT_F3
export type GenericACS71230ACurrentSensorModuleProps = ChipProps<typeof GenericACS71230ACurrentSensorModule_PIN_LABELS>
export const GenericACS71230ACurrentSensorModule = (props: GenericACS71230ACurrentSensorModuleProps) => (
  <chip
    {...props}
    displayName="Generic ACS712 30A Current Sensor Module"
    mfn="Generic"
    footprint={GenericACS71230ACurrentSensorModule_FOOTPRINT}
    pinLabels={GenericACS71230ACurrentSensorModule_PIN_LABELS}
    pinAttributes={GenericACS71230ACurrentSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic ZMPT101B AC Voltage Sensor Module — analog. */
export const GenericZMPT101BACVoltageSensorModule_PIN_LABELS = ANALOG3_PIN_LABELS
export const GenericZMPT101BACVoltageSensorModule_PIN_ATTRIBUTES = ANALOG3_PIN_ATTRIBUTES
export const GenericZMPT101BACVoltageSensorModule_FOOTPRINT = FOOTPRINT_F3
export type GenericZMPT101BACVoltageSensorModuleProps = ChipProps<typeof GenericZMPT101BACVoltageSensorModule_PIN_LABELS>
export const GenericZMPT101BACVoltageSensorModule = (props: GenericZMPT101BACVoltageSensorModuleProps) => (
  <chip
    {...props}
    displayName="Generic ZMPT101B AC Voltage Sensor Module"
    mfn="Generic"
    footprint={GenericZMPT101BACVoltageSensorModule_FOOTPRINT}
    pinLabels={GenericZMPT101BACVoltageSensorModule_PIN_LABELS}
    pinAttributes={GenericZMPT101BACVoltageSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit ADS1115 16-Bit 4-Channel ADC Breakout — I2C. */
export const AdafruitADS111516Bit4ChannelADCBreakout_PIN_LABELS = ADC8_PIN_LABELS
export const AdafruitADS111516Bit4ChannelADCBreakout_PIN_ATTRIBUTES = ADC8_PIN_ATTRIBUTES
export const AdafruitADS111516Bit4ChannelADCBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitADS111516Bit4ChannelADCBreakoutProps = ChipProps<typeof AdafruitADS111516Bit4ChannelADCBreakout_PIN_LABELS>
export const AdafruitADS111516Bit4ChannelADCBreakout = (props: AdafruitADS111516Bit4ChannelADCBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit ADS1115 16-Bit 4-Channel ADC Breakout"
    mfn="Adafruit"
    footprint={AdafruitADS111516Bit4ChannelADCBreakout_FOOTPRINT}
    pinLabels={AdafruitADS111516Bit4ChannelADCBreakout_PIN_LABELS}
    pinAttributes={AdafruitADS111516Bit4ChannelADCBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit ADS1015 12-Bit 4-Channel ADC Breakout — I2C. */
export const AdafruitADS101512Bit4ChannelADCBreakout_PIN_LABELS = ADC8_PIN_LABELS
export const AdafruitADS101512Bit4ChannelADCBreakout_PIN_ATTRIBUTES = ADC8_PIN_ATTRIBUTES
export const AdafruitADS101512Bit4ChannelADCBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitADS101512Bit4ChannelADCBreakoutProps = ChipProps<typeof AdafruitADS101512Bit4ChannelADCBreakout_PIN_LABELS>
export const AdafruitADS101512Bit4ChannelADCBreakout = (props: AdafruitADS101512Bit4ChannelADCBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit ADS1015 12-Bit 4-Channel ADC Breakout"
    mfn="Adafruit"
    footprint={AdafruitADS101512Bit4ChannelADCBreakout_FOOTPRINT}
    pinLabels={AdafruitADS101512Bit4ChannelADCBreakout_PIN_LABELS}
    pinAttributes={AdafruitADS101512Bit4ChannelADCBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit ADS1219 24-Bit 4-Channel ADC Breakout — I2C. */
export const AdafruitADS121924Bit4ChannelADCBreakout_PIN_LABELS = ADC8_PIN_LABELS
export const AdafruitADS121924Bit4ChannelADCBreakout_PIN_ATTRIBUTES = ADC8_PIN_ATTRIBUTES
export const AdafruitADS121924Bit4ChannelADCBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitADS121924Bit4ChannelADCBreakoutProps = ChipProps<typeof AdafruitADS121924Bit4ChannelADCBreakout_PIN_LABELS>
export const AdafruitADS121924Bit4ChannelADCBreakout = (props: AdafruitADS121924Bit4ChannelADCBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit ADS1219 24-Bit 4-Channel ADC Breakout"
    mfn="Adafruit"
    footprint={AdafruitADS121924Bit4ChannelADCBreakout_FOOTPRINT}
    pinLabels={AdafruitADS121924Bit4ChannelADCBreakout_PIN_LABELS}
    pinAttributes={AdafruitADS121924Bit4ChannelADCBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit ADS122C04 24-Bit ADC Breakout — I2C. */
export const AdafruitADS122C0424BitADCBreakout_PIN_LABELS = ADC8_PIN_LABELS
export const AdafruitADS122C0424BitADCBreakout_PIN_ATTRIBUTES = ADC8_PIN_ATTRIBUTES
export const AdafruitADS122C0424BitADCBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitADS122C0424BitADCBreakoutProps = ChipProps<typeof AdafruitADS122C0424BitADCBreakout_PIN_LABELS>
export const AdafruitADS122C0424BitADCBreakout = (props: AdafruitADS122C0424BitADCBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit ADS122C04 24-Bit ADC Breakout"
    mfn="Adafruit"
    footprint={AdafruitADS122C0424BitADCBreakout_FOOTPRINT}
    pinLabels={AdafruitADS122C0424BitADCBreakout_PIN_LABELS}
    pinAttributes={AdafruitADS122C0424BitADCBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic MCP3008 10-Bit 8-Channel ADC Breakout — SPI. */
export const GenericMCP300810Bit8ChannelADCBreakout_PIN_LABELS = ADC10_PIN_LABELS
export const GenericMCP300810Bit8ChannelADCBreakout_PIN_ATTRIBUTES = ADC10_PIN_ATTRIBUTES
export const GenericMCP300810Bit8ChannelADCBreakout_FOOTPRINT = FOOTPRINT_F10
export type GenericMCP300810Bit8ChannelADCBreakoutProps = ChipProps<typeof GenericMCP300810Bit8ChannelADCBreakout_PIN_LABELS>
export const GenericMCP300810Bit8ChannelADCBreakout = (props: GenericMCP300810Bit8ChannelADCBreakoutProps) => (
  <chip
    {...props}
    displayName="Generic MCP3008 10-Bit 8-Channel ADC Breakout"
    mfn="Generic"
    footprint={GenericMCP300810Bit8ChannelADCBreakout_FOOTPRINT}
    pinLabels={GenericMCP300810Bit8ChannelADCBreakout_PIN_LABELS}
    pinAttributes={GenericMCP300810Bit8ChannelADCBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic MCP3208 12-Bit 8-Channel ADC Breakout — SPI. */
export const GenericMCP320812Bit8ChannelADCBreakout_PIN_LABELS = ADC10_PIN_LABELS
export const GenericMCP320812Bit8ChannelADCBreakout_PIN_ATTRIBUTES = ADC10_PIN_ATTRIBUTES
export const GenericMCP320812Bit8ChannelADCBreakout_FOOTPRINT = FOOTPRINT_F10
export type GenericMCP320812Bit8ChannelADCBreakoutProps = ChipProps<typeof GenericMCP320812Bit8ChannelADCBreakout_PIN_LABELS>
export const GenericMCP320812Bit8ChannelADCBreakout = (props: GenericMCP320812Bit8ChannelADCBreakoutProps) => (
  <chip
    {...props}
    displayName="Generic MCP3208 12-Bit 8-Channel ADC Breakout"
    mfn="Generic"
    footprint={GenericMCP320812Bit8ChannelADCBreakout_FOOTPRINT}
    pinLabels={GenericMCP320812Bit8ChannelADCBreakout_PIN_LABELS}
    pinAttributes={GenericMCP320812Bit8ChannelADCBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MCP3421 18-Bit ADC Breakout — I2C. */
export const AdafruitMCP342118BitADCBreakout_PIN_LABELS = ADC8_PIN_LABELS
export const AdafruitMCP342118BitADCBreakout_PIN_ATTRIBUTES = ADC8_PIN_ATTRIBUTES
export const AdafruitMCP342118BitADCBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitMCP342118BitADCBreakoutProps = ChipProps<typeof AdafruitMCP342118BitADCBreakout_PIN_LABELS>
export const AdafruitMCP342118BitADCBreakout = (props: AdafruitMCP342118BitADCBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MCP3421 18-Bit ADC Breakout"
    mfn="Adafruit"
    footprint={AdafruitMCP342118BitADCBreakout_FOOTPRINT}
    pinLabels={AdafruitMCP342118BitADCBreakout_PIN_LABELS}
    pinAttributes={AdafruitMCP342118BitADCBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MCP3424 18-Bit 4-Channel ADC Breakout — I2C. */
export const AdafruitMCP342418Bit4ChannelADCBreakout_PIN_LABELS = ADC8_PIN_LABELS
export const AdafruitMCP342418Bit4ChannelADCBreakout_PIN_ATTRIBUTES = ADC8_PIN_ATTRIBUTES
export const AdafruitMCP342418Bit4ChannelADCBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitMCP342418Bit4ChannelADCBreakoutProps = ChipProps<typeof AdafruitMCP342418Bit4ChannelADCBreakout_PIN_LABELS>
export const AdafruitMCP342418Bit4ChannelADCBreakout = (props: AdafruitMCP342418Bit4ChannelADCBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MCP3424 18-Bit 4-Channel ADC Breakout"
    mfn="Adafruit"
    footprint={AdafruitMCP342418Bit4ChannelADCBreakout_FOOTPRINT}
    pinLabels={AdafruitMCP342418Bit4ChannelADCBreakout_PIN_LABELS}
    pinAttributes={AdafruitMCP342418Bit4ChannelADCBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit ADS7830 8-Bit 8-Channel ADC Breakout — I2C. */
export const AdafruitADS78308Bit8ChannelADCBreakout_PIN_LABELS = ADC8_PIN_LABELS
export const AdafruitADS78308Bit8ChannelADCBreakout_PIN_ATTRIBUTES = ADC8_PIN_ATTRIBUTES
export const AdafruitADS78308Bit8ChannelADCBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitADS78308Bit8ChannelADCBreakoutProps = ChipProps<typeof AdafruitADS78308Bit8ChannelADCBreakout_PIN_LABELS>
export const AdafruitADS78308Bit8ChannelADCBreakout = (props: AdafruitADS78308Bit8ChannelADCBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit ADS7830 8-Bit 8-Channel ADC Breakout"
    mfn="Adafruit"
    footprint={AdafruitADS78308Bit8ChannelADCBreakout_FOOTPRINT}
    pinLabels={AdafruitADS78308Bit8ChannelADCBreakout_PIN_LABELS}
    pinAttributes={AdafruitADS78308Bit8ChannelADCBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic PCF8591 ADC/DAC Module — I2C. */
export const GenericPCF8591ADCDACModule_PIN_LABELS = ADC8_PIN_LABELS
export const GenericPCF8591ADCDACModule_PIN_ATTRIBUTES = ADC8_PIN_ATTRIBUTES
export const GenericPCF8591ADCDACModule_FOOTPRINT = FOOTPRINT_F8
export type GenericPCF8591ADCDACModuleProps = ChipProps<typeof GenericPCF8591ADCDACModule_PIN_LABELS>
export const GenericPCF8591ADCDACModule = (props: GenericPCF8591ADCDACModuleProps) => (
  <chip
    {...props}
    displayName="Generic PCF8591 ADC/DAC Module"
    mfn="Generic"
    footprint={GenericPCF8591ADCDACModule_FOOTPRINT}
    pinLabels={GenericPCF8591ADCDACModule_PIN_LABELS}
    pinAttributes={GenericPCF8591ADCDACModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MCP4725 12-Bit DAC Breakout — I2C. */
export const AdafruitMCP472512BitDACBreakout_PIN_LABELS = DAC6_PIN_LABELS
export const AdafruitMCP472512BitDACBreakout_PIN_ATTRIBUTES = DAC6_PIN_ATTRIBUTES
export const AdafruitMCP472512BitDACBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitMCP472512BitDACBreakoutProps = ChipProps<typeof AdafruitMCP472512BitDACBreakout_PIN_LABELS>
export const AdafruitMCP472512BitDACBreakout = (props: AdafruitMCP472512BitDACBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MCP4725 12-Bit DAC Breakout"
    mfn="Adafruit"
    footprint={AdafruitMCP472512BitDACBreakout_FOOTPRINT}
    pinLabels={AdafruitMCP472512BitDACBreakout_PIN_LABELS}
    pinAttributes={AdafruitMCP472512BitDACBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MCP4728 Quad 12-Bit DAC Breakout — I2C. */
export const AdafruitMCP4728Quad12BitDACBreakout_PIN_LABELS = DAC6_PIN_LABELS
export const AdafruitMCP4728Quad12BitDACBreakout_PIN_ATTRIBUTES = DAC6_PIN_ATTRIBUTES
export const AdafruitMCP4728Quad12BitDACBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitMCP4728Quad12BitDACBreakoutProps = ChipProps<typeof AdafruitMCP4728Quad12BitDACBreakout_PIN_LABELS>
export const AdafruitMCP4728Quad12BitDACBreakout = (props: AdafruitMCP4728Quad12BitDACBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MCP4728 Quad 12-Bit DAC Breakout"
    mfn="Adafruit"
    footprint={AdafruitMCP4728Quad12BitDACBreakout_FOOTPRINT}
    pinLabels={AdafruitMCP4728Quad12BitDACBreakout_PIN_LABELS}
    pinAttributes={AdafruitMCP4728Quad12BitDACBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit AD5693R 16-Bit DAC Breakout — I2C. */
export const AdafruitAD5693R16BitDACBreakout_PIN_LABELS = DAC6_PIN_LABELS
export const AdafruitAD5693R16BitDACBreakout_PIN_ATTRIBUTES = DAC6_PIN_ATTRIBUTES
export const AdafruitAD5693R16BitDACBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitAD5693R16BitDACBreakoutProps = ChipProps<typeof AdafruitAD5693R16BitDACBreakout_PIN_LABELS>
export const AdafruitAD5693R16BitDACBreakout = (props: AdafruitAD5693R16BitDACBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit AD5693R 16-Bit DAC Breakout"
    mfn="Adafruit"
    footprint={AdafruitAD5693R16BitDACBreakout_FOOTPRINT}
    pinLabels={AdafruitAD5693R16BitDACBreakout_PIN_LABELS}
    pinAttributes={AdafruitAD5693R16BitDACBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit DAC7578 Octal 12-Bit DAC Breakout — I2C. */
export const AdafruitDAC7578Octal12BitDACBreakout_PIN_LABELS = DAC6_PIN_LABELS
export const AdafruitDAC7578Octal12BitDACBreakout_PIN_ATTRIBUTES = DAC6_PIN_ATTRIBUTES
export const AdafruitDAC7578Octal12BitDACBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitDAC7578Octal12BitDACBreakoutProps = ChipProps<typeof AdafruitDAC7578Octal12BitDACBreakout_PIN_LABELS>
export const AdafruitDAC7578Octal12BitDACBreakout = (props: AdafruitDAC7578Octal12BitDACBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit DAC7578 Octal 12-Bit DAC Breakout"
    mfn="Adafruit"
    footprint={AdafruitDAC7578Octal12BitDACBreakout_FOOTPRINT}
    pinLabels={AdafruitDAC7578Octal12BitDACBreakout_PIN_LABELS}
    pinAttributes={AdafruitDAC7578Octal12BitDACBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MAX4466 Electret Microphone Amplifier Breakout — analog. */
export const AdafruitMAX4466ElectretMicrophoneAmplifierBreakout_PIN_LABELS = AUDIO6_PIN_LABELS
export const AdafruitMAX4466ElectretMicrophoneAmplifierBreakout_PIN_ATTRIBUTES = AUDIO6_PIN_ATTRIBUTES
export const AdafruitMAX4466ElectretMicrophoneAmplifierBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitMAX4466ElectretMicrophoneAmplifierBreakoutProps = ChipProps<typeof AdafruitMAX4466ElectretMicrophoneAmplifierBreakout_PIN_LABELS>
export const AdafruitMAX4466ElectretMicrophoneAmplifierBreakout = (props: AdafruitMAX4466ElectretMicrophoneAmplifierBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MAX4466 Electret Microphone Amplifier Breakout"
    mfn="Adafruit"
    footprint={AdafruitMAX4466ElectretMicrophoneAmplifierBreakout_FOOTPRINT}
    pinLabels={AdafruitMAX4466ElectretMicrophoneAmplifierBreakout_PIN_LABELS}
    pinAttributes={AdafruitMAX4466ElectretMicrophoneAmplifierBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MAX9814 AGC Microphone Amplifier Breakout — analog. */
export const AdafruitMAX9814AGCMicrophoneAmplifierBreakout_PIN_LABELS = AUDIO6_PIN_LABELS
export const AdafruitMAX9814AGCMicrophoneAmplifierBreakout_PIN_ATTRIBUTES = AUDIO6_PIN_ATTRIBUTES
export const AdafruitMAX9814AGCMicrophoneAmplifierBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitMAX9814AGCMicrophoneAmplifierBreakoutProps = ChipProps<typeof AdafruitMAX9814AGCMicrophoneAmplifierBreakout_PIN_LABELS>
export const AdafruitMAX9814AGCMicrophoneAmplifierBreakout = (props: AdafruitMAX9814AGCMicrophoneAmplifierBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MAX9814 AGC Microphone Amplifier Breakout"
    mfn="Adafruit"
    footprint={AdafruitMAX9814AGCMicrophoneAmplifierBreakout_FOOTPRINT}
    pinLabels={AdafruitMAX9814AGCMicrophoneAmplifierBreakout_PIN_LABELS}
    pinAttributes={AdafruitMAX9814AGCMicrophoneAmplifierBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit SPH0645 I2S MEMS Microphone Breakout — I2S. */
export const AdafruitSPH0645I2SMEMSMicrophoneBreakout_PIN_LABELS = AUDIO8_PIN_LABELS
export const AdafruitSPH0645I2SMEMSMicrophoneBreakout_PIN_ATTRIBUTES = AUDIO8_PIN_ATTRIBUTES
export const AdafruitSPH0645I2SMEMSMicrophoneBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitSPH0645I2SMEMSMicrophoneBreakoutProps = ChipProps<typeof AdafruitSPH0645I2SMEMSMicrophoneBreakout_PIN_LABELS>
export const AdafruitSPH0645I2SMEMSMicrophoneBreakout = (props: AdafruitSPH0645I2SMEMSMicrophoneBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit SPH0645 I2S MEMS Microphone Breakout"
    mfn="Adafruit"
    footprint={AdafruitSPH0645I2SMEMSMicrophoneBreakout_FOOTPRINT}
    pinLabels={AdafruitSPH0645I2SMEMSMicrophoneBreakout_PIN_LABELS}
    pinAttributes={AdafruitSPH0645I2SMEMSMicrophoneBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit ICS-43434 I2S MEMS Microphone Breakout — I2S. */
export const AdafruitICS43434I2SMEMSMicrophoneBreakout_PIN_LABELS = AUDIO8_PIN_LABELS
export const AdafruitICS43434I2SMEMSMicrophoneBreakout_PIN_ATTRIBUTES = AUDIO8_PIN_ATTRIBUTES
export const AdafruitICS43434I2SMEMSMicrophoneBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitICS43434I2SMEMSMicrophoneBreakoutProps = ChipProps<typeof AdafruitICS43434I2SMEMSMicrophoneBreakout_PIN_LABELS>
export const AdafruitICS43434I2SMEMSMicrophoneBreakout = (props: AdafruitICS43434I2SMEMSMicrophoneBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit ICS-43434 I2S MEMS Microphone Breakout"
    mfn="Adafruit"
    footprint={AdafruitICS43434I2SMEMSMicrophoneBreakout_FOOTPRINT}
    pinLabels={AdafruitICS43434I2SMEMSMicrophoneBreakout_PIN_LABELS}
    pinAttributes={AdafruitICS43434I2SMEMSMicrophoneBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit PDM MEMS Microphone Breakout — PDM. */
export const AdafruitPDMMEMSMicrophoneBreakout_PIN_LABELS = AUDIO6_PIN_LABELS
export const AdafruitPDMMEMSMicrophoneBreakout_PIN_ATTRIBUTES = AUDIO6_PIN_ATTRIBUTES
export const AdafruitPDMMEMSMicrophoneBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitPDMMEMSMicrophoneBreakoutProps = ChipProps<typeof AdafruitPDMMEMSMicrophoneBreakout_PIN_LABELS>
export const AdafruitPDMMEMSMicrophoneBreakout = (props: AdafruitPDMMEMSMicrophoneBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit PDM MEMS Microphone Breakout"
    mfn="Adafruit"
    footprint={AdafruitPDMMEMSMicrophoneBreakout_FOOTPRINT}
    pinLabels={AdafruitPDMMEMSMicrophoneBreakout_PIN_LABELS}
    pinAttributes={AdafruitPDMMEMSMicrophoneBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit MAX98357A I2S Class-D Amplifier Breakout — I2S. */
export const AdafruitMAX98357AI2SClassDAmplifierBreakout_PIN_LABELS = AUDIO8_PIN_LABELS
export const AdafruitMAX98357AI2SClassDAmplifierBreakout_PIN_ATTRIBUTES = AUDIO8_PIN_ATTRIBUTES
export const AdafruitMAX98357AI2SClassDAmplifierBreakout_FOOTPRINT = FOOTPRINT_F8
export type AdafruitMAX98357AI2SClassDAmplifierBreakoutProps = ChipProps<typeof AdafruitMAX98357AI2SClassDAmplifierBreakout_PIN_LABELS>
export const AdafruitMAX98357AI2SClassDAmplifierBreakout = (props: AdafruitMAX98357AI2SClassDAmplifierBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit MAX98357A I2S Class-D Amplifier Breakout"
    mfn="Adafruit"
    footprint={AdafruitMAX98357AI2SClassDAmplifierBreakout_FOOTPRINT}
    pinLabels={AdafruitMAX98357AI2SClassDAmplifierBreakout_PIN_LABELS}
    pinAttributes={AdafruitMAX98357AI2SClassDAmplifierBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit PAM8302 Mono Class-D Amplifier Breakout — analog audio. */
export const AdafruitPAM8302MonoClassDAmplifierBreakout_PIN_LABELS = AUDIO6_PIN_LABELS
export const AdafruitPAM8302MonoClassDAmplifierBreakout_PIN_ATTRIBUTES = AUDIO6_PIN_ATTRIBUTES
export const AdafruitPAM8302MonoClassDAmplifierBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitPAM8302MonoClassDAmplifierBreakoutProps = ChipProps<typeof AdafruitPAM8302MonoClassDAmplifierBreakout_PIN_LABELS>
export const AdafruitPAM8302MonoClassDAmplifierBreakout = (props: AdafruitPAM8302MonoClassDAmplifierBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit PAM8302 Mono Class-D Amplifier Breakout"
    mfn="Adafruit"
    footprint={AdafruitPAM8302MonoClassDAmplifierBreakout_FOOTPRINT}
    pinLabels={AdafruitPAM8302MonoClassDAmplifierBreakout_PIN_LABELS}
    pinAttributes={AdafruitPAM8302MonoClassDAmplifierBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic PAM8403 Stereo Class-D Amplifier Module — analog audio. */
export const GenericPAM8403StereoClassDAmplifierModule_PIN_LABELS = AUDIO6_PIN_LABELS
export const GenericPAM8403StereoClassDAmplifierModule_PIN_ATTRIBUTES = AUDIO6_PIN_ATTRIBUTES
export const GenericPAM8403StereoClassDAmplifierModule_FOOTPRINT = FOOTPRINT_F6
export type GenericPAM8403StereoClassDAmplifierModuleProps = ChipProps<typeof GenericPAM8403StereoClassDAmplifierModule_PIN_LABELS>
export const GenericPAM8403StereoClassDAmplifierModule = (props: GenericPAM8403StereoClassDAmplifierModuleProps) => (
  <chip
    {...props}
    displayName="Generic PAM8403 Stereo Class-D Amplifier Module"
    mfn="Generic"
    footprint={GenericPAM8403StereoClassDAmplifierModule_FOOTPRINT}
    pinLabels={GenericPAM8403StereoClassDAmplifierModule_PIN_LABELS}
    pinAttributes={GenericPAM8403StereoClassDAmplifierModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit TPA2016 Stereo Class-D Amplifier Breakout — I2C/audio. */
export const AdafruitTPA2016StereoClassDAmplifierBreakout_PIN_LABELS = AUDIO6_PIN_LABELS
export const AdafruitTPA2016StereoClassDAmplifierBreakout_PIN_ATTRIBUTES = AUDIO6_PIN_ATTRIBUTES
export const AdafruitTPA2016StereoClassDAmplifierBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitTPA2016StereoClassDAmplifierBreakoutProps = ChipProps<typeof AdafruitTPA2016StereoClassDAmplifierBreakout_PIN_LABELS>
export const AdafruitTPA2016StereoClassDAmplifierBreakout = (props: AdafruitTPA2016StereoClassDAmplifierBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit TPA2016 Stereo Class-D Amplifier Breakout"
    mfn="Adafruit"
    footprint={AdafruitTPA2016StereoClassDAmplifierBreakout_FOOTPRINT}
    pinLabels={AdafruitTPA2016StereoClassDAmplifierBreakout_PIN_LABELS}
    pinAttributes={AdafruitTPA2016StereoClassDAmplifierBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit VS1053 Codec + MicroSD Breakout — SPI/audio. */
export const AdafruitVS1053CodecMicroSDBreakout_PIN_LABELS = AUDIO6_PIN_LABELS
export const AdafruitVS1053CodecMicroSDBreakout_PIN_ATTRIBUTES = AUDIO6_PIN_ATTRIBUTES
export const AdafruitVS1053CodecMicroSDBreakout_FOOTPRINT = FOOTPRINT_F6
export type AdafruitVS1053CodecMicroSDBreakoutProps = ChipProps<typeof AdafruitVS1053CodecMicroSDBreakout_PIN_LABELS>
export const AdafruitVS1053CodecMicroSDBreakout = (props: AdafruitVS1053CodecMicroSDBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit VS1053 Codec + MicroSD Breakout"
    mfn="Adafruit"
    footprint={AdafruitVS1053CodecMicroSDBreakout_FOOTPRINT}
    pinLabels={AdafruitVS1053CodecMicroSDBreakout_PIN_LABELS}
    pinAttributes={AdafruitVS1053CodecMicroSDBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit Audio FX Mini Sound Board, 2MB — trigger/UART/audio. */
export const AdafruitAudioFXMiniSoundBoard2MB_PIN_LABELS = AUDIO6_PIN_LABELS
export const AdafruitAudioFXMiniSoundBoard2MB_PIN_ATTRIBUTES = AUDIO6_PIN_ATTRIBUTES
export const AdafruitAudioFXMiniSoundBoard2MB_FOOTPRINT = FOOTPRINT_F6
export type AdafruitAudioFXMiniSoundBoard2MBProps = ChipProps<typeof AdafruitAudioFXMiniSoundBoard2MB_PIN_LABELS>
export const AdafruitAudioFXMiniSoundBoard2MB = (props: AdafruitAudioFXMiniSoundBoard2MBProps) => (
  <chip
    {...props}
    displayName="Adafruit Audio FX Mini Sound Board, 2MB"
    mfn="Adafruit"
    footprint={AdafruitAudioFXMiniSoundBoard2MB_FOOTPRINT}
    pinLabels={AdafruitAudioFXMiniSoundBoard2MB_PIN_LABELS}
    pinAttributes={AdafruitAudioFXMiniSoundBoard2MB_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** DFRobot DFPlayer Mini MP3 Module — UART/audio. */
export const DFRobotDFPlayerMiniMP3Module_PIN_LABELS = AUDIO6_PIN_LABELS
export const DFRobotDFPlayerMiniMP3Module_PIN_ATTRIBUTES = AUDIO6_PIN_ATTRIBUTES
export const DFRobotDFPlayerMiniMP3Module_FOOTPRINT = FOOTPRINT_F6
export type DFRobotDFPlayerMiniMP3ModuleProps = ChipProps<typeof DFRobotDFPlayerMiniMP3Module_PIN_LABELS>
export const DFRobotDFPlayerMiniMP3Module = (props: DFRobotDFPlayerMiniMP3ModuleProps) => (
  <chip
    {...props}
    displayName="DFRobot DFPlayer Mini MP3 Module"
    mfn="DFRobot"
    footprint={DFRobotDFPlayerMiniMP3Module_FOOTPRINT}
    pinLabels={DFRobotDFPlayerMiniMP3Module_PIN_LABELS}
    pinAttributes={DFRobotDFPlayerMiniMP3Module_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic PCM5102A I2S DAC Module — I2S/audio. */
export const GenericPCM5102AI2SDACModule_PIN_LABELS = DAC6_PIN_LABELS
export const GenericPCM5102AI2SDACModule_PIN_ATTRIBUTES = DAC6_PIN_ATTRIBUTES
export const GenericPCM5102AI2SDACModule_FOOTPRINT = FOOTPRINT_F6
export type GenericPCM5102AI2SDACModuleProps = ChipProps<typeof GenericPCM5102AI2SDACModule_PIN_LABELS>
export const GenericPCM5102AI2SDACModule = (props: GenericPCM5102AI2SDACModuleProps) => (
  <chip
    {...props}
    displayName="Generic PCM5102A I2S DAC Module"
    mfn="Generic"
    footprint={GenericPCM5102AI2SDACModule_FOOTPRINT}
    pinLabels={GenericPCM5102AI2SDACModule_PIN_LABELS}
    pinAttributes={GenericPCM5102AI2SDACModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit Si5351A Clock Generator Breakout — I2C. */
export const AdafruitSi5351AClockGeneratorBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitSi5351AClockGeneratorBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitSi5351AClockGeneratorBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitSi5351AClockGeneratorBreakoutProps = ChipProps<typeof AdafruitSi5351AClockGeneratorBreakout_PIN_LABELS>
export const AdafruitSi5351AClockGeneratorBreakout = (props: AdafruitSi5351AClockGeneratorBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit Si5351A Clock Generator Breakout"
    mfn="Adafruit"
    footprint={AdafruitSi5351AClockGeneratorBreakout_FOOTPRINT}
    pinLabels={AdafruitSi5351AClockGeneratorBreakout_PIN_LABELS}
    pinAttributes={AdafruitSi5351AClockGeneratorBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit DS3502 I2C Digital Potentiometer Breakout — I2C. */
export const AdafruitDS3502I2CDigitalPotentiometerBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitDS3502I2CDigitalPotentiometerBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitDS3502I2CDigitalPotentiometerBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitDS3502I2CDigitalPotentiometerBreakoutProps = ChipProps<typeof AdafruitDS3502I2CDigitalPotentiometerBreakout_PIN_LABELS>
export const AdafruitDS3502I2CDigitalPotentiometerBreakout = (props: AdafruitDS3502I2CDigitalPotentiometerBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit DS3502 I2C Digital Potentiometer Breakout"
    mfn="Adafruit"
    footprint={AdafruitDS3502I2CDigitalPotentiometerBreakout_FOOTPRINT}
    pinLabels={AdafruitDS3502I2CDigitalPotentiometerBreakout_PIN_LABELS}
    pinAttributes={AdafruitDS3502I2CDigitalPotentiometerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Adafruit DS1841 I2C Logarithmic Potentiometer Breakout — I2C. */
export const AdafruitDS1841I2CLogarithmicPotentiometerBreakout_PIN_LABELS = I2C4_PIN_LABELS
export const AdafruitDS1841I2CLogarithmicPotentiometerBreakout_PIN_ATTRIBUTES = I2C4_PIN_ATTRIBUTES
export const AdafruitDS1841I2CLogarithmicPotentiometerBreakout_FOOTPRINT = FOOTPRINT_F4
export type AdafruitDS1841I2CLogarithmicPotentiometerBreakoutProps = ChipProps<typeof AdafruitDS1841I2CLogarithmicPotentiometerBreakout_PIN_LABELS>
export const AdafruitDS1841I2CLogarithmicPotentiometerBreakout = (props: AdafruitDS1841I2CLogarithmicPotentiometerBreakoutProps) => (
  <chip
    {...props}
    displayName="Adafruit DS1841 I2C Logarithmic Potentiometer Breakout"
    mfn="Adafruit"
    footprint={AdafruitDS1841I2CLogarithmicPotentiometerBreakout_FOOTPRINT}
    pinLabels={AdafruitDS1841I2CLogarithmicPotentiometerBreakout_PIN_LABELS}
    pinAttributes={AdafruitDS1841I2CLogarithmicPotentiometerBreakout_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** MQ-2 Smoke/LPG Sensor Module — analog/digital comparator board. */
export const MQ2SmokeLPGSensorModule_PIN_LABELS = ANALOG4_PIN_LABELS
export const MQ2SmokeLPGSensorModule_PIN_ATTRIBUTES = ANALOG4_PIN_ATTRIBUTES
export const MQ2SmokeLPGSensorModule_FOOTPRINT = FOOTPRINT_F4
export type MQ2SmokeLPGSensorModuleProps = ChipProps<typeof MQ2SmokeLPGSensorModule_PIN_LABELS>
export const MQ2SmokeLPGSensorModule = (props: MQ2SmokeLPGSensorModuleProps) => (
  <chip
    {...props}
    displayName="MQ-2 Smoke/LPG Sensor Module"
    mfn="Generic"
    footprint={MQ2SmokeLPGSensorModule_FOOTPRINT}
    pinLabels={MQ2SmokeLPGSensorModule_PIN_LABELS}
    pinAttributes={MQ2SmokeLPGSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** MQ-3 Alcohol Sensor Module — analog/digital comparator board. */
export const MQ3AlcoholSensorModule_PIN_LABELS = ANALOG4_PIN_LABELS
export const MQ3AlcoholSensorModule_PIN_ATTRIBUTES = ANALOG4_PIN_ATTRIBUTES
export const MQ3AlcoholSensorModule_FOOTPRINT = FOOTPRINT_F4
export type MQ3AlcoholSensorModuleProps = ChipProps<typeof MQ3AlcoholSensorModule_PIN_LABELS>
export const MQ3AlcoholSensorModule = (props: MQ3AlcoholSensorModuleProps) => (
  <chip
    {...props}
    displayName="MQ-3 Alcohol Sensor Module"
    mfn="Generic"
    footprint={MQ3AlcoholSensorModule_FOOTPRINT}
    pinLabels={MQ3AlcoholSensorModule_PIN_LABELS}
    pinAttributes={MQ3AlcoholSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** MQ-4 Methane Sensor Module — analog/digital comparator board. */
export const MQ4MethaneSensorModule_PIN_LABELS = ANALOG4_PIN_LABELS
export const MQ4MethaneSensorModule_PIN_ATTRIBUTES = ANALOG4_PIN_ATTRIBUTES
export const MQ4MethaneSensorModule_FOOTPRINT = FOOTPRINT_F4
export type MQ4MethaneSensorModuleProps = ChipProps<typeof MQ4MethaneSensorModule_PIN_LABELS>
export const MQ4MethaneSensorModule = (props: MQ4MethaneSensorModuleProps) => (
  <chip
    {...props}
    displayName="MQ-4 Methane Sensor Module"
    mfn="Generic"
    footprint={MQ4MethaneSensorModule_FOOTPRINT}
    pinLabels={MQ4MethaneSensorModule_PIN_LABELS}
    pinAttributes={MQ4MethaneSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** MQ-5 LPG/Natural Gas Sensor Module — analog/digital comparator board. */
export const MQ5LPGNaturalGasSensorModule_PIN_LABELS = ANALOG4_PIN_LABELS
export const MQ5LPGNaturalGasSensorModule_PIN_ATTRIBUTES = ANALOG4_PIN_ATTRIBUTES
export const MQ5LPGNaturalGasSensorModule_FOOTPRINT = FOOTPRINT_F4
export type MQ5LPGNaturalGasSensorModuleProps = ChipProps<typeof MQ5LPGNaturalGasSensorModule_PIN_LABELS>
export const MQ5LPGNaturalGasSensorModule = (props: MQ5LPGNaturalGasSensorModuleProps) => (
  <chip
    {...props}
    displayName="MQ-5 LPG/Natural Gas Sensor Module"
    mfn="Generic"
    footprint={MQ5LPGNaturalGasSensorModule_FOOTPRINT}
    pinLabels={MQ5LPGNaturalGasSensorModule_PIN_LABELS}
    pinAttributes={MQ5LPGNaturalGasSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** MQ-6 LPG/Butane Sensor Module — analog/digital comparator board. */
export const MQ6LPGButaneSensorModule_PIN_LABELS = ANALOG4_PIN_LABELS
export const MQ6LPGButaneSensorModule_PIN_ATTRIBUTES = ANALOG4_PIN_ATTRIBUTES
export const MQ6LPGButaneSensorModule_FOOTPRINT = FOOTPRINT_F4
export type MQ6LPGButaneSensorModuleProps = ChipProps<typeof MQ6LPGButaneSensorModule_PIN_LABELS>
export const MQ6LPGButaneSensorModule = (props: MQ6LPGButaneSensorModuleProps) => (
  <chip
    {...props}
    displayName="MQ-6 LPG/Butane Sensor Module"
    mfn="Generic"
    footprint={MQ6LPGButaneSensorModule_FOOTPRINT}
    pinLabels={MQ6LPGButaneSensorModule_PIN_LABELS}
    pinAttributes={MQ6LPGButaneSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** MQ-7 Carbon Monoxide Sensor Module — analog/digital comparator board. */
export const MQ7CarbonMonoxideSensorModule_PIN_LABELS = ANALOG4_PIN_LABELS
export const MQ7CarbonMonoxideSensorModule_PIN_ATTRIBUTES = ANALOG4_PIN_ATTRIBUTES
export const MQ7CarbonMonoxideSensorModule_FOOTPRINT = FOOTPRINT_F4
export type MQ7CarbonMonoxideSensorModuleProps = ChipProps<typeof MQ7CarbonMonoxideSensorModule_PIN_LABELS>
export const MQ7CarbonMonoxideSensorModule = (props: MQ7CarbonMonoxideSensorModuleProps) => (
  <chip
    {...props}
    displayName="MQ-7 Carbon Monoxide Sensor Module"
    mfn="Generic"
    footprint={MQ7CarbonMonoxideSensorModule_FOOTPRINT}
    pinLabels={MQ7CarbonMonoxideSensorModule_PIN_LABELS}
    pinAttributes={MQ7CarbonMonoxideSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** MQ-8 Hydrogen Sensor Module — analog/digital comparator board. */
export const MQ8HydrogenSensorModule_PIN_LABELS = ANALOG4_PIN_LABELS
export const MQ8HydrogenSensorModule_PIN_ATTRIBUTES = ANALOG4_PIN_ATTRIBUTES
export const MQ8HydrogenSensorModule_FOOTPRINT = FOOTPRINT_F4
export type MQ8HydrogenSensorModuleProps = ChipProps<typeof MQ8HydrogenSensorModule_PIN_LABELS>
export const MQ8HydrogenSensorModule = (props: MQ8HydrogenSensorModuleProps) => (
  <chip
    {...props}
    displayName="MQ-8 Hydrogen Sensor Module"
    mfn="Generic"
    footprint={MQ8HydrogenSensorModule_FOOTPRINT}
    pinLabels={MQ8HydrogenSensorModule_PIN_LABELS}
    pinAttributes={MQ8HydrogenSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** MQ-9 CO/Combustible Gas Sensor Module — analog/digital comparator board. */
export const MQ9COCombustibleGasSensorModule_PIN_LABELS = ANALOG4_PIN_LABELS
export const MQ9COCombustibleGasSensorModule_PIN_ATTRIBUTES = ANALOG4_PIN_ATTRIBUTES
export const MQ9COCombustibleGasSensorModule_FOOTPRINT = FOOTPRINT_F4
export type MQ9COCombustibleGasSensorModuleProps = ChipProps<typeof MQ9COCombustibleGasSensorModule_PIN_LABELS>
export const MQ9COCombustibleGasSensorModule = (props: MQ9COCombustibleGasSensorModuleProps) => (
  <chip
    {...props}
    displayName="MQ-9 CO/Combustible Gas Sensor Module"
    mfn="Generic"
    footprint={MQ9COCombustibleGasSensorModule_FOOTPRINT}
    pinLabels={MQ9COCombustibleGasSensorModule_PIN_LABELS}
    pinAttributes={MQ9COCombustibleGasSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** MQ-131 Ozone Sensor Module — analog/digital comparator board. */
export const MQ131OzoneSensorModule_PIN_LABELS = ANALOG4_PIN_LABELS
export const MQ131OzoneSensorModule_PIN_ATTRIBUTES = ANALOG4_PIN_ATTRIBUTES
export const MQ131OzoneSensorModule_FOOTPRINT = FOOTPRINT_F4
export type MQ131OzoneSensorModuleProps = ChipProps<typeof MQ131OzoneSensorModule_PIN_LABELS>
export const MQ131OzoneSensorModule = (props: MQ131OzoneSensorModuleProps) => (
  <chip
    {...props}
    displayName="MQ-131 Ozone Sensor Module"
    mfn="Generic"
    footprint={MQ131OzoneSensorModule_FOOTPRINT}
    pinLabels={MQ131OzoneSensorModule_PIN_LABELS}
    pinAttributes={MQ131OzoneSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** MQ-135 Air Quality Sensor Module — analog/digital comparator board. */
export const MQ135AirQualitySensorModule_PIN_LABELS = ANALOG4_PIN_LABELS
export const MQ135AirQualitySensorModule_PIN_ATTRIBUTES = ANALOG4_PIN_ATTRIBUTES
export const MQ135AirQualitySensorModule_FOOTPRINT = FOOTPRINT_F4
export type MQ135AirQualitySensorModuleProps = ChipProps<typeof MQ135AirQualitySensorModule_PIN_LABELS>
export const MQ135AirQualitySensorModule = (props: MQ135AirQualitySensorModuleProps) => (
  <chip
    {...props}
    displayName="MQ-135 Air Quality Sensor Module"
    mfn="Generic"
    footprint={MQ135AirQualitySensorModule_FOOTPRINT}
    pinLabels={MQ135AirQualitySensorModule_PIN_LABELS}
    pinAttributes={MQ135AirQualitySensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** DHT11 Temperature/Humidity Sensor Module — single-wire digital. */
export const DHT11TemperatureHumiditySensorModule_PIN_LABELS = ONEWIRE3_PIN_LABELS
export const DHT11TemperatureHumiditySensorModule_PIN_ATTRIBUTES = ONEWIRE3_PIN_ATTRIBUTES
export const DHT11TemperatureHumiditySensorModule_FOOTPRINT = FOOTPRINT_F3
export type DHT11TemperatureHumiditySensorModuleProps = ChipProps<typeof DHT11TemperatureHumiditySensorModule_PIN_LABELS>
export const DHT11TemperatureHumiditySensorModule = (props: DHT11TemperatureHumiditySensorModuleProps) => (
  <chip
    {...props}
    displayName="DHT11 Temperature/Humidity Sensor Module"
    mfn="Generic"
    footprint={DHT11TemperatureHumiditySensorModule_FOOTPRINT}
    pinLabels={DHT11TemperatureHumiditySensorModule_PIN_LABELS}
    pinAttributes={DHT11TemperatureHumiditySensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** DHT22/AM2302 Temperature/Humidity Module — single-wire digital. */
export const DHT22AM2302TemperatureHumidityModule_PIN_LABELS = ONEWIRE3_PIN_LABELS
export const DHT22AM2302TemperatureHumidityModule_PIN_ATTRIBUTES = ONEWIRE3_PIN_ATTRIBUTES
export const DHT22AM2302TemperatureHumidityModule_FOOTPRINT = FOOTPRINT_F3
export type DHT22AM2302TemperatureHumidityModuleProps = ChipProps<typeof DHT22AM2302TemperatureHumidityModule_PIN_LABELS>
export const DHT22AM2302TemperatureHumidityModule = (props: DHT22AM2302TemperatureHumidityModuleProps) => (
  <chip
    {...props}
    displayName="DHT22/AM2302 Temperature/Humidity Module"
    mfn="Generic"
    footprint={DHT22AM2302TemperatureHumidityModule_FOOTPRINT}
    pinLabels={DHT22AM2302TemperatureHumidityModule_PIN_LABELS}
    pinAttributes={DHT22AM2302TemperatureHumidityModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** DS18B20 Temperature Sensor Module — 1-Wire. */
export const DS18B20TemperatureSensorModule_PIN_LABELS = ONEWIRE3_PIN_LABELS
export const DS18B20TemperatureSensorModule_PIN_ATTRIBUTES = ONEWIRE3_PIN_ATTRIBUTES
export const DS18B20TemperatureSensorModule_FOOTPRINT = FOOTPRINT_F3
export type DS18B20TemperatureSensorModuleProps = ChipProps<typeof DS18B20TemperatureSensorModule_PIN_LABELS>
export const DS18B20TemperatureSensorModule = (props: DS18B20TemperatureSensorModuleProps) => (
  <chip
    {...props}
    displayName="DS18B20 Temperature Sensor Module"
    mfn="Generic"
    footprint={DS18B20TemperatureSensorModule_FOOTPRINT}
    pinLabels={DS18B20TemperatureSensorModule_PIN_LABELS}
    pinAttributes={DS18B20TemperatureSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Capacitive Soil Moisture Sensor v1.2 Module — analog. */
export const CapacitiveSoilMoistureSensorV12Module_PIN_LABELS = ANALOG3_PIN_LABELS
export const CapacitiveSoilMoistureSensorV12Module_PIN_ATTRIBUTES = ANALOG3_PIN_ATTRIBUTES
export const CapacitiveSoilMoistureSensorV12Module_FOOTPRINT = FOOTPRINT_F3
export type CapacitiveSoilMoistureSensorV12ModuleProps = ChipProps<typeof CapacitiveSoilMoistureSensorV12Module_PIN_LABELS>
export const CapacitiveSoilMoistureSensorV12Module = (props: CapacitiveSoilMoistureSensorV12ModuleProps) => (
  <chip
    {...props}
    displayName="Capacitive Soil Moisture Sensor v1.2 Module"
    mfn="Generic"
    footprint={CapacitiveSoilMoistureSensorV12Module_FOOTPRINT}
    pinLabels={CapacitiveSoilMoistureSensorV12Module_PIN_LABELS}
    pinAttributes={CapacitiveSoilMoistureSensorV12Module_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** YL-69/FC-28 Resistive Soil Moisture Module — analog/digital. */
export const YL69FC28ResistiveSoilMoistureModule_PIN_LABELS = ANALOG4_PIN_LABELS
export const YL69FC28ResistiveSoilMoistureModule_PIN_ATTRIBUTES = ANALOG4_PIN_ATTRIBUTES
export const YL69FC28ResistiveSoilMoistureModule_FOOTPRINT = FOOTPRINT_F4
export type YL69FC28ResistiveSoilMoistureModuleProps = ChipProps<typeof YL69FC28ResistiveSoilMoistureModule_PIN_LABELS>
export const YL69FC28ResistiveSoilMoistureModule = (props: YL69FC28ResistiveSoilMoistureModuleProps) => (
  <chip
    {...props}
    displayName="YL-69/FC-28 Resistive Soil Moisture Module"
    mfn="Generic"
    footprint={YL69FC28ResistiveSoilMoistureModule_FOOTPRINT}
    pinLabels={YL69FC28ResistiveSoilMoistureModule_PIN_LABELS}
    pinAttributes={YL69FC28ResistiveSoilMoistureModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** FC-37/YL-83 Rain Detection Module — analog/digital. */
export const FC37YL83RainDetectionModule_PIN_LABELS = ANALOG4_PIN_LABELS
export const FC37YL83RainDetectionModule_PIN_ATTRIBUTES = ANALOG4_PIN_ATTRIBUTES
export const FC37YL83RainDetectionModule_FOOTPRINT = FOOTPRINT_F4
export type FC37YL83RainDetectionModuleProps = ChipProps<typeof FC37YL83RainDetectionModule_PIN_LABELS>
export const FC37YL83RainDetectionModule = (props: FC37YL83RainDetectionModuleProps) => (
  <chip
    {...props}
    displayName="FC-37/YL-83 Rain Detection Module"
    mfn="Generic"
    footprint={FC37YL83RainDetectionModule_FOOTPRINT}
    pinLabels={FC37YL83RainDetectionModule_PIN_LABELS}
    pinAttributes={FC37YL83RainDetectionModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic Water-Level Sensor Module — analog. */
export const GenericWaterLevelSensorModule_PIN_LABELS = ANALOG3_PIN_LABELS
export const GenericWaterLevelSensorModule_PIN_ATTRIBUTES = ANALOG3_PIN_ATTRIBUTES
export const GenericWaterLevelSensorModule_FOOTPRINT = FOOTPRINT_F3
export type GenericWaterLevelSensorModuleProps = ChipProps<typeof GenericWaterLevelSensorModule_PIN_LABELS>
export const GenericWaterLevelSensorModule = (props: GenericWaterLevelSensorModuleProps) => (
  <chip
    {...props}
    displayName="Generic Water-Level Sensor Module"
    mfn="Generic"
    footprint={GenericWaterLevelSensorModule_FOOTPRINT}
    pinLabels={GenericWaterLevelSensorModule_PIN_LABELS}
    pinAttributes={GenericWaterLevelSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** KY-026 Flame Sensor Module — analog/digital. */
export const KY026FlameSensorModule_PIN_LABELS = ANALOG4_PIN_LABELS
export const KY026FlameSensorModule_PIN_ATTRIBUTES = ANALOG4_PIN_ATTRIBUTES
export const KY026FlameSensorModule_FOOTPRINT = FOOTPRINT_F4
export type KY026FlameSensorModuleProps = ChipProps<typeof KY026FlameSensorModule_PIN_LABELS>
export const KY026FlameSensorModule = (props: KY026FlameSensorModuleProps) => (
  <chip
    {...props}
    displayName="KY-026 Flame Sensor Module"
    mfn="Generic"
    footprint={KY026FlameSensorModule_FOOTPRINT}
    pinLabels={KY026FlameSensorModule_PIN_LABELS}
    pinAttributes={KY026FlameSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** KY-038 Microphone Sound Sensor Module — analog/digital. */
export const KY038MicrophoneSoundSensorModule_PIN_LABELS = AUDIO6_PIN_LABELS
export const KY038MicrophoneSoundSensorModule_PIN_ATTRIBUTES = AUDIO6_PIN_ATTRIBUTES
export const KY038MicrophoneSoundSensorModule_FOOTPRINT = FOOTPRINT_F6
export type KY038MicrophoneSoundSensorModuleProps = ChipProps<typeof KY038MicrophoneSoundSensorModule_PIN_LABELS>
export const KY038MicrophoneSoundSensorModule = (props: KY038MicrophoneSoundSensorModuleProps) => (
  <chip
    {...props}
    displayName="KY-038 Microphone Sound Sensor Module"
    mfn="Generic"
    footprint={KY038MicrophoneSoundSensorModule_FOOTPRINT}
    pinLabels={KY038MicrophoneSoundSensorModule_PIN_LABELS}
    pinAttributes={KY038MicrophoneSoundSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SW-420 Vibration Sensor Module — digital. */
export const SW420VibrationSensorModule_PIN_LABELS = DIGITAL3_PIN_LABELS
export const SW420VibrationSensorModule_PIN_ATTRIBUTES = DIGITAL3_PIN_ATTRIBUTES
export const SW420VibrationSensorModule_FOOTPRINT = FOOTPRINT_F3
export type SW420VibrationSensorModuleProps = ChipProps<typeof SW420VibrationSensorModule_PIN_LABELS>
export const SW420VibrationSensorModule = (props: SW420VibrationSensorModuleProps) => (
  <chip
    {...props}
    displayName="SW-420 Vibration Sensor Module"
    mfn="Generic"
    footprint={SW420VibrationSensorModule_FOOTPRINT}
    pinLabels={SW420VibrationSensorModule_PIN_LABELS}
    pinAttributes={SW420VibrationSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** A3144 Hall-Effect Sensor Module — digital. */
export const A3144HallEffectSensorModule_PIN_LABELS = DIGITAL3_PIN_LABELS
export const A3144HallEffectSensorModule_PIN_ATTRIBUTES = DIGITAL3_PIN_ATTRIBUTES
export const A3144HallEffectSensorModule_FOOTPRINT = FOOTPRINT_F3
export type A3144HallEffectSensorModuleProps = ChipProps<typeof A3144HallEffectSensorModule_PIN_LABELS>
export const A3144HallEffectSensorModule = (props: A3144HallEffectSensorModuleProps) => (
  <chip
    {...props}
    displayName="A3144 Hall-Effect Sensor Module"
    mfn="Generic"
    footprint={A3144HallEffectSensorModule_FOOTPRINT}
    pinLabels={A3144HallEffectSensorModule_PIN_LABELS}
    pinAttributes={A3144HallEffectSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** SW-520D Ball Tilt Sensor Module — digital. */
export const SW520DBallTiltSensorModule_PIN_LABELS = DIGITAL3_PIN_LABELS
export const SW520DBallTiltSensorModule_PIN_ATTRIBUTES = DIGITAL3_PIN_ATTRIBUTES
export const SW520DBallTiltSensorModule_FOOTPRINT = FOOTPRINT_F3
export type SW520DBallTiltSensorModuleProps = ChipProps<typeof SW520DBallTiltSensorModule_PIN_LABELS>
export const SW520DBallTiltSensorModule = (props: SW520DBallTiltSensorModuleProps) => (
  <chip
    {...props}
    displayName="SW-520D Ball Tilt Sensor Module"
    mfn="Generic"
    footprint={SW520DBallTiltSensorModule_FOOTPRINT}
    pinLabels={SW520DBallTiltSensorModule_PIN_LABELS}
    pinAttributes={SW520DBallTiltSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** KY-032 IR Obstacle Avoidance Module — digital. */
export const KY032IRObstacleAvoidanceModule_PIN_LABELS = DIGITAL3_PIN_LABELS
export const KY032IRObstacleAvoidanceModule_PIN_ATTRIBUTES = DIGITAL3_PIN_ATTRIBUTES
export const KY032IRObstacleAvoidanceModule_FOOTPRINT = FOOTPRINT_F3
export type KY032IRObstacleAvoidanceModuleProps = ChipProps<typeof KY032IRObstacleAvoidanceModule_PIN_LABELS>
export const KY032IRObstacleAvoidanceModule = (props: KY032IRObstacleAvoidanceModuleProps) => (
  <chip
    {...props}
    displayName="KY-032 IR Obstacle Avoidance Module"
    mfn="Generic"
    footprint={KY032IRObstacleAvoidanceModule_FOOTPRINT}
    pinLabels={KY032IRObstacleAvoidanceModule_PIN_LABELS}
    pinAttributes={KY032IRObstacleAvoidanceModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** TCRT5000 Reflective Line Sensor Module — analog/digital. */
export const TCRT5000ReflectiveLineSensorModule_PIN_LABELS = ANALOG4_PIN_LABELS
export const TCRT5000ReflectiveLineSensorModule_PIN_ATTRIBUTES = ANALOG4_PIN_ATTRIBUTES
export const TCRT5000ReflectiveLineSensorModule_FOOTPRINT = FOOTPRINT_F4
export type TCRT5000ReflectiveLineSensorModuleProps = ChipProps<typeof TCRT5000ReflectiveLineSensorModule_PIN_LABELS>
export const TCRT5000ReflectiveLineSensorModule = (props: TCRT5000ReflectiveLineSensorModuleProps) => (
  <chip
    {...props}
    displayName="TCRT5000 Reflective Line Sensor Module"
    mfn="Generic"
    footprint={TCRT5000ReflectiveLineSensorModule_FOOTPRINT}
    pinLabels={TCRT5000ReflectiveLineSensorModule_PIN_LABELS}
    pinAttributes={TCRT5000ReflectiveLineSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu QTR-1A Reflectance Sensor Carrier — analog. */
export const PololuQTR1AReflectanceSensorCarrier_PIN_LABELS = ANALOG3_PIN_LABELS
export const PololuQTR1AReflectanceSensorCarrier_PIN_ATTRIBUTES = ANALOG3_PIN_ATTRIBUTES
export const PololuQTR1AReflectanceSensorCarrier_FOOTPRINT = FOOTPRINT_F3
export type PololuQTR1AReflectanceSensorCarrierProps = ChipProps<typeof PololuQTR1AReflectanceSensorCarrier_PIN_LABELS>
export const PololuQTR1AReflectanceSensorCarrier = (props: PololuQTR1AReflectanceSensorCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu QTR-1A Reflectance Sensor Carrier"
    mfn="Pololu"
    footprint={PololuQTR1AReflectanceSensorCarrier_FOOTPRINT}
    pinLabels={PololuQTR1AReflectanceSensorCarrier_PIN_LABELS}
    pinAttributes={PololuQTR1AReflectanceSensorCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Pololu QTR-1RC Reflectance Sensor Carrier — RC timing. */
export const PololuQTR1RCReflectanceSensorCarrier_PIN_LABELS = GENERIC4_PIN_LABELS
export const PololuQTR1RCReflectanceSensorCarrier_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const PololuQTR1RCReflectanceSensorCarrier_FOOTPRINT = FOOTPRINT_F4
export type PololuQTR1RCReflectanceSensorCarrierProps = ChipProps<typeof PololuQTR1RCReflectanceSensorCarrier_PIN_LABELS>
export const PololuQTR1RCReflectanceSensorCarrier = (props: PololuQTR1RCReflectanceSensorCarrierProps) => (
  <chip
    {...props}
    displayName="Pololu QTR-1RC Reflectance Sensor Carrier"
    mfn="Pololu"
    footprint={PololuQTR1RCReflectanceSensorCarrier_FOOTPRINT}
    pinLabels={PololuQTR1RCReflectanceSensorCarrier_PIN_LABELS}
    pinAttributes={PololuQTR1RCReflectanceSensorCarrier_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic IR Receiver Module, VS1838B/KY-022 — digital. */
export const GenericIRReceiverModuleVS1838BKY022_PIN_LABELS = DIGITAL3_PIN_LABELS
export const GenericIRReceiverModuleVS1838BKY022_PIN_ATTRIBUTES = DIGITAL3_PIN_ATTRIBUTES
export const GenericIRReceiverModuleVS1838BKY022_FOOTPRINT = FOOTPRINT_F3
export type GenericIRReceiverModuleVS1838BKY022Props = ChipProps<typeof GenericIRReceiverModuleVS1838BKY022_PIN_LABELS>
export const GenericIRReceiverModuleVS1838BKY022 = (props: GenericIRReceiverModuleVS1838BKY022Props) => (
  <chip
    {...props}
    displayName="Generic IR Receiver Module, VS1838B/KY-022"
    mfn="Generic"
    footprint={GenericIRReceiverModuleVS1838BKY022_FOOTPRINT}
    pinLabels={GenericIRReceiverModuleVS1838BKY022_PIN_LABELS}
    pinAttributes={GenericIRReceiverModuleVS1838BKY022_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic IR Transmitter Module, KY-005 — digital. */
export const GenericIRTransmitterModuleKY005_PIN_LABELS = DIGITAL3_PIN_LABELS
export const GenericIRTransmitterModuleKY005_PIN_ATTRIBUTES = DIGITAL3_PIN_ATTRIBUTES
export const GenericIRTransmitterModuleKY005_FOOTPRINT = FOOTPRINT_F3
export type GenericIRTransmitterModuleKY005Props = ChipProps<typeof GenericIRTransmitterModuleKY005_PIN_LABELS>
export const GenericIRTransmitterModuleKY005 = (props: GenericIRTransmitterModuleKY005Props) => (
  <chip
    {...props}
    displayName="Generic IR Transmitter Module, KY-005"
    mfn="Generic"
    footprint={GenericIRTransmitterModuleKY005_FOOTPRINT}
    pinLabels={GenericIRTransmitterModuleKY005_PIN_LABELS}
    pinAttributes={GenericIRTransmitterModuleKY005_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic Laser Diode Transmitter Module, KY-008 — digital. */
export const GenericLaserDiodeTransmitterModuleKY008_PIN_LABELS = DIGITAL3_PIN_LABELS
export const GenericLaserDiodeTransmitterModuleKY008_PIN_ATTRIBUTES = DIGITAL3_PIN_ATTRIBUTES
export const GenericLaserDiodeTransmitterModuleKY008_FOOTPRINT = FOOTPRINT_F3
export type GenericLaserDiodeTransmitterModuleKY008Props = ChipProps<typeof GenericLaserDiodeTransmitterModuleKY008_PIN_LABELS>
export const GenericLaserDiodeTransmitterModuleKY008 = (props: GenericLaserDiodeTransmitterModuleKY008Props) => (
  <chip
    {...props}
    displayName="Generic Laser Diode Transmitter Module, KY-008"
    mfn="Generic"
    footprint={GenericLaserDiodeTransmitterModuleKY008_FOOTPRINT}
    pinLabels={GenericLaserDiodeTransmitterModuleKY008_PIN_LABELS}
    pinAttributes={GenericLaserDiodeTransmitterModuleKY008_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic Traffic-Light LED Module — three digital channels. */
export const GenericTrafficLightLEDModule_PIN_LABELS = DIGITAL3_PIN_LABELS
export const GenericTrafficLightLEDModule_PIN_ATTRIBUTES = DIGITAL3_PIN_ATTRIBUTES
export const GenericTrafficLightLEDModule_FOOTPRINT = FOOTPRINT_F3
export type GenericTrafficLightLEDModuleProps = ChipProps<typeof GenericTrafficLightLEDModule_PIN_LABELS>
export const GenericTrafficLightLEDModule = (props: GenericTrafficLightLEDModuleProps) => (
  <chip
    {...props}
    displayName="Generic Traffic-Light LED Module"
    mfn="Generic"
    footprint={GenericTrafficLightLEDModule_FOOTPRINT}
    pinLabels={GenericTrafficLightLEDModule_PIN_LABELS}
    pinAttributes={GenericTrafficLightLEDModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic RGB LED Module, KY-016 — three PWM channels. */
export const GenericRGBLEDModuleKY016_PIN_LABELS = GENERIC4_PIN_LABELS
export const GenericRGBLEDModuleKY016_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const GenericRGBLEDModuleKY016_FOOTPRINT = FOOTPRINT_F4
export type GenericRGBLEDModuleKY016Props = ChipProps<typeof GenericRGBLEDModuleKY016_PIN_LABELS>
export const GenericRGBLEDModuleKY016 = (props: GenericRGBLEDModuleKY016Props) => (
  <chip
    {...props}
    displayName="Generic RGB LED Module, KY-016"
    mfn="Generic"
    footprint={GenericRGBLEDModuleKY016_FOOTPRINT}
    pinLabels={GenericRGBLEDModuleKY016_PIN_LABELS}
    pinAttributes={GenericRGBLEDModuleKY016_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic Active Buzzer Module, KY-012 — digital. */
export const GenericActiveBuzzerModuleKY012_PIN_LABELS = DIGITAL3_PIN_LABELS
export const GenericActiveBuzzerModuleKY012_PIN_ATTRIBUTES = DIGITAL3_PIN_ATTRIBUTES
export const GenericActiveBuzzerModuleKY012_FOOTPRINT = FOOTPRINT_F3
export type GenericActiveBuzzerModuleKY012Props = ChipProps<typeof GenericActiveBuzzerModuleKY012_PIN_LABELS>
export const GenericActiveBuzzerModuleKY012 = (props: GenericActiveBuzzerModuleKY012Props) => (
  <chip
    {...props}
    displayName="Generic Active Buzzer Module, KY-012"
    mfn="Generic"
    footprint={GenericActiveBuzzerModuleKY012_FOOTPRINT}
    pinLabels={GenericActiveBuzzerModuleKY012_PIN_LABELS}
    pinAttributes={GenericActiveBuzzerModuleKY012_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic Passive Buzzer Module, KY-006 — PWM. */
export const GenericPassiveBuzzerModuleKY006_PIN_LABELS = GENERIC4_PIN_LABELS
export const GenericPassiveBuzzerModuleKY006_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const GenericPassiveBuzzerModuleKY006_FOOTPRINT = FOOTPRINT_F4
export type GenericPassiveBuzzerModuleKY006Props = ChipProps<typeof GenericPassiveBuzzerModuleKY006_PIN_LABELS>
export const GenericPassiveBuzzerModuleKY006 = (props: GenericPassiveBuzzerModuleKY006Props) => (
  <chip
    {...props}
    displayName="Generic Passive Buzzer Module, KY-006"
    mfn="Generic"
    footprint={GenericPassiveBuzzerModuleKY006_FOOTPRINT}
    pinLabels={GenericPassiveBuzzerModuleKY006_PIN_LABELS}
    pinAttributes={GenericPassiveBuzzerModuleKY006_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic PC817 Optocoupler Isolation Module — digital isolation. */
export const GenericPC817OptocouplerIsolationModule_PIN_LABELS = LEVEL8_PIN_LABELS
export const GenericPC817OptocouplerIsolationModule_PIN_ATTRIBUTES = LEVEL8_PIN_ATTRIBUTES
export const GenericPC817OptocouplerIsolationModule_FOOTPRINT = FOOTPRINT_F8
export type GenericPC817OptocouplerIsolationModuleProps = ChipProps<typeof GenericPC817OptocouplerIsolationModule_PIN_LABELS>
export const GenericPC817OptocouplerIsolationModule = (props: GenericPC817OptocouplerIsolationModuleProps) => (
  <chip
    {...props}
    displayName="Generic PC817 Optocoupler Isolation Module"
    mfn="Generic"
    footprint={GenericPC817OptocouplerIsolationModule_FOOTPRINT}
    pinLabels={GenericPC817OptocouplerIsolationModule_PIN_LABELS}
    pinAttributes={GenericPC817OptocouplerIsolationModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic IRF520 MOSFET Driver Module — PWM/load driver. */
export const GenericIRF520MOSFETDriverModule_PIN_LABELS = GENERIC4_PIN_LABELS
export const GenericIRF520MOSFETDriverModule_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const GenericIRF520MOSFETDriverModule_FOOTPRINT = FOOTPRINT_F4
export type GenericIRF520MOSFETDriverModuleProps = ChipProps<typeof GenericIRF520MOSFETDriverModule_PIN_LABELS>
export const GenericIRF520MOSFETDriverModule = (props: GenericIRF520MOSFETDriverModuleProps) => (
  <chip
    {...props}
    displayName="Generic IRF520 MOSFET Driver Module"
    mfn="Generic"
    footprint={GenericIRF520MOSFETDriverModule_FOOTPRINT}
    pinLabels={GenericIRF520MOSFETDriverModule_PIN_LABELS}
    pinAttributes={GenericIRF520MOSFETDriverModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic BSS138 4-Channel Bidirectional Level Shifter — logic translation. */
export const GenericBSS1384ChannelBidirectionalLevelShifter_PIN_LABELS = LEVEL8_PIN_LABELS
export const GenericBSS1384ChannelBidirectionalLevelShifter_PIN_ATTRIBUTES = LEVEL8_PIN_ATTRIBUTES
export const GenericBSS1384ChannelBidirectionalLevelShifter_FOOTPRINT = FOOTPRINT_F8
export type GenericBSS1384ChannelBidirectionalLevelShifterProps = ChipProps<typeof GenericBSS1384ChannelBidirectionalLevelShifter_PIN_LABELS>
export const GenericBSS1384ChannelBidirectionalLevelShifter = (props: GenericBSS1384ChannelBidirectionalLevelShifterProps) => (
  <chip
    {...props}
    displayName="Generic BSS138 4-Channel Bidirectional Level Shifter"
    mfn="Generic"
    footprint={GenericBSS1384ChannelBidirectionalLevelShifter_FOOTPRINT}
    pinLabels={GenericBSS1384ChannelBidirectionalLevelShifter_PIN_LABELS}
    pinAttributes={GenericBSS1384ChannelBidirectionalLevelShifter_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic TXS0108E 8-Channel Level Shifter Module — logic translation. */
export const GenericTXS0108E8ChannelLevelShifterModule_PIN_LABELS = LEVEL8_PIN_LABELS
export const GenericTXS0108E8ChannelLevelShifterModule_PIN_ATTRIBUTES = LEVEL8_PIN_ATTRIBUTES
export const GenericTXS0108E8ChannelLevelShifterModule_FOOTPRINT = FOOTPRINT_F8
export type GenericTXS0108E8ChannelLevelShifterModuleProps = ChipProps<typeof GenericTXS0108E8ChannelLevelShifterModule_PIN_LABELS>
export const GenericTXS0108E8ChannelLevelShifterModule = (props: GenericTXS0108E8ChannelLevelShifterModuleProps) => (
  <chip
    {...props}
    displayName="Generic TXS0108E 8-Channel Level Shifter Module"
    mfn="Generic"
    footprint={GenericTXS0108E8ChannelLevelShifterModule_FOOTPRINT}
    pinLabels={GenericTXS0108E8ChannelLevelShifterModule_PIN_LABELS}
    pinAttributes={GenericTXS0108E8ChannelLevelShifterModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic 74LVC245 8-Channel Level Shifter Module — logic translation. */
export const Generic74LVC2458ChannelLevelShifterModule_PIN_LABELS = LEVEL8_PIN_LABELS
export const Generic74LVC2458ChannelLevelShifterModule_PIN_ATTRIBUTES = LEVEL8_PIN_ATTRIBUTES
export const Generic74LVC2458ChannelLevelShifterModule_FOOTPRINT = FOOTPRINT_F8
export type Generic74LVC2458ChannelLevelShifterModuleProps = ChipProps<typeof Generic74LVC2458ChannelLevelShifterModule_PIN_LABELS>
export const Generic74LVC2458ChannelLevelShifterModule = (props: Generic74LVC2458ChannelLevelShifterModuleProps) => (
  <chip
    {...props}
    displayName="Generic 74LVC245 8-Channel Level Shifter Module"
    mfn="Generic"
    footprint={Generic74LVC2458ChannelLevelShifterModule_FOOTPRINT}
    pinLabels={Generic74LVC2458ChannelLevelShifterModule_PIN_LABELS}
    pinAttributes={Generic74LVC2458ChannelLevelShifterModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic NE555 Pulse Generator Module — adjustable oscillator. */
export const GenericNE555PulseGeneratorModule_PIN_LABELS = GENERIC4_PIN_LABELS
export const GenericNE555PulseGeneratorModule_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const GenericNE555PulseGeneratorModule_FOOTPRINT = FOOTPRINT_F4
export type GenericNE555PulseGeneratorModuleProps = ChipProps<typeof GenericNE555PulseGeneratorModule_PIN_LABELS>
export const GenericNE555PulseGeneratorModule = (props: GenericNE555PulseGeneratorModuleProps) => (
  <chip
    {...props}
    displayName="Generic NE555 Pulse Generator Module"
    mfn="Generic"
    footprint={GenericNE555PulseGeneratorModule_FOOTPRINT}
    pinLabels={GenericNE555PulseGeneratorModule_PIN_LABELS}
    pinAttributes={GenericNE555PulseGeneratorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic LM393 Speed Sensor Module — optical slot sensor. */
export const GenericLM393SpeedSensorModule_PIN_LABELS = GENERIC4_PIN_LABELS
export const GenericLM393SpeedSensorModule_PIN_ATTRIBUTES = GENERIC4_PIN_ATTRIBUTES
export const GenericLM393SpeedSensorModule_FOOTPRINT = FOOTPRINT_F4
export type GenericLM393SpeedSensorModuleProps = ChipProps<typeof GenericLM393SpeedSensorModule_PIN_LABELS>
export const GenericLM393SpeedSensorModule = (props: GenericLM393SpeedSensorModuleProps) => (
  <chip
    {...props}
    displayName="Generic LM393 Speed Sensor Module"
    mfn="Generic"
    footprint={GenericLM393SpeedSensorModule_FOOTPRINT}
    pinLabels={GenericLM393SpeedSensorModule_PIN_LABELS}
    pinAttributes={GenericLM393SpeedSensorModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic ADXL335 Analog Accelerometer Module — three analog axes. */
export const GenericADXL335AnalogAccelerometerModule_PIN_LABELS = ANALOG3_PIN_LABELS
export const GenericADXL335AnalogAccelerometerModule_PIN_ATTRIBUTES = ANALOG3_PIN_ATTRIBUTES
export const GenericADXL335AnalogAccelerometerModule_FOOTPRINT = FOOTPRINT_F3
export type GenericADXL335AnalogAccelerometerModuleProps = ChipProps<typeof GenericADXL335AnalogAccelerometerModule_PIN_LABELS>
export const GenericADXL335AnalogAccelerometerModule = (props: GenericADXL335AnalogAccelerometerModuleProps) => (
  <chip
    {...props}
    displayName="Generic ADXL335 Analog Accelerometer Module"
    mfn="Generic"
    footprint={GenericADXL335AnalogAccelerometerModule_FOOTPRINT}
    pinLabels={GenericADXL335AnalogAccelerometerModule_PIN_LABELS}
    pinAttributes={GenericADXL335AnalogAccelerometerModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic Pulse Sensor Amped Module — analog photoplethysmography. */
export const GenericPulseSensorAmpedModule_PIN_LABELS = ANALOG3_PIN_LABELS
export const GenericPulseSensorAmpedModule_PIN_ATTRIBUTES = ANALOG3_PIN_ATTRIBUTES
export const GenericPulseSensorAmpedModule_FOOTPRINT = FOOTPRINT_F3
export type GenericPulseSensorAmpedModuleProps = ChipProps<typeof GenericPulseSensorAmpedModule_PIN_LABELS>
export const GenericPulseSensorAmpedModule = (props: GenericPulseSensorAmpedModuleProps) => (
  <chip
    {...props}
    displayName="Generic Pulse Sensor Amped Module"
    mfn="Generic"
    footprint={GenericPulseSensorAmpedModule_FOOTPRINT}
    pinLabels={GenericPulseSensorAmpedModule_PIN_LABELS}
    pinAttributes={GenericPulseSensorAmpedModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic SCT-013 Current Transformer Interface Module — analog. */
export const GenericSCT013CurrentTransformerInterfaceModule_PIN_LABELS = ANALOG3_PIN_LABELS
export const GenericSCT013CurrentTransformerInterfaceModule_PIN_ATTRIBUTES = ANALOG3_PIN_ATTRIBUTES
export const GenericSCT013CurrentTransformerInterfaceModule_FOOTPRINT = FOOTPRINT_F3
export type GenericSCT013CurrentTransformerInterfaceModuleProps = ChipProps<typeof GenericSCT013CurrentTransformerInterfaceModule_PIN_LABELS>
export const GenericSCT013CurrentTransformerInterfaceModule = (props: GenericSCT013CurrentTransformerInterfaceModuleProps) => (
  <chip
    {...props}
    displayName="Generic SCT-013 Current Transformer Interface Module"
    mfn="Generic"
    footprint={GenericSCT013CurrentTransformerInterfaceModule_FOOTPRINT}
    pinLabels={GenericSCT013CurrentTransformerInterfaceModule_PIN_LABELS}
    pinAttributes={GenericSCT013CurrentTransformerInterfaceModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic 5-Way Flame Sensor Array Module — five digital/analog channels. */
export const Generic5WayFlameSensorArrayModule_PIN_LABELS = ANALOG4_PIN_LABELS
export const Generic5WayFlameSensorArrayModule_PIN_ATTRIBUTES = ANALOG4_PIN_ATTRIBUTES
export const Generic5WayFlameSensorArrayModule_FOOTPRINT = FOOTPRINT_F4
export type Generic5WayFlameSensorArrayModuleProps = ChipProps<typeof Generic5WayFlameSensorArrayModule_PIN_LABELS>
export const Generic5WayFlameSensorArrayModule = (props: Generic5WayFlameSensorArrayModuleProps) => (
  <chip
    {...props}
    displayName="Generic 5-Way Flame Sensor Array Module"
    mfn="Generic"
    footprint={Generic5WayFlameSensorArrayModule_FOOTPRINT}
    pinLabels={Generic5WayFlameSensorArrayModule_PIN_LABELS}
    pinAttributes={Generic5WayFlameSensorArrayModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

/** Generic 8-Channel Logic Level Converter Module — mixed-voltage bus adapter. */
export const Generic8ChannelLogicLevelConverterModule_PIN_LABELS = LEVEL8_PIN_LABELS
export const Generic8ChannelLogicLevelConverterModule_PIN_ATTRIBUTES = LEVEL8_PIN_ATTRIBUTES
export const Generic8ChannelLogicLevelConverterModule_FOOTPRINT = FOOTPRINT_F8
export type Generic8ChannelLogicLevelConverterModuleProps = ChipProps<typeof Generic8ChannelLogicLevelConverterModule_PIN_LABELS>
export const Generic8ChannelLogicLevelConverterModule = (props: Generic8ChannelLogicLevelConverterModuleProps) => (
  <chip
    {...props}
    displayName="Generic 8-Channel Logic Level Converter Module"
    mfn="Generic"
    footprint={Generic8ChannelLogicLevelConverterModule_FOOTPRINT}
    pinLabels={Generic8ChannelLogicLevelConverterModule_PIN_LABELS}
    pinAttributes={Generic8ChannelLogicLevelConverterModule_PIN_ATTRIBUTES}
    schWidth={2.4}
    schHeight={1.8}
  />
)

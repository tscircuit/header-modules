import type { ChipProps, PinAttributeMap } from "@tscircuit/props"

/** Raspberry Pi Pico H: the 40-pin headered Pico-series interface. */
export const RASPBERRY_PI_PICO_H_FOOTPRINT =
  "headermodule40_rows2_p2.54mm_py17.78mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(PICO H)" as const

export const RASPBERRY_PI_PICO_H_PIN_LABELS = {
  pin1: ["GP0", "GPIO0", "D0"],
  pin2: ["VBUS", "5V", "USB_5V"],
  pin3: ["VSYS", "SYS"],
  pin4: ["GND7", "GND"],
  pin5: ["V3_3_EN", "3V3_EN"],
  pin6: ["V3_3", "3V3", "3V3_OUT"],
  pin7: ["ADC_VREF", "VREF"],
  pin8: ["GP28", "GPIO28", "ADC2"],
  pin9: ["AGND", "GND", "ANALOG_GND"],
  pin10: ["GP27", "GPIO27", "ADC1"],
  pin11: ["GP26", "GPIO26", "ADC0"],
  pin12: ["RUN", "RESET"],
  pin13: ["GP22", "GPIO22", "D22"],
  pin14: ["GND6", "GND"],
  pin15: ["GP21", "GPIO21", "D21"],
  pin16: ["GP20", "GPIO20", "D20"],
  pin17: ["GP19", "GPIO19", "D19"],
  pin18: ["GP18", "GPIO18", "D18"],
  pin19: ["GND5", "GND"],
  pin20: ["GP17", "GPIO17", "D17"],
  pin21: ["GP16", "GPIO16", "D16"],
  pin22: ["GP15", "GPIO15", "D15"],
  pin23: ["GP14", "GPIO14", "D14"],
  pin24: ["GND4", "GND"],
  pin25: ["GP13", "GPIO13", "D13"],
  pin26: ["GP12", "GPIO12", "D12"],
  pin27: ["GP11", "GPIO11", "D11"],
  pin28: ["GP10", "GPIO10", "D10"],
  pin29: ["GND3", "GND"],
  pin30: ["GP9", "GPIO9", "D9"],
  pin31: ["GP8", "GPIO8", "D8"],
  pin32: ["GP7", "GPIO7", "D7"],
  pin33: ["GP6", "GPIO6", "D6"],
  pin34: ["GND2", "GND"],
  pin35: ["GP5", "GPIO5", "D5"],
  pin36: ["GP4", "GPIO4", "D4"],
  pin37: ["GP3", "GPIO3", "D3"],
  pin38: ["GP2", "GPIO2", "D2"],
  pin39: ["GND1", "GND"],
  pin40: ["GP1", "GPIO1", "D1"],
} as const

const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap
const CONTROL = {
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap
const V3_3_OUTPUT = {
  providesPower: true,
  providesVoltage: "3.3V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap
const VSYS_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap
const VBUS_POWER = {
  requiresPower: true,
  providesPower: true,
  requiresVoltage: "5V",
  providesVoltage: "5V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap

export const RASPBERRY_PI_PICO_H_PIN_ATTRIBUTES = {
  GP0: GPIO,
  GP1: GPIO,
  GND1: GROUND,
  GP2: GPIO,
  GP3: GPIO,
  GP4: GPIO,
  GP5: GPIO,
  GND2: GROUND,
  GP6: GPIO,
  GP7: GPIO,
  GP8: GPIO,
  GP9: GPIO,
  GND3: GROUND,
  GP10: GPIO,
  GP11: GPIO,
  GP12: GPIO,
  GP13: GPIO,
  GND4: GROUND,
  GP14: GPIO,
  GP15: GPIO,
  GP16: GPIO,
  GP17: GPIO,
  GND5: GROUND,
  GP18: GPIO,
  GP19: GPIO,
  GP20: GPIO,
  GP21: GPIO,
  GND6: GROUND,
  GP22: GPIO,
  RUN: CONTROL,
  GP26: GPIO,
  GP27: GPIO,
  AGND: GROUND,
  GP28: GPIO,
  ADC_VREF: CONTROL,
  V3_3: V3_3_OUTPUT,
  V3_3_EN: CONTROL,
  GND7: GROUND,
  VSYS: VSYS_INPUT,
  VBUS: VBUS_POWER,
} as const satisfies Record<string, PinAttributeMap>

type FixedProps =
  | "datasheetUrl"
  | "displayName"
  | "footprint"
  | "manufacturerPartNumber"
  | "mfn"
  | "pinAttributes"
  | "pinLabels"
  | "pcbPinLabels"
  | "schHeight"
  | "schPinArrangement"
  | "schWidth"

export type RaspberryPiPicoHProps = Omit<
  ChipProps<typeof RASPBERRY_PI_PICO_H_PIN_LABELS>,
  FixedProps
>

export const RaspberryPiPicoH = (props: RaspberryPiPicoHProps) => (
  <chip
    {...props}
    displayName="Raspberry Pi Pico H"
    mfn="Raspberry Pi"
    datasheetUrl="https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html"
    footprint={RASPBERRY_PI_PICO_H_FOOTPRINT}
    pinLabels={RASPBERRY_PI_PICO_H_PIN_LABELS}
    pcbPinLabels={{
      pin1: "GP0",
      pin2: "VBUS",
      pin3: "VSYS",
      pin4: "GND7",
      pin5: "V3_3_EN",
      pin6: "V3_3",
      pin7: "ADC_VREF",
      pin8: "GP28",
      pin9: "AGND",
      pin10: "GP27",
      pin11: "GP26",
      pin12: "RUN",
      pin13: "GP22",
      pin14: "GND6",
      pin15: "GP21",
      pin16: "GP20",
      pin17: "GP19",
      pin18: "GP18",
      pin19: "GND5",
      pin20: "GP17",
      pin21: "GP16",
      pin22: "GP15",
      pin23: "GP14",
      pin24: "GND4",
      pin25: "GP13",
      pin26: "GP12",
      pin27: "GP11",
      pin28: "GP10",
      pin29: "GND3",
      pin30: "GP9",
      pin31: "GP8",
      pin32: "GP7",
      pin33: "GP6",
      pin34: "GND2",
      pin35: "GP5",
      pin36: "GP4",
      pin37: "GP3",
      pin38: "GP2",
      pin39: "GND1",
      pin40: "GP1",
    }}
    pinAttributes={RASPBERRY_PI_PICO_H_PIN_ATTRIBUTES}
    schWidth={3.6}
    schHeight={4.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["GP0", "GP1", "GND1", "GP2", "GP3", "GP4", "GP5", "GND2", "GP6", "GP7", "GP8", "GP9", "GND3", "GP10", "GP11", "GP12", "GP13", "GND4", "GP14", "GP15"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["GP16", "GP17", "GND5", "GP18", "GP19", "GP20", "GP21", "GND6", "GP22", "RUN", "GP26", "GP27", "AGND", "GP28", "ADC_VREF", "V3_3", "V3_3_EN", "GND7", "VSYS", "VBUS"],
      },
    }}
  />
)


import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit MAX31856 Universal Thermocouple Amplifier Breakout. Header order: CS, FAULT, MOSI, MISO, SCK, VIN, DRDY, GND, V3_3. */
export const AdafruitMAX31856UniversalThermocoupleAmplifierBreakout_FOOTPRINT =
  "headermodule9_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(MAX31856)" as const;

export const AdafruitMAX31856UniversalThermocoupleAmplifierBreakout_PIN_LABELS =
  {
    pin1: ["CS", "!CS", "nCS"],
    pin2: ["FAULT", "!FAULT"],
    pin3: ["MOSI", "SDI", "DIN"],
    pin4: ["MISO", "SDO", "DOUT"],
    pin5: ["SCK", "SCL", "CLOCK"],
    pin6: ["VIN", "VCC", "VDD"],
    pin7: ["DRDY", "DATA_READY"],
    pin8: ["GND"],
    pin9: ["V3_3", "3V3", "3.3V", "3Vo"],
  } as const;

const GPIO = {
  isGpio: true,
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
} as const satisfies PinAttributeMap;
const SPI_SCK = {
  ...GPIO,
  capabilities: ["spi_sck"],
} as const satisfies PinAttributeMap;
const SPI_MOSI = {
  ...GPIO,
  capabilities: ["spi_mosi"],
} as const satisfies PinAttributeMap;
const SPI_MISO = {
  ...GPIO,
  capabilities: ["spi_miso"],
} as const satisfies PinAttributeMap;
const SPI_CS = {
  ...GPIO,
  capabilities: ["spi_cs"],
} as const satisfies PinAttributeMap;
const POWER_INPUT = {
  requiresPower: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const POWER_OUTPUT_3V3 = {
  providesPower: true,
  providesVoltage: "3.3V",
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;
const GROUND = {
  requiresGround: true,
  providesGround: true,
  includeInBoardPinout: true,
} as const satisfies PinAttributeMap;

export const AdafruitMAX31856UniversalThermocoupleAmplifierBreakout_PIN_ATTRIBUTES =
  {
    CS: SPI_CS,
    FAULT: GPIO,
    MOSI: SPI_MOSI,
    MISO: SPI_MISO,
    SCK: SPI_SCK,
    VIN: POWER_INPUT,
    DRDY: GPIO,
    GND: GROUND,
    V3_3: POWER_OUTPUT_3V3,
  } as const satisfies Record<string, PinAttributeMap>;

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
  | "schWidth";

export type AdafruitMAX31856UniversalThermocoupleAmplifierBreakoutProps = Omit<
  ChipProps<
    typeof AdafruitMAX31856UniversalThermocoupleAmplifierBreakout_PIN_LABELS
  >,
  FixedProps
>;

export const AdafruitMAX31856UniversalThermocoupleAmplifierBreakout = (
  props: AdafruitMAX31856UniversalThermocoupleAmplifierBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit MAX31856 Universal Thermocouple Amplifier Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-max31856-thermocouple-amplifier/pinouts"
    footprint={AdafruitMAX31856UniversalThermocoupleAmplifierBreakout_FOOTPRINT}
    pinLabels={
      AdafruitMAX31856UniversalThermocoupleAmplifierBreakout_PIN_LABELS
    }
    pcbPinLabels={{
      pin1: "CS",
      pin2: "FAULT",
      pin3: "MOSI",
      pin4: "MISO",
      pin5: "SCK",
      pin6: "VIN",
      pin7: "DRDY",
      pin8: "GND",
      pin9: "V3_3",
    }}
    pinAttributes={
      AdafruitMAX31856UniversalThermocoupleAmplifierBreakout_PIN_ATTRIBUTES
    }
    schWidth={2.8}
    schHeight={2.6}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["CS", "FAULT", "MOSI", "MISO", "SCK"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "DRDY", "GND", "V3_3"],
      },
    }}
  />
);

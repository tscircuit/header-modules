import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit MAX31865 RTD PT100/PT1000 Amplifier Breakout. Header order: VIN, GND, V3_3, SCK, MISO, MOSI, CS, DRDY. */
export const AdafruitMAX31865RTDPT100PT1000AmplifierBreakout_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(MAX31865)" as const;

export const AdafruitMAX31865RTDPT100PT1000AmplifierBreakout_PIN_LABELS = {
  pin1: ["VIN", "VCC", "VDD"],
  pin2: ["GND"],
  pin3: ["V3_3", "VDD", "3V3", "3.3V"],
  pin4: ["SCK", "SCL", "CLOCK"],
  pin5: ["MISO", "SDO", "DOUT"],
  pin6: ["MOSI", "SDI", "DIN"],
  pin7: ["CS", "!CS", "nCS"],
  pin8: ["DRDY", "DATA_READY"],
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

export const AdafruitMAX31865RTDPT100PT1000AmplifierBreakout_PIN_ATTRIBUTES = {
  VIN: POWER_INPUT,
  GND: GROUND,
  V3_3: POWER_OUTPUT_3V3,
  SCK: SPI_SCK,
  MISO: SPI_MISO,
  MOSI: SPI_MOSI,
  CS: SPI_CS,
  DRDY: GPIO,
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

export type AdafruitMAX31865RTDPT100PT1000AmplifierBreakoutProps = Omit<
  ChipProps<typeof AdafruitMAX31865RTDPT100PT1000AmplifierBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitMAX31865RTDPT100PT1000AmplifierBreakout = (
  props: AdafruitMAX31865RTDPT100PT1000AmplifierBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit MAX31865 RTD PT100/PT1000 Amplifier Breakout"
    mfn="Adafruit"
    datasheetUrl="https://learn.adafruit.com/adafruit-max31865-rtd-pt100-or-pt1000-amplifier/pinouts"
    footprint={AdafruitMAX31865RTDPT100PT1000AmplifierBreakout_FOOTPRINT}
    pinLabels={AdafruitMAX31865RTDPT100PT1000AmplifierBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "V3_3",
      pin4: "SCK",
      pin5: "MISO",
      pin6: "MOSI",
      pin7: "CS",
      pin8: "DRDY",
    }}
    pinAttributes={
      AdafruitMAX31865RTDPT100PT1000AmplifierBreakout_PIN_ATTRIBUTES
    }
    schWidth={2.8}
    schHeight={2.2}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "GND", "V3_3", "SCK"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["MISO", "MOSI", "CS", "DRDY"],
      },
    }}
  />
);

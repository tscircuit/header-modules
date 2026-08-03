import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** SparkFun ENS160 Indoor Air Quality Breakout — I2C/SPI. */
export const SparkFunENS160IndoorAirQualityBreakout_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(SparkFun ENS160 Indoor Air Qua)" as const;

export const SparkFunENS160IndoorAirQualityBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
  pin5: ["SCK"],
  pin6: ["MOSI"],
  pin7: ["MISO"],
  pin8: ["CS"],
} as const;

export const SparkFunENS160IndoorAirQualityBreakout_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  SDA: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["i2c_sda"],
  },
  SCL: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["i2c_scl"],
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

export type SparkFunENS160IndoorAirQualityBreakoutProps = Omit<
  ChipProps<typeof SparkFunENS160IndoorAirQualityBreakout_PIN_LABELS>,
  FixedProps
>;

export const SparkFunENS160IndoorAirQualityBreakout = (
  props: SparkFunENS160IndoorAirQualityBreakoutProps,
) => (
  <chip
    {...props}
    displayName="SparkFun ENS160 Indoor Air Quality Breakout"
    mfn="SparkFun"
    footprint={SparkFunENS160IndoorAirQualityBreakout_FOOTPRINT}
    pinLabels={SparkFunENS160IndoorAirQualityBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
      pin5: "SCK",
      pin6: "MOSI",
      pin7: "MISO",
      pin8: "CS",
    }}
    pinAttributes={SparkFunENS160IndoorAirQualityBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.16}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "SDA", "SCL"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SCK", "MOSI", "MISO", "CS"],
      },
    }}
  />
);

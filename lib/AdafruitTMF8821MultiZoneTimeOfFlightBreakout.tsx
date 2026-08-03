import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit TMF8821 Multi-Zone Time-of-Flight Breakout — I2C. */
export const AdafruitTMF8821MultiZoneTimeOfFlightBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit TMF8821 Multi-Zone Ti)" as const;

export const AdafruitTMF8821MultiZoneTimeOfFlightBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SDA"],
  pin4: ["SCL"],
} as const;

export const AdafruitTMF8821MultiZoneTimeOfFlightBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitTMF8821MultiZoneTimeOfFlightBreakoutProps = Omit<
  ChipProps<typeof AdafruitTMF8821MultiZoneTimeOfFlightBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitTMF8821MultiZoneTimeOfFlightBreakout = (
  props: AdafruitTMF8821MultiZoneTimeOfFlightBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit TMF8821 Multi-Zone Time-of-Flight Breakout"
    mfn="Adafruit"
    footprint={AdafruitTMF8821MultiZoneTimeOfFlightBreakout_FOOTPRINT}
    pinLabels={AdafruitTMF8821MultiZoneTimeOfFlightBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SDA",
      pin4: "SCL",
    }}
    pinAttributes={AdafruitTMF8821MultiZoneTimeOfFlightBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SDA", "SCL"],
      },
    }}
  />
);

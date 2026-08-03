import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit BQ24074 USB/DC/Solar LiPo Charger Breakout — load sharing. */
export const AdafruitBQ24074USBDCSolarLiPoChargerBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit BQ24074 USB DC Solar)" as const;

export const AdafruitBQ24074USBDCSolarLiPoChargerBreakout_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const AdafruitBQ24074USBDCSolarLiPoChargerBreakout_PIN_ATTRIBUTES = {
  VIN: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  VOUT: { providesPower: true, includeInBoardPinout: true },
  EN: { includeInBoardPinout: true },
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

export type AdafruitBQ24074USBDCSolarLiPoChargerBreakoutProps = Omit<
  ChipProps<typeof AdafruitBQ24074USBDCSolarLiPoChargerBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitBQ24074USBDCSolarLiPoChargerBreakout = (
  props: AdafruitBQ24074USBDCSolarLiPoChargerBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit BQ24074 USB/DC/Solar LiPo Charger Breakout"
    mfn="Adafruit"
    footprint={AdafruitBQ24074USBDCSolarLiPoChargerBreakout_FOOTPRINT}
    pinLabels={AdafruitBQ24074USBDCSolarLiPoChargerBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={AdafruitBQ24074USBDCSolarLiPoChargerBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["VOUT", "EN"],
      },
    }}
  />
);

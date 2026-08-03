import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit MCP73871 Solar LiPo Charger Breakout — load sharing. */
export const AdafruitMCP73871SolarLiPoChargerBreakout_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit MCP73871 Solar LiPo C)" as const;

export const AdafruitMCP73871SolarLiPoChargerBreakout_PIN_LABELS = {
  pin1: ["VIN"],
  pin2: ["GND"],
  pin3: ["VOUT"],
  pin4: ["EN"],
} as const;

export const AdafruitMCP73871SolarLiPoChargerBreakout_PIN_ATTRIBUTES = {
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

export type AdafruitMCP73871SolarLiPoChargerBreakoutProps = Omit<
  ChipProps<typeof AdafruitMCP73871SolarLiPoChargerBreakout_PIN_LABELS>,
  FixedProps
>;

export const AdafruitMCP73871SolarLiPoChargerBreakout = (
  props: AdafruitMCP73871SolarLiPoChargerBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit MCP73871 Solar LiPo Charger Breakout"
    mfn="Adafruit"
    footprint={AdafruitMCP73871SolarLiPoChargerBreakout_FOOTPRINT}
    pinLabels={AdafruitMCP73871SolarLiPoChargerBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VIN",
      pin2: "GND",
      pin3: "VOUT",
      pin4: "EN",
    }}
    pinAttributes={AdafruitMCP73871SolarLiPoChargerBreakout_PIN_ATTRIBUTES}
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

import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Adafruit 5-Way Navigation Switch Breakout — digital. */
export const Adafruit5WayNavigationSwitchBreakout_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Adafruit 5-Way Navigation Swit)" as const;

export const Adafruit5WayNavigationSwitchBreakout_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const Adafruit5WayNavigationSwitchBreakout_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  OUT: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
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

export type Adafruit5WayNavigationSwitchBreakoutProps = Omit<
  ChipProps<typeof Adafruit5WayNavigationSwitchBreakout_PIN_LABELS>,
  FixedProps
>;

export const Adafruit5WayNavigationSwitchBreakout = (
  props: Adafruit5WayNavigationSwitchBreakoutProps,
) => (
  <chip
    {...props}
    displayName="Adafruit 5-Way Navigation Switch Breakout"
    mfn="Adafruit"
    footprint={Adafruit5WayNavigationSwitchBreakout_FOOTPRINT}
    pinLabels={Adafruit5WayNavigationSwitchBreakout_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={Adafruit5WayNavigationSwitchBreakout_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["OUT"],
      },
    }}
  />
);

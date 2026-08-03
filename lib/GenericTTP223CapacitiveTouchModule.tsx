import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic TTP223 Capacitive Touch Module — digital. */
export const GenericTTP223CapacitiveTouchModule_FOOTPRINT =
  "headermodule3_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic TTP223 Capacitive Touc)" as const;

export const GenericTTP223CapacitiveTouchModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["OUT"],
} as const;

export const GenericTTP223CapacitiveTouchModule_PIN_ATTRIBUTES = {
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

export type GenericTTP223CapacitiveTouchModuleProps = Omit<
  ChipProps<typeof GenericTTP223CapacitiveTouchModule_PIN_LABELS>,
  FixedProps
>;

export const GenericTTP223CapacitiveTouchModule = (
  props: GenericTTP223CapacitiveTouchModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic TTP223 Capacitive Touch Module"
    mfn="Generic"
    footprint={GenericTTP223CapacitiveTouchModule_FOOTPRINT}
    pinLabels={GenericTTP223CapacitiveTouchModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "OUT",
    }}
    pinAttributes={GenericTTP223CapacitiveTouchModule_PIN_ATTRIBUTES}
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

import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic TTP229 16-Key Capacitive Keypad Module — serial/digital. */
export const GenericTTP22916KeyCapacitiveKeypadModule_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic TTP229 16-Key Capaciti)" as const;

export const GenericTTP22916KeyCapacitiveKeypadModule_PIN_LABELS = {
  pin1: ["K1"],
  pin2: ["K2"],
  pin3: ["K3"],
  pin4: ["K4"],
  pin5: ["K5"],
  pin6: ["K6"],
  pin7: ["K7"],
  pin8: ["K8"],
} as const;

export const GenericTTP22916KeyCapacitiveKeypadModule_PIN_ATTRIBUTES = {
  K1: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  K2: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  K3: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  K4: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  K5: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  K6: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  K7: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  K8: {
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

export type GenericTTP22916KeyCapacitiveKeypadModuleProps = Omit<
  ChipProps<typeof GenericTTP22916KeyCapacitiveKeypadModule_PIN_LABELS>,
  FixedProps
>;

export const GenericTTP22916KeyCapacitiveKeypadModule = (
  props: GenericTTP22916KeyCapacitiveKeypadModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic TTP229 16-Key Capacitive Keypad Module"
    mfn="Generic"
    footprint={GenericTTP22916KeyCapacitiveKeypadModule_FOOTPRINT}
    pinLabels={GenericTTP22916KeyCapacitiveKeypadModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "K1",
      pin2: "K2",
      pin3: "K3",
      pin4: "K4",
      pin5: "K5",
      pin6: "K6",
      pin7: "K7",
      pin8: "K8",
    }}
    pinAttributes={GenericTTP22916KeyCapacitiveKeypadModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.16}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["K1", "K2", "K3", "K4"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["K5", "K6", "K7", "K8"],
      },
    }}
  />
);

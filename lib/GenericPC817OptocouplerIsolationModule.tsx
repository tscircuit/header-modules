import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic PC817 Optocoupler Isolation Module — digital isolation. */
export const GenericPC817OptocouplerIsolationModule_FOOTPRINT =
  "headermodule8_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic PC817 Optocoupler Isol)" as const;

export const GenericPC817OptocouplerIsolationModule_PIN_LABELS = {
  pin1: ["HV"],
  pin2: ["LV"],
  pin3: ["GND"],
  pin4: ["HV1"],
  pin5: ["HV2"],
  pin6: ["HV3"],
  pin7: ["HV4"],
  pin8: ["DIR"],
} as const;

export const GenericPC817OptocouplerIsolationModule_PIN_ATTRIBUTES = {
  HV: { requiresPower: true, includeInBoardPinout: true },
  LV: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  HV1: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  HV2: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  HV3: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  HV4: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  DIR: {
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

export type GenericPC817OptocouplerIsolationModuleProps = Omit<
  ChipProps<typeof GenericPC817OptocouplerIsolationModule_PIN_LABELS>,
  FixedProps
>;

export const GenericPC817OptocouplerIsolationModule = (
  props: GenericPC817OptocouplerIsolationModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic PC817 Optocoupler Isolation Module"
    mfn="Generic"
    footprint={GenericPC817OptocouplerIsolationModule_FOOTPRINT}
    pinLabels={GenericPC817OptocouplerIsolationModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "HV",
      pin2: "LV",
      pin3: "GND",
      pin4: "HV1",
      pin5: "HV2",
      pin6: "HV3",
      pin7: "HV4",
      pin8: "DIR",
    }}
    pinAttributes={GenericPC817OptocouplerIsolationModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={2.16}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["HV", "LV", "GND", "HV1"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["HV2", "HV3", "HV4", "DIR"],
      },
    }}
  />
);

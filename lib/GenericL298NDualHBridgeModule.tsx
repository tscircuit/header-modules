import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic L298N Dual H-Bridge Module — logic/control headers. */
export const GenericL298NDualHBridgeModule_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic L298N Dual H-Bridge)" as const;

export const GenericL298NDualHBridgeModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SIG1"],
  pin4: ["SIG2"],
} as const;

export const GenericL298NDualHBridgeModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  SIG1: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  SIG2: {
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

export type GenericL298NDualHBridgeModuleProps = Omit<
  ChipProps<typeof GenericL298NDualHBridgeModule_PIN_LABELS>,
  FixedProps
>;

export const GenericL298NDualHBridgeModule = (
  props: GenericL298NDualHBridgeModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic L298N Dual H-Bridge Module"
    mfn="Generic"
    footprint={GenericL298NDualHBridgeModule_FOOTPRINT}
    pinLabels={GenericL298NDualHBridgeModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SIG1",
      pin4: "SIG2",
    }}
    pinAttributes={GenericL298NDualHBridgeModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.8}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["SIG1", "SIG2"],
      },
    }}
  />
);

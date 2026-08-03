import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Pololu Micro Maestro 6-Channel USB Servo Controller — signal headers. */
export const PololuMicroMaestro6ChannelUSBServoController_FOOTPRINT =
  "headermodule4_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Pololu Micro Maestro 6-Channel)" as const;

export const PololuMicroMaestro6ChannelUSBServoController_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["SIG1"],
  pin4: ["SIG2"],
} as const;

export const PololuMicroMaestro6ChannelUSBServoController_PIN_ATTRIBUTES = {
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

export type PololuMicroMaestro6ChannelUSBServoControllerProps = Omit<
  ChipProps<typeof PololuMicroMaestro6ChannelUSBServoController_PIN_LABELS>,
  FixedProps
>;

export const PololuMicroMaestro6ChannelUSBServoController = (
  props: PololuMicroMaestro6ChannelUSBServoControllerProps,
) => (
  <chip
    {...props}
    displayName="Pololu Micro Maestro 6-Channel USB Servo Controller"
    mfn="Pololu"
    footprint={PololuMicroMaestro6ChannelUSBServoController_FOOTPRINT}
    pinLabels={PololuMicroMaestro6ChannelUSBServoController_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "SIG1",
      pin4: "SIG2",
    }}
    pinAttributes={PololuMicroMaestro6ChannelUSBServoController_PIN_ATTRIBUTES}
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

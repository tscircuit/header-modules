import type { ChipProps, PinAttributeMap } from "@tscircuit/props";

/** Generic MAX485 RS-485 Transceiver Module — UART/RS-485. */
export const GenericMAX485RS485TransceiverModule_FOOTPRINT =
  "headermodule6_p2.54mm_id1mm_od1.6mm_female_silkscreenborder_silkscreenlabel(Generic MAX485 RS-485 Transcei)" as const;

export const GenericMAX485RS485TransceiverModule_PIN_LABELS = {
  pin1: ["VCC"],
  pin2: ["GND"],
  pin3: ["TX"],
  pin4: ["RX"],
  pin5: ["A"],
  pin6: ["B"],
} as const;

export const GenericMAX485RS485TransceiverModule_PIN_ATTRIBUTES = {
  VCC: { requiresPower: true, includeInBoardPinout: true },
  GND: {
    requiresGround: true,
    providesGround: true,
    includeInBoardPinout: true,
  },
  TX: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["uart_tx"],
  },
  RX: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
    capabilities: ["uart_rx"],
  },
  A: {
    isGpio: true,
    includeInBoardPinout: true,
    canUseInternalPullup: true,
    canUseInternalPulldown: true,
    canUseOpenDrain: true,
    canUsePushPull: true,
  },
  B: {
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

export type GenericMAX485RS485TransceiverModuleProps = Omit<
  ChipProps<typeof GenericMAX485RS485TransceiverModule_PIN_LABELS>,
  FixedProps
>;

export const GenericMAX485RS485TransceiverModule = (
  props: GenericMAX485RS485TransceiverModuleProps,
) => (
  <chip
    {...props}
    displayName="Generic MAX485 RS-485 Transceiver Module"
    mfn="Generic"
    footprint={GenericMAX485RS485TransceiverModule_FOOTPRINT}
    pinLabels={GenericMAX485RS485TransceiverModule_PIN_LABELS}
    pcbPinLabels={{
      pin1: "VCC",
      pin2: "GND",
      pin3: "TX",
      pin4: "RX",
      pin5: "A",
      pin6: "B",
    }}
    pinAttributes={GenericMAX485RS485TransceiverModule_PIN_ATTRIBUTES}
    schWidth={2.8}
    schHeight={1.82}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VCC", "GND", "TX"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["RX", "A", "B"],
      },
    }}
  />
);

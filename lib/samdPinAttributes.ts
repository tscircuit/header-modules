import type { PinAttributeMap, PinCapability } from "@tscircuit/props"

/**
 * Common capabilities exposed by a SAMD Feather header GPIO.
 *
 * The board-specific modules add only the peripheral functions that are
 * actually brought out at each labeled pin. Keeping this helper focused on
 * electrical GPIO behavior avoids implying that every SAMD pin has every
 * alternate-function mux option.
 */
export const samdGpio = (
  capabilities: readonly PinCapability[] = [],
): PinAttributeMap => ({
  isGpio: true,
  capabilities: [...capabilities],
  includeInBoardPinout: true,
  canUseInternalPullup: true,
  canUseInternalPulldown: true,
  canUseOpenDrain: true,
  canUsePushPull: true,
})

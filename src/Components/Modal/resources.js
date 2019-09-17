/**
 * Represents modal sizes
 */
export const MODAL_SIZE = {
  SMALL: "sm",
  MEDIUM: "md",
  LARGE: "lg",
  XLARGE: "xlg"
}

export const DEFAULT_MODAL = {
  show: false,
  title: undefined,
  body: undefined,
  actions: [],
  showFooter: true,
  onCancelled: undefined,
  hasTitle: false,
  size: MODAL_SIZE.LARGE,
  showCloseButton: true,
  headerStyle: "",
  centered: true
}
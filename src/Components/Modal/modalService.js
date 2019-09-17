import { DEFAULT_MODAL } from './resources'

/**
 * Modal service
 */
export class ModalService {
  /**
   * Constructor of the service
   */
  constructor() {
    this.customModal = undefined;
    this.close = this.close.bind(this);
  }

  /**
   * Promise resolver to asyncronous modals
   */
  static _promiseResolver(resolve, reject) {
    document.addEventListener("close", function handler(e) {
      if (e.detail.resolved) {
        resolve(e.detail && e.detail.data);
      } else {
        reject(e.detail && e.detail.data);
      }
      document.removeEventListener("close", handler);
    });
  }

  /**
   * Register the modal component
   * @param  {Object} modal modal compenent to register
   */
  register(modal) {
    this.customModal = modal;
  }

  /**
   * Unregister the modal component
   */
  unregister() {
    this.customModal = undefined;
  }

  /**
   * Close the modal component
   */
  close() {
    this.customModal.close();
    this.customModal.setDefault();
  }

  /**
   * Show the modal component
   * @param  {Object} opts list of param Modal component
   * @return {Promise} Promise from component rendered
   */
  show(opts) {
    const modalOptions = { ...DEFAULT_MODAL, ...opts }
    let promise = new Promise(ModalService._promiseResolver);
    this.customModal.show(modalOptions);
    return promise;
  }
}

const modalService = new ModalService();
export { modalService };

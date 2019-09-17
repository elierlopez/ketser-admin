import * as React from "react";
import PropTypes from "prop-types";

/** Third party components */
import { Modal } from "react-bootstrap";

/** Assets */
import { modalService } from './modalService'
import { MODAL_SIZE } from "./resources";
import styles from "./styles.scss";

/**
 * Modal component
 */
export class CustomModal extends React.Component {
    /**
     * Constructor of the component
     * @param {Object} props The component properties
     */
    constructor(props) {
        super(props);

        const { showCloseButton = true } = props;

        this.state = {
            modalService: this.props.modalService || modalService,
            showCloseButton
        };

        this.state.modalService.register(this);
    }

    /**
     * Unregister the component from the service
     */
    componentWillUnmount() {
        modalService.unregister();
    }

    /**
     * Showns the modal component
     * @param  {Object} opts values overwitten by the user
     */
    show(opts) {
        opts.showFooter = opts.showFooter === undefined ? true : opts.showFooter;
        opts.show = true;
        this.setState({ ...this.state, ...opts });
    }

    /**
     * Close the modal component
     */
    close() {
        this.setState({ ...this.state, show: false });
    }

    setDefault() {
        this.setState({
            ...this.state,
            show: false,
            title: undefined,
            body: undefined,
            actions: [],
            onCancelled: undefined,
            hasTitle: false,
            size: MODAL_SIZE.LARGE,
            showCloseButton: true,
            headerStyle: ""
        });
    }

    getModalSize(size) {
        let style = "";
        switch (size) {
            case MODAL_SIZE.LARGE:
                style = styles["modal-xl"];
                break;
            case MODAL_SIZE.SMALL:
                style = styles["modal-sm"];
                break;
            case MODAL_SIZE.MEDIUM:
                style = styles["modal-md"];
                break;
            case MODAL_SIZE.NANO:
                style = styles["modal-xs"];
                break;
            case MODAL_SIZE.XLARGE:
                style = styles["modal-xxl"];
                break;
            default:
                style = styles["modal-xxl"];
                break;
        }
        return style;
    }
    getModalBody(size, showFooter) {
        switch (size) {
            case MODAL_SIZE.XLARGE:
                return showFooter ? styles["body-xxl"] : styles["body-xxl-no-footer"];
            default:
                return showFooter ? styles["body"] : styles["body-no-footer"];
        }
    }

    /**
     * Render react life cycle
     * @return {Component} Component rendered
     */
    render() {
        const {
            onCancelled,
            show,
            title,
            body,
            actions,
            hasTitle,
            size,
            showCloseButton,
            headerStyle,
            showFooter,
            centered
        } = this.state;
        const onExit = onCancelled == null ? this.close.bind(this) : onCancelled;

        return (
            <Modal
                onHide={onExit}
                onExit={onExit}
                show={show}
                size={size}
                backdrop={"static"}
                backdropClassName={styles["modal-backdrop"]}
                keyboard={false}
                dialogClassName={this.getModalSize(size)}
                centered={centered}
            >
                <Modal.Header
                    className={styles[headerStyle]}
                    bsPrefix={styles["title"]}
                    closeButton={showCloseButton}
                >
                    {hasTitle && <Modal.Title>{title}</Modal.Title>}
                </Modal.Header>
                <Modal.Body bsPrefix={this.getModalBody(size, showFooter)}>
                    {body}
                </Modal.Body>
                {showFooter && (
                    <Modal.Footer bsPrefix={styles["footer"]}>
                        <div>{actions}</div>
                    </Modal.Footer>
                )}
            </Modal>
        );
    }
}

Modal.prototypes = {
    /** The component to show in title section */
    title: PropTypes.element,
    /** The component to show in body section */
    body: PropTypes.element,
    /** The array of components to show in footer section */
    actions: PropTypes.array,
    /** The event that ocurs when modal action is cancelled */
    onCancelled: PropTypes.func,
    /** Indicator from modal show */
    show: PropTypes.bool,
    /** The modal has title part or not */
    hasTitle: PropTypes.bool,
    /** The size of modal dialog */
    size: PropTypes.oneOf([MODAL_SIZE.LARGE, MODAL_SIZE.SMALL]),
    /** Show close button */
    showCloseButton: PropTypes.bool,
    /** Style in modal header */
    headerStyle: PropTypes.string,
    /** show footer */
    showFooter: PropTypes.bool,
    /** centered */
    centered: PropTypes.bool
};

Modal.defaultOptions = {
    title: undefined,
    body: undefined,
    actions: [],
    onCancelled: undefined,
    show: false,
    hasTitle: false,
    size: MODAL_SIZE.LARGE,
    showCloseButton: true,
    headerStyle: "",
    showFooter: true,
    centered: false
};

export default CustomModal;

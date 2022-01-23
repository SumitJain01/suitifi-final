import React from 'react';
import { connect } from 'formik';

class ErrorFocus extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        const { errors, touched } = prevProps.formik;
        let keys = Object.keys(errors);

        if (keys.includes('street')) {
            const index = keys.indexOf('street');
            keys[index] = 'street.0'
        }

        if (keys.length > 0 && this.props.checkError) {
            const selector = `[name="${keys[0]}"]`;
            const errorElement = document.querySelector(selector);
            if (errorElement) {
                errorElement.focus();
                if (keys[0] == 'street.0') {
                    touched['street'] = [true];
                } else {
                    touched[keys[0]] = true;
                }
            }
            this.props.setCheckError(false)
        }
    }

    render() {
        return null;
    }
}

export default connect(ErrorFocus);
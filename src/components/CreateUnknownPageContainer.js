import React from 'react';
import PropTypes from 'prop-types';
import PageTemplate from './PageTemplate';

const UnknownPageContainer = props => {
    return(<PageTemplate title={props.title}>Unknown Page Content</PageTemplate>);
};

UnknownPageContainer.propTypes = {
    title: PropTypes.string.isRequired
};

export default UnknownPageContainer;
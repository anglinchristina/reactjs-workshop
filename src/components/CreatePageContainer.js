import React from 'react';
import PropTypes from 'prop-types';
import PageTemplate from './PageTemplate';

const PageContainer = props => {
    return(<PageTemplate title={props.title}>Page Content</PageTemplate>);
};

PageContainer.propTypes = {
    title: PropTypes.string.isRequired
};

export default PageContainer;
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css'

const Article = ({ title, author, description }) => (
    <div className={styles.Article}>
       <h3>{title}</h3>
       <h4>{author}</h4>
       <p>{description}</p> 
    </div>
);

Article.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Article
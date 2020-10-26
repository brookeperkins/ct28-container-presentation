import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const AllArticles = ({ articles }) => {
  const articleElements = articles.map(article => (
    <li key={article.title}>
      <Article {...article} />
    </li>
  ));

  return (
    <ul data-testid="articles">
      {articleElements}
    </ul>
  );
};

AllArticles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default AllArticles;

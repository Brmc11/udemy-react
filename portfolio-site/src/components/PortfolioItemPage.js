import React from 'react';

const PortfolioItemPage = (props) => {
  const id = props.match.params.id;
  return (
    <div>
      <h3> Check out this hunk of junk... </h3>
      <p>ID # {id}</p>
    </div>
  );
}

export default PortfolioItemPage;

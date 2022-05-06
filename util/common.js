module.exports.getPaginated = async (size, page) => {
  page = page - 1;
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;
  return { limit, offset };
  //this will skip offset prevoiuus data if page is greater then 1
};

module.exports.pagination = async (data, page, limit) => {
  const { count: totalItems, rows: results } = data;
  //calculate next page current page and lastpage
  //current page
  const currentPage = page ? +page : 1;
  const totalPage = Math.ceil(totalItems / limit); //this will return total pages bases on page limit and records
  const lastPage = totalPage;
  const nextPage = currentPage === lastPage ? lastPage : currentPage + 1;

  return { results, totalItems, currentPage, nextPage, lastPage, totalPage };
};

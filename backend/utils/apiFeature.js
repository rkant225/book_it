class ApiFeature {
  constructor(query, queryObject) {
    this.query = query;
    this.queryObject = queryObject;
  }

  search() {
    const searchLocation = this.queryObject?.location;
    const searchObject = searchLocation
      ? {
          address: {
            $regex: searchLocation,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...searchObject });
    return this;
  }

  filter() {
    const queryObjectCopy = { ...this.queryObject };
    // Remove non filtrable fields if user have passed
    const fieldsToBeRemoved = ["location", "page", "recordsPerPage"];
    fieldsToBeRemoved.forEach((field) => delete queryObjectCopy[field]);
    this.query = this.query.find(queryObjectCopy);
    return this;
  }

  paginate(resultsPerPage, currentPage) {
    const skip = resultsPerPage * (currentPage - 1);
    this.query = this.query?.limit(resultsPerPage).skip(skip);

    return this;
  }
}

export default ApiFeature;

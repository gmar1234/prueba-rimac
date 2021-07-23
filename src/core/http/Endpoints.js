const endpoints = {
  getRecords: ({ id, resource }) => ({
    url: `/${resource}/${id}`,
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }),
};

export { endpoints as default };

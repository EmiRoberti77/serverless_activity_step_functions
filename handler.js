exports.doit = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Step functions Activiyies",
    }),
  };
};

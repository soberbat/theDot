module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      defaultLimit: 200,
      maxLimit: 200,
      apolloServer: {
        tracing: true,
      },
    },
  },
});

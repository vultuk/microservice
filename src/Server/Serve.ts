import { SetupResults } from '../Types/SetupResults';

export default (setup: SetupResults): SetupResults => {
  const { settings, app } = setup;

  app.listen(settings.port, () => {
    app._router.stack
      .filter((r: any) => r.route)
      .forEach((r: any) => {
        console.info(`Mapped Route [${r.route.stack[0].method.toUpperCase()}] ${r.route.path}`);
      });

    console.log(`\nServer running on port ${settings.port}`);
  });

  return { settings, app };
};

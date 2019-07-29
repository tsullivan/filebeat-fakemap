import { registerSampleData } from './sample_data';

export function registerRoutes(server, logger): void {
  const routes = [registerSampleData];

  routes.forEach((route): void => {
    route(server, logger);
  });
}

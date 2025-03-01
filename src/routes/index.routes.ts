import auth from './auth.routes';

const routes = (app: any) => {
  app.use('/api/auth', auth);
};

export default routes;
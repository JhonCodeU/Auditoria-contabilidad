const config: Config = {
  idEmpresa: 1,
  SECRET: 'auditoria-secret',
  ISLOCALHOST: true,
  USERNAME: '',
  TOKEN_OPTIONS: {
    expiresIn: 3600,
  },
};

interface Config {
  idEmpresa: number;
  SECRET: string;
  ISLOCALHOST: boolean;
  USERNAME: string;
  TOKEN_OPTIONS: {
    expiresIn: number;
  },
}

export default config; 
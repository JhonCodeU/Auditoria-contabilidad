import config from '../config';
import bcrypt from 'bcryptjs';
import constantes from '../libs/constantes';
import prisma from '../db/database';

const encryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hashSync(password, salt);
}

const comparePassword = async (password: string, savedPassword: string) => {
  //Validations for no undefined
  if (!password || !savedPassword) {
    return false;
  }

  return bcrypt.compareSync(password, savedPassword);
}

const signUp = async (req: any, res: any) => {
  const { usuario, clave } = req.body;
  const hashedPassword = await encryptPassword(clave);

  try {

    const newUser = await prisma.usuario.create({
      data: {
        usua_idempr: config.idEmpresa,
        usua_esttra: constantes.Auditoria.AGREGADO,
        usua_idsesi: 1,
        usua_usuari: usuario,
        usua_contra: hashedPassword
      }
    });

    return newUser;
  } catch (error) {
    console.log(error);
  }
}

const signIn = async (req: any, savedUser: any) => {
  const matchPassword = await comparePassword(req.body.clave, savedUser.usua_contra);
  if (!matchPassword) {
    return false;
  }

  return matchPassword;
}

const findById = async (usua_idusws: number) => {
  try {
    const user = await prisma.usuario.findUnique({
      where: {
        usua_idusws: usua_idusws
      }
    })

    return user;

  } catch (error) {
    console.log(error);
  }
}

const findByUserName = async (req: any, res: any) => {
  const { usuario } = req.body;

  try {
    const userFoundByName = await prisma.usuario.findFirst({
      where: {
        usua_usuari: usuario
      }
    });

    return userFoundByName;
  } catch (error) {
    console.log(error);
  }
};

export {
  signUp,
  signIn,
  findById,
  findByUserName
}
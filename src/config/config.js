import dotenv from 'dotenv';
import env from 'env-var';

dotenv.config();

const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: env.get('PUBLIC_PATH').required('public').asString(),
};

export { envs };
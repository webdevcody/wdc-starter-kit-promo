const env = {
  DATABASE_URL: process.env.DATABASE_URL as string,
  DATABASE_AUTH_TOKEN: process.env.DATABASE_AUTH_TOKEN as string,
  EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD as string,
  RESEND_AUDIENCE_ID: process.env.RESEND_AUDIENCE_ID as string,
};

// verify all values in env are defined if not throw an error
Object.entries(env).forEach(([key, value]) => {
  if (value === undefined) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
});

export { env };

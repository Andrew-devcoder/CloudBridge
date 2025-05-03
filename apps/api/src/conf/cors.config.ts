export const allowedOrigins = [
  'http://localhost:5173',
  'https://andrew-devcoder-authflowx.netlify.app',
];

export const corsOptions = {
  origin: allowedOrigins,
  methods: 'HEAD, POST',
  credentials: true,
};

import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import bootstrap from './bootstrap';
import router from './router';

require('dotenv').config();

const app = express();
app.use(compression());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(morgan('dev'));
app.use(router);

app.listen(process.env.PORT || 4000, () => {
	console.log(
		`Running at ${process.env.URL || 'http://localhost:' + process.env.PORT}`
	);
});

bootstrap();

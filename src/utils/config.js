import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

const configPath = path.join(__dirname, '../config/config.yaml');
const config = yaml.safeLoad(fs.readFileSync(configPath));

export default config;

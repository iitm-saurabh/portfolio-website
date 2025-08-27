import fs from 'fs/promises';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src', 'data');

export async function getHomeData() {
  const filePath = path.join(dataPath, 'home.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

export async function getAboutData() {
  const filePath = path.join(dataPath, 'about.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

export async function getProjectsData() {
  const filePath = path.join(dataPath, 'projects.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

export async function getGateData() {
  const filePath = path.join(dataPath, 'gate.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

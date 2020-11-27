import list from './mocks/list.json';
import { StudiesResponse } from '../views/studies/model';

export const getStudies = async (): Promise<StudiesResponse> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return list as StudiesResponse;
};
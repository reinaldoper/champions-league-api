import jsonServer from '../config/jsonServer';
import { Team } from '../types/Team';

export const getAllTeams = async (): Promise<Team[]> => {
  const response = await jsonServer.get<Team[]>('/teams');
  return response.data;
};

export const getTeamById = async (id: number): Promise<Team> => {
  const response = await jsonServer.get<Team>(`/teams/${id}`);
  return response.data;
};
export const createTeam = async (team: Team): Promise<Team> => {
  const response = await jsonServer.post<Team>('/teams', team);
  return response.data;
};
export const updateTeam = async (id: number, team: Team): Promise<Team> => {
  const response = await jsonServer.put<Team>(`/teams/${id}`, team);
  return response.data;
};
export const deleteTeam = async (id: number): Promise<void> => {
  await jsonServer.delete(`/teams/${id}`);
};
export const getTeamsByCountry = async (country: string): Promise<Team[]> => {
  const response = await jsonServer.get<Team[]>(`/teams?country_like=${country}`);
  return response.data;
}

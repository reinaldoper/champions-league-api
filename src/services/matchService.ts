import jsonServer from '../config/jsonServer';
import { Match } from '../types/Match';

export const getAllMatches = async (): Promise<Match[]> => {
  const response = await jsonServer.get<Match[]>('/matches');
  return response.data;
};

export const getMatchById = async (id: number): Promise<Match> => {
  const response = await jsonServer.get<Match>(`/matches/${id}`);
  return response.data;
};

export const createMatch = async (match: Match): Promise<Match> => {
  const response = await jsonServer.post<Match>('/matches', match);
  return response.data;
};  
export const updateMatch = async (id: number, match: Match): Promise<Match> => {
  const response = await jsonServer.put<Match>(`/matches/${id}`, match);
  return response.data;
};
export const deleteMatch = async (id: number): Promise<void> => {
  await jsonServer.delete(`/matches/${id}`);
};
export const getMatchesByTeam = async (teamId: number): Promise<Match[]> => {
  const response = await jsonServer.get<Match[]>(`/matches?homeTeamId=${teamId}`);
  const awayMatches = await jsonServer.get<Match[]>(`/matches?awayTeamId=${teamId}`);
  return [...response.data, ...awayMatches.data];
};

export const getMatchesByCountry = async (country: string): Promise<Match[]> => {
  const response = await jsonServer.get<Match[]>(`/matches?stadium_like=${country}`);
  return response.data;
}
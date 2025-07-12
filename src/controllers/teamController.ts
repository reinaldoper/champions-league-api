import { Request, Response, NextFunction } from 'express';
import * as teamService from '../services/teamService';

export const getTeams = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const teams = await teamService.getAllTeams();
    res.json(teams);
  } catch (error) {
    next(error);
  }
};

export const getTeam = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const team = await teamService.getTeamById(Number(req.params.id));
    res.json(team);
  } catch (error) {
    next(error);
  }
};
export const createTeam = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newTeam = await teamService.createTeam(req.body);
    res.status(201).json(newTeam);
  } catch (error) {
    next(error);
  }
};
export const updateTeam = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedTeam = await teamService.updateTeam(Number(req.params.id), req.body);
    res.json(updatedTeam);
  } catch (error) {
    next(error);
  }
};
export const deleteTeam = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await teamService.deleteTeam(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
export const getTeamByCountry = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const country = req.query.country as string; 
    const teams = await teamService.getTeamsByCountry(country);
    res.json(teams);
  } catch (error) {
    next(error);
  }
};
import { Request, Response, NextFunction } from 'express';
import * as matchService from '../services/matchService';

export const getMatches = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const matches = await matchService.getAllMatches();
    res.json(matches);
  } catch (error) {
    next(error);
  }
};

export const getMatch = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const match = await matchService.getMatchById(Number(req.params.id));
    res.json(match);
  } catch (error) {
    next(error);
  }
};
export const createMatch = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newMatch = await matchService.createMatch(req.body);
    res.status(201).json(newMatch);
  } catch (error) {
    next(error);
  }
};
export const updateMatch = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedMatch = await matchService.updateMatch(Number(req.params.id), req.body);
    res.json(updatedMatch);
  } catch (error) {
    next(error);
  }
};
export const deleteMatch = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await matchService.deleteMatch(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
export const getMatchesByTeam = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const matches = await matchService.getMatchesByTeam(Number(req.params.teamId));
    res.json(matches);
  } catch (error) {
    next(error);
  }
};
export const getMatchesByCountry = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const country = req.query.country as string;
    const matches = await matchService.getMatchesByCountry(country);
    res.json(matches);
  } catch (error) {
    next(error);
  }
};
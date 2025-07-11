"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatchesByCountry = exports.getMatchesByTeam = exports.deleteMatch = exports.updateMatch = exports.createMatch = exports.getMatchById = exports.getAllMatches = void 0;
const jsonServer_1 = __importDefault(require("../config/jsonServer"));
const getAllMatches = async () => {
    const response = await jsonServer_1.default.get('/matches');
    return response.data;
};
exports.getAllMatches = getAllMatches;
const getMatchById = async (id) => {
    const response = await jsonServer_1.default.get(`/matches/${id}`);
    return response.data;
};
exports.getMatchById = getMatchById;
const createMatch = async (match) => {
    const response = await jsonServer_1.default.post('/matches', match);
    return response.data;
};
exports.createMatch = createMatch;
const updateMatch = async (id, match) => {
    const response = await jsonServer_1.default.put(`/matches/${id}`, match);
    return response.data;
};
exports.updateMatch = updateMatch;
const deleteMatch = async (id) => {
    await jsonServer_1.default.delete(`/matches/${id}`);
};
exports.deleteMatch = deleteMatch;
const getMatchesByTeam = async (teamId) => {
    const response = await jsonServer_1.default.get(`/matches?homeTeamId=${teamId}`);
    const awayMatches = await jsonServer_1.default.get(`/matches?awayTeamId=${teamId}`);
    return [...response.data, ...awayMatches.data];
};
exports.getMatchesByTeam = getMatchesByTeam;
const getMatchesByCountry = async (country) => {
    const response = await jsonServer_1.default.get(`/matches?stadium=${country}`);
    return response.data;
};
exports.getMatchesByCountry = getMatchesByCountry;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeamsByCountry = exports.deleteTeam = exports.updateTeam = exports.createTeam = exports.getTeamById = exports.getAllTeams = void 0;
const jsonServer_1 = __importDefault(require("../config/jsonServer"));
const getAllTeams = async () => {
    const response = await jsonServer_1.default.get('/teams');
    return response.data;
};
exports.getAllTeams = getAllTeams;
const getTeamById = async (id) => {
    const response = await jsonServer_1.default.get(`/teams/${id}`);
    return response.data;
};
exports.getTeamById = getTeamById;
const createTeam = async (team) => {
    const response = await jsonServer_1.default.post('/teams', team);
    return response.data;
};
exports.createTeam = createTeam;
const updateTeam = async (id, team) => {
    const response = await jsonServer_1.default.put(`/teams/${id}`, team);
    return response.data;
};
exports.updateTeam = updateTeam;
const deleteTeam = async (id) => {
    await jsonServer_1.default.delete(`/teams/${id}`);
};
exports.deleteTeam = deleteTeam;
const getTeamsByCountry = async (country) => {
    const response = await jsonServer_1.default.get(`/teams?country=${country}`);
    return response.data;
};
exports.getTeamsByCountry = getTeamsByCountry;

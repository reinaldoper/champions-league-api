"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeamsByCountry = exports.deleteTeam = exports.updateTeam = exports.createTeam = exports.getTeam = exports.getTeams = void 0;
const teamService = __importStar(require("../services/teamService"));
const getTeams = async (req, res, next) => {
    try {
        const teams = await teamService.getAllTeams();
        res.json(teams);
    }
    catch (error) {
        next(error);
    }
};
exports.getTeams = getTeams;
const getTeam = async (req, res, next) => {
    try {
        const team = await teamService.getTeamById(Number(req.params.id));
        res.json(team);
    }
    catch (error) {
        next(error);
    }
};
exports.getTeam = getTeam;
const createTeam = async (req, res, next) => {
    try {
        const newTeam = await teamService.createTeam(req.body);
        res.status(201).json(newTeam);
    }
    catch (error) {
        next(error);
    }
};
exports.createTeam = createTeam;
const updateTeam = async (req, res, next) => {
    try {
        const updatedTeam = await teamService.updateTeam(Number(req.params.id), req.body);
        res.json(updatedTeam);
    }
    catch (error) {
        next(error);
    }
};
exports.updateTeam = updateTeam;
const deleteTeam = async (req, res, next) => {
    try {
        await teamService.deleteTeam(Number(req.params.id));
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
};
exports.deleteTeam = deleteTeam;
const getTeamsByCountry = async (req, res, next) => {
    try {
        const teams = await teamService.getTeamsByCountry(req.query.country);
        res.json(teams);
    }
    catch (error) {
        next(error);
    }
};
exports.getTeamsByCountry = getTeamsByCountry;

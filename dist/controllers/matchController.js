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
exports.getMatchesByCountry = exports.getMatchesByTeam = exports.deleteMatch = exports.updateMatch = exports.createMatch = exports.getMatch = exports.getMatches = void 0;
const matchService = __importStar(require("../services/matchService"));
const getMatches = async (req, res, next) => {
    try {
        const matches = await matchService.getAllMatches();
        res.json(matches);
    }
    catch (error) {
        next(error);
    }
};
exports.getMatches = getMatches;
const getMatch = async (req, res, next) => {
    try {
        const match = await matchService.getMatchById(Number(req.params.id));
        res.json(match);
    }
    catch (error) {
        next(error);
    }
};
exports.getMatch = getMatch;
const createMatch = async (req, res, next) => {
    try {
        const newMatch = await matchService.createMatch(req.body);
        res.status(201).json(newMatch);
    }
    catch (error) {
        next(error);
    }
};
exports.createMatch = createMatch;
const updateMatch = async (req, res, next) => {
    try {
        const updatedMatch = await matchService.updateMatch(Number(req.params.id), req.body);
        res.json(updatedMatch);
    }
    catch (error) {
        next(error);
    }
};
exports.updateMatch = updateMatch;
const deleteMatch = async (req, res, next) => {
    try {
        await matchService.deleteMatch(Number(req.params.id));
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
};
exports.deleteMatch = deleteMatch;
const getMatchesByTeam = async (req, res, next) => {
    try {
        const matches = await matchService.getMatchesByTeam(Number(req.params.teamId));
        res.json(matches);
    }
    catch (error) {
        next(error);
    }
};
exports.getMatchesByTeam = getMatchesByTeam;
const getMatchesByCountry = async (req, res, next) => {
    try {
        const country = req.query.country;
        const matches = await matchService.getMatchesByCountry(country);
        res.json(matches);
    }
    catch (error) {
        next(error);
    }
};
exports.getMatchesByCountry = getMatchesByCountry;

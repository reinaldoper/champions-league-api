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
const express_1 = require("express");
const teamController = __importStar(require("../controllers/teamController"));
const router = (0, express_1.Router)();
/**
 * @openapi
 * /teams:
 *   get:
 *     summary: Retorna todos os times
 *     tags:
 *       - Teams
 *     responses:
 *       200:
 *         description: Lista de times
 */
router.get('/', teamController.getTeams);
/**
 * @openapi
 * /teams/{id}:
 *   get:
 *     summary: Retorna um time pelo ID
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do time
 *         schema:
 *           type: integer
 */
router.get('/:id', teamController.getTeam);
/**
 * @openapi
 * /teams:
 *   post:
 *     summary: Cria um novo time
 *     tags:
 *       - Teams
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Team'
 *     responses:
 *       201:
 *         description: Time criado com sucesso
 */
router.post('/', teamController.createTeam);
/**
 * @openapi
 * /teams/{id}:
 *   put:
 *     summary: Atualiza um time pelo ID
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do time a ser atualizado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Team'
 */
router.put('/:id', teamController.updateTeam);
/**
 * @openapi
 * /teams/{id}:
 *   delete:
 *     summary: Deleta um time pelo ID
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do time a ser deletado
 *         schema:
 *           type: integer
 */
router.delete('/:id', teamController.deleteTeam);
/**
 * @openapi
 * /teams/country:
 *   get:
 *     summary: Retorna times por país
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: query
 *         name: country
 *         required: true
 *         description: Nome do país para filtrar os times
 *         schema:
 *           type: string
 */
router.get('/country', teamController.getTeamsByCountry);
exports.default = router;
